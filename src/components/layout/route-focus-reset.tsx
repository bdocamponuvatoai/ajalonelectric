"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * After a client-side navigation, start keyboard focus from the top of the
 * new page (so the next Tab reaches "Skip to content"), as a full page load
 * did on the original site.
 */
export function RouteFocusReset() {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    const { body } = document;
    body.tabIndex = -1;
    body.focus({ preventScroll: true });
    body.removeAttribute("tabindex");
  }, [pathname]);

  return null;
}
