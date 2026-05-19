import { NextResponse } from "next/server"
import { sendFormEmail } from "@/lib/sendFormEmail"

export const runtime = "nodejs"

type Body = {
  name?: string
  isAnonymous?: boolean
  cleanDate?: string
  story?: string
  consentToPublish?: boolean
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const isAnonymous = Boolean(body.isAnonymous)
  const name = (body.name || "").trim()
  const cleanDate = (body.cleanDate || "").trim()
  const story = (body.story || "").trim()
  const consentToPublish = Boolean(body.consentToPublish)

  if (!isAnonymous && !name) {
    return NextResponse.json({ error: "Name required when not anonymous" }, { status: 400 })
  }
  if (!cleanDate || !story) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }
  if (!consentToPublish) {
    return NextResponse.json({ error: "Consent to publish is required" }, { status: 400 })
  }
  if (story.length > 12000) {
    return NextResponse.json({ error: "Story is too long" }, { status: 400 })
  }

  const displayName = isAnonymous ? "Anonymous" : name

  try {
    await sendFormEmail({
      kind: "story",
      subject: `[Ohana story] from ${displayName}`,
      fields: [
        { label: "From", value: displayName },
        { label: "Anonymous", value: isAnonymous ? "Yes" : "No" },
        { label: "Clean date", value: cleanDate },
        { label: "Consent to publish", value: "Yes" },
        { label: "Story", value: story },
      ],
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[story form]", err)
    return NextResponse.json({ error: "Could not send story" }, { status: 500 })
  }
}
