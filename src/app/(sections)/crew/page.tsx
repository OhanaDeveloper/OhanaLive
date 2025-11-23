import CrewHero from "@/components/crew/CrewHero"
import CrewGrid from "@/components/crew/CrewGrid"

export const metadata = {
  title: "The Crew",
  description: "Meet the facilitators who keep Ohana Live running every night.",
}

export default function CrewPage() {
  return (
    <div className="relative">
      <CrewHero />
      <CrewGrid />
    </div>
  )
}
