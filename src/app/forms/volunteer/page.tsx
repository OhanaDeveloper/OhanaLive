import VolunteerForm from "@/components/forms/VolunteerForm"
import SectionWrapper from "@/components/layout/SectionWrapper"
import { Heart } from "lucide-react"

export const metadata = {
    title: "Join the Crew | Ohana Live",
    description: "Apply to join our team of dedicated facilitators who care for and protect our recovery space.",
}

export default function VolunteerPage() {
    return (
        <SectionWrapper>
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-teal/10 rounded-full">
                            <Heart className="w-12 h-12 text-teal" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent mb-4">
                        Join the Crew
                    </h1>
                    <p className="text-xl text-gray-300">
                        Join us in caring for, protecting, and preserving this space.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-dark-900/50 border-2 border-dark-700 rounded-2xl p-8 md:p-12">
                    <VolunteerForm />
                </div>

                {/* Info */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>
                        Questions? Email us at{" "}
                        <a href="mailto:malama@ohanarecovery.org" className="text-teal hover:underline">
                            malama@ohanarecovery.org
                        </a>
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}
