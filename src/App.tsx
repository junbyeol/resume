import { useEffect, useState } from "react";
import {
  Container,
  Section,
  Text,
  Card,
  Inline,
  Stack,
  Link,
  Badge,
} from "./components/ui";
import Toggle from "./components/Toggle";
import { FloatingActionButtons } from "./components/FloatingActionButtons";
import profileImage from "./assets/profile.png";
import { LuMoon, LuSun, LuMail } from "react-icons/lu";
import { SiGithub, SiTistory, SiLinkedin } from "react-icons/si";
import { type Language, locales } from "./locales";
import { skills } from "./locales/skills";
import { preferencesStorage } from "./storage/preferences";
import { lastUpdated, lastUpdatedNowDaysInterval } from "./locales/lastUpdated";
import {
  TechnicalSkillsPanel,
  EducationPanel,
  ExperiencePanel,
  AdditionalInfoPanel,
} from "./panels";
import { ProjectPanel } from "./panels/ProjectPanel";

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

  const {
    main: mainLocale,
    experiences: experiencesLocale,
    educations: educationsLocale,
    projects: projectsLocale,
    additionals: additionalsLocale,
  } = locales[language];
  const { name, position, email, github, blog, linkedin, statement } =
    mainLocale;
  const resumePdfUrl = undefined;

  return (
    <Container>
      <Section className="w-[1200px]! mx-auto">
        <Inline className="w-full justify-between gap-12">
          <Badge>
            Last Updated: {lastUpdated} (+{lastUpdatedNowDaysInterval} days)
          </Badge>
          <Inline>
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
      <Section className="bg-accent-muted">
        <Card className="w-[1200px]! mx-auto">
          <Stack>
            <Inline className="w-full" gap={4}>
              <img
                src={profileImage}
                alt="hero"
                className="w-40 h-40 rounded-full border-2 border-accent"
              />
              <Stack className="w-full">
                <Inline className="w-full justify-between">
                  <Text variant="main-title">{name}</Text>
                  <Inline gap={4}>
                    <Link to={`mailto:${email}`}>
                      <Inline gap={1}>
                        <LuMail className="text-text" />
                        <Text variant="section-body">{email}</Text>
                      </Inline>
                    </Link>
                    <Link to={github}>
                      <Inline gap={1} className="cursor-pointer">
                        <SiGithub className="text-text" />
                        <Text variant="section-body">Github</Text>
                      </Inline>
                    </Link>
                    <Link to={blog}>
                      <Inline gap={1} className="cursor-pointer">
                        <SiTistory className="text-text" />
                        <Text variant="section-body">Blog</Text>
                      </Inline>
                    </Link>
                    <Link to={linkedin}>
                      <Inline gap={1} className="cursor-pointer">
                        <SiLinkedin className="text-text" />
                        <Text variant="section-body">Linkedin</Text>
                      </Inline>
                    </Link>
                  </Inline>
                </Inline>
                <Text variant="main-subtitle">{position}</Text>
              </Stack>
            </Inline>
            <Text variant="main-body">{statement}</Text>
          </Stack>
        </Card>
      </Section>
      <Section className="w-[1200px]! mx-auto">
        {/* 가로로 2:3 의 비율로 영역 나누기 */}
        <div className="w-full grid grid-cols-5 gap-20">
          <div className="col-span-2 flex flex-col gap-20">
            <TechnicalSkillsPanel skills={skills} />
            <EducationPanel educations={educationsLocale} />
            {projectsLocale && <ProjectPanel projects={projectsLocale} />}
          </div>
          <div className="col-span-3 flex flex-col gap-20">
            <ExperiencePanel experiences={experiencesLocale} />
            <AdditionalInfoPanel additionals={additionalsLocale} />
          </div>
        </div>
      </Section>
      <FloatingActionButtons
        labels={{
          scrollTop: mainLocale.fabScrollTop,
          downloadResume: mainLocale.fabDownloadResume,
        }}
        resumePdfUrl={resumePdfUrl}
      />
    </Container>
  );
};

export default App;
