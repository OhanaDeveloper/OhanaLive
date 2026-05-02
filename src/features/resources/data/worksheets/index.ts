import type { Worksheet } from '../types'
import { dailyPracticeWorksheets } from './daily-practice'
import { selfReflectionWorksheets } from './self-reflection'
import { copingSkillsWorksheets } from './coping-skills'
import { triggersUrgesWorksheets } from './triggers-urges'
import { relationshipsWorksheets } from './relationships'
import { gratitudeWorksheets } from './gratitude'
import { mindfulnessWorksheets } from './mindfulness'
import { emotionalRegulationWorksheets } from './emotional-regulation'
import { traumaProcessingWorksheets } from './trauma-processing'
import { relapsePreventionWorksheets } from './relapse-prevention'
import { identityValuesWorksheets } from './identity-values'
import { physicalWellnessWorksheets } from './physical-wellness'
import { lifeSkillsWorksheets } from './life-skills'
import { cognitiveRestructuringWorksheets } from './cognitive-restructuring'

export const ALL_WORKSHEETS: Worksheet[] = [
  ...dailyPracticeWorksheets,
  ...selfReflectionWorksheets,
  ...copingSkillsWorksheets,
  ...triggersUrgesWorksheets,
  ...relationshipsWorksheets,
  ...gratitudeWorksheets,
  ...mindfulnessWorksheets,
  ...emotionalRegulationWorksheets,
  ...traumaProcessingWorksheets,
  ...relapsePreventionWorksheets,
  ...identityValuesWorksheets,
  ...physicalWellnessWorksheets,
  ...lifeSkillsWorksheets,
  ...cognitiveRestructuringWorksheets,
]

export const WORKSHEET_MAP = Object.fromEntries(
  ALL_WORKSHEETS.map(w => [w.id, w])
) as Record<string, Worksheet>

export function getWorksheetById(id: string): Worksheet | undefined {
  return WORKSHEET_MAP[id]
}

export function getWorksheetsByCategory(category: string): Worksheet[] {
  return ALL_WORKSHEETS.filter(w => w.category === category)
}

export function getFeaturedWorksheets(): Worksheet[] {
  return ALL_WORKSHEETS.filter(w => w.featured)
}

export function getRelatedWorksheets(worksheet: Worksheet): Worksheet[] {
  return worksheet.relatedWorksheets
    .map(id => WORKSHEET_MAP[id])
    .filter(Boolean) as Worksheet[]
}
