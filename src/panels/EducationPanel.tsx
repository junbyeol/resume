import { Card, Stack, Text, Inline } from "../components/ui";
import { type LocaleSchema } from "../locales";

interface Props {
  educations: LocaleSchema["educations"];
  isCompact?: boolean;
}

export function EducationPanel({ educations, isCompact = false }: Props) {
  return (
    <Card>
      <Stack gap={isCompact ? 2 : 8}>
        <Text variant="section-header">Education</Text>
        <Stack gap={isCompact ? 1 : 8} className="w-full">
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
        <Inline className="w-full justify-between">
          <Text variant="section-title-secondary" className="min-w-0">
            {name}
          </Text>
          <Text
            variant="section-meta-text"
            className="shrink-0 whitespace-nowrap"
          >
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
