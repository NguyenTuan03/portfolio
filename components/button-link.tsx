import type { ReactNode } from "react";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

const BASE_CLASS =
  "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors md:text-base";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]:
    "bg-accent text-accent-foreground hover:brightness-110",
  [ButtonVariant.Secondary]:
    "border border-border bg-surface text-foreground hover:bg-surface-hover",
};

interface ButtonLinkProps {
  href: string;
  variant: ButtonVariant;
  children: ReactNode;
  /** Có giá trị khi liên kết mở tab mới; dùng làm mô tả cho trình đọc màn hình. */
  externalLabel?: string;
}

export function ButtonLink({
  href,
  variant,
  children,
  externalLabel,
}: ButtonLinkProps) {
  const className = `${BASE_CLASS} ${VARIANT_CLASS[variant]}`;

  if (externalLabel) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        <span className="sr-only"> ({externalLabel})</span>
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
