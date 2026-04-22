export const skills = [
  {
    title: "Backend",
    tags: ["TypeScript", "Node.js", "WebSocket(Socket.IO)", "GraphQL"],
    ghosts: ["Kotlin", "Spring Framework"],
  },
  {
    title: "Cloud & Infrastructure",
    tags: [
      "AWS",
      "Serverless(Lambda)",
      "Kubernetes",
      "Docker",
      "CI/CD(Github Actions)",
      "IaC(terraform)",
    ],
    ghosts: ["GCP"],
  },
  {
    title: "Database",
    tags: ["Mysql", "MongoDB", "Redis"],
  },
  {
    title: "Frontend",
    tags: ["React", "React Native"],
  },
];

export type Skill = (typeof skills)[number];
