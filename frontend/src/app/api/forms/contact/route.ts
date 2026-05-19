import { NextResponse } from "next/server"
import { sendFormEmail } from "@/lib/sendFormEmail"
import { contactSourceLabel } from "@/lib/contactSources"

export const runtime = "nodejs"

type Body = {
  name?: string
  email?: string
  subject?: string
  message?: string
  source?: string
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const name = (body.name || "").trim()
  const email = (body.email || "").trim()
  const subject = (body.subject || "").trim()
  const message = (body.message || "").trim()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long" }, { status: 400 })
  }

  const sourceSlug = typeof body.source === "string" ? body.source : null
  const sourceLabel = contactSourceLabel(sourceSlug)
  const subjectPrefix = sourceSlug ? `[Ohana contact · ${sourceLabel}]` : "[Ohana contact]"

  try {
    await sendFormEmail({
      kind: "contact",
      subject: `${subjectPrefix} ${subject} — ${name}`,
      replyTo: email,
      fields: [
        { label: "Source", value: sourceLabel },
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Subject", value: subject },
        { label: "Message", value: message },
      ],
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact form]", err)
    const detail = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: "Could not send message", detail }, { status: 500 })
  }
}
