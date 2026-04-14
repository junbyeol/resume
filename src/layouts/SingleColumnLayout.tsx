import { Section, Card, Inline, Stack, Text, Link } from "../components/ui";
import profileImage from "../assets/profile.png";
import { LuMail } from "react-icons/lu";
import { SiGithub, SiTistory, SiLinkedin } from "react-icons/si";
import { type LocaleSchema } from "../locales";
import { skills } from "../locales/skills";
import {
  TechnicalSkillsPanel,
  EducationPanel,
  ExperiencePanel,
  AdditionalInfoPanel,
} from "../panels";
import { ProjectPanel } from "../panels/ProjectPanel";

type SingleColumnLayoutProps = {
  locale: LocaleSchema;
  isPrintView?: boolean;
};

const SingleColumnLayout = ({
  locale,
  isPrintView = false,
}: SingleColumnLayoutProps) => {
  const {
    main: mainLocale,
    experiences: experiencesLocale,
    educations: educationsLocale,
    projects: projectsLocale,
    additionals: additionalsLocale,
  } = locale;
  const { name, position, email, github, blog, linkedin, statement } =
    mainLocale;

  return (
    <>
      <Section className="bg-accent-muted print-avoid-break">
        <Card className="mx-auto w-full max-w-[1200px]">
          <Stack>
            <Inline className="w-full" gap={4} align="start">
              <img
                src={profileImage}
                alt="hero"
                className="h-40 w-40 shrink-0 rounded-full border-2 border-accent"
              />
              <Stack className="w-full">
                <Text variant="main-title">{name}</Text>
                <Text variant="main-subtitle">{position}</Text>
                <Inline gap={4} className="flex-wrap">
                  <Link to={`mailto:${email}`}>
                    <Inline gap={1}>
                      <LuMail className="text-text" />
                      <Text variant="section-body">{email}</Text>
                    </Inline>
                  </Link>
                  <Link to={github}>
                    <Inline gap={1}>
                      <SiGithub className="text-text" />
                      <Text variant="section-body">
                        {github.replace("https://", "")}
                      </Text>
                    </Inline>
                  </Link>
                  <Link to={blog}>
                    <Inline gap={1}>
                      <SiTistory className="text-text" />
                      <Text variant="section-body">
                        {blog.replace("https://", "")}
                      </Text>
                    </Inline>
                  </Link>
                  <Link to={linkedin}>
                    <Inline gap={1}>
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
      <Section className="mx-auto w-full max-w-[1200px] flex flex-col">
        <div className="grid w-full gap-20">
          <TechnicalSkillsPanel skills={skills} isPrintView={isPrintView} />
          <ExperiencePanel
            experiences={experiencesLocale}
            forceExpandAdditionals={isPrintView}
          />
        </div>
        <div className="mt-10 grid w-full">
          <EducationPanel
            educations={educationsLocale}
            isPrintView={isPrintView}
          />
          {projectsLocale && (
            <ProjectPanel projects={projectsLocale} isPrintView={isPrintView} />
          )}
          <AdditionalInfoPanel
            additionals={additionalsLocale}
            isPrintView={isPrintView}
          />
        </div>
      </Section>
    </>
  );
};

export default SingleColumnLayout;
