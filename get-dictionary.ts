import "server-only";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import("./src/app/dictionaries/en.json").then((module) => module.default),
  ae: () =>
    import("./src/app/dictionaries/ae.json").then((module) => module.default),
};

export const getDictionary = async (locale: any) =>
  dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.en();
