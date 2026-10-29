"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/config/site";
import { Brand } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/links";

const DESKTOP_QUERY = "(min-width:1001px)";

/** Trailing-slash-insensitive path, so "/about" and "/about/" compare equal. */
function normalize(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

/** The nav item for the current section; service pages count as "/services/". */
function activeHref(pathname: string): string | undefined {
  const path = normalize(pathname);
  return mainNav.find(
    (item) =>
      path === item.href ||
      (item.href === "/services/" && path.startsWith("/services/")),
  )?.href;
}

export function SiteHeader() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const open = openOnPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const current = activeHref(pathname);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenOnPath(null);
      toggleRef.current?.focus();
    };
    const desktop = matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenOnPath(null);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpenOnPath(null);

  return (
    <header>
      <div className="container nav-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === current ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/request/" variant="small" className="header-cta">
          Start a project
        </ButtonLink>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpenOnPath(open ? null : pathname)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) close();
        }}
      >
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <ButtonLink href="/request/">Start a project</ButtonLink>
      </nav>
    </header>
  );
}
