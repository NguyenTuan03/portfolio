import type { ReactNode } from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  OutlinePill = "outlinePill",
  PrimaryPill = "primaryPill",
}

const BASE_CLASS =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]:
    "rounded-xl bg-accent px-6 py-3 text-sm md:text-base font-semibold text-accent-foreground hover:brightness-110 shadow-sm",
  [ButtonVariant.Secondary]:
    "rounded-xl border border-border bg-surface px-6 py-3 text-sm md:text-base text-foreground hover:bg-surface-hover hover:border-accent/50",
  [ButtonVariant.OutlinePill]:
    "rounded-full border-2 border-accent bg-transparent px-6 py-2.5 text-sm md:text-base text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_-3px_var(--accent)]",
  [ButtonVariant.PrimaryPill]:
    "rounded-full bg-accent px-7 py-3 text-sm md:text-base font-semibold text-accent-foreground hover:brightness-110 hover:shadow-[0_0_25px_-5px_var(--accent)]",
};

interface ButtonLinkProps {
  href: string;
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
  /** Có giá trị khi liên kết mở tab mới; dùng làm mô tả cho trình đọc màn hình. */
  externalLabel?: string;
}

export function ButtonLink({
  href,
  variant,
  children,
  className = "",
  externalLabel,
}: ButtonLinkProps) {
  const combinedClassName = `${BASE_CLASS} ${VARIANT_CLASS[variant]} ${className}`;

  if (externalLabel) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        {children}
        <span className="sr-only"> ({externalLabel})</span>
      </a>
    );
  }

  return (
    <a href={href} className={combinedClassName}>
      {children}
    </a>
  );
}
