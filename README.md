
## 프로젝트 소개

### 프로젝트 제목
**Emotree :: AI emotion analysis service**

<img src="https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/readme_intro.png?raw=true" width=100%>

### 프로젝트 정보
우리 팀은 인공지능(AI)을 활용한 혁신적인 감정 분석 서비스를 개발했습니다. 사용자들의 감정을 분석하여 그 데이터를 나무에게 전달함으로써 나무가 성장하는 형태의 인터랙티브 경험을 제공합니다. 감정을 시각적으로 표현하고, 사용자들에게 긍정적인 피드백을 제공하여 감정 관리와 정서적 성장을 도울 수 있도록 설계되었습니다.

**개발기간:** 2024.07.05 ~ 2024.08.04  
**배포 주소:** [https://emotree.yoyobar.xyz/](https://emotree.yoyobar.xyz/)

### 팀 소개

| 이름       | 역할               | 사진                                       | GitHub                                           | Blog                                      |
|------------|--------------------|--------------------------------------------|--------------------------------------------------|-------------------------------------------|
| Kim, Min Su| 팀&프론트엔드 팀장 | <img src="https://github.com/yoyobar.png" width="50"/> | [GitHub](https://github.com/yoyobar)            | [Blog](wiki.yoyobar.xyz)            |
| Park, Min Ah | 프론트엔드 팀원  | <img src="https://github.com/devpma.png" width="50"/> | [GitHub](https://github.com/devpma)           | [Blog](https://29-0.tistory.com/)            |
| Lee, Ung Pyo | 프론트엔드 팀원  | <img src="https://github.com/UngPyoLee.png" width="50"/> | [GitHub](https://github.com/UngPyoLee)           | [Blog](https://blog.ungpyo.dev)           |
| Yang, Ui Jong| 백엔드 팀장       | <img src="https://github.com/Scanf-s.png" width="50"/> | [GitHub](https://github.com/Scanf-s)          | [Blog](https://velog.io/@calzone0404/posts)           |
| Choi, Seong Rak| 백엔드 팀원    | <img src="https://github.com/ChoiSeongRak.png" width="50"/> | [GitHub](https://github.com/ChoiSeongRak)       | [Blog](https://velog.io/@sr_c/posts)         |

---

## 1. 개발환경

### 개발언어
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-20232a?style=for-the-badge&logo=React&logoColor=61DAFB)

### 라이브러리
![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Day.js](https://img.shields.io/badge/-Day.js-FF5F4C?style=for-the-badge&logo=day.js&logoColor=white)
![React OAuth](https://img.shields.io/badge/-React%20OAuth-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/-React%20Router%20Dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SVGR/rollup](https://img.shields.io/badge/-SVGR/ROLLUP-FFB13B?style=for-the-badge&logo=svg&logoColor=black)
![USESOUND](https://img.shields.io/badge/-USE%20SOUND-e04641?style=for-the-badge&logo=applemusic&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Tailwind Merge](https://img.shields.io/badge/-Tailwind%20Merge-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### 상태관리
![Zustand](https://img.shields.io/badge/-Zustand-FFB13B?style=for-the-badge)

### 버전관리
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github)
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

### 인프라
![AWS S3](https://img.shields.io/badge/-AWS%20S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![AWS Route 53](https://img.shields.io/badge/-AWS%20Route%2053-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white)
![AWS CloudFront](https://img.shields.io/badge/-AWS%20CloudFront-8C4FFF?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![AWS Certificate Manager](https://img.shields.io/badge/-AWS%20Certificate%20Manager-cc4d3f?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![AWS WAF](https://img.shields.io/badge/-AWS%20Route%2053-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white)

---

## 2. 채택한 브랜치 전략

### 기술
- **React**와 **TypeScript**를 사용하여 빠르고 안정적인 프론트엔드 개발.
- **Tailwind CSS**와 **framer motion**을 사용한 스타일링 및 애니메이션.
- **zustand**를 통한 효율적이고 단순한 상태 관리.

### 브랜치 전략
우리는 프로젝트를 fork하여 각자의 리포지토리에서 개발을 진행했습니다. 
각 개발자는 `develop/개발구역이름` 브랜치와 `main` 브랜치로 나눠 작업했으며, 
개발 구역에서 기능을 구현한 후 `Pull Request`를 통해 코드를 검토하고 `merge`하는 방식을 사용했습니다. 
이를 통해 코드 품질을 높이고 협업 효율성을 극대화할 수 있었습니다.

### Commit Convention

|      | Tag Name | Description                               |
| ---- | --------- | ---------------------------------- |
| 기능 | Feat      | 새로운 기능을 추가할 경우          |
| 기능 | Fix       | 버그를 고친 경우                   |
| 기능 | Design    | CSS 등 사용자 UI 디자인 변경       |
| 개선 | Style     | 코드 Format, 코드 수정이 없는 경우 |
| 개선 | Refactor  | 코드 리팩토링                      |
| 개선 | Comment   | 주석 변경                          |
| ETC  | Docs      | 문서 수정                          |
| ETC  | Chore     | 빌드 테스트, 패키지 매니저         |
| ETC  | Rename    | 파일 명 수정                       |


## Pull Request(PR) Convention

PR과 관련된 템플릿은 PR을 생성할때 자동으로 생성됩니다. <br/>
해당 내용을 참고하시어 작성을 진행해주시기 바랍니다.

## Issue Convention

이슈와 관련된 템플릿은 이슈를 생성할때 자동으로 생성됩니다. <br/>
해당 내용을 참고하시어 작성을 진행해주시기 바랍니다.

---

## 3. 주요 페이지

| 랜딩 페이지                                 | 
|--------------------------------------------|
| <img src="https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/ReadMe_Landing.png?raw=true"/> | 
|서비스 소개와 로그인이 가능합니다              |

| 감정나무 숲 페이지                                 | 
|--------------------------------------------|
| <img src="https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/ReadMe_Home.png?raw=true"/> | 
|나무를 심을 수 있으며, 나무 관리와 성장 정보를 확인합니다              |

|AI 대화분석 페이지                                  | 
|--------------------------------------------|
| <img src="https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/ReadMe_Chat.png?raw=true"/> | 
|채팅방을 만들고 대화를 입력하면 AI가 대화를 요약하고 감정 키워드를 추출합니다  |

|내 정보 페이지                                   | 
|--------------------------------------------|
| <img src="https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/ReadMe_Mypage.png?raw=true"/> | 
|유저의 정보를 볼 수 있으며, 프로필 이미지와 이름을 변경할 수 있습니다. |


---

## 4. 페이지별 주요 기능

### 공통 기능
- 유저 Google 로그인 토큰으로 관리

### 감정나무 숲 페이지
- 3D CSS로 구현된 그리드에 나무 CRUD 기능.
- 감정 점수가 일정 수치에 도달하면 나무가 성장.
- 유저의 레벨이 오르면 나무를 심을 수 있는 바닥이 더 넓어진다.

### 채팅 페이지
- 채팅방 CRUD 기능.
- OpenAI(Gemini AI)를 사용한 대화 내용 감정 분석.
- 대화 내용 요약 및 감정 키워드 추출 기능.

### 내정보 페이지
- 유저의 이름 변경
- 획득한 감정수치가 일정 수치를 넘으면, 뱃지를 획득하여 프로필 이미지로 변경 가능

---

## 5. 아키텍처, 클라우드 아키텍처, ERD

### 아키텍처
![Architecture](https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/Architecture.png?raw=true)

### 클라우드 아키텍처
![CloudArchitecture](https://github.com/user-attachments/assets/6584c9ca-cf38-4ec1-a208-772eb48e6e62)


### ERD
![ERD](https://github.com/OZ-Coding-School/oz_03_main-003-FE/blob/main/docs/ERD.png?raw=true)

---

## 6. 트러블 슈팅

- **문제:** 초기 로그인 토큰 관리 이슈.
  - **해결:** 클라이언트 측에서 oAuth로 로그인 요청을 보내는게 기본적인 설계방식임을 확인, React OAuth 라이브러리 설치 후 클라이언트 단 처리 및 검증 커스텀 훅 사용.

- **문제:** 감정 분석 속도 저하.
  - **해결:** OpenAI API 호출 최적화 및 캐싱 전략 도입.

- **문제:** 음악 무한 재생 버그
  - **해결:** 기존 코드는 new Audio 객체를 컴포넌트 내에서 호출했으나, 코드를 변경하여 컴포넌트 바깥으로 객체를 빼둠,
컴포넌트 재렌더링이 발생할 때 마다 추가적인 객체 생성은 없을것으로 판단되어 해결

- **문제:** 채팅방 인풋의 크기로 인해 가독성 저하
  - **해결:** 채팅방 글자의 `length`를 계산하여 추가적인 스타일 변경, 기존에는 `overflow-scroll`이 없어서 버튼을 외부로 빼내고 스타일을 재조정
 
- **문제:** 유저 메세지에 엔터가 없을경우, 창을 초과하여 늘어나는 버그
  - **해결:** `overflow-x-hidden`을 주어 스타일적인 문제를 해결하고, `break-words`를 사용하여 화면을 초과하는 글자는 개행하도록 처리

---

## 7. 개선 방향성

- 반응형 사이트로 변경
- 감정 분석 기능의 정밀도 향상.
- 사용자 경험(UX) 개선을 위한 피드백 시스템 도입.

---

## 8. 프로젝트 후기

이번 프로젝트를 통해 팀원들 간의 협업 능력을 극대화하고, 최신 기술 스택을 활용하여 사용자 중심의 서비스를 제공할 수 있었습니다. 프로젝트 기간 동안 발생한 여러 이슈들을 해결하면서 많은 성장을 이룰 수 있었고, 앞으로의 개선 방향에 대해서도 명확한 계획을 수립할 수 있었습니다.

---

더 자세한 정보는 [Emotree](https://emotree.yoyobar.xyz/)를 방문해 주세요.

---

