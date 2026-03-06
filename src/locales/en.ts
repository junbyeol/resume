import type { LocaleSchema } from "./kr";

export const en: LocaleSchema = {
    main: {
      name: "Junsung Yoon",
      position: "Software Engineer",
      email: "yoonjs0510@gmail.com",
      github: "https://github.com/junbyeol",
      blog: "https://junbyeol.tistory.com/",
      linkedin: "https://www.linkedin.com/in/junsungyoon/",
      statement:
        "Software engineer with 4+ years of professional experience building and operating web and mobile products in production environments.\nSpecializing in backend development with TypeScript and Node.js.\nExperienced in end-to-end product development, from React/React Native frontend implementation to backend architecture, deployment, and infrastructure setup on AWS and GCP.\nUndergraduate student at KAIST, expected to graduate in Summer 2026.",
    },
    experiences: [
      {
        name: "Gravitylabs(그래비티랩스)",
        from: "Jan 2024",
        to: "Aug 2024",
        period: "",
        description: "Reward app based on step count, Full-stack position",
        bullets: [
          "Solely managed the full-stack lifecycle—from architecture to deployment—for feature-specific modules using TypeScript, Node.js, and AWS Lambda.",
        "Implemented multi-step flows including mobile games and KakaoTalk sharing using React-Native and Moti-based animations for user aquisition purposes.",
        "Implemented a batch system to aggregate weekly hundreds of thousands of rows of data and send mass notifications to tens of thousands of mobile devices.",
        ],
      },
      {
        name: "Devsisters(데브시스터즈)",
        from: "Jul 2020",
        to: "Jan 2024",
        period: "",
        description: "Cookie Run IP game company, Backend position in Web Services Cell",
        bullets: [
          "Engineered scalable systems for large-scale marketing campaigns, focusing on ensuring system stability during peak traffic periods.",
          "Designed the integration of the developed real-time broadcasting control system, Slack, OBS, and web frontends via WebSockets and REST APIs for live question queuing and caption streaming.",
          "Operated and maintained various resources, including REST API servers, AWS resources (S3, RDS, Route53), Kubernetes clusters, and IaC (Terraform), among others.",
          "Participated in the selection of our outsourcing companies, technical capability evaluations, review of technical specifications on contracts, and technical inspection of delivery outputs.",
          "Built and operated a headless CMS (Strapi) to manage content for official website and internal BI portal, enhancing the content management environment through API extensions and customizations.",
        ],
      },
      {
        name: "Selectstar(셀렉트스타)",
        from: "Jan 2020",
        to: "Jun 2020",
        period: "",
        description: "Reward app for AI learning data labeling, Backend position",
        bullets: [
          "Developed a Slack bot for internal attendance and monthly work hour management.",
          "Improved and maintained the admin site functionality.",
        ],
      },
    ],
    educations: [
      {
        name: "KAIST School of Computing",
        from: "Mar 2020",
        to: "Aug 2026",
        bullets: [
          "Web Development Club SPARCS (1 year)",
          "Expected to graduate in August 2026",
        ],
      },
      {
        name: "Gyeonggi Science High School",
        from: "Mar 2015",
        to: "Feb 2018",
        bullets: ["2015 Korea Olympiad in Informatics Regional Bronze Award"],
      },
    ],
    additionals: [
      {
        name: "한국약학대학생연합(KNAPS) 공식 사이트 외주 작업",
        date: "2025.08",
        link: "https://knaps.or.kr",
      },
      {
        name: "데브시스터즈 사내 백엔드 컨퍼런스에서 발표",
        date: "2022.02",
        description: "전사 회의용 라이브 스트리밍 지원 플랫폼의 개발 경험을 공유",
      },
      {
        name: "데브시스터즈-KAIST 전산학부 기업체 탐방 행사에 패널로 참여",
        date: "2021.12",
        bullets: [
          '"데브시스터즈 입사꿀팁" 실시간 발표, Q&A 진행(3명, 30분)',
          "재학생 20~30여명과 실시간 Q&A 진행(2명, 60분)",
        ],
      },
      {
        name: "데브시스터즈 기술블로그 글 기고",
        date: "2021.02",
        link: "https://tech.devsisters.com/posts/perf-citizen-card/",
      },
      {
        name: "카이스트 총학생회 공식 사이트 외주 작업",
        date: "2020.03 ~ 2020.08",
        link: "https://student.kaist.ac.kr/",
      },
    ],
  };
