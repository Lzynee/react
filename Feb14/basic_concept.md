# [React/240214]Javascript 기초 개념

강의 일자: 2024년 2월 14일
강의 분류: React

- 목차

---

# 프로그래밍

- 개념 : 기계어를 이용해 컴퓨터에 명령어를 입력하는 개념
- DT(Digital Transition? 디지털 전환) : 아날로그 방식의 기록물 등을 디지털 문서화한다.
- 프로그래밍 언어 : 프로그래밍을 편리하게 하도록 하기 위해 개발한 기계어
    - 크게 컴퓨터 프로그래밍 언어와 웹브라우저 프로그래밍 언어로 분류할 수 있다.
    - 자바스크립트는 웹브라우저 프로그래밍 언어에 해당한다. (웹브라우저에 프로그래밍한다.)
    - css, html도 웹브라우저 프로그래밍에 해당하지만, 프로그래밍 언어로서는 js가 유일하다.
- 앱 개발에 대한 수요보다는 프론트엔드에 대한 수요가 높은 편

# 웹 서버 (Web Server)

- 스타트업이 아닌 이상 신규 프로젝트보다 레거시 프로젝트가 다수 ⇒ 자바 11이 효용성 ↑
- 웹 서버의 구조
    
    ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled.png)
    
    - HTTP: HTTP를 통해 필요한 HTML 정보를 요청하고, HTML 형태의 RESPONSE를 받는다.
        - Rest API를 사용하는 경우, 데이터를 직접적으로 받는다. (현재 트렌드)
    - 서버에 저장할 수 있는 풀은 정해져 있다. (8G, 16G 등 메모리가 존재함)
        
        ⇒ 저장해서 관리하기 위해 데이터베이스를 사용
        
    - 서버 내의 용량은 늘어나거나 줄어들지 않지만, DB의 용량은 증감하기 때문에 Latency가 발생
        
        ⇒ 통신 속도가 느리다면 일반적으로 서버보다는 DB의 문제
        
- 프론트엔드와 백엔드
    - 프론트엔드 : 웹브라우저 개발 업무 담당, 백엔드에 비해 알아야 할 내용이 적다
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%201.png)
        
        - HTML과 CSS만 담당하는 경우 = 웹퍼블리셔
        - JS만 고집하기보다는 세 가지 기술을 총체적으로 개발하는 경우가 사용자 측 입장에서 수요가 높다.
        - jQuery : 현 시점에서 점유율이 높은 **프론트엔드 라이브러리**
            
            > write less, do more.
            > 
            - jQuery를 사용하지 않는다(못한다)고 해서 프론트엔드 개발을 아예 못 하는 것은 아니다.
        - Vue.js, ~~React~~ : **프론트엔드 프레임워크**
            - React는 컴포넌트 기반으로 개발의 효율을 높인다. 프레임워크처럼 사용하기 때문에 관념적으로 프레임워크 취급한다.
    - 백엔드 : 서버와 관련된 개발 업무 담당
    - 처음부터 풀스택을 준비하기보다는 프론트나 백 중 양자택일하여 우선적으로 집중한 뒤 다른 분야를 준비하기를 권장

# Javascript 실행 순서

```html
<!-- 자바스크립트 실행 순서 실습 -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Bin</title>
  <!-- 첫 번째로 실행된다. (head 태그) -->
  <script type="text/javascript">
    console.log('head');
  </script>
</head>
<body>
  <!-- 두 번째로 실행된다. (body 태그) -->
  <script type="text/javascript">
    console.log('body');
  </script>
</body>
</html>
<!-- 세 번째로 실행된다. (html 태그 바깥) -->
<script type="text/javascript">
  console.log('load');
</script>
```

- `head → body → html` 태그 밖의 코드 순으로 실행된다.

# 변수

## 변수 - 기본 데이터

- 클래스는 메모리의 Heap 영역에 쌓인다.
    - 백엔드 개발의 경우 Heap 메모리에 많은 데이터가 누적되지 않도록 유의해야 한다.
    - 프론트엔드 개발의 경우 메모리 관리 책임에 대해 상대적으로 자유롭다.
- `static`을 사용한 클래스의 경우 static 영역에 쌓인다.
- 자바스크립트의 **단일값 변수**는 **Stack** 영역에 쌓인다.
- 자바스크립트의 **참조 데이터**는 **Heap** 영역에 쌓인다.
- `Var`, `Let`, `Const` ⭐⭐⭐
    
    ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%202.png)
    
    |  | var | let | const |
    | --- | --- | --- | --- |
    | 범위 | 전역 또는 지역 | 블록 | 블록 |
    | 재선언 | 가능 | 불가능 | 불가능 |
    | 업데이트 | 가능 | 가능 | 불가능 |
    | 호이스팅 | 호이스팅 시 초기화 | 초기화되지 않는다. | 초기화되지 않는다. |
    | 선언 및 초기화 | 초기화되지 않은 상태에서
    선언 가능 | 초기화되지 않은 상태에서
    선언 가능 | 선언 중에 초기화 |
    - Reference
        
        [Var, Let, Const의 차이점은?](https://www.notion.so/Var-Let-Const-9edfbb4862f541deb3be30c6f9d9e32d?pvs=21)
        
    
    - Mutable VS Block Scoped
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%203.png)
        
    
    Mutable
    
    ---
    
    - `var`로 선언한 변수는 mutable하다.
    - 단점 : 변수명 관리가 어렵다.
    
    Block Scoped
    
    ---
    
    - **재정의를 막아 준다.**
    - 자바의 접근자와 같이, 재정의를 막아야 할 경우 우선적으로 let이나 const를 사용하는 것이 좋다.
    
- 전역 변수 / 지역 변수
    
    ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%204.png)
    
    - 함수 범위에서는 전역 범위와 블록 범위에서 선언한 변수를 모두 사용할 수 있다.
    - 전역 변수로 선언한 변수는 모든 범위에서 호출하여 사용할 수 있다.
    - 지역 변수로 선언한 변수는 전역에서 꺼내 쓸 수 없다.

- 연산자
    - 나머지 연산자
        
        > `a % b`
        > 
        - 나머지 연산자의 결과값은 **0 ~ b-1 사이의 값**을 취한다.
        - 사용 예시 : 페이징 처리
        
    - 문자열 연산⭐
        - 문자와 숫자 조합도 연산 가능하다.
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%205.png)
        
    - 논리 연산자 - and
        
        > `a && b`
        > 
        - `false`일 확률이 높은 명제를 `a`로 설정하면 효율적으로 연산할 수 있다.
        - 결과값으로 true를 얻으려면 두 명제가 모두 참이어야 하므로 두 명제를 모두 연산해야 하지만, false를 얻기 위해서는 둘 중 하나만 거짓이면 되기 때문에 첫 번째 명제를 거짓 값으로 먼저 걸러내면 두 번째 명제까지 연산할 필요가 없기 때문
        
    - 논리 연산자 - or
        
        > `a || b`
        > 
        - `true`일 확률이 높은 명제를 `a`로 설정하면 효율적이다.

# 함수

## Arrow Functions

- ES6 버전에서 업데이트된 함수 선언 방식
- 기본 형태의 함수와 비교했을 때 참조값이 다르다(?)
- 콜백함수 :  파라미터 값에 함수를 담아서 넘겨 줄 수 있다.

# DOM Event

## DOM 개념

- **D**ocument **O**bject **M**odel
- 브라우저에서 읽어 온 정보를 트리 구조의 DOM 객체로 저장한다.
- DOM의 시작은 반드시 `document`이다. ⭐
- 이벤트가 발생하면 DOM에 접근해 태그(DOM에 작성된 정보)를 생성, 수정, 삭제한다.
    - DOM 이벤트를 등록해야 한다.
        
        > `onclick = javaScript`
        > 
        
    - Browser Support  개념: 모든 스크립트가 공통은 아니다.
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%206.png)
        
- DOM Selector
    - `id`, `name`, `tagname`, `classname` 요소를 사용할 수 있다.
        
        ```jsx
        document.getElementById(id)
        document.getElementsByName(name)
        document.getElementsByTagName(name)
        document.getElementsByClassName(name)
        ```
        
        - id만 중복 불가, name은 여러 요소에 중복 적용할 수 있다.
        - 중복된 name들은 ArrayList 형태로 저장된다.
        
    - id를 이용해 DOM 설정하기
        
        ```html
        <html lang="en">
        <head>
            <title>Event Test</title>
            <script type="text/javascript">
        
              const clickEvent = () => {
                console.log('click');
        
                console.log(document.getElementById('box'));
                const box = document.getElementById('box');
              }
         
            </script>
        </head>
        <body>
          <!-- 1. 태그에 직접 이벤트 등록 (속성 등록) -->
          <button onclick="javascript:clickEvent();">click</button>  <!-- 클릭하면 콘솔에 메시지 출력 -->
          
          <!-- 2. DOM 객체를 이용하여 접근 -->
          <div id="box">blank</div>
        </body>
        </html>
        ```
        
        ![id를 통해 DOM 객체의 정보를 저장한다.](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%207.png)
        
        id를 통해 DOM 객체의 정보를 저장한다.
        
- HTML Attribute VS DOM Property ⭐ : `document.` 으로 시작하면 DOM Property이다.
    - property에 DOM 정보를 저장할 경우 해당 정보를 외부로부터 숨길 수 있다.
    
- Reflow / Repaint : 브라우저에서 HTML을 받았을 때 실행하는 동작에 대한 다이어그램
    
    ![DOM의 정보가 바뀌면 위 다이어그램을 따라 후순하는 정보들이 바뀐다.](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%208.png)
    
    DOM의 정보가 바뀌면 위 다이어그램을 따라 후순하는 정보들이 바뀐다.
    
    1. DOM 트리 생성
    2. 스타일 규칙 생성
    3. 렌더 트리 생성
    4. 레이아웃 (→ 리플로우) : `flex`, `display` 등 레이아웃을 렌더링한다.
    5. 페인트 (→ 리페인트) : 요소들을 꾸민다.

# Array

- javaScript의 array는 fixed되어 있지 않다. (값을 임의로 추가하거나 삭제할 수 있다.)
- ES6부터 Array Method를 제공
    
    ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%209.png)
    
    - Array Method - `concat`, `push`
        - `concat` 결과 새로운 `array`를 생성하여 `return`하고, `push` 결과 기존의 `array`에 새로운 요소를 추가한다.
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%2010.png)
        
    - Array Method - `map`
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%2011.png)
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%2012.png)
        
    
    - Array Method - `reduce`
        
        ![Untitled](%5BReact%20240214%5DJavascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%204fcc5f9610ad468bbba56a33271f72b4/Untitled%2013.png)
        