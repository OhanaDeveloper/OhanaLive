import SectionWrapper from "@/components/layout/SectionWrapper"

export default function ContactPage() {
    return (
        <SectionWrapper
            id="contact"
            title="Get in Touch"
            subtitle="Collaboration starts with conversation"
            animation="flip"
        >
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you’re interested in collaborating, contributing, or just
                connecting, reach out to us. This platform grows with every voice that
                joins the conversation.
            </p>
            <div className="mt-8 text-center">
                <a
                    href="mailto:dev@ohanarecovery.org"
                    className="text-accent hover:text-accent-light underline underline-offset-4"
                >
                    dev@ohanarecovery.org
                </a>
            </div>
        </SectionWrapper>
    )
}