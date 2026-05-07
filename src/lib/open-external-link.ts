export const openExternalLink = (url: string) => {
  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (popup) {
    popup.opener = null;
    return true;
  }

  try {
    if (window.top && window.top !== window.self) {
      window.top.location.href = url;
      return false;
    }
  } catch {
    // Ignore cross-origin access errors and use local navigation fallback.
  }

  window.location.href = url;
  return false;
};