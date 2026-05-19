import { MEETING_INFO, isMeetingLinkAvailable } from "./meetings"
import { trackEvent } from "./analytics"

export function meetingHref(): string {
  return isMeetingLinkAvailable() ? MEETING_INFO.zoomLink : "/recovery-network"
}

export function meetingLinkProps(source: string) {
  const available = isMeetingLinkAvailable()
  return {
    href: available ? MEETING_INFO.zoomLink : "/recovery-network",
    target: available ? ("_blank" as const) : undefined,
    rel: available ? "noopener noreferrer" : undefined,
    onClick: () => {
      if (available && typeof window !== "undefined") {
        window.sessionStorage.setItem("ohana-meeting-intro-seen", "true")
        trackEvent("meeting_link_click", { source })
      }
    },
  }
}
