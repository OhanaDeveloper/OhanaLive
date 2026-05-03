import Link from "next/link"

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Ohana Recovery handles analytics, forms, recovery worksheets, and privacy-sensitive recovery data.",
}

const sections = [
  {
    title: "What We Measure",
    body:
      "Ohana Recovery uses Google Analytics 4 to understand basic site traffic and whether key paths are working, including meeting access, toolkit visits, and support page activity. We do not use analytics to record form entries, session replays, chat content, or private recovery details.",
  },
  {
    title: "Analytics Cookies",
    body:
      "Google Analytics may set analytics cookies such as _ga to distinguish visits and sessions. We configure Google Analytics with IP anonymization and disable advertising personalization signals. Analytics data is used to improve the site, not to target ads.",
  },
  {
    title: "Forms And Accounts",
    body:
      "If you submit a contact, story, volunteer, or account form, we collect only what the form asks for so we can respond or provide the requested feature. Do not submit crisis details through web forms. If you are in immediate danger, call emergency services or 988 in the United States.",
  },
  {
    title: "Worksheets",
    body:
      "Toolkit worksheet progress and responses are designed to stay on your device unless a future feature clearly tells you otherwise. The worksheet tools are for personal reflection and are not a substitute for medical care, therapy, or emergency support.",
  },
  {
    title: "No Newsletter Tracking",
    body:
      "Ohana Recovery does not run a newsletter signup or marketing email list. We do not collect email addresses for retention campaigns.",
  },
]

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-28 md:py-36">
      <div className="mb-10">
        <span className="mb-4 block text-sm font-mono uppercase tracking-widest text-teal/80">
          Privacy
        </span>
        <h1 className="text-4xl font-bold text-gray-100 md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-400">
          This site supports people in recovery, so privacy matters. The short version:
          we use limited analytics to improve the site, we do not run newsletter capture,
          and we do not sell personal data.
        </p>
        <p className="mt-3 text-sm text-gray-500">Last updated: May 2, 2026</p>
      </div>

      <div className="space-y-5">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-dark-700 bg-dark-900/60 p-6"
          >
            <h2 className="text-xl font-bold text-gray-100">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{section.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-teal/25 bg-teal/10 p-6">
        <h2 className="text-lg font-bold text-gray-100">Questions Or Removal Requests</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">
          For questions about privacy or to request removal of information you submitted,
          contact us through the{" "}
          <Link href="/forms/contact" className="font-semibold text-teal hover:text-teal-light">
            contact form
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
