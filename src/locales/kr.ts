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
      additionals: [
        {
          title: "머니워크 신규 기능 추가 및 리뉴얼",
          bullets: [
            {
              main: "걸음수 기반 리워드 앱 ‘머니워크’의 신규 기능 다수 풀스택 개발",
              subs: [
                "InBody API 연동을 통한 사용자 신체 정보 조회 및 수집 기능 구현",
                "Linkprice API 연동을 통한 제휴 상품 구매 시 포인트 적립 및 배치 정산 시스템 구축",
                "출석 체크 및 데일리 미션 기능 구현",
                "앱 내 포인트로 구매 가능한 복권 및 당첨자 정산 배치 시스템 구현",
              ],
            },
            {
              main: "유저 획득(acquisition)을 위한 앱 내 이벤트 기능 및 웹 페이지 개발",
              subs: [
                "카카오톡 공유 유도 및 공유 여부 확인 기능 연동",
                "사용자 연락처 기반 간편 홍보 문자 메시지 전송 기능 구현",
                "React Native 및 Moti 애니메이션을 활용한 모바일 게임 개발",
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
          images: [
            {
              src: "/moneywalk.jpg",
            },
          ],
        },
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
          from: "2022.4",
          to: "2023.4",
          title: "사내 BI 대시보드 개발",
          bullets: [
            {
              main: "게임 매출·유저·리텐션·재화 등 핵심 지표 통합 제공",
            },
            {
              main: "데이터 사이언티스트를 위해 일종의 Python DSL를 제공하여 대시보드 지표·차트 커스터마이징을 가능하게 함.",
              subs: ["Dash Framework가 활용됨"],
            },
            {
              main: "기여범위: TF원으로서 개발 참여",
            },
          ],
          skills: [
            "Python",
            "Typescript",
            "MySQL",
            "Dash Framework",
            "ArgoCD",
            "Github Actions",
          ],
          images: [
            {
              src: "/bi-dashboard.png",
              caption:
                "이 화면은 실제 지표와는 무관하여, Figma로 프로토타이핑된 디자인 전 모습입니다.",
            },
          ],
        },
        {
          from: "2021.9",
          to: "2021.11",
          title: "전사회의 라이브 스트리밍 및 Q&A 서비스 구축",
          bullets: [
            {
              main: "전사 회의 시에 사용하는 사내 스트리밍 시스템, 데브라이브를 개발",
              subs: [
                "스튜디오에서 OBS를 통해 송출하는 스트림을 시청화면에서 수신받는 서비스",
                "슬랙을 통해 Q&A와 슬랙 이모지를 수집하고, OBS에서 자막으로 송출",
                "어드민 페이지에서는 수집된 Q&A 조작과 방송 시작/종료 등을 제어",
                "시청자 클라이언트는 웹소켓(websocket)으로 실시간으로 이모지 반응, 현재 시청자 수, 방송 상태 등을 업데이트 받음",
              ],
            },
            {
              main: "다중 인스턴스 환경에서도 웹소켓 연결된 시청자들에게 이벤트를 전파할 수 있는 Redis Pub/Sub 구조 설계",
            },
            {
              main: "기여범위: 프로젝트 테크 리드로서, 아키텍쳐 설계 및 일정산정 등 전반적인 프로젝트 관리, 백엔드 구현",
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
          from: "2021.02",
          to: "2021.05",
          title: "브랜딩 사이트들을 위한 CMS(Content Management System) 구축",
          bullets: [
            {
              main: "자사 공식 페이지, 게임별 공식 페이지 등 컨텐츠 중심의 사이트들의 컨텐츠 교체 자동화",
            },
            {
              main: "높은 커스텀 자유도를 가진 오픈소스 Headless CMS Strapi를 이용, 다양한 기능들을 추가함",
              subs: [
                "유튜브에 업로드 되는 컨텐츠들을 cronjob으로 자동 갱신",
                "사용자들이 실제로 컨텐츠를 배포하기 전, 결과를 미리 확인할 수 있도록 테스트 환경 및 미리보기 제공",
              ],
            },
            {
              main: "기여범위: 백엔드 및 어드민용 프론트엔드 전체",
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
            {
              main: "기여범위: 이미지 생성 서버 전체 및 사전예약 백엔드 다수",
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
        {
          title:
            "다수 게임 사전예약·이벤트 페이지 백엔드 개발 및 운영, 외주 검수",
          bullets: [
            {
              main: "브릭시티의 사전예약 사이트를 구축할 외주 업체 선정, 기술 역량 평가, 계약서 상 기술 명세 검토, 납품 산출물 기술 검수 등 수행",
              subs: [
                "부하 테스트를 통해 크리티컬한 성능 병목 이슈를 사전 발견 및 개선",
              ],
            },
            {
              main: "쿠키런: 마녀의 성의 사전예약 사이트 백엔드 구축",
            },
            {
              main: "쿠키런:킹덤 이벤트 '10억감사제' 당첨자 조회 백엔드 구축",
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
              caption: "쿠키런:킹덤 이벤트 '10억감사제' 당첨자 조회 결과 화면",
            },
          ],
          references: [
            {
              name: "(관련 기사) 데브시스터즈, '쿠키런: 마녀의 성' 3월 15일 출시…사전 예약",
              link: "https://www.yna.co.kr/view/AKR20240229061700017",
            },
            {
              name: "(관련 기사) 데브시스터즈, 신작 '브릭시티' 사전예약 시작",
              link: "https://www.ipnn.co.kr/news/articleView.html?idxno=402299",
            },
            {
              name: "(관련 기사) 쿠키런: 킹덤, 1000만 다운로드 돌파 기념 '10억 감사제' 실시",
              link: "https://www.techm.kr/news/articleView.html?idxno=82868",
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
      additionals: [
        {
          from: "2020.03",
          to: "2020.06",
          title: "근태관리용 Slack 챗봇 개발",
          bullets: [
            {
              main: "슬랙 명령어를 통해, 사원들의 출퇴근 및 월간 근무시간 관리 등을 담당하는 챗봇을 개발",
            },
          ],
          skills: ["Spring Framework", "Kotlin", "MySQL"],
          images: [
            {
              src: "/selectstar_slack.png",
              caption: "당시 개발한 슬랙 챗봇의 후신 ‘덕비스’",
            },
          ],
        },
        {
          from: "2020.01",
          to: "2020.06",
          title: "캐시미션 리뉴얼 참여 및 어드민 페이지 기능 개선",
          bullets: [
            {
              main: "AI 학습 데이터 라벨링 리워드 앱, 캐시미션 앱의 리뉴얼 서버 작업에 일부 참여",
            },
            {
              main: "캐시미션의 어드민 페이지 기능 개선",
            },
          ],
          skills: [
            "Spring Framework",
            "Kotlin",
            "MySQL",
            "React",
            "Typescript",
          ],
          images: [
            {
              src: "/cashmission.webp",
            },
          ],
        },
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
