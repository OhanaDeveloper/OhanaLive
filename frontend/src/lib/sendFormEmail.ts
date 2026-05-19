import { Resend } from "resend"

const FROM_ADDRESS = process.env.OHANA_FORMS_FROM_ADDRESS || "Ohana Recovery <noreply@ohanarecovery.org>"
const TO_ADDRESS = process.env.OHANA_FORMS_TO_ADDRESS || "daniel@ohanarecovery.org"

export type FormKind = "contact" | "volunteer" | "story"

export type FormPayload = {
  kind: FormKind
  subject: string
  fields: Array<{ label: string; value: string }>
  /** Optional reply-to (the submitter's email). Falls back to none. */
  replyTo?: string
}

/**
 * Sends a form submission to the configured ops inbox via Resend.
 * Throws when RESEND_API_KEY is unset or the send fails — the caller (API route)
 * is responsible for surfacing the error as a 500 response.
 */
export async function sendFormEmail(payload: FormPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set")
  }

  const resend = new Resend(apiKey)

  const text = payload.fields
    .map(({ label, value }) => `${label}\n${value || "—"}`)
    .join("\n\n")

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #14b8a6; margin-bottom: 16px;">New ${payload.kind} submission</h2>
      ${payload.fields
        .map(
          ({ label, value }) => `
            <div style="margin-bottom: 18px;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 4px;">${escapeHtml(label)}</div>
              <div style="white-space: pre-wrap; color: #111827; font-size: 15px; line-height: 1.5;">${escapeHtml(value) || "—"}</div>
            </div>
          `,
        )
        .join("")}
    </div>
  `.trim()

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    subject: payload.subject,
    text,
    html,
    replyTo: payload.replyTo,
  })

  if (error) {
    throw new Error(`Resend error: ${error.message}`)
  }

  return data
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
