// next/image loader for the static export. There is no image optimizer, so
// each photo ships in two pre-sized files: the full 1536px original and a
// 720px variant. next.config.ts limits srcset widths to exactly those two.
import electrical from "@/assets/images/electrical.webp";
import electricalSmall from "@/assets/images/electrical-small.webp";
import generator from "@/assets/images/generator.webp";
import generatorSmall from "@/assets/images/generator-small.webp";
import hero from "@/assets/images/hero.webp";
import heroSmall from "@/assets/images/hero-small.webp";
import solar from "@/assets/images/solar.webp";
import solarSmall from "@/assets/images/solar-small.webp";

const SMALL_WIDTH = 720;

const smallVariants: Record<string, string> = {
  [electrical.src]: electricalSmall.src,
  [generator.src]: generatorSmall.src,
  [hero.src]: heroSmall.src,
  [solar.src]: solarSmall.src,
};

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}): string {
  return width <= SMALL_WIDTH ? (smallVariants[src] ?? src) : src;
}
