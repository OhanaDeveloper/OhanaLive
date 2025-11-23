export type WorksheetCategory =
  | "daily-practice"
  | "self-reflection"
  | "coping-skills"
  | "triggers"
  | "relationships"
  | "gratitude"

export type Worksheet = {
  id: string
  title: string
  description: string
  category: WorksheetCategory
  difficulty: "beginner" | "intermediate" | "advanced"
  timeEstimate: string
  preview: string[] // Preview content/prompts
  icon: string
  color: string
}

export const worksheetCategories: Record<WorksheetCategory, { label: string; icon: string }> = {
  "daily-practice": { label: "Daily Practice", icon: "📅" },
  "self-reflection": { label: "Self-Reflection", icon: "🪞" },
  "coping-skills": { label: "Coping Skills", icon: "🛠️" },
  triggers: { label: "Triggers & Urges", icon: "⚡" },
  relationships: { label: "Relationships", icon: "💝" },
  gratitude: { label: "Gratitude", icon: "🙏" },
}

export const worksheets: Worksheet[] = [
  {
    id: "morning-intention",
    title: "Morning Intention Setter",
    description:
      "Start your day with clarity. Set intentions, acknowledge your feelings, and prepare mentally for what's ahead.",
    category: "daily-practice",
    difficulty: "beginner",
    timeEstimate: "5-10 min",
    icon: "🌅",
    color: "#F59E0B",
    preview: [
      "How am I feeling this morning? (1-10)",
      "One thing I'm grateful for today:",
      "My intention for today is:",
      "One potential challenge and how I'll handle it:",
      "Who can I reach out to if I need support?",
    ],
  },
  {
    id: "nightly-reflection",
    title: "Nightly Wind-Down",
    description:
      "Process your day before sleep. Celebrate wins, acknowledge struggles, and release what you're carrying.",
    category: "daily-practice",
    difficulty: "beginner",
    timeEstimate: "10-15 min",
    icon: "🌙",
    color: "#8B5CF6",
    preview: [
      "Rate your day overall (1-10):",
      "One thing that went well today:",
      "One challenge I faced and how I handled it:",
      "Something I'm letting go of tonight:",
      "One thing I'm looking forward to tomorrow:",
    ],
  },
  {
    id: "urge-surfing",
    title: "Urge Surfing Tracker",
    description:
      "Learn to ride the wave of cravings without acting on them. Track urges, their intensity, and what helped.",
    category: "triggers",
    difficulty: "intermediate",
    timeEstimate: "5 min per entry",
    icon: "🌊",
    color: "#06B6D4",
    preview: [
      "Time the urge started:",
      "Intensity (1-10):",
      "What triggered this urge?",
      "Physical sensations I notice:",
      "Coping strategy I used:",
      "Intensity after 15 minutes:",
    ],
  },
  {
    id: "trigger-map",
    title: "Personal Trigger Map",
    description:
      "Identify and understand your triggers. Map out people, places, emotions, and situations that challenge your recovery.",
    category: "triggers",
    difficulty: "intermediate",
    timeEstimate: "20-30 min",
    icon: "🗺️",
    color: "#EF4444",
    preview: [
      "PEOPLE who trigger me:",
      "PLACES that are risky for me:",
      "EMOTIONS that lead to urges:",
      "TIMES of day I struggle most:",
      "SITUATIONS to avoid or prepare for:",
      "My action plan for each trigger:",
    ],
  },
  {
    id: "values-compass",
    title: "Values Compass",
    description:
      "Reconnect with what matters most to you. Use your values as a guide when making difficult decisions.",
    category: "self-reflection",
    difficulty: "intermediate",
    timeEstimate: "30 min",
    icon: "🧭",
    color: "#10B981",
    preview: [
      "List 10 things that matter most to you:",
      "Narrow to your top 5 values:",
      "How does your addiction conflict with these values?",
      "How does recovery align with these values?",
      "One action this week that honors your values:",
    ],
  },
  {
    id: "letter-to-self",
    title: "Letter to Future Self",
    description:
      "Write to the you who might be struggling. Capture your current clarity to read when you need it most.",
    category: "self-reflection",
    difficulty: "beginner",
    timeEstimate: "15-20 min",
    icon: "✉️",
    color: "#EC4899",
    preview: [
      "Dear future me who is struggling...",
      "Remember why you started this journey:",
      "Remember how bad it got:",
      "Remember what you have to lose:",
      "Remember what you have to gain:",
      "With love, [today's date]",
    ],
  },
  {
    id: "coping-toolbox",
    title: "My Coping Toolbox",
    description:
      "Build your personal toolkit of healthy coping strategies. Have it ready before you need it.",
    category: "coping-skills",
    difficulty: "beginner",
    timeEstimate: "20 min",
    icon: "🧰",
    color: "#F97316",
    preview: [
      "5-minute coping strategies:",
      "Physical activities that help:",
      "People I can call:",
      "Places I feel safe:",
      "Things that distract me positively:",
      "Mantras or affirmations:",
    ],
  },
  {
    id: "grounding-54321",
    title: "5-4-3-2-1 Grounding Exercise",
    description:
      "A quick grounding technique for anxiety, panic, or overwhelming emotions. Use your senses to return to the present.",
    category: "coping-skills",
    difficulty: "beginner",
    timeEstimate: "5 min",
    icon: "🖐️",
    color: "#14B8A6",
    preview: [
      "5 things I can SEE:",
      "4 things I can TOUCH:",
      "3 things I can HEAR:",
      "2 things I can SMELL:",
      "1 thing I can TASTE:",
      "How I feel now (1-10):",
    ],
  },
  {
    id: "relationship-inventory",
    title: "Relationship Inventory",
    description:
      "Evaluate your relationships honestly. Identify who supports your recovery and who might not.",
    category: "relationships",
    difficulty: "advanced",
    timeEstimate: "30-45 min",
    icon: "👥",
    color: "#6366F1",
    preview: [
      "Person's name:",
      "How do I feel after spending time with them?",
      "Do they support my recovery?",
      "Have I been honest with them about my struggles?",
      "What boundaries might I need?",
      "Is this relationship worth investing in?",
    ],
  },
  {
    id: "amends-prep",
    title: "Making Amends Worksheet",
    description:
      "Prepare thoughtfully for difficult conversations. Plan what to say and how to take responsibility.",
    category: "relationships",
    difficulty: "advanced",
    timeEstimate: "30 min per person",
    icon: "🤝",
    color: "#84CC16",
    preview: [
      "Person I harmed:",
      "What I did:",
      "How it affected them:",
      "What I want to say:",
      "Am I making this amends for them or for me?",
      "Is now the right time? Why or why not?",
    ],
  },
  {
    id: "gratitude-deep",
    title: "Deep Gratitude Practice",
    description:
      "Go beyond surface-level gratitude. Explore the depth of appreciation for specific things in your life.",
    category: "gratitude",
    difficulty: "intermediate",
    timeEstimate: "15 min",
    icon: "💎",
    color: "#A855F7",
    preview: [
      "Something I'm grateful for:",
      "Why does this matter to me?",
      "How would my life be different without it?",
      "Who or what made this possible?",
      "How can I honor or protect this?",
    ],
  },
  {
    id: "wins-tracker",
    title: "Weekly Wins Tracker",
    description:
      "Celebrate progress, no matter how small. Train your brain to notice what's going right.",
    category: "gratitude",
    difficulty: "beginner",
    timeEstimate: "10 min weekly",
    icon: "🏆",
    color: "#FBBF24",
    preview: [
      "Monday win:",
      "Tuesday win:",
      "Wednesday win:",
      "Thursday win:",
      "Friday win:",
      "Weekend wins:",
      "Biggest win this week:",
    ],
  },
]
