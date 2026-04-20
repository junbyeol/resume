export type Language = "kr" | "en";

type B = { kr: string; en: string };

type Resolve<T> = T extends B
  ? string
  : T extends (infer U)[]
    ? Resolve<U>[]
    : T extends object
      ? { [K in keyof T]: Resolve<T[K]> }
      : T;

const extractLocale = <T>(obj: T, lang: Language): Resolve<T> => {
  if (typeof obj !== "object" || obj === null) return obj as Resolve<T>;
  if (Array.isArray(obj))
    return obj.map((item) => extractLocale(item, lang)) as Resolve<T>;

  const o = obj as Record<string, unknown>;
  if (typeof o.kr === "string" && typeof o.en === "string") {
    return o[lang] as Resolve<T>;
  }

  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(o)) {
    result[key] = extractLocale(val, lang);
  }
  return result as Resolve<T>;
};

type BulletItem = { main: B; subs?: B[] };
type ImageItem = { src: string; caption?: B };
type ReferenceItem = { name: B; link: string };

type ExperienceAdditional = {
  from?: B;
  to?: B;
  title: B;
  bullets: BulletItem[];
  skills?: string[];
  images?: ImageItem[];
  references?: ReferenceItem[];
};

type Experience = {
  name: B;
  from: B;
  to: B;
  period: B;
  description: B;
  bullets: B[];
  additionals?: ExperienceAdditional[];
};

type Education = {
  name: B;
  from: B;
  to: B;
  bullets?: B[];
};

type Project = {
  name: B;
  date?: B;
  link?: string;
};

type AdditionalInfo = {
  name: B;
  date?: B;
  description?: B;
  link?: string;
  bullets?: B[];
};

type BilingualContent = {
  main: {
    name: B;
    position: B;
    email: string;
    github: string;
    blog: string;
    linkedin: string;
    fabScrollTop: B;
    fabDownloadResume: B;
    statement: B;
  };
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  additionals: AdditionalInfo[];
};

