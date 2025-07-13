# 프로젝트명

React와 vite를 사용한 프로젝트 기본 세팅 파일입니다. 클론 받은 후 필요에 따라 수정하여 사용합니다.

## 폴더 구조

프로젝트는 다음과 같은 폴더 구조를 사용합니다.

/project-root
├── components/ # 재사용 가능한 UI 컴포넌트들
├── hooks/ # custom hooks (리액트 훅 커스터마이징)
├── styles/ # 전역 스타일 및 개별 컴포넌트 스타일
├── utils/ # 공통 함수들 (예: 데이터 처리, 유틸리티 함수)
├── App.jsx # 메인 앱 컴포넌트
├── main.jsx # React의 entry point
├── .gitkeep # 빈 폴더를 Git에 포함시키기 위한 파일
├── package.json # 프로젝트 메타 데이터와 의존성
└── README.md # 프로젝트 설명

## 설치 방법

1. 이 레포지토리를 클론합니다.
2. 의존성을 설치합니다.
3. 개발서버를 실행(run)합니다.

## 기타

- 의존성을 최신으로 유지하고 싶으면 npm update 명령어를 사용합니다. npm update는 프로젝트 내 모든 패키지를 최신 버전으로 업데이트합니다. 특정 패키지를 업데이트하려면 npm update <패키지 이름>을 사용할 수 있습니다.
- .prettierrc 파일에 유형에 따라 설정을 수정 할 수있습니다.
- .prettierignore파일을 사용하여 Prettier가 적용되지 않을 파일 및 폴더를 지정할 수 있습니다.
