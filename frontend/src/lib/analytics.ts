type AnalyticsEventName =
  | "meeting_link_click"
  | "support_link_click"
  | "featured_worksheet_click"

type AnalyticsEventParams = Record<string, string | number | boolean>

type WindowWithGtag = Window & {
  gtag?: unknown
}

export function trackEvent(eventName: AnalyticsEventName, eventParams: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return
  }

  const gtag = (window as WindowWithGtag).gtag

  if (typeof gtag !== "function") {
    return
  }

  Reflect.apply(gtag, window, ["event", eventName, eventParams])
}
