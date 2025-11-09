import SectionWrapper from "@/components/layout/SectionWrapper"

export default function ProjectsPage() {
    return (
        <SectionWrapper
            id="projects"
            title="Projects"
            subtitle="Building tools with purpose"
            animation="zoom"
        >
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                From interactive dashboards to community-driven AI, Ohana Live is
                developing projects that merge recovery, design, and technology into
                one cohesive ecosystem.
            </p>
        </SectionWrapper>
    )
}