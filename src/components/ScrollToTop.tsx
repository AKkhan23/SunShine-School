"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Resets scroll position on navigation — static hosting has no router scroll reset. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}