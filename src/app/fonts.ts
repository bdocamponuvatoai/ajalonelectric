import localFont from "next/font/local";

// Variable fonts bundled with their SIL OFL licences (src/assets/fonts).
// The CSS tokens --font-sans / --font-display (styles/base/tokens.css) add
// the fallbacks. adjustFontFallback is off so glyphs the fonts lack (such as
// "←") fall back to plain Arial, exactly as in the original design.

const inter = localFont({
  src: "../assets/fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  adjustFontFallback: false,
});

const manrope = localFont({
  src: "../assets/fonts/manrope.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  adjustFontFallback: false,
});

export const fontVariables = `${inter.variable} ${manrope.variable}`;
