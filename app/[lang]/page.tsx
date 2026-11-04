import { Background } from "@/components/background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { getDictionary, getLocale } from "./dictionaries";

const MAIN_ID = "main";

export default async function Page() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
      <a
        href={`#${MAIN_ID}`}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        {dict.a11y.skipToContent}
      </a>
      <Background />
      <SiteHeader locale={locale} dict={dict} />
      <main id={MAIN_ID} className="flex-1">
        <Hero dict={dict} />
        <About dict={dict} />
        <Skills dict={dict} />
        <Projects dict={dict} />
        <Contact dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
