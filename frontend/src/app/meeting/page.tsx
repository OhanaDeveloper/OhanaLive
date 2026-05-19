import Link from "next/link"
import { BookOpen, Compass, MessageCircle, Phone, Video } from "lucide-react"
import MeetingStatus from "@/components/shared/MeetingStatus"
import JoinNowButton from "@/components/shared/JoinNowButton"
import { isMeetingLinkAvailable } from "@/lib/meetings"

export const metadata = {
  title: "What to Expect Before Joining",
  description:
    "A quick, reassuring guide before joining the Ohana Recovery late-night meeting.",
}

export default function MeetingIntroPage() {
  const linkAvailable = isMeetingLinkAvailable()

  if (!linkAvailable) {
    return <MeetingUnavailable />
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] px-4 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
          <Video className="h-7 w-7 text-teal" aria-hidden="true" />
        </div>

        <h1 className="text-4xl font-bold text-gray-100 md:text-5xl">
          Before you join tonight
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          You do not need to know what to say. You do not need to be okay. You can
          come in quietly, listen, and leave your camera off.
        </p>

        <MeetingStatus className="mt-8 w-full" />

        <div className="mt-8 grid w-full gap-3 text-left sm:grid-cols-2">
          {[
            "Cameras are optional. Most people leave them off.",
            "You do not have to talk. Listening is enough.",
            "No cross-talk. One person shares at a time.",
            "No sign-up, no commitment, no pressure.",
            "It is just people who get it.",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-dark-700 bg-dark-900/60 p-4 text-gray-300">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <JoinNowButton />
          <Link
            href="/toolkit"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-dark-700 bg-dark-900/70 px-8 py-4 text-lg font-semibold text-gray-200 transition-colors hover:border-teal/40 hover:text-white"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            Not ready yet? Explore the Toolkit
          </Link>
        </div>
      </div>
    </section>
  )
}

function MeetingUnavailable() {
  return (
    <section className="min-h-[calc(100vh-4rem)] px-4 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <Video className="h-7 w-7 text-gold" aria-hidden="true" />
        </div>

        <h1 className="text-4xl font-bold text-gray-100 md:text-5xl">
          The meeting link is not available right now
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          Tonight&apos;s Zoom room is temporarily unreachable. You are not alone, and
          help is still here. Try one of these while we get the room back up.
        </p>

        <div className="mt-10 grid w-full gap-4 text-left sm:grid-cols-2">
          <a
            href="tel:988"
            className="group rounded-2xl border border-teal/30 bg-dark-900/70 p-6 transition-colors hover:border-teal hover:bg-dark-900"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-teal">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-gray-100">
              Call 988
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Suicide &amp; Crisis Lifeline. Free, confidential, 24/7. A trained
              counselor answers within seconds.
            </p>
          </a>

          <a
            href="sms:741741&body=HOME"
            className="group rounded-2xl border border-purple/30 bg-dark-900/70 p-6 transition-colors hover:border-purple hover:bg-dark-900"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple/40 bg-purple/10 text-purple">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-gray-100">
              Text HOME to 741741
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Crisis Text Line. If you cannot or do not want to talk, text reaches
              a real human in minutes.
            </p>
          </a>
        </div>

        <div className="mt-6 w-full rounded-2xl border border-dark-700 bg-dark-900/60 p-6 text-left">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-semibold text-gray-100">
            Other recovery rooms tonight
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            We keep a curated list of secular, Buddhist, science-based, and faith-based
            recovery networks. Many run their own meetings.
          </p>
          <Link
            href="/recovery-network"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline"
          >
            Open the Recovery Network
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/toolkit"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-dark-700 bg-dark-900/70 px-8 py-4 text-lg font-semibold text-gray-200 transition-colors hover:border-teal/40 hover:text-white"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            Use a worksheet while you wait
          </Link>
        </div>
      </div>
    </section>
  )
}
