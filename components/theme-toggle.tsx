"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "@phosphor-icons/react/ssr";
import { THEME_STORAGE_KEY, Theme, isTheme } from "@/lib/theme";

const applyTheme = (theme: Theme): void => {
  document.documentElement.setAttribute("data-theme", theme);
};

export function ThemeToggle({ label }: { label: string }) {
  // Áp lại theme đã lưu sau khi React Strict Mode remount ở môi trường dev (production không ảnh hưởng).
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (isTheme(stored)) applyTheme(stored);
    } catch {
      /* localStorage không khả dụng */
    }
  }, []);

  const handleToggle = (): void => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === Theme.Dark ? Theme.Light : Theme.Dark;
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* localStorage không khả dụng */
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover"
    >
      <Sun aria-hidden="true" weight="bold" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" weight="bold" className="size-4 dark:hidden" />
    </button>
  );
}
