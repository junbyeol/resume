import { Card, Stack, Text, Inline, Link } from "../components/ui";
import { type LocaleSchema } from "../locales/kr";

interface Props {
  projects: LocaleSchema["projects"];
}

export function ProjectPanel({ projects }: Props) {
  return (
    <Card>
      <Stack gap={8}>
        <Text variant="section-header">Projects</Text>
        <Stack gap={8}>
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
  date: string;
  link?: string;
}

const ProjectCard = ({ name, date, link }: ProjectCardProps) => {
  return (
    <Card>
      <Stack gap={3} align="stretch">
        <Inline className="flex-1 justify-between">
          <Text variant="section-title-secondary">{name}</Text>
          <Text variant="section-meta-text">{date}</Text>
        </Inline>
        {link && (
          <Link className="underline" to={link}>
            {link}
          </Link>
        )}
      </Stack>
    </Card>
  );
};
