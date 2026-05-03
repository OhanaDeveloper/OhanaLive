import { MEETING_INFO } from "@/lib/meetings"

export type MeetingState = "live" | "starting-soon" | "later"

export interface MeetingStatusInfo {
  state: MeetingState
  isLive: boolean
  nextStart: Date
  currentEnd: Date
  minutesUntilStart: number
  localStartLabel: string
  localEndLabel: string
  countdownLabel: string
}

function getTimeZoneParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date)

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, Number(part.value)])
  )

  return {
    year: values.year,
    month: values.month,
    day: values.day,
    hour: values.hour === 24 ? 0 : values.hour,
    minute: values.minute,
    second: values.second,
  }
}

function getTimeZoneOffsetMs(date: Date, timeZone: string) {
  const parts = getTimeZoneParts(date, timeZone)
  const asUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  )
  return asUtc - date.getTime()
}

function zonedDateTimeToDate(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timeZone: string
) {
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, 0))
  const offset = getTimeZoneOffsetMs(utcGuess, timeZone)
  return new Date(utcGuess.getTime() - offset)
}

function addDaysToParts(parts: { year: number; month: number; day: number }, days: number) {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + days, 12, 0, 0))
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  }
}

function formatLocalTime(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date)
}

function formatCountdown(totalMs: number) {
  const totalMinutes = Math.max(0, Math.ceil(totalMs / 60000))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours <= 0) return `${minutes} minute${minutes === 1 ? "" : "s"}`
  return `${hours} hour${hours === 1 ? "" : "s"}, ${minutes} minute${minutes === 1 ? "" : "s"}`
}

export function getMeetingStatus(now = new Date()): MeetingStatusInfo {
  const { startHour, endHour, timeZone } = MEETING_INFO
  const pacificNow = getTimeZoneParts(now, timeZone)

  const startDayOffset = pacificNow.hour < endHour ? -1 : 0
  const startDay = addDaysToParts(pacificNow, startDayOffset)
  const endDay = addDaysToParts(startDay, endHour <= startHour ? 1 : 0)

  let meetingStart = zonedDateTimeToDate(
    startDay.year,
    startDay.month,
    startDay.day,
    startHour,
    0,
    timeZone
  )
  let meetingEnd = zonedDateTimeToDate(
    endDay.year,
    endDay.month,
    endDay.day,
    endHour,
    0,
    timeZone
  )

  const isLive = now >= meetingStart && now < meetingEnd

  if (!isLive && now >= meetingEnd) {
    const nextStartDay = addDaysToParts(startDay, 1)
    const nextEndDay = addDaysToParts(nextStartDay, endHour <= startHour ? 1 : 0)
    meetingStart = zonedDateTimeToDate(
      nextStartDay.year,
      nextStartDay.month,
      nextStartDay.day,
      startHour,
      0,
      timeZone
    )
    meetingEnd = zonedDateTimeToDate(
      nextEndDay.year,
      nextEndDay.month,
      nextEndDay.day,
      endHour,
      0,
      timeZone
    )
  }

  if (!isLive && now < meetingStart) {
    const minutesUntilStart = Math.ceil((meetingStart.getTime() - now.getTime()) / 60000)
    return {
      state: minutesUntilStart <= 120 ? "starting-soon" : "later",
      isLive: false,
      nextStart: meetingStart,
      currentEnd: meetingEnd,
      minutesUntilStart,
      localStartLabel: formatLocalTime(meetingStart),
      localEndLabel: formatLocalTime(meetingEnd),
      countdownLabel: formatCountdown(meetingStart.getTime() - now.getTime()),
    }
  }

  return {
    state: "live",
    isLive: true,
    nextStart: meetingStart,
    currentEnd: meetingEnd,
    minutesUntilStart: 0,
    localStartLabel: formatLocalTime(meetingStart),
    localEndLabel: formatLocalTime(meetingEnd),
    countdownLabel: "now",
  }
}
