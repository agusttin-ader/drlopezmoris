"use client";

import { useEffect } from "react";

export function ScrollToTopOnReload() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload = nav?.type === "reload";

    if (!isReload) return;

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    scrollTop();
    requestAnimationFrame(scrollTop);
  }, []);

  return null;
}
