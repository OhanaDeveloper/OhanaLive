import type { WorksheetCategory, TherapeuticFramework } from './types'

export interface CategoryMeta {
  id: WorksheetCategory
  label: string
  icon: string
  description: string
  color: string
  gradient: string
  frameworks: TherapeuticFramework[]
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'daily-practice',
    label: 'Daily Practice',
    icon: '🌅',
    description: 'Morning check-ins, nightly wind-downs, and routines that anchor your recovery.',
    color: '#F59E0B',
    gradient: 'from-amber-500/20 to-amber-600/5',
    frameworks: ['PP', 'MBSR', 'CBT'],
  },
  {
    id: 'self-reflection',
    label: 'Self-Reflection',
    icon: '🪞',
    description: 'Honest inner work — values, identity, story, and who you\'re becoming.',
    color: '#EC4899',
    gradient: 'from-pink-500/20 to-pink-600/5',
    frameworks: ['ACT', 'narrative', 'IFS'],
  },
  {
    id: 'coping-skills',
    label: 'Coping Skills',
    icon: '🛠️',
    description: 'Practical tools for hard moments — grounding, distress tolerance, self-soothing.',
    color: '#F97316',
    gradient: 'from-orange-500/20 to-orange-600/5',
    frameworks: ['DBT', 'CBT', 'somatic'],
  },
  {
    id: 'triggers-urges',
    label: 'Triggers & Urges',
    icon: '⚡',
    description: 'Map your triggers, surf your urges, and build a relapse circuit-breaker.',
    color: '#EF4444',
    gradient: 'from-red-500/20 to-red-600/5',
    frameworks: ['CBT', 'MI', 'DBT'],
  },
  {
    id: 'relationships',
    label: 'Relationships',
    icon: '💝',
    description: 'Repair, build, and protect the connections that matter in recovery.',
    color: '#6366F1',
    gradient: 'from-indigo-500/20 to-indigo-600/5',
    frameworks: ['DBT', 'TI', 'CBT'],
  },
  {
    id: 'gratitude',
    label: 'Gratitude',
    icon: '🙏',
    description: 'Cultivate genuine appreciation — not toxic positivity, but honest alchemy.',
    color: '#A855F7',
    gradient: 'from-purple-500/20 to-purple-600/5',
    frameworks: ['PP', 'MBSR', 'narrative'],
  },
  {
    id: 'mindfulness',
    label: 'Mindfulness',
    icon: '🧘',
    description: 'Learn to be where you are — observe thoughts and feelings without being ruled by them.',
    color: '#14B8A6',
    gradient: 'from-teal-500/20 to-teal-600/5',
    frameworks: ['MBSR', 'DBT', 'ACT'],
  },
  {
    id: 'emotional-regulation',
    label: 'Emotional Regulation',
    icon: '🌊',
    description: 'Name it, feel it, ride it — without letting it drive you toward a drink or a drug.',
    color: '#06B6D4',
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    frameworks: ['DBT', 'CBT', 'somatic'],
  },
  {
    id: 'trauma-processing',
    label: 'Trauma Processing',
    icon: '🌱',
    description: 'Gentle tools for understanding how your past lives in your present.',
    color: '#10B981',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    frameworks: ['TI', 'somatic', 'narrative'],
  },
  {
    id: 'relapse-prevention',
    label: 'Relapse Prevention',
    icon: '🛡️',
    description: 'Build your early-warning system, your safety net, and your bounce-back plan.',
    color: '#3B82F6',
    gradient: 'from-blue-500/20 to-blue-600/5',
    frameworks: ['CBT', 'MI', 'DBT'],
  },
  {
    id: 'identity-values',
    label: 'Identity & Values',
    icon: '🧭',
    description: 'Who are you without substances? Find out — and build toward it deliberately.',
    color: '#84CC16',
    gradient: 'from-lime-500/20 to-lime-600/5',
    frameworks: ['ACT', 'narrative', 'PP'],
  },
  {
    id: 'physical-wellness',
    label: 'Physical Wellness',
    icon: '💪',
    description: 'Your body is healing. Support it with sleep, movement, and nourishment.',
    color: '#F43F5E',
    gradient: 'from-rose-500/20 to-rose-600/5',
    frameworks: ['somatic', 'CBT', 'PP'],
  },
  {
    id: 'life-skills',
    label: 'Life Skills',
    icon: '🗓️',
    description: 'The practical stuff — structure, finances, goals, hard conversations.',
    color: '#8B5CF6',
    gradient: 'from-violet-500/20 to-violet-600/5',
    frameworks: ['CBT', 'SF', 'PP'],
  },
  {
    id: 'cognitive-restructuring',
    label: 'Cognitive Restructuring',
    icon: '🧠',
    description: 'Catch the thoughts that lie to you — and replace them with something true.',
    color: '#0EA5E9',
    gradient: 'from-sky-500/20 to-sky-600/5',
    frameworks: ['CBT', 'ACT', 'DBT'],
  },
]

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map(c => [c.id, c])
) as Record<WorksheetCategory, CategoryMeta>

export const FRAMEWORK_LABELS: Record<TherapeuticFramework, string> = {
  CBT: 'CBT',
  DBT: 'DBT',
  ACT: 'ACT',
  MI: 'Motivational Interviewing',
  MBSR: 'Mindfulness',
  SF: 'Solution-Focused',
  PP: 'Positive Psychology',
  TI: 'Trauma-Informed',
  'twelve-step': '12-Step',
  somatic: 'Somatic',
  narrative: 'Narrative',
  IFS: 'IFS',
}

export const FRAMEWORK_COLORS: Record<TherapeuticFramework, string> = {
  CBT: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  DBT: 'bg-purple-500/15 text-purple-300 border-purple-500/20',
  ACT: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  MI: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  MBSR: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  SF: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  PP: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  TI: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  'twelve-step': 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20',
  somatic: 'bg-lime-500/15 text-lime-300 border-lime-500/20',
  narrative: 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  IFS: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
}
