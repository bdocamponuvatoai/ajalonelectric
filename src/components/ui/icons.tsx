import type { ReactElement } from "react";

const paths = {
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  up: <path d="M6 18 18 6M6 6h12v12" />,
  bolt: <path d="m13 2-9 12h7l-1 8 10-13h-8l1-7Z" />,
  plug: <path d="M8 3v5m8-5v5M5 8h14v3a7 7 0 0 1-14 0V8Zm7 10v4" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  power: <path d="M12 2v10m-6-7a9 9 0 1 0 12 0" />,
  phone: (
    <path d="m6 3 4 5-3 2c2 4 3 5 7 7l2-3 5 3c-1 4-3 5-6 4C8 18 4 14 2 7 1 4 3 2 6 3Z" />
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  check: <path d="m5 12 4 4 10-11" />,
  light: <path d="M8 15a7 7 0 1 1 8 0v3H8v-3Zm0 7h8m-8-4h8" />,
  fridge: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M5 9h14M8 5v1m0 7v3" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0m-11 4a5 5 0 0 1 8 0" />
      <circle cx="12" cy="20" r=".7" />
    </>
  ),
  climate: (
    <path d="M12 2v20M3 7l18 10M3 17 21 7m-12-3 3 3 3-3m-6 16 3-3 3 3" />
  ),
  work: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M8 21h8m-4-4v4" />
    </>
  ),
  more: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8m-4-4v8" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  download: <path d="M12 2v13m-5-5 5 5 5-5M4 17v5h16v-5" />,
  list: <path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1" />,
} satisfies Record<string, ReactElement>;

export type IconName = keyof typeof paths;

/** Decorative 24px line icon; inherits colour from text. */
export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
