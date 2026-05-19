import { NextResponse } from "next/server"
import { sendFormEmail } from "@/lib/sendFormEmail"

export const runtime = "nodejs"

type Body = {
  name?: string
  email?: string
  contactPreference?: string
  phone?: string
  social?: string
  cleanDate?: string
  story?: string
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
  const contactPreference = (body.contactPreference || "").trim()
  const cleanDate = (body.cleanDate || "").trim()
  const story = (body.story || "").trim()
  const phone = (body.phone || "").trim()
  const social = (body.social || "").trim()

  if (!name || !email || !contactPreference || !cleanDate || !story) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  if (story.length > 8000) {
    return NextResponse.json({ error: "Story is too long" }, { status: 400 })
  }

  try {
    await sendFormEmail({
      kind: "volunteer",
      subject: `[Ohana volunteer] ${name}`,
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Preferred contact", value: contactPreference },
        ...(phone ? [{ label: "Phone", value: phone }] : []),
        ...(social ? [{ label: "Social", value: social }] : []),
        { label: "Clean date", value: cleanDate },
        { label: "Journey", value: story },
      ],
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[volunteer form]", err)
    return NextResponse.json({ error: "Could not send application" }, { status: 500 })
  }
}
