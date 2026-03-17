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
import profileImage from "./assets/profile.png";
import { LuMoon, LuSun, LuMail } from "react-icons/lu";
import { SiGithub, SiTistory, SiLinkedin } from "react-icons/si";
import { type Language, locales } from "./locales";
import { skills } from "./locales/skills";
import { preferencesStorage } from "./storage/preferences";

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
      previousLanguage === "en" ? "kr" : "en"
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
    additionals: additionalsLocale,
  } = locales[language];
  const { name, position, email, github, blog, linkedin, statement } =
    mainLocale;

  return (
    <Container>
      <Section className="w-[1200px]! mx-auto">
        <Inline className="w-full justify-end gap-12">
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
      </Section>
      <Section className="bg-accent-muted">
        <Card className="w-[1200px]! mx-auto">
          <Stack>
          <Inline className="w-full" gap={4}>
            <img
              src={profileImage}
              alt="hero"
              className="w-40 h-40 rounded-full border border-2 border-accent"
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
            <Card>
              <Stack gap={8}>
                <Text variant="section-header">Technical Skills</Text>
                <Stack gap={8}>
                  {skills.map((skill) => (
                    <TechnicalSkillsCard key={skill.title} title={skill.title} tags={skill.tags} />
                  ))}
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Stack gap={8}>
                <Text variant="section-header">Education</Text>
                <Stack gap={8}>
                  {educationsLocale.map((education) => (
                    <EducationCard key={education.name} name={education.name} from={education.from} to={education.to} bullets={education.bullets} />
                  ))}
                </Stack>
              </Stack>
            </Card>
          </div>
          <div className="col-span-3 flex flex-col gap-20">
            <Card>
              <Stack gap={8}>
                <Inline className="w-full justify-between">
                <Text variant="section-header">Professional Experience</Text>
                <Badge className="mr-4 ">Total: 4+ years</Badge>
                </Inline>
                
                <Stack gap={16}>
                  {experiencesLocale.map((experience) => (
                    <ExperienceCard
                      key={experience.name}
                      name={experience.name}
                      from={experience.from}
                      to={experience.to}
                      period={experience.period}
                      description={experience.description}
                      bullets={experience.bullets}
                    />
                  ))}
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Stack gap={8}>
                <Text variant="section-header">Additional Info.</Text>
                <Stack gap={8}>
                  {additionalsLocale.map((additional) => (
                    <AdditionalInfoCard key={additional.name} name={additional.name} date={additional.date} link={additional.link} description={additional.description} bullets={additional.bullets} />
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

interface ExperienceCardProps {
  name: string;
  from: string;
  to: string;
  period?: string;
  description: string;
  bullets: string[];
}

const ExperienceCard = ({
  name,
  from,
  to,
  period,
  description,
  bullets,
}: ExperienceCardProps) => {
  return (
    <Card>
      <Stack className="w-full" gap={3}>
      <Inline className="w-full justify-between">
        <Text variant="section-title">{name}</Text>
        <Text variant="section-meta-text">
          {from} - {to} {period && `(${period})`}
        </Text>
      </Inline>
      <Text variant="section-title-secondary">{description}</Text>
      <ul className="list-disc list-inside">
        {bullets.map((bullet) => (
          <Text variant="section-body" key={bullet} as="li">
            {bullet}
          </Text>
        ))}
      </ul>
      </Stack>
    </Card>
  );
};

interface TechnicalSkillsCardProps {
  title: string;
  tags: string[];
}

const TechnicalSkillsCard = ({ title, tags }: TechnicalSkillsCardProps) => {
  const Tag = ({ text }: { text: string }) => {
    return (
      <div className="border border-accent border-opacity-20 rounded-sm px-2 py-0.5">
        <Text variant="section-body" className="text-accent!">
          {text}
        </Text>
      </div>
    );
  };

  return (
    <Card>
      <Stack gap={3}>
        <Text variant="section-title-secondary">{title}</Text>
        <Inline className="flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />  
          ))}
        </Inline>
      </Stack>
    </Card>
  );
};

interface EducationCardProps {
  name: string;
  from: string;
  to: string;
  bullets: string[];
}

const EducationCard = ({ name, from, to, bullets }: EducationCardProps) => {
  return (
    <Card>
      <Stack gap={3} align="stretch">
        <Inline className="flex-1 justify-between">
          <Text variant="section-title-secondary">{name}</Text>
          <Text variant="section-meta-text">
            {from} - {to}
          </Text>
        </Inline>
        <ul className="list-disc list-inside">
          {bullets.map((bullet) => (
            <Text variant="section-body" key={bullet} as="li">
              {bullet}
            </Text>
          ))}
        </ul>
      </Stack>
    </Card>
  );
};

interface AdditionalInfoCardProps {
  name: string;
  date: string;
  link?: string;
  description?: string;
  bullets?: string[];
}

const AdditionalInfoCard = ({ name, date, link, description, bullets }: AdditionalInfoCardProps) => {
  return (
    <Card>
      <Inline className="justify-between">
        {
          link ? 
          <Link to={link}>
            <Text variant="section-title-secondary" className="underline">{name}</Text>
          </Link>
          :
          <Text variant="section-title-secondary">{name}</Text>
        }
        
        <Text variant="section-meta-text">{date}</Text>
      </Inline>
      {description && <Text variant="section-body">{description}</Text>}
      {bullets && (
        <ul className="list-disc list-inside">
          {bullets.map((bullet) => (
            <Text variant="section-body" key={bullet} as="li">
              {bullet}
            </Text>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default App;
