import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import LocaleSwitcher from "./components/LocaleSwitcher";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function Page({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <LocaleSwitcher />
      <h1>{dict.title}</h1>
    </main>
  );
}
