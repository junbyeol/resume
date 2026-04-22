import { Stack } from "../components/ui";
import { type Skill } from "../locales/skills";
import { Card, Text, Inline } from "../components/ui";

interface Props {
  skills: Skill[];
  isCompact?: boolean;
}

export function TechnicalSkillsPanel({ skills, isCompact = false }: Props) {
  return (
    <Card>
      <Stack gap={8}>
        <Text variant="section-header">Technical Skills</Text>
        {isCompact ? (
          <div className={"grid grid-cols-2 gap-4 w-full min-w-0"}>
            {skills.map((skill) => (
              <TechnicalSkillsCard
                key={skill.title}
                title={skill.title}
                tags={skill.tags}
                ghosts={skill.ghosts}
              />
            ))}
          </div>
        ) : (
          <Stack gap={8} className="w-full">
            {skills.map((skill) => (
              <TechnicalSkillsCard
                key={skill.title}
                title={skill.title}
                tags={skill.tags}
                ghosts={skill.ghosts}
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
  ghosts?: string[];
}

const TechnicalSkillsCard = ({
  title,
  tags,
  ghosts,
}: TechnicalSkillsCardProps) => {
  const Tag = ({ text, isGhost }: { text: string; isGhost?: boolean }) => {
    return (
      <div
        className={`border rounded-sm px-2 py-0.5 ${isGhost ? "border-[#B4BEBB] border-dotted" : "border-accent"}`}
      >
        <Text variant="section-body" className={"text-accent!"}>
          {text}
        </Text>
      </div>
    );
  };

  return (
    <Card>
      <Stack gap={3}>
        <Text variant="section-header">{title}</Text>
        <Inline className="flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </Inline>
        {ghosts && (
          <>
            <Text variant="section-title-secondary">Available</Text>
            <Inline className="flex-wrap">
              {ghosts?.map((tag) => (
                <Tag key={tag} text={tag} isGhost={true} />
              ))}
            </Inline>
          </>
        )}
      </Stack>
    </Card>
  );
};
