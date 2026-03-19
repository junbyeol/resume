import { useEffect } from "react";
import {
  Container,
  Section,
  Text,
  Card,
  Inline,
  Stack,
  Link,
} from "./components/ui";
import profileImage from "./assets/profile.png";
import { LuMail } from "react-icons/lu";
import { SiGithub, SiTistory, SiLinkedin } from "react-icons/si";
import { type Language, locales } from "./locales";
import { skills } from "./locales/skills";
import {
  TechnicalSkillsPanel,
  EducationPanel,
  ExperiencePanel,
  AdditionalInfoPanel,
} from "./panels";
import { ProjectPanel } from "./panels/ProjectPanel";

const getLanguageFromQuery = (): Language => {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");

  if (queryLanguage === "kr" || queryLanguage === "en") {
    return queryLanguage;
  }

  return "en";
};

const PrintApp = () => {
  const language = getLanguageFromQuery();
  const {
    main: mainLocale,
    experiences: experiencesLocale,
    educations: educationsLocale,
    projects: projectsLocale,
    additionals: additionalsLocale,
  } = locales[language];
  const { name, position, email, github, blog, linkedin, statement } =
    mainLocale;

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const handleAfterPrint = () => {
      window.close();
    };

    window.addEventListener("afterprint", handleAfterPrint);

    const printTimer = window.setTimeout(() => {
      window.print();
    }, 250);

    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
      window.clearTimeout(printTimer);
    };
  }, []);

  return (
    <Container className="print-desktop-container">
      <Section className="mx-auto w-full max-w-[1200px] h-[60px]">
        <div className="h-full" />
      </Section>
      <Section className="bg-accent-muted print-avoid-break">
        <Card className="mx-auto w-full max-w-[1200px]">
          <Stack>
            <Inline className="w-full" gap={4}>
              <img
                src={profileImage}
                alt="hero"
                className="h-40 w-40 rounded-full border-2 border-accent"
              />
              <Stack className="w-full">
                <Text variant="main-title">{name}</Text>
                <Text variant="main-subtitle">{position}</Text>
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
                      <Text variant="section-body">
                        {github.replace("https://", "")}
                      </Text>
                    </Inline>
                  </Link>
                </Inline>
                <Inline gap={4}>
                  <Link to={blog}>
                    <Inline gap={1} className="cursor-pointer">
                      <SiTistory className="text-text" />
                      <Text variant="section-body">
                        {blog.replace("https://", "")}
                      </Text>
                    </Inline>
                  </Link>
                  <Link to={linkedin}>
                    <Inline gap={1} className="cursor-pointer">
                      <SiLinkedin className="text-text" />
                      <Text variant="section-body">
                        {linkedin.replace("https://", "")}
                      </Text>
                    </Inline>
                  </Link>
                </Inline>
              </Stack>
            </Inline>
            <Text variant="main-body">{statement}</Text>
          </Stack>
        </Card>
      </Section>
      <Section className="mx-auto w-full max-w-[1200px]">
        <div className="grid w-full gap-20">
          <TechnicalSkillsPanel skills={skills} isPrintView={true} />
          <ExperiencePanel
            experiences={experiencesLocale}
            forceExpandAdditionals={true}
          />
          <EducationPanel educations={educationsLocale} isPrintView={true} />
          {projectsLocale && (
            <ProjectPanel projects={projectsLocale} isPrintView={true} />
          )}
          <AdditionalInfoPanel
            additionals={additionalsLocale}
            isPrintView={true}
          />
        </div>
      </Section>
    </Container>
  );
};

export default PrintApp;
