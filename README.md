# 🧩 Quiz App

> Quiz App with react

<br />

## 🖼️ Thumbnail

<div style="display: flex; flex-direction: row;">
  <img src="https://raw.githubusercontent.com/chan9yu/chan9yu/master/images/project/quiz_app/ready_page.png" width="48%" />
  <img src="https://raw.githubusercontent.com/chan9yu/chan9yu/master/images/project/quiz_app/storybook.png" width="48%" />
</div>

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>

## 🔗 Link

- <a href="https://chan9yu.github.io/quiz_app" target="_blank" rel="noreferrer">Quiz APP</a>
- <a href="https://chan9yu.github.io/quiz_app/storybook" target="_blank" rel="noreferrer">Story Book</a>

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>

## 🔧 Tech Stack

- <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
- <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
- <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
- <img src="https://img.shields.io/badge/reduxsaga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white">
- <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
- <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
- <img src="https://img.shields.io/badge/chartjs-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white">
- <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
- <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
- <img src="https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white">
- <img src="https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">
- <img src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logo=githubpages&logoColor=white">
- <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>

## ✨ Features

- [x] 사용자는 `퀴즈 풀기` 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
- [x] 사용자는 문항에 대한 답안을 `4개 보기 중에 선택`할 수 있다.
- [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
  - [x] 답안 선택 후 `다음 문항` 버튼을 볼 수 있다.
  - [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  - [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
- [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
  - [x] 퀴즈를 마칠 때까지 소요된 시간
  - [x] 정답 개수
  - [x] 오답 수
  - [x] 정 오답에 대한 비율을 차트로 표기
- [x] 오답 노트 기능

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>

## 🧪 Test

```shell
# Unit Test
yarn test

# E2E Test
yarn cypress open
```

### Unit Test

- `jest`과 `RTL(React-Testing-Library)` 대신 `vitest` 사용
- 컴포넌트가 의도적으로 동작을 잘 하는지 렌더링에 문제없는지 확인하기 위해 단위 테스트 진행
- 공통 유틸 함수들이 결함이 없는지 확인하기 위해 단위 테스트 진행

> vitest 최소한의 노력으로 vite 기반 프로젝트와 통합되며, 매우 빠른 장점이 있기때문에 사용하게 되었습니다.<br />
> vitest는 jest에서 사용되는 대부분의 api를 지원합니다.

[vitest docs](https://vitest.dev/)

### E2E Test

- 기능 요구사항이 문제없이 개발되었는지 확인하기 위한 E2E 테스트 진행
- cypress를 통해 테스트 진행

<img src="https://raw.githubusercontent.com/chan9yu/chan9yu/master/images/project/quiz_app/quiz_app.cy.js.gif" />

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>

## 💾 BackEnd API

퀴즈에 대한 정보를 얻기위해 open API 사용

- [opentdb.com](https://opentdb.com/api_config.php)

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>

## 🚀 Getting Started

로컬환경에서 앱을 실행하는 방법입니다.

### Prerequisites

해당 앱을 실행시키기 위한 필수 조건 입니다.

1. yarn install

```shell
# yarn 설치
npm -g install yarn
```

2. node setup

```shell
# .nvmrc 기준 node version 설치
# nvm을 사용하지 않는다면 수동으로 노드버전을 맞춰주세요.
nvm use
```

### Installation

1. 프로젝트 클론

```shell
git clone https://github.com/chan9yu/quiz_app
```

2. 프로젝트 디렉토리로 이동

```shell
cd quiz_app
```

3. 종속성 설치

```shell
yarn install
```

4. 개발 서버 시작

```
yarn dev
```

<p align="right">
  <a href="#readme-top">맨 위로</a>
</p>
