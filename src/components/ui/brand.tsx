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
      {/*
        The space before the block-level <small> collapses at the line end, so
        it changes nothing on screen but makes the visible text "AJALON
        ELECTRIC", which matches the accessible name.
      */}
      <span>
        {"AJALON "}
        <small>ELECTRIC</small>
      </span>
    </Link>
  );
}
