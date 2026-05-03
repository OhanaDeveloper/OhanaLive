import Link from "next/link"
import { BookOpen, Video } from "lucide-react"
import MeetingStatus from "@/components/shared/MeetingStatus"
import JoinNowButton from "@/components/shared/JoinNowButton"

export const metadata = {
  title: "What to Expect Before Joining",
  description:
    "A quick, reassuring guide before joining the Ohana Recovery late-night meeting.",
}

export default function MeetingIntroPage() {
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
