"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import i18nConfig from "../../../../i18nConfig";
import { useCurrentLocale } from "next-i18n-router/client";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const locale = useCurrentLocale(i18nConfig);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Current locale is: {locale}</p>
      <p>Locale switcher:</p>
      <ul>
        {["en", "ae"].map((locale: any) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
