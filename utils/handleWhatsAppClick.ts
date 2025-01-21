export function handleWhatsAppClick(label: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "WhatsApp",
      event_label: label,
    });
  }
}
