import Image from "next/image";
import Link from "next/link";
import mark from "@/assets/images/ajalon-mark.svg";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Ajalon Electric home">
      <Image
        src={mark}
        width={48}
        height={48}
        alt=""
        loading="eager"
        unoptimized
      />
      <span>
        AJALON<small>ELECTRIC</small>
      </span>
    </Link>
  );
}
