import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark" | "whatsapp";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  block?: boolean;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  "on-dark": "btn-on-dark",
  whatsapp: "btn-whatsapp",
};

export function Button({
  variant = "primary",
  block = false,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn focus-ring ${variantClass[variant]} ${block ? "btn-block" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  block?: boolean;
  className?: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

export function LinkButton({
  href,
  variant = "primary",
  block = false,
  className = "",
  children,
  external = false,
  ariaLabel,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`btn focus-ring ${variantClass[variant]} ${block ? "btn-block" : ""} ${className}`.trim()}
      aria-label={ariaLabel}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
