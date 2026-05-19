import { Suspense } from "react"
import ContactForm from "@/components/forms/ContactForm"
import SectionWrapper from "@/components/ui/SectionWrapper"
import { Mail } from "lucide-react"

export const metadata = {
    title: "Contact Us | Ohana Live",
    description: "Get in touch with the Ohana Live team. We're here to help.",
}

export default function ContactPage() {
    return (
        <SectionWrapper>
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-teal/10 rounded-full">
                            <Mail className="w-12 h-12 text-teal" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-300">
                        Questions, feedback, or just want to connect? We'd love to hear from you.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-dark-900/50 border-2 border-dark-700 rounded-2xl p-8 md:p-12">
                    <Suspense fallback={null}>
                        <ContactForm />
                    </Suspense>
                </div>

                {/* Direct Contact Info */}
                <div className="mt-8 text-center text-sm text-gray-500 space-y-2">
                    <p>Or email Daniel directly:</p>
                    <p>
                        <a href="mailto:daniel@ohanarecovery.org" className="text-teal hover:underline">
                            daniel@ohanarecovery.org
                        </a>
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}
