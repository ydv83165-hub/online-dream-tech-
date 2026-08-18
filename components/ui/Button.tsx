import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-[0_18px_35px_rgba(15,23,42,0.18)]",
  secondary:
    "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark border border-whatsapp",
  ghost: "bg-transparent text-slate-700 hover:text-slate-900 cursor-pointer",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 min-h-10 text-sm",
  md: "px-6 py-3 min-h-11 text-sm",
  lg: "px-8 py-3.5 min-h-12 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
