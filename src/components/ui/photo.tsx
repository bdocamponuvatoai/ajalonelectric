import Image, { type StaticImageData } from "next/image";

type PhotoProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  /** Above-the-fold image: load eagerly with high fetch priority. */
  eager?: boolean;
};

/** Responsive photo: 720px variant on small screens, full size otherwise. */
export function Photo({ src, alt, className, eager }: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      sizes="(max-width: 740px) 100vw, 65vw"
      {...(eager ? { loading: "eager", fetchPriority: "high" } : {})}
    />
  );
}
