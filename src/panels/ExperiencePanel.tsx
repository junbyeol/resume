import { Card, Stack, Inline, Text, Link } from "../components/ui";
import { Badge } from "../components/ui";
import { Accordion } from "../components/Accordian";
import { type LocaleSchema } from "../locales/kr";
import { Fragment } from "react";

interface Props {
  experiences: LocaleSchema["experiences"];
}

export function ExperiencePanel({ experiences }: Props) {
  return (
    <Card>
      <Stack gap={8}>
        <Inline className="w-full justify-between">
          <Text variant="section-header">Professional Experience</Text>
          <Badge className="mr-4 ">Total: 4+ years</Badge>
        </Inline>

        <Stack gap={16}>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.name}
              name={experience.name}
              from={experience.from}
              to={experience.to}
              period={experience.period}
              description={experience.description}
              bullets={experience.bullets}
              additionals={experience.additionals}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}

type ExperienceAdditionalInfo = NonNullable<
  LocaleSchema["experiences"][number]["additionals"]
>[number];

interface ExperienceCardProps {
  name: string;
  from?: string;
  to?: string;
  period?: string;
  description: string;
  bullets: string[];
  additionals?: ExperienceAdditionalInfo[];
}

const ExperienceAdditionalInfoCard = ({
  additional,
}: {
  additional: ExperienceAdditionalInfo;
}) => {
  const { title, bullets, images, skills } = additional;
  const Skill = ({ skill }: { skill: string }) => {
    return (
      <div className="border border-text-muted border-opacity-20 rounded-sm px-2 py-0.5">
        <Text variant="section-body-small">{skill}</Text>
      </div>
    );
  };

  return (
    <Card>
      <Stack gap={3}>
        <Inline className="w-full justify-between">
          <Text variant="section-title">{title}</Text>
          {"from" in additional &&
            "to" in additional &&
            additional.from &&
            additional.to && (
              <Text variant="section-meta-text">
                {additional.from} - {additional.to}
              </Text>
            )}
        </Inline>
        <ul className="list-disc list-inside">
          {bullets.map((bullet) => (
            <Text variant="section-body" key={bullet.main} as="li">
              {bullet.main}
              {"subs" in bullet && bullet.subs && (
                <ul className="list-[circle] list-inside pl-6">
                  {bullet.subs.map((sub) => (
                    <Text variant="section-body-small" key={sub} as="li">
                      {sub}
                    </Text>
                  ))}
                </ul>
              )}
            </Text>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {skills && skills.map((skill) => <Skill key={skill} skill={skill} />)}
        </div>

        {images &&
          images.map((image) => (
            <div key={image.src}>
              <img src={image.src} />
              {"caption" in image && image.caption && (
                <Text variant="section-body-small">{image.caption}</Text>
              )}
            </div>
          ))}
        <ul className="list-none list-inside">
          {"references" in additional &&
            additional.references &&
            additional.references.map((reference) => (
              <Link key={reference.name} to={reference.link}>
                <Text variant="section-title-secondary" className="underline">
                  {reference.name}
                </Text>
              </Link>
            ))}
        </ul>
      </Stack>
    </Card>
  );
};

const ExperienceCard = ({
  name,
  from,
  to,
  period,
  description,
  bullets,
  additionals,
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
        {additionals && (
          <Accordion label="Additional Info." defaultOpen={true}>
            {additionals.map((additional, i) => (
              <Fragment key={i}>
                <ExperienceAdditionalInfoCard additional={additional} />
                {i !== additionals.length - 1 && (
                  <div className="my-4 h-[0.1px] bg-text-muted" />
                )}
              </Fragment>
            ))}
          </Accordion>
        )}
      </Stack>
    </Card>
  );
};
