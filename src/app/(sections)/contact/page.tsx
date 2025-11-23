import ContactMenu from "@/components/contact/ContactMenu"

export default function ContactPage() {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            How Can We Help?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select what best describes your needs, and we'll point you in the right direction.
          </p>
        </div>
        <ContactMenu />
      </div>
    </section>
  )
}