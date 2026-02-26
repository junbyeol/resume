import { useEffect, useState } from "react";
import { Container, Section, Text, Card, Inline, Stack } from "./components/ui";
import Toggle from "./components/toggle";
import profileImage from "./assets/nupjook.jpg";
import { LuMoon, LuSun } from "react-icons/lu";

type LanguageCode = "en" | "kr";
type ThemeMode = "light" | "dark";

const App = () => {
  const [language, setLanguage] = useState<LanguageCode>("en");
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

  const handleToggleLanguage = () => {
    setLanguage((previousLanguage) =>
      previousLanguage === "en" ? "kr" : "en"
    );
  };

  const handleToggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  const isKoreanSelected = language === "kr";
  const isDarkMode = theme === "dark";

  return (
    <Container>
      <Section>
        <Inline className="w-full justify-end gap-12">
          <Inline gap={3}>
            <Text variant="section-meta-text">
              LANGUAGE
            </Text>
            <Toggle
              isOn={isKoreanSelected}
              onToggle={handleToggleLanguage}
              ariaLabel="Toggle language between English and Korean"
              offLabel="EN"
              onLabel="KR"
            />
          </Inline>
          <Inline gap={3}>
            <Text variant="section-meta-text">
              THEME
            </Text>
            <Toggle
              isOn={isDarkMode}
              onToggle={handleToggleTheme}
              ariaLabel="Toggle between light and dark theme"
              onLabel={<LuSun />}
              offLabel={<LuMoon />}
            />
          </Inline>
        </Inline>
      </Section>
      <Section>
        <Card>
          <Inline>
            <img
              src={profileImage}
              alt="hero"
              className="w-[8rem] h-[8rem] rounded-full"
            />
            <Stack>
              <Text variant="main-title">Nupjook</Text>
              <Text variant="main-subtitle">Software Engineer</Text>
              <Text variant="main-body">
                I'm a software engineer with a passion for building web
                applications. I'm a quick learner and I'm always looking to
                improve my skills.
              </Text>
            </Stack>
          </Inline>
        </Card>
      </Section>
      <Section>
        {/* 가로로 2:3 의 비율로 영역 나누기 */}
        <div className="w-full grid grid-cols-5 gap-20">
          <div className="col-span-2 flex flex-col gap-20">
            <Card>
              <Stack gap={8}>
                <Text variant="section-header">Technical Skills</Text>
                <Stack gap={8}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <TechnicalSkillsCard key={index} />
                  ))}
                </Stack>
              </Stack>
            </Card>
            <Card>
            <Stack gap={8}>
                <Text variant="section-header">Education</Text>
                <Stack gap={8}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <EducationCard key={index} />
                  ))}
                </Stack>
              </Stack>
            </Card>
          </div>
          <div className="col-span-3 flex flex-col gap-20">
            <Card>
              <Stack gap={8}>
                <Text variant="section-header">Professional Experience</Text>
                <Stack gap={16}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <ExperienceCard key={index} />
                  ))}
                </Stack>
              </Stack>
            </Card>
            <Card>
            <Stack gap={8}>
              <Text variant="section-header">Additional Info.</Text>
              <Stack gap={8}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <AdditionalInfoCard key={index} />
                  ))}
                </Stack>
              </Stack>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  );
};

const ExperienceCard = () => {
  return (
    <Card>
      <Inline className="justify-between">
        <Text variant="section-title">Experience</Text>
        <Text variant="section-meta-text">2020 - 2024</Text>
      </Inline>
      <Text variant="section-title-secondary">Company Name</Text>
      <Text variant="section-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>
    </Card>
  );
};

const TechnicalSkillsCard = () => {
  const dummyTags = ["TypeScript", "Node.js", "Express", "NestJS"];

  const Tag = ({ text }: { text: string }) => {
    return (
      <div className="border border-accent border-opacity-20 rounded-sm px-2 py-0.5">
        <Text variant="section-body" className="text-accent">
          {text}
        </Text>
      </div>
    );
  };

  return (
    <Card>
      <Stack gap={3}>
        <Text variant="section-title-secondary">Backend</Text>
        <Inline className="flex-wrap">
          {dummyTags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </Inline>
      </Stack>
    </Card>
  );
};

const EducationCard = () => {
  return (
    <Card>
      <Stack gap={3} align="stretch">
        <Inline className="flex-1 justify-between">
          <Text variant="section-title-secondary">Education</Text>
          <Text variant="section-meta-text">2020 - 2024</Text>
        </Inline>

        <Text variant="section-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Text>
      </Stack>
    </Card>
  );
};

const AdditionalInfoCard = () => {
  return (
    <Card>
      <Inline className="justify-between">
        <Text variant="section-title-secondary">Additional Info.</Text>
        <Text variant="section-meta-text">2020 - 2024</Text>
      </Inline>
      <Text variant="section-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quos.
      </Text>
    </Card>
  );
};

export default App;
