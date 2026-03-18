export const kr = {
  main: {
    name: "윤준성",
    position: "소프트웨어 엔지니어",
    email: "yoonjs0510@gmail.com",
    github: "https://github.com/junbyeol",
    blog: "https://junbyeol.tistory.com/",
    linkedin: "https://www.linkedin.com/in/junsungyoon/",
    statement:
      "4년 이상의 실무 경험을 보유한 소프트웨어 엔지니어 윤준성입니다.\nTypeScript와 Node.js 기반의 백엔드 개발을 주력으로, 실제 서비스 환경에서 웹·앱 프로덕트를 개발하고 운영해왔습니다.\nReact 및 React Native를 활용한 프론트엔드 구현부터 백엔드 설계, 배포 및 인프라 구성까지 전 과정을 단독으로 책임지고 완결한 경험이 다수 있으며, AWS, GCP 환경에서 Kubernetes와 Lambda를 포함한 다양한 배포 아키텍처를 실무에 적용해왔습니다.\n현재 2026년 여름 졸업을 목표로 KAIST 학부 과정을 마무리하고 있습니다.",
  },
  experiences: [
    {
      name: "그래비티랩스",
      from: "2024.01",
      to: "2024.08",
      period: "8개월",
      description: "걸음수 기반 리워드 앱, 풀스택 포지션",
      bullets: [
        "기능 단위 프론트엔드(React Native)·백엔드(TypeScript, Node.js, Lambda) 설계·개발·배포 전 과정 단독 수행",
        "사용자 획득 목적의 React-Native, Moti 기반 애니메이션을 활용한 모바일 게임과 카카오톡 공유 등을 포함한 다단계의 플로우 구현",
        "주간 수십만 건 데이터 집계 후 수만 대 모바일 기기에 대량 알림 발송하는 배치, 푸시 시스템 구현",
      ],
    },
    {
      name: "데브시스터즈",
      from: "2020.07",
      to: "2024.01",
      period: "3년 6개월",
      description: "쿠키런 IP 게임회사, 웹서비스셀 백엔드 포지션",
      bullets: [
        "자사 신작 게임 사전예약, 이벤트 페이지 백엔드 개발 및 트래픽 대응 구조 설계",
        "전사 미팅을 위해 Slack, OBS, 여러 웹 프론트들을 WebSocket 및 REST API로 통합하여 실시간 질문 큐잉, 자막 송출 및 방송 제어 어드민 시스템 구축. 프로젝트 리드로 참여.",
        "REST API 서버, AWS 리소스(S3, RDS, Route53), Kubernetes 클러스터 및 IaC(Terraform) 등 다양한 팀이 보유한 리소스들 전반 운영 및 유지보수",
        "외주 개발사 선정 및 기술 역량 평가, 계약서 상 기술 명세 검토, 납품 산출물 기술 검수 등 수행",
        "Headless CMS(Strapi) 구축 및 운영을 전담하며 API 확장 및 커스터마이징을 통해 자사 공식 홈페이지·사내 BI 포털의 콘텐츠 관리 환경 고도화",
      ],
      additionals: [
        {
          from: "2020.07",
          to: "2021.01",
          title: "쿠키런:킹덤 사전예약 및 바이럴 이벤트 백엔드 개발",
          bullets: [
            {
              main: "자사 신규 게임 쿠키런:킹덤의 사전예약을 받고, 바이럴을 위한 각종 이벤트들이 포함된 서비스의 백엔드 개발",
              subs: [
                "다국적 사전예약자들의 이메일, 전화번호 등 개인정보를 수집",
                "사전예약자마다 랜덤한 비주얼의 쿠키 캐릭터와 유저의 닉네임 등을 포함한 이미지를 생성하는 백엔드 개발(node-canvas)",
                "전화번호 인증 및 마케팅을 위한 이메일 발송 API 등을 연동(sendinblue, AWS SES)",
              ],
            },
          ],
          references: [
            {
              name: "(기술블로그) 사전예약 서버 프로파일링으로 서버 병목찾아 개선하기",
              link: "https://tech.devsisters.com/posts/perf-citizen-card/",
            },
            {
              name: "(관련 기사) ‘쿠키런: 킹덤’, 사전예약 이벤트 진행",
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
              caption:
                "쿠키런:킹덤 사전예약 사이트 중 시민권 발급 이벤트의 모습",
            },
          ],
        },
      ],
    },
    {
      name: "셀렉트스타",
      from: "2020.01",
      to: "2020.06",
      period: "6개월",
      description: "AI 학습 데이터 라벨링 리워드 앱, 백엔드 포지션",
      bullets: [
        "사내 출퇴근 및 월간 근무시간 관리를 위한 Slack 봇 개발",
        "어드민 사이트 기능 개선 및 유지보수",
      ],
    },
  ],
  educations: [
    {
      name: "KAIST 전산학부",
      from: "2020.03",
      to: "2026.08(예정)",
      bullets: [
        "웹 개발 동아리 SPARCS 활동(2학기)",
        "2026년 8월 학부 졸업 예정",
      ],
    },
    {
      name: "경기과학고등학교",
      from: "2015.03",
      to: "2018.02",
      bullets: ["2015 정보올림피아드 지역부문 동상"],
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

export type LocaleSchema = typeof kr;