const content: BilingualContent = {
  main: {
    name: { kr: "윤준성", en: "Junsung Yoon" },
    position: { kr: "소프트웨어 엔지니어", en: "Software Engineer" },
    email: "yoonjs0510@gmail.com",
    github: "https://github.junbyeol.me",
    blog: "https://blog.junbyeol.me",
    linkedin: "https://linkedin.junbyeol.me",
    fabScrollTop: { kr: "맨 위로", en: "Back to top" },
    fabDownloadResume: { kr: "이력서 PDF", en: "Resume PDF" },
    statement: {
      kr: "4년 이상의 실무 경험을 보유한 소프트웨어 엔지니어 윤준성입니다.\nTypeScript와 Node.js 기반의 백엔드 개발을 주력으로, 실제 서비스 환경에서 웹·앱 프로덕트를 개발하고 운영해왔습니다.\nReact 및 React Native를 활용한 프론트엔드 구현부터 백엔드 설계, 배포 및 인프라 구성까지 전 과정을 단독으로 책임지고 완결한 경험이 다수 있으며, AWS, GCP 환경에서 Kubernetes와 Lambda를 포함한 다양한 배포 아키텍처를 실무에 적용해왔습니다.\n현재 2026년 여름 졸업을 목표로 KAIST 학부 과정을 마무리하고 있습니다.",
      en: "Software engineer with 4+ years of professional experience building and operating web and mobile products in production environments.\nSpecializing in backend development with TypeScript and Node.js.\nExperienced in end-to-end product development, from React/React Native frontend implementation to backend architecture, deployment, and infrastructure setup on AWS and GCP.\nUndergraduate student at KAIST, expected to graduate in Summer 2026.",
    },
  },
  experiences: [
    {
      name: { kr: "그래비티랩스", en: "Gravitylabs(그래비티랩스)" },
      from: { kr: "2024.01", en: "Jan 2024" },
      to: { kr: "2024.08", en: "Aug 2024" },
      period: { kr: "8개월", en: "" },
      description: {
        kr: "걸음수 기반 리워드 앱, 풀스택 포지션",
        en: "Reward app based on step count, Full-stack position",
      },
      bullets: [
        {
          kr: "기능 단위 프론트엔드(React Native)·백엔드(TypeScript, Node.js, Lambda) 설계·개발·배포 전 과정 단독 수행",
          en: "Solely managed the full-stack lifecycle—from architecture to deployment—for feature-specific modules using TypeScript, Node.js, and AWS Lambda.",
        },
        {
          kr: "사용자 획득 목적의 React-Native, Moti 기반 애니메이션을 활용한 모바일 게임과 카카오톡 공유 등을 포함한 다단계의 플로우 구현",
          en: "Implemented multi-step flows including mobile games and KakaoTalk sharing using React-Native and Moti-based animations for user acquisition purposes.",
        },
        {
          kr: "주간 수십만 건 데이터 집계 후 수만 대 모바일 기기에 대량 알림 발송하는 배치, 푸시 시스템 구현",
          en: "Implemented a batch system to aggregate weekly hundreds of thousands of rows of data and send mass notifications to tens of thousands of mobile devices.",
        },
      ],
      additionals: [
        {
          title: {
            kr: "머니워크 신규 기능 추가 및 리뉴얼",
            en: "MoneyWalk New Feature Development & Renewal",
          },
          bullets: [
            {
              main: {
                kr: "걸음수 기반 리워드 앱 '머니워크'의 신규 기능 다수 풀스택 개발",
                en: "Full-stack development of multiple new features for step-count reward app 'MoneyWalk'",
              },
              subs: [
                {
                  kr: "InBody API 연동을 통한 사용자 신체 정보 조회 및 수집 기능 구현",
                  en: "Implemented user body information retrieval and collection via InBody API integration",
                },
                {
                  kr: "Linkprice API 연동을 통한 제휴 상품 구매 시 포인트 적립 및 배치 정산 시스템 구축",
                  en: "Built a point accumulation and batch settlement system for affiliate product purchases via Linkprice API",
                },
                {
                  kr: "출석 체크 및 데일리 미션 기능 구현",
                  en: "Implemented attendance check and daily mission features",
                },
                {
                  kr: "앱 내 포인트로 구매 가능한 복권 및 당첨자 정산 배치 시스템 구현",
                  en: "Implemented a lottery system purchasable with in-app points and a batch winner payout system",
                },
              ],
            },
            {
              main: {
                kr: "유저 획득(acquisition)을 위한 앱 내 이벤트 기능 및 웹 페이지 개발",
                en: "Developed in-app event features and web pages for user acquisition",
              },
              subs: [
                {
                  kr: "카카오톡 공유 유도 및 공유 여부 확인 기능 연동",
                  en: "Integrated KakaoTalk sharing prompts and share verification",
                },
                {
                  kr: "사용자 연락처 기반 간편 홍보 문자 메시지 전송 기능 구현",
                  en: "Implemented a contact-based promotional SMS sending feature",
                },
                {
                  kr: "React Native 및 Moti 애니메이션을 활용한 모바일 게임 개발",
                  en: "Developed a mobile game using React Native and Moti animations",
                },
              ],
            },
          ],
          skills: [
            "Node.js",
            "Typescript",
            "MongoDB",
            "AWS Lambda(Serverless)",
            "Vercel",
            "React",
            "React Native",
          ],
          images: [{ src: "/moneywalk.jpg" }],
        },
      ],
    },
    {
      name: { kr: "데브시스터즈", en: "Devsisters(데브시스터즈)" },
      from: { kr: "2020.07", en: "Jul 2020" },
      to: { kr: "2024.01", en: "Jan 2024" },
      period: { kr: "3년 6개월", en: "" },
      description: {
        kr: "쿠키런 IP 게임회사, 웹서비스셀 백엔드 포지션",
        en: "Cookie Run IP game company, Backend position in Web Services Cell",
      },
      bullets: [
        {
          kr: "자사 신작 게임 사전예약, 이벤트 페이지 백엔드 개발 및 트래픽 대응 구조 설계",
          en: "Engineered scalable systems for large-scale marketing campaigns, focusing on ensuring system stability during peak traffic periods.",
        },
        {
          kr: "전사 미팅을 위해 Slack, OBS, 여러 웹 프론트들을 WebSocket 및 REST API로 통합하여 실시간 질문 관리, 자막 송출 및 방송 제어 어드민 시스템 구축. 프로젝트 리드로 참여.",
          en: "Designed the integration of the developed real-time broadcasting control system, Slack, OBS, and web frontends via WebSockets and REST APIs for live question queuing and caption streaming.",
        },
        {
          kr: "REST API 서버, AWS 리소스(S3, RDS, Route53), Kubernetes 클러스터 및 IaC(Terraform) 등 다양한 팀이 보유한 리소스들 전반 운영 및 유지보수",
          en: "Operated and maintained various resources, including REST API servers, AWS resources (S3, RDS, Route53), Kubernetes clusters, and IaC (Terraform), among others.",
        },
        {
          kr: "외주 개발사 선정 및 기술 역량 평가, 계약서 상 기술 명세 검토, 납품 산출물 기술 검수 등 수행",
          en: "Participated in the selection of our outsourcing companies, technical capability evaluations, review of technical specifications on contracts, and technical inspection of delivery outputs.",
        },
        {
          kr: "Headless CMS(Strapi) 구축 및 운영을 전담하며 API 확장 및 커스터마이징을 통해 자사 공식 홈페이지·사내 BI 포털의 콘텐츠 관리 환경 고도화",
          en: "Built and operated a headless CMS (Strapi) to manage content for official website and internal BI portal, enhancing the content management environment through API extensions and customizations.",
        },
      ],
      additionals: [
        {
          from: { kr: "2022.4", en: "Apr 2022" },
          to: { kr: "2023.4", en: "Apr 2023" },
          title: {
            kr: "사내 BI 대시보드 개발",
            en: "Internal BI Dashboard Development",
          },
          bullets: [
            {
              main: {
                kr: "게임 매출·유저·리텐션·재화 등 핵심 지표 통합 제공",
                en: "Consolidated key game metrics including revenue, users, retention, and currency",
              },
            },
            {
              main: {
                kr: "데이터 사이언티스트들이 일종의 Python DSL을 통하여 대시보드를 커스터마이징할 수 있도록 Server-driven UI 채택",
                en: "Adopted Server-driven UI to allow data scientists to customize dashboards through a Python DSL",
              },
              subs: [
                {
                  kr: "Dash Framework를 통해 Python 객체 트리가 React 웹 화면을 랜더링됨",
                  en: "Python object tree renders the React web UI via Dash Framework",
                },
              ],
            },
            {
              main: {
                kr: "Databricks에 여러 쿼리 파라미터들이 포함된 SQL 질의 후 결과를 랜더링 및 캐싱",
                en: "Queried Databricks with parameterized SQL and rendered/cached the results",
              },
              subs: [
                {
                  kr: "Redis TTL 기반 자동 만료 및 수동 무효화 기능 제공",
                  en: "Provided Redis TTL-based auto-expiry and manual cache invalidation",
                },
              ],
            },
            {
              main: {
                kr: "대시보드 화면 구성에 필요한 CMS 및 어드민 기능 제공",
                en: "Provided CMS and admin features for dashboard configuration",
              },
            },
            {
              main: {
                kr: "기여범위: 어드민 기능 전담 및 대시보드 구현 참여, 프로젝트 아키텍쳐 설계 논의에 참여",
                en: "Contributions: Solely responsible for admin features, contributed to dashboard implementation, and participated in architectural design discussions",
              },
            },
          ],
          skills: [
            "Python",
            "Typescript",
            "Redis",
            "Dash Framework",
            "Strapi",
            "Github Actions",
            "Kubernetes",
            "ArgoCD",
          ],
          images: [
            {
              src: "/bi-dashboard.png",
              caption: {
                kr: "이 화면은 실제 지표와는 무관하여, Figma로 프로토타이핑된 모습입니다.",
                en: "This screen is unrelated to actual metrics and shows a Figma-prototyped design.",
              },
            },
          ],
        },
        {
          from: { kr: "2021.9", en: "Sep 2021" },
          to: { kr: "2021.11", en: "Nov 2021" },
          title: {
            kr: "전사회의 라이브 스트리밍 및 Q&A 서비스 구축",
            en: "Company-wide Meeting Live Streaming & Q&A Service",
          },
          bullets: [
            {
              main: {
                kr: "전사 회의 시에 사용하는 사내 스트리밍 시스템, 데브라이브를 개발",
                en: "Developed 'DevLive', an internal streaming system used for company-wide meetings",
              },
              subs: [
                {
                  kr: "스튜디오에서 OBS를 통해 송출하는 스트림을 시청화면에서 수신받는 서비스",
                  en: "Receives streams broadcast from the studio via OBS on the viewer screen",
                },
                {
                  kr: "슬랙을 통해 Q&A와 슬랙 이모지를 수집하고, OBS에서 자막으로 송출",
                  en: "Collected Q&A and Slack emoji reactions, then streamed as captions through OBS",
                },
                {
                  kr: "어드민 페이지에서는 수집된 Q&A 조작과 방송 시작/종료 등을 제어",
                  en: "Admin page for managing collected Q&As and controlling broadcast start/end",
                },
                {
                  kr: "시청자 클라이언트는 웹소켓(websocket)으로 실시간으로 이모지 반응, 현재 시청자 수, 방송 상태 등을 업데이트 받음",
                  en: "Viewer clients receive real-time emoji reactions, viewer count, and broadcast status via WebSocket",
                },
              ],
            },
            {
              main: {
                kr: "다중 인스턴스 환경에서도 웹소켓 연결된 시청자들에게 이벤트를 전파할 수 있는 Redis Pub/Sub 구조 설계",
                en: "Designed a Redis Pub/Sub architecture to broadcast events to WebSocket-connected viewers across multiple instances",
              },
            },
            {
              main: {
                kr: "기여범위: 프로젝트 Tech Lead로 참여, 아키텍쳐 설계 및 일정 산정 등 전반적인 프로젝트 관리, HLS streaming 계층을 제외한 모든 백엔드 전담 구현",
                en: "Contributions: Served as Tech Lead, managed the overall project including architecture design and scheduling, and solely implemented all backend components except the HLS streaming layer",
              },
            },
          ],
          skills: [
            "Node.js",
            "Typescript",
            "MySQL",
            "Websocket(Socket.IO)",
            "Redis",
            "AWS Medialive",
            "Terraform",
            "Kubernetes",
          ],
        },
        {
          from: { kr: "2021.02", en: "Feb 2021" },
          to: { kr: "2021.05", en: "May 2021" },
          title: {
            kr: "브랜딩 사이트들을 위한 CMS 구축",
            en: "CMS Setup for Branding Sites",
          },
          bullets: [
            {
              main: {
                kr: "CMS(Content Management System)를 통한 자사 공식 페이지, 게임별 공식 페이지 등 컨텐츠 중심의 사이트들의 컨텐츠 교체 자동화",
                en: "Automated content updates for content-driven sites including the official company page and per-game pages via CMS",
              },
            },
            {
              main: {
                kr: "높은 커스텀 자유도를 가진 오픈소스 Headless CMS Strapi를 이용, 다양한 기능들을 추가함",
                en: "Extended the open-source headless CMS Strapi with various custom features",
              },
              subs: [
                {
                  kr: "유튜브에 업로드 되는 컨텐츠들을 cronjob으로 자동 갱신",
                  en: "Auto-refreshed YouTube-uploaded content via cronjob",
                },
                {
                  kr: "사용자들이 실제로 컨텐츠를 배포하기 전, 결과를 미리 확인할 수 있도록 테스트 환경 및 미리보기 제공",
                  en: "Provided a staging environment and preview feature for content review before publishing",
                },
              ],
            },
            {
              main: {
                kr: "기여범위: 백엔드 및 어드민 프론트엔드 전체 전담 개발",
                en: "Contributions: Solely responsible for all backend and admin frontend development",
              },
            },
          ],
          skills: [
            "Node.js",
            "GraphQL",
            "MySQL",
            "React",
            "Strapi",
            "Google API",
            "Terraform",
            "Kubernetes",
          ],
        },
        {
          from: { kr: "2020.07", en: "Jul 2020" },
          to: { kr: "2021.01", en: "Jan 2021" },
          title: {
            kr: "쿠키런:킹덤 사전예약 및 바이럴 이벤트 백엔드 개발",
            en: "Cookie Run: Kingdom Pre-registration & Viral Event Backend",
          },
          bullets: [
            {
              main: {
                kr: "자사 신규 게임 쿠키런:킹덤의 사전예약을 받고, 바이럴을 위한 각종 이벤트들이 포함된 서비스의 백엔드 개발",
                en: "Developed backend for pre-registration and viral event features for the new game Cookie Run: Kingdom",
              },
              subs: [
                {
                  kr: "다국적 사전예약자들의 이메일, 전화번호 등 개인정보를 수집",
                  en: "Collected personal information including email and phone numbers from multinational pre-registrants",
                },
                {
                  kr: "전화번호 인증 및 마케팅을 위한 이메일 발송 API 등을 연동(sendinblue, AWS SES)",
                  en: "Integrated phone number verification and email marketing APIs (Sendinblue, AWS SES)",
                },
              ],
            },
            {
              main: {
                kr: "사전예약자들의 닉네임 및 랜덤하게 생성되는 비주얼의 쿠키 캐릭터 등을 포함한 시민권 이미지를 생성해주는 이벤트 포함",
                en: "Included an event that generated citizen card images featuring user nicknames and randomly generated cookie character visuals",
              },
              subs: [
                {
                  kr: "이미지의 생성은 node-canvas를 통해 직접 구현",
                  en: "Image generation was implemented directly using node-canvas",
                },
                {
                  kr: "해당 서버를 프로파일링한 경험을 기술블로그에 게시",
                  en: "Published the server profiling experience on the tech blog",
                },
              ],
            },
            {
              main: {
                kr: "기여범위: 이미지 생성 플로우 전담. 사전예약 백엔드 기능 다수 기여",
                en: "Contributions: Solely responsible for the image generation flow; contributed to multiple pre-registration backend features",
              },
            },
          ],
          references: [
            {
              name: {
                kr: "(기술블로그) 사전예약 서버 프로파일링으로 서버 병목찾아 개선하기",
                en: "(Tech Blog) Finding and Resolving Server Bottlenecks by Profiling the Pre-registration Server",
              },
              link: "https://tech.devsisters.com/posts/perf-citizen-card/",
            },
            {
              name: {
                kr: "(관련 기사) '쿠키런: 킹덤', 사전예약 이벤트 진행",
                en: "(Article) Cookie Run: Kingdom Pre-registration Event",
              },
              link: "https://www.khgames.co.kr/news/articleView.html?idxno=125999",
            },
          ],
          skills: [
            "Node.js",
            "TypeScript",
            "GraphQL",
            "MySQL",
            "AWS(S3, SES, CF)",
            "Terraform",
            "Kubernetes",
            "Artillery",
          ],
          images: [
            {
              src: "/ck-pre-registration.png",
              caption: {
                kr: "쿠키런:킹덤 사전예약 사이트 중 시민권 발급 이벤트의 모습",
                en: "Citizen card issuance event on the Cookie Run: Kingdom pre-registration site",
              },
            },
          ],
        },
        {
          title: {
            kr: "다수 게임 사전예약·이벤트 페이지 백엔드 개발 및 운영, 외주 검수",
            en: "Multi-game Pre-registration & Event Backend, Outsourcing Review",
          },
          bullets: [
            {
              main: {
                kr: "브릭시티의 사전예약 사이트를 구축할 외주 업체 선정, 기술 역량 평가, 계약서 상 기술 명세 검토, 납품 산출물 기술 검수 등 수행",
                en: "Selected outsourcing vendors for BrixCity's pre-registration site, conducted technical evaluations, reviewed contract specifications, and inspected deliverables",
              },
              subs: [
                {
                  kr: "부하 테스트를 통해 크리티컬한 성능 병목 이슈를 사전 발견 및 개선",
                  en: "Proactively identified and resolved critical performance bottlenecks through load testing",
                },
              ],
            },
            {
              main: {
                kr: "쿠키런: 마녀의 성의 사전예약 사이트 백엔드 구축",
                en: "Built the pre-registration backend for Cookie Run: Witch's Castle",
              },
            },
            {
              main: {
                kr: "쿠키런:킹덤 이벤트 '10억감사제' 당첨자 조회 백엔드 구축",
                en: "Built the winner inquiry backend for Cookie Run: Kingdom's '1 Billion Downloads Celebration' event",
              },
            },
          ],
          skills: [
            "Typescript",
            "Node.js",
            "MySQL",
            "NestJS",
            "Fastify",
            "Kubernetes",
            "Terraform",
            "AWS",
          ],
          images: [
            {
              src: "/ck-10-bill.png",
              caption: {
                kr: "쿠키런:킹덤 이벤트 '10억감사제' 당첨자 조회 결과 화면",
                en: "Winner inquiry result screen for Cookie Run: Kingdom's '1 Billion Downloads Celebration' event",
              },
            },
          ],
          references: [
            {
              name: {
                kr: "(관련 기사) 데브시스터즈, '쿠키런: 마녀의 성' 3월 15일 출시…사전 예약",
                en: "(Article) Devsisters, 'Cookie Run: Witch's Castle' Launches March 15 - Pre-registration",
              },
              link: "https://www.yna.co.kr/view/AKR20240229061700017",
            },
            {
              name: {
                kr: "(관련 기사) 데브시스터즈, 신작 '브릭시티' 사전예약 시작",
                en: "(Article) Devsisters Begins Pre-registration for New Title 'BrixCity'",
              },
              link: "https://www.ipnn.co.kr/news/articleView.html?idxno=402299",
            },
            {
              name: {
                kr: "(관련 기사) 쿠키런: 킹덤, 1000만 다운로드 돌파 기념 '10억 감사제' 실시",
                en: "(Article) Cookie Run: Kingdom Holds '1 Billion Downloads' Event for 10 Million Downloads Milestone",
              },
              link: "https://www.techm.kr/news/articleView.html?idxno=82868",
            },
          ],
        },
      ],
    },
    {
      name: { kr: "셀렉트스타", en: "Selectstar(셀렉트스타)" },
      from: { kr: "2020.01", en: "Jan 2020" },
      to: { kr: "2020.06", en: "Jun 2020" },
      period: { kr: "6개월", en: "" },
      description: {
        kr: "AI 학습 데이터 라벨링 리워드 앱, 백엔드 포지션",
        en: "Reward app for AI learning data labeling, Backend position",
      },
      bullets: [
        {
          kr: "사내 출퇴근 및 월간 근무시간 관리를 위한 Slack 봇 개발",
          en: "Developed a Slack bot for internal attendance and monthly work hour management.",
        },
        {
          kr: "어드민 사이트 기능 개선 및 유지보수",
          en: "Improved and maintained the admin site functionality.",
        },
      ],
      additionals: [
        {
          from: { kr: "2020.03", en: "Mar 2020" },
          to: { kr: "2020.06", en: "Jun 2020" },
          title: {
            kr: "근태관리용 Slack 챗봇 개발",
            en: "Attendance Management Slack Chatbot",
          },
          bullets: [
            {
              main: {
                kr: "슬랙 명령어를 통해, 근태 및 월간 근무시간을 관리하는 챗봇을 개발",
                en: "Developed a chatbot to manage attendance and monthly work hours via Slack commands",
              },
            },
          ],
          skills: ["Spring Framework", "Kotlin", "MySQL"],
          images: [
            {
              src: "/selectstar_slack.png",
              caption: {
                kr: "당시 개발한 슬랙 챗봇의 후신 '덕비스'",
                en: "'Deokbis', the successor to the Slack chatbot developed at the time",
              },
            },
          ],
        },
        {
          from: { kr: "2020.01", en: "Jan 2020" },
          to: { kr: "2020.06", en: "Jun 2020" },
          title: {
            kr: "캐시미션 리뉴얼 참여 및 어드민 페이지 기능 개선",
            en: "CashMission Renewal & Admin Page Improvement",
          },
          bullets: [
            {
              main: {
                kr: "AI 학습 데이터 라벨링 리워드 앱, 캐시미션 앱의 리뉴얼 서버 작업에 일부 참여",
                en: "Participated in the server renewal for CashMission, an AI training data labeling reward app",
              },
            },
            {
              main: {
                kr: "캐시미션의 어드민 페이지 기능 개선",
                en: "Improved admin page features for CashMission",
              },
            },
          ],
          skills: [
            "Spring Framework",
            "Kotlin",
            "MySQL",
            "React",
            "Typescript",
          ],
          images: [{ src: "/cashmission.png" }],
        },
      ],
    },
  ],
  educations: [
    {
      name: { kr: "KAIST 전산학부", en: "KAIST School of Computing" },
      from: { kr: "2020.03", en: "Mar 2020" },
      to: { kr: "2026.08(예정)", en: "Aug 2026" },
      bullets: [
        {
          kr: "웹 개발 동아리 SPARCS 활동(2학기)",
          en: "Web Development Club SPARCS (1 year)",
        },
        {
          kr: "2026년 8월 학부 졸업 예정",
          en: "Expected to graduate in August 2026",
        },
      ],
    },
    {
      name: { kr: "경기과학고등학교", en: "Gyeonggi Science High School" },
      from: { kr: "2015.03", en: "Mar 2015" },
      to: { kr: "2018.02", en: "Feb 2018" },
    },
  ],
  projects: [
    {
      name: {
        kr: "junbyeol.me(개인 웹사이트)",
        en: "junbyeol.me(Personal Page)",
      },
      link: "https://junbyeol.me",
    },
    {
      name: {
        kr: "한국약학대학생연합(KNAPS) 공식 사이트 외주 작업",
        en: "Outsourcing: Official Website for KNAPS (Korean National Association of Pharmacy Students)",
      },
      date: { kr: "2025.08", en: "Aug 2025" },
      link: "https://knaps.or.kr",
    },
    {
      name: {
        kr: "카이스트 총학생회 공식 사이트 외주 작업(현재 폐쇄)",
        en: "Outsourcing: Official Website for KAIST Student Council (Currently Closed)",
      },
      date: { kr: "2020.03 ~ 2020.06", en: "Mar 2020 ~ Jun 2020" },
    },
  ],
  additionals: [
    {
      name: {
        kr: "데브시스터즈 사내 백엔드 컨퍼런스에서 발표",
        en: "Presented at Devsisters Internal Backend Conference",
      },
      date: { kr: "2022.02", en: "Feb 2022" },
      description: {
        kr: "전사 회의용 라이브 스트리밍 지원 플랫폼의 개발 경험을 공유",
        en: "Shared development experience of a live streaming support platform for company-wide meetings",
      },
    },
    {
      name: {
        kr: "데브시스터즈-KAIST 전산학부 기업체 탐방 행사에 패널로 참여",
        en: "Panelist at Devsisters-KAIST School of Computing Industry Visit",
      },
      date: { kr: "2021.12", en: "Dec 2021" },
      bullets: [
        {
          kr: '"데브시스터즈 입사꿀팁" 실시간 발표, Q&A 진행(3명, 30분)',
          en: '"Tips for Joining Devsisters" Live Presentation and Q&A (3 people, 30 min)',
        },
        {
          kr: "재학생 20~30여명과 실시간 Q&A 진행(2명, 60분)",
          en: "Live Q&A session with 20–30 current students (2 people, 60 min)",
        },
      ],
    },
    {
      name: {
        kr: "데브시스터즈 기술블로그 글 기고",
        en: "Tech Blog Post for Devsisters",
      },
      date: { kr: "2021.02", en: "Feb 2021" },
      link: "https://tech.devsisters.com/posts/perf-citizen-card/",
    },
    {
      name: { kr: "보유 자격", en: "Certifications" },
      bullets: [
        {
          kr: "TOEFL iBT 96점 (2025.08)",
          en: "TOEFL iBT Score: 96 (Aug 2025)",
        },
        {
          kr: "현역 산업기능요원 만기 복무 (2021.10~2024.08, 34개월)",
          en: "Military Service in Industrial Service (Oct 2021 – Aug 2024, 34 months)",
        },
        {
          kr: "정보처리산업기사(2020.09)",
          en: "Engineer Information Processing Certificate (Sep 2020)",
        },
        {
          kr: "고등학생 정보올림피아드(2015 수원시 예선 동상)",
          en: "Korea Olympiad in Informatics – Suwon Regional Preliminary, Bronze (2015)",
        },
      ],
    },
  ],
};

export type LocaleSchema = Resolve<BilingualContent>;

export const locales = {
  kr: extractLocale(content, "kr"),
  en: extractLocale(content, "en"),
};
