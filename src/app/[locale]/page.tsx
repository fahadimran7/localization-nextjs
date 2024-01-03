import { getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "./components/LocaleSwitcher";

export default async function Page({ params: { locale } }: any) {
  const dict = await getDictionary(locale);

  return (
    <main>
      <LocaleSwitcher />
      <h1>{dict.title}</h1>
    </main>
  );
}
