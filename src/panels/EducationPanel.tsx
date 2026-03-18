import { Card, Stack, Text, Inline } from "../components/ui";
import { type LocaleSchema } from "../locales/kr";

interface Props {
  educations: LocaleSchema["educations"];
}

export function EducationPanel({ educations }: Props) {
  return (
    <Card>
      <Stack gap={8}>
        <Text variant="section-header">Education</Text>
        <Stack gap={8}>
          {educations.map((education) => (
            <EducationCard
              key={education.name}
              name={education.name}
              from={education.from}
              to={education.to}
              bullets={education.bullets}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}

interface EducationCardProps {
  name: string;
  from: string;
  to: string;
  bullets?: string[];
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
          {bullets &&
            bullets.map((bullet) => (
              <Text variant="section-body" key={bullet} as="li">
                {bullet}
              </Text>
            ))}
        </ul>
      </Stack>
    </Card>
  );
};
