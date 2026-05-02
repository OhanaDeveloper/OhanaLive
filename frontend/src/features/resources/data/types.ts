export type WorksheetCategory =
  | 'daily-practice'
  | 'self-reflection'
  | 'coping-skills'
  | 'triggers-urges'
  | 'relationships'
  | 'gratitude'
  | 'mindfulness'
  | 'emotional-regulation'
  | 'trauma-processing'
  | 'relapse-prevention'
  | 'identity-values'
  | 'physical-wellness'
  | 'life-skills'
  | 'cognitive-restructuring'

export type TherapeuticFramework =
  | 'CBT'
  | 'DBT'
  | 'ACT'
  | 'MI'
  | 'MBSR'
  | 'SF'
  | 'PP'
  | 'TI'
  | 'twelve-step'
  | 'somatic'
  | 'narrative'
  | 'IFS'

export type SectionType =
  | 'prompt'
  | 'scale'
  | 'checklist'
  | 'freewrite'
  | 'reflection'
  | 'body-scan'
  | 'timeline'
  | 'matrix'
  | 'ranking'
  | 'letter'
  | 'affirmation'
  | 'visualization'
  | 'instruction'
  | 'psychoeducation'

export type FieldType =
  | 'textarea'
  | 'text'
  | 'number'
  | 'slider'
  | 'select'
  | 'multi-select'
  | 'checkbox'
  | 'date'
  | 'time'
  | 'mood-picker'

export interface WorksheetField {
  id: string
  type: FieldType
  label: string
  placeholder?: string
  options?: string[]
  min?: number
  max?: number
  required?: boolean
}

export interface WorksheetSection {
  type: SectionType
  title: string
  content: string
  fields?: WorksheetField[]
  optional?: boolean
}

export interface Worksheet {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  category: WorksheetCategory
  subcategory?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedMinutes: number
  frequency?: 'daily' | 'weekly' | 'as-needed' | 'one-time'
  therapeuticFramework: TherapeuticFramework[]
  tags: string[]
  icon: string
  color: string
  sections: WorksheetSection[]
  relatedWorksheets: string[]
  featured?: boolean
  isNew?: boolean
  version: number
}

export interface WorksheetSaveData {
  worksheetId: string
  responses: Record<string, string>
  startedAt: string
  completedAt?: string
  lastSavedAt: string
}

export interface WorksheetProgress {
  totalStarted: number
  totalCompleted: number
  byCategory: Record<string, { started: number; completed: number }>
  lastActivityAt?: string
}
