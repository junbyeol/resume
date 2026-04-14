import { Card, Text, Stack, Inline, Link } from "../components/ui";
import { type LocaleSchema } from "../locales";

interface Props {
  additionals: LocaleSchema["additionals"];
  isCompact?: boolean;
}

export const AdditionalInfoPanel = ({
  additionals,
  isCompact = false,
}: Props) => {
  return (
    <Card>
      <Stack gap={isCompact ? 2 : 8}>
        <Text variant="section-header">Additional Info.</Text>
        <Stack gap={isCompact ? 1 : 8} className="w-full">
          {additionals.map((additional) => (
            <AdditionalInfoCard
              key={additional.name}
              name={additional.name}
              date={additional.date}
              link={additional.link}
              description={additional.description}
              bullets={additional.bullets}
              isCompact={isCompact}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

interface AdditionalInfoCardProps {
  name: string;
  date?: string;
  link?: string;
  description?: string;
  bullets?: string[];
  isCompact?: boolean;
}

const AdditionalInfoCard = ({
  name,
  date,
  link,
  description,
  bullets,
  isCompact = false,
}: AdditionalInfoCardProps) => {
  return (
    <Card>
      <Inline className="w-full justify-between">
        {link ? (
          <Link to={link}>
            <Text
              variant="section-title-secondary"
              className={isCompact ? "" : "underline"}
            >
              {name}
            </Text>
            {isCompact && <Text variant="section-body">{link}</Text>}
          </Link>
        ) : (
          <Text variant="section-title-secondary">{name}</Text>
        )}

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
