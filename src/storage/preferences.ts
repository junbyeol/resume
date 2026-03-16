const LANGUAGE_STORAGE_KEY = "resume.language";
const THEME_STORAGE_KEY = "resume.theme";

export type LanguageCode = "en" | "kr";
export type ThemeMode = "light" | "dark";

export const preferencesStorage = {
  getLanguage(): LanguageCode | null {
    if (typeof window === "undefined") return null;
    const value = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return value === "en" || value === "kr" ? value : null;
  },
  setLanguage(language: LanguageCode) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  },
  getTheme(): ThemeMode | null {
    if (typeof window === "undefined") return null;
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  },
  setTheme(theme: ThemeMode) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  },
};