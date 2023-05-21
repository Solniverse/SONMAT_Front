# Sonmat FrontEnd

## 프로젝트 실행방법

```bash
# 프로젝트 Clone
git clone https://github.com/Solniverse/sonmat_front.git

cd sonmat_front/

# 환경 변수 파일 생성
ECHO "REACT_APP_BASE_URL=주소" >> .env

# 패키지 설치 및 실행
yarn install
yarn dev
```

## 프로젝트 설명

### CDD(Component-Driven Development)

컴포넌트 기반으로 UI를 구성하여 재사용성을 높이고 유지 보수를 용이하게 한다.

- 컴포넌트 중심 : CDD는 컴포넌트를 핵심 단위로 삼는다. 컴포넌트는 UI의 작은 부분을 나타내며, 자숑 가능하고 독립적으로 테스트할 수 있는 단위로 개발한다.

- 디자인 시스템 : CDD는 디자인 시스템을 구축하고 유지하는 것을 강조한다. 일간된 디자인 패턴, 컴포넌트 스타일, 색상, 타이포그래피 등을 포함하며, UI를 일관성 있게 유지하고 재사용성을 높이는 데 도움을 준다.

- Storybook : CDD는 Storybook과 같은 도구를 사용하여 컴포넌트를 개별적으로 테스트하고 문서화할 수 있다. 컴포넌트의 상호 작용 및 다양한 상태를 시각적으로 보여줌으로써 컴포넌트를 더 쉽게 테스트하고 디버깅할 수 있도록 도와준다.

- 협업과 재사용성 : 다양한 팀과 개발자 간의 협업을 용이하게 만들어준다. 컴포넌트 기반으로 개발되는 경우, 다른 개발자들이 재사용 가능한 컴포넌트를 활용하여 효율적으로 작업할 수 있으며, 디자이너와 개발자 간의 커뮤니케이션과 협업을 강화한다.

- 예시 구조

  ```markdown
  - pages/
    - index.tsx
    - about.tsx
  - components/
    - Button.tsx
    - Navbar.tsx
  - stories/
    - Button.stories.tsx
    - Navbar.stories.tsx
  ```

## Git Convention

### Git-flow branch 전략

- 5개의 브랜치와 역할
  - master : 기준이 되는 브랜치로 제품을 최종 배포하는 브랜치
  - develop : 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 Merge하기 위한 브랜치
  - feature : develop 브랜치를 기준으로 분기하여 단위 기능을 작업하는 브랜치(develop 브랜치에 Merge)
  - release : master 브랜치로 보내기 전 QA(품질검사)를 하기 위한 브랜치
  - hotfix : master 브랜치 배포 후 생긴 critical한 버그를 긴급 수정하는 브랜치
- Git-flow 과정(우아한 형제들 기술블로그 참고)
  - master에서 develop 브랜치 분기 후 작업한 기능들을 develop 브랜치에 먼저 반영한다.
  - develop 브랜치에서 자유롭게 feature/\* 브랜치를 분기하여 기능 작업 후 develop 브랜치에 Merge 한다.
    - develop 브랜치에 Merge 하기 전 커밋이 불필요하게 여러 개로 나뉘어져 있다면 squash를 한다.
    - commit history를 깔끔하게 관리하기 위해 Merge 전 rebase를 통해 충돌을 해결하고 최신 변경 사항을 반영한다.
  - 기능들이 모두 개발된 후 배포를 준비하기 위해 develop 브랜치에서 release/\* 브랜치를 분기한다.
  - 테스트를 진행하면서 발생한 버그 수정은 release/\* 브랜치에 직접 반영한다.
  - 테스트가 완료되면 release 브랜치를 master과 develop 브랜치에 Merge 한다. 이때 master에 먼저 Merge 후 develop 브랜치에 Merge 하여 Git Graph가 깔끔하게 나올 수 있도록 한다.
  - 배포 후 발생하는 버그의 priority를 지정하여 High Priority의 버그는 hotfix 브랜치를 master에서 분기하여 버그 수정 후 다시 master에 Merge 한다.
- 브랜치명 규칙
  - master
    - master로 생성한다.
  - develop
    - develop로 생성한다.
  - feature
    - feature/<이슈번호>-<기능/큰주제>-<세부기능/세부주제> 형식으로 생성한다.
    - kebab case를 사용한다.
  - release
    - release/1.0.0으로 시작한다.
    - 요구명세서 기반으로 main 기능이 개발되어 이번 배포에 포함될 경우 Minor 번호를 1 증가시킨다.
    - main 기능이 아닌 작은 단위 기능이 개발되거나 스타일만 변경된 경우 그리고 정규 release 날이 아닌 날에 배포하고자 할 때는 Patch 번호를 1 증가시킨다.
  - hotfix
    - hotfix/<버전>-<이슈번호>로 생성한다.

### Pull Request Convention

- 제목 : 개발 내용 한줄 요약
- 내용(아래 Template으로 PR 내용 작성)
  - Bug, Fix
    ```markdown
    ## 문제

    - [issue번호 + issue 제목](issue링크주소)

    ## 원인

    -

    ## 해결과정

    -

    ## 참고사항(option)

    - 코드 이외에 패키지 추가나 환경변수 변경 사항 등 알아야할 내용
    ```
  - Feat
    ```markdown
    ## 기능 설명

    - [issue번호 + issue 제목](issue링크주소)
    - 개발 내용

    ## 참고사항(option)

    - TODO, FIXME 등 다른 문제들이나 추가 구현 예정 내용 작성
    ```
  - Style
    ```markdown
    ### 변경 사항

    - [issue번호 + issue 제목](issue링크주소)
    - 변경 내용

    ### 참고사항(option)

    -
    ```
  - Refac
    ```markdown
    ### 변경 사항

    - [issue번호 + issue 제목](issue링크주소)
    - 변경 내용

    ### 변경 이유

    -

    ### 참고사항(option)

    -
    ```
  - issue에 어떤 것들을 변경해야 하는지에 대해서 상세한 description을 작성하기를 권장

### Commit Convention

- Commit Title
  - feat, fix, refac, chore, style, docs, test, etc 총 8가지의 header를 앞에 달아 준 후 header 포함 50자 이내의 간략한 메시지 제목 작성
- Commit Message
  - PR 단계에서 상세하게 내용을 작성하기 때문에, Commit 단위의 Message는 자유롭게 작성한다. 대신 72자마다 끊어 줄을 바꿔주는 규칙은 준수한다.
- Commit은 필요한 순간마다 하되 필요없는 Commit들에 대해서는 squash나 대화형 rebase를 통해서 커밋 히스토리를 정리한 후 PR을 남기도록 한다.

### Peer Review

-

## Code Convention

### Module Import

```javascript
// 불러와야할 메서드가 적은 경우 사용
import { useState, useEffect, useRef } from 'react';
import { isEmpty, sort, filter, get } from 'lodash';
// 불러와야할 메서드가 5개 이상일 경우에는 다 불러온 다음 Alias로 효율적인 이름을 설정해준 다음 사용하는 것이 가독성 측면에서 더 좋을 수 있다. 번들 크기가 커질까봐 우려할 수 있는데, 최신 번들러의 경우 대부분 트리셰이킹을 통해서 사용하는 메서드에 대해서만 번들에 포함하기 때문에 전체를 다 사용해도 무방하다.
import * as Re from 'react';
import _ from 'lodash';
```

### state 관리

- 기본적으로 state는 각각의 useState를 통해서 의미를 부여하고 관리를 한다.
- 다만, 하나의 로직에서 여러개의 State를 한번에 변경해야 하는 경우가 있을 때는 state의 값 추적과 의미를 파악하기 위해 하나의 변수로 관리하는 것으로 한다(2번째 코드 참고).
- 그리고 setter 함수를 동작할 때는 이전값을 전혀 활용할 필요가 없을 경우에는 고정된 값을 할당하되, 이외의 경우에는 이전 값을 활용하여 유연한 값 할당을 하도록 한다. 특히, 고정된 값이 사이드 이펙트를 발생시킬 수 있는 경우에는 무조건 이전 값에 의존하여 현재 state를 변경하도록 한다.

  ```javascript
  import { useState } from 'react';

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const handleState = () => {
    setIsLoading((prev) => !prev)
    setIsUpdated((prev) => !prev)
    setIsMoving((prev) => !prev)
  }

  return (
    <>
      { isLoading && isMoving && isUpdated ? <Loading /> : null }
    </Loading>
  )
  ```

- 하나의 객체 state로 관리하면서 동시에 구조분해할당을 통해서 가독성도 올리는 것으로 한다.

  ```javascript
  import { useState } from 'react';

  const [resultState, setResultState] = useState({
    isLoading: false,
    isUpdated: false,
    isMoving: false,
  })
  // 구조분해할당
  const { isLoading, isUpdated, isMoving } = resultState

  const handleState = () => {
    // 객체에서 이전 값과 비교
    setResultState((prev) => { ...prev, isLoading: !prev.isLoading, isMoving: !prev.isMoving })
  }

  return (
    <>
      { isLoading && isMoving && isUpdated ? <Loading /> : null }
    </>
  )
  ```

### 동일한 역할의 변수명

- 아래 코드처럼 value라는 값을 props로 받고 내부 로직중에도 value라는 값을 받아야 할 때 기본적으로 구체적인 변수명을 통해서 변수가 겹치지 않게 하되, 만약 역할과 의미가 겹치는 상황이 생길 경우 해당 컴포넌트에서만 쓰이는 변수에는 \_를 붙여서 사용한다.

  ```javascript
  const ChildComponent = ({ value }) => {
    const [state, setState] = useState();
    // 해당 로직에서만 쓰이는 변수이므로 _사용
    const handleState = _value => {
      setState(_value);
    };
  };
  ```

### CSS 네이밍 규칙

#### BEM

### eslint

### prettier
