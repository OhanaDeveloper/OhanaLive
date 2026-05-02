import StoryForm from "@/components/forms/StoryForm"
import SectionWrapper from "@/components/ui/SectionWrapper"
import { PenLine } from "lucide-react"

export const metadata = {
    title: "Share Your Journey | Ohana Live",
    description: "Share your recovery story to inspire and support others walking their own path.",
}

export default function StoryPage() {
    return (
        <SectionWrapper>
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-purple/10 rounded-full">
                            <PenLine className="w-12 h-12 text-purple" />
                        </div>
                    </div>
                    <p className="text-sm text-purple/80 font-mono tracking-widest uppercase mb-4">
                        Moʻolelo · The Journey
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent mb-4">
                        Share Your Story
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your journey matters. Every story shared lights the path for someone else walking in darkness.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-dark-900/50 border-2 border-dark-700 rounded-2xl p-8 md:p-12">
                    <StoryForm />
                </div>

                {/* Info */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>
                        Questions? Email us at{" "}
                        <a href="mailto:story@ohanarecovery.org" className="text-purple hover:underline">
                            story@ohanarecovery.org
                        </a>
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}
