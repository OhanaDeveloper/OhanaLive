import SectionWrapper from "@/components/layout/SectionWrapper"

export default function AboutPage() {
    return (
        <SectionWrapper
            id="about"
            title="About Ohana Live"
            subtitle="Where family and resilience meet"
            animation="fade"
        >
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                Ohana means family — and in this community, nobody gets left behind.
                We’re building a digital space that celebrates recovery through
                collaboration, creativity, and self-expression.
            </p>
        </SectionWrapper>
    )
}