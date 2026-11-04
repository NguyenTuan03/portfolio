import type { Dictionary } from "@/app/[lang]/dictionaries";
import { SITE } from "@/lib/site";

interface SiteFooterProps {
  dict: Dictionary;
}

export function SiteFooter({ dict }: SiteFooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {dict.footer.owner} · {SITE.handle}.com
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
