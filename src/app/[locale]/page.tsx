import { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "./components/LocaleSwitcher";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const locale = params.locale;
  const dict = await getDictionary(locale);

  return {
    title: dict.title,
    description: "Generated by the default create next app",
  };
}

export default async function Page({ params: { locale } }: any) {
  const dict = await getDictionary(locale);

  return (
    <main>
      <LocaleSwitcher />
      <h1>{dict.title}</h1>
    </main>
  );
}
