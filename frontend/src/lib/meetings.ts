// Canonical source for nightly meeting configuration.
//
// To rotate the Zoom URL without a code change, set
// NEXT_PUBLIC_MEETING_ZOOM_URL in the Vercel project (or .env.local for dev).
// Setting it to an empty string disables direct join CTAs and routes
// visitors through the /meeting interstitial fallback (crisis resources +
// recovery support directory).
// The TinyURL alias is the only thing committed to source. Update the
// TinyURL target (not this file) to rotate the underlying Zoom URL.
const DEFAULT_ZOOM_LINK = "https://tinyurl.com/OhanaRecovery"

const envZoomLink = process.env.NEXT_PUBLIC_MEETING_ZOOM_URL
const resolvedZoomLink =
  envZoomLink === undefined ? DEFAULT_ZOOM_LINK : envZoomLink

export const MEETING_INFO = {
  zoomLink: resolvedZoomLink,
  startHour: 23, // 11 PM Pacific
  endHour: 3,    // 3 AM Pacific
  timeZone: "America/Los_Angeles",
  label: "11 PM - 3 AM Pacific",
}

export function isMeetingLinkAvailable(): boolean {
  return Boolean(MEETING_INFO.zoomLink && MEETING_INFO.zoomLink.trim().length > 0)
}
