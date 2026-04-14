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

type TwoColumnLayoutProps = {
  locale: LocaleSchema;
};

const TwoColumnLayout = ({ locale }: TwoColumnLayoutProps) => {
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
                      <Inline gap={1}>
                        <SiGithub className="text-text" />
                        <Text variant="section-body">Github</Text>
                      </Inline>
                    </Link>
                    <Link to={blog}>
                      <Inline gap={1}>
                        <SiTistory className="text-text" />
                        <Text variant="section-body">Blog</Text>
                      </Inline>
                    </Link>
                    <Link to={linkedin}>
                      <Inline gap={1}>
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
    </>
  );
};

export default TwoColumnLayout;
