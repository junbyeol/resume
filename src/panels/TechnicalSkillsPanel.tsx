import { Stack } from "../components/ui";
import { type Skill } from "../locales/skills";
import { Card, Text, Inline } from "../components/ui";

interface Props {
  skills: Skill[];
  isPrintView?: boolean;
}

export function TechnicalSkillsPanel({ skills, isPrintView = false }: Props) {
  return (
    <Card>
      <Stack gap={8}>
        <Text variant="section-header">Technical Skills</Text>
        {isPrintView ? (
          <div className={"grid grid-cols-2 gap-4"}>
            {skills.map((skill) => (
              <TechnicalSkillsCard
                key={skill.title}
                title={skill.title}
                tags={skill.tags}
              />
            ))}
          </div>
        ) : (
          <Stack gap={8}>
            {skills.map((skill) => (
              <TechnicalSkillsCard
                key={skill.title}
                title={skill.title}
                tags={skill.tags}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Card>
  );
}

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
