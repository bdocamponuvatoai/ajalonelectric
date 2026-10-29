import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./icons";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

/**
 * Site-relative paths use next/link for client-side navigation; tel:, mailto:,
 * hash and external URLs stay plain anchors with their attributes untouched.
 */
function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

/** Label plus trailing arrow; the original `link()` helper. */
function ArrowLink({ href, children, className, external }: ArrowLinkProps) {
  return (
    <SmartLink
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <Icon name={external ? "up" : "arrow"} />
    </SmartLink>
  );
}

export function TextLink(props: Omit<ArrowLinkProps, "className">) {
  return <ArrowLink {...props} className="text-link" />;
}

type ButtonVariant = "small" | "light" | "outline";

export function ButtonLink({
  variant,
  className,
  ...props
}: Omit<ArrowLinkProps, "external"> & { variant?: ButtonVariant }) {
  const classes = ["button", variant, className].filter(Boolean).join(" ");
  return <ArrowLink {...props} className={classes} />;
}
