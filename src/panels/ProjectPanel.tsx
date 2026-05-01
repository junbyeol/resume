import { Card, Stack, Text, Inline, Link } from "../components/ui";
import { type LocaleSchema } from "../locales";

interface Props {
  projects: LocaleSchema["projects"];
  isCompact?: boolean;
}

export function ProjectPanel({ projects, isCompact = false }: Props) {
  return (
    <Card>
      <Stack gap={isCompact ? 2 : 8}>
        <Text variant="section-header">Projects</Text>
        <Stack gap={isCompact ? 1 : 8} className="w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              date={project.date}
              link={project.link}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}

interface ProjectCardProps {
  name: string;
  date?: string;
  link?: string;
}

const ProjectCard = ({ name, date, link }: ProjectCardProps) => {
  return (
    <Card>
      <Stack gap={1} align="stretch" className="w-full">
        <Inline className="flex-1 justify-between gap-2">
          <Text variant="section-title-secondary" className="min-w-0">
            {name}
          </Text>
          {date && (
            <Text
              variant="section-meta-text"
              className="shrink-0 whitespace-nowrap"
            >
              {date}
            </Text>
          )}
        </Inline>
        {link && <Link to={link}>{link}</Link>}
      </Stack>
    </Card>
  );
};
