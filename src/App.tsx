import { useEffect, useState } from "react";
import { Container, Section, Text, Inline, Badge } from "./components/ui";
import Toggle from "./components/Toggle";
import { FloatingActionButtons } from "./components/FloatingActionButtons";
import { LuMoon, LuSun } from "react-icons/lu";
import { type Language, locales } from "./locales";
import { preferencesStorage } from "./storage/preferences";
import { lastUpdated, lastUpdatedNowDaysInterval } from "./locales/lastUpdated";
import SingleColumnLayout from "./layouts/SingleColumnLayout";
import TwoColumnLayout from "./layouts/TwoColumnLayout";
import useIsMobile from "./hooks/useIsMobile";

type ThemeMode = "light" | "dark";

const getInitialLanguage = (): Language => {
  const storedLanguage = preferencesStorage.getLanguage();

  if (storedLanguage === "en" || storedLanguage === "kr") {
    return storedLanguage;
  }

  const browserLanguage =
    window.navigator.language || window.navigator.languages?.[0] || "";
  const normalizedLanguage = browserLanguage.toLowerCase();

  if (normalizedLanguage.startsWith("ko")) {
    return "kr";
  }

  return "en";
};

const App = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const rootElement = document.documentElement;

    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    preferencesStorage.setLanguage(language);
  }, [language]);

  const handleToggleLanguage = () => {
    setLanguage((previousLanguage) =>
      previousLanguage === "en" ? "kr" : "en",
    );
  };

  const handleToggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };

  const isKoreanSelected = language === "kr";
  const isDarkMode = theme === "dark";

  const locale = locales[language];
  const { main: mainLocale } = locale;

  const handleDownloadResume = () => {
    const printUrl = new URL(window.location.href);
    printUrl.searchParams.set("print", "1");
    printUrl.searchParams.set("lang", language);

    window.open(printUrl.toString(), "_blank", "noopener,noreferrer");
  };

  const controlsBar = (
    <Section className={isMobile ? "w-full" : "w-[1200px]! mx-auto"}>
      <Inline className="w-full justify-between gap-4">
        <Badge>
          Last Updated: {lastUpdated} (+{lastUpdatedNowDaysInterval} days)
        </Badge>
        <Inline className={isMobile ? "w-full justify-end" : ""}>
          <Inline gap={3}>
            <Text variant="section-meta-text">LANGUAGE</Text>
            <Toggle
              isOn={isKoreanSelected}
              onToggle={handleToggleLanguage}
              ariaLabel="Toggle language between English and Korean"
              offLabel="EN"
              onLabel="KR"
            />
          </Inline>
          <Inline gap={3}>
            <Text variant="section-meta-text">THEME</Text>
            <Toggle
              isOn={isDarkMode}
              onToggle={handleToggleTheme}
              ariaLabel="Toggle between light and dark theme"
              onLabel={<LuSun />}
              offLabel={<LuMoon />}
            />
          </Inline>
        </Inline>
      </Inline>
    </Section>
  );

  const ActiveLayout = isMobile ? SingleColumnLayout : TwoColumnLayout;

  return (
    <Container>
      {isMobile ? (
        <div className="h-10 shrink-0" aria-hidden="true" />
      ) : (
        controlsBar
      )}
      <ActiveLayout locale={locale} />
      <FloatingActionButtons
        labels={{
          scrollTop: mainLocale.fabScrollTop,
          downloadResume: mainLocale.fabDownloadResume,
        }}
        onDownloadResume={handleDownloadResume}
        isMobile={isMobile}
      />
    </Container>
  );
};

export default App;
