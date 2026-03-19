import { Card, Text, Stack, Inline, Link } from "../components/ui";
import { type LocaleSchema } from "../locales/kr";

interface Props {
  additionals: LocaleSchema["additionals"];
  isPrintView?: boolean;
}

export const AdditionalInfoPanel = ({
  additionals,
  isPrintView = false,
}: Props) => {
  return (
    <Card>
      <Stack gap={isPrintView ? 2 : 8}>
        <Text variant="section-header">Additional Info.</Text>
        <Stack gap={isPrintView ? 1 : 8}>
          {additionals.map((additional) => (
            <AdditionalInfoCard
              key={additional.name}
              name={additional.name}
              date={additional.date}
              link={additional.link}
              description={additional.description}
              bullets={additional.bullets}
              isPrintView={isPrintView}
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
  isPrintView?: boolean;
}

const AdditionalInfoCard = ({
  name,
  date,
  link,
  description,
  bullets,
  isPrintView = false,
}: AdditionalInfoCardProps) => {
  return (
    <Card>
      <Inline className="justify-between">
        {link ? (
          <Link to={link}>
            <Text
              variant="section-title-secondary"
              className={isPrintView ? "" : "underline"}
            >
              {name}
            </Text>
            {isPrintView && <Text variant="section-body">{link}</Text>}
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
