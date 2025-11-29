// Local storage utility for worksheet responses
// All data stays on user's device - privacy first

export type WorksheetResponse = {
  worksheetId: string
  responses: Record<string, string> // prompt index -> user response
  startedAt: string // ISO date
  completedAt?: string // ISO date
  lastSavedAt: string // ISO date
}

export type WorksheetProgress = {
  totalStarted: number
  totalCompleted: number
  byCategory: Record<string, { started: number; completed: number }>
  lastActivityAt?: string
}

const STORAGE_KEY = "ohana-worksheets"
const PROGRESS_KEY = "ohana-progress"

// Get all saved worksheet responses
export function getAllWorksheetResponses(): Record<string, WorksheetResponse> {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.error("Error reading worksheet responses:", error)
    return {}
  }
}

// Get a specific worksheet response
export function getWorksheetResponse(worksheetId: string): WorksheetResponse | null {
  const all = getAllWorksheetResponses()
  return all[worksheetId] || null
}

// Save or update a worksheet response
export function saveWorksheetResponse(
  worksheetId: string,
  responses: Record<string, string>,
  isComplete: boolean = false
): void {
  if (typeof window === "undefined") return

  try {
    const all = getAllWorksheetResponses()
    const existing = all[worksheetId]
    const now = new Date().toISOString()

    all[worksheetId] = {
      worksheetId,
      responses,
      startedAt: existing?.startedAt || now,
      completedAt: isComplete ? now : existing?.completedAt,
      lastSavedAt: now,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch (error) {
    console.error("Error saving worksheet response:", error)
  }
}

// Delete a worksheet response
export function deleteWorksheetResponse(worksheetId: string): void {
  if (typeof window === "undefined") return

  try {
    const all = getAllWorksheetResponses()
    delete all[worksheetId]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch (error) {
    console.error("Error deleting worksheet response:", error)
  }
}

// Clear all worksheet data
export function clearAllWorksheetData(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(PROGRESS_KEY)
  } catch (error) {
    console.error("Error clearing worksheet data:", error)
  }
}

// Get progress statistics
export function getWorksheetProgress(
  worksheets: Array<{ id: string; category: string }>
): WorksheetProgress {
  const responses = getAllWorksheetResponses()
  const responseArray = Object.values(responses)

  const progress: WorksheetProgress = {
    totalStarted: responseArray.length,
    totalCompleted: responseArray.filter((r) => r.completedAt).length,
    byCategory: {},
  }

  // Calculate per-category stats
  worksheets.forEach((worksheet) => {
    const response = responses[worksheet.id]

    if (!progress.byCategory[worksheet.category]) {
      progress.byCategory[worksheet.category] = { started: 0, completed: 0 }
    }

    if (response) {
      progress.byCategory[worksheet.category].started++
      if (response.completedAt) {
        progress.byCategory[worksheet.category].completed++
      }
    }
  })

  // Find last activity
  const lastActivity = responseArray.reduce((latest, r) => {
    const rDate = new Date(r.lastSavedAt).getTime()
    return rDate > latest ? rDate : latest
  }, 0)

  if (lastActivity > 0) {
    progress.lastActivityAt = new Date(lastActivity).toISOString()
  }

  return progress
}

// Export all data as JSON (for backup)
export function exportAllData(): string {
  const responses = getAllWorksheetResponses()
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      version: "1.0",
      responses,
    },
    null,
    2
  )
}

// Import data from JSON backup
export function importData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString)
    if (data.responses && typeof data.responses === "object") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.responses))
      return true
    }
    return false
  } catch (error) {
    console.error("Error importing data:", error)
    return false
  }
}
