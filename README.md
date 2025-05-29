# 자바스크립트 공부 시작 25/05/12~
* 자바스크립트 관련 파일은 `scripts/` 폴더에 저장하기
## vs code 터미널로 js 실행테스트 하기
* 터미널 마지막 폴더 경로가 js파일이 들어있는 위치인지 확인하기
* `cd 하위폴더명` 또는 `cd ..`
* `node 자바스크립트파일명.js`
* (위)nodejs 이용 자바스크립트 파일 실행 명령어 작성하고 확인하기 (실행 함수가 있어야 결과 테스트 가능)
* `node -v` 노드 설치 확인 명령 (nodejs 설치해야 위 테스트가능)
## 객체, 속성, 함수(메소드), 이벤트에 따른 작성법
* 객체.속성
* 객체.함수()
* **객체** : 자바스크립트에서 제어하려는 대상 (보통 데이터를 담은 변수가 객체 대상이 되는 경우가 많음)
* **속성** : 객체가 가진 고유한 속성 (객체가 img라면 src,alt가 속성)
* **함수** : 객체를 이용한 자바스크립트의 실행결과, 뒤에 소괄호()가 붙음.
-----
## 자바스크립트 DOM 지정규칙
* HTML태그의 class, name, id, value 등의 이름 규칙 : 영어소문자_영어소문자 (예) `user_id`
* Javascript의 함수 및 변수 이름 규칙 : Camel표기법 (예) `userId`
### 변수 등록 시 순서
* `const 의미있는변수명 = dociment.querySelector('HTML요소 또는 클래스, 아이디, 속성선택자 등')`
* `cosnt userId = document.querySelector('.user_id');`
* `let liActive = document.querySelector('li.active');` -> 공백이 없으면 li에 들어있는 클래스 active만 잡는다
* `var pwIO = document.querySelector('input[type*=pass]');` -> input의 type이 pass를 포함하고 있는것 (input / output의 약자 IO)
* `let gederChk = docment.querySelector('input[name=gender]');` 
-----
## a태그 기본 이벤트 동작 취소
* `a`태그를 이벤트 객체로 사용 시 대상을 터치 또는 클릭하면 세로 스크롤이 최상단으로 올라가는 문제점이 발생한다.
* **해결법** : 이벤트함수 내에 익명함수 및 화살표함수를 작성하고 매개변수에 `e.preventDefault()`를 작성한다.
* 객체.함수() 로 작성해야 하므로 객체 자리에 `e`를 임시로 넣어준다
* (예) `a객체.addEventListener('click',function(e){e.preventDefault();})`
* (예) `a객체.addEventListener('click',(e)=>e.preventDefalut();)`
-----
## 태그(DOM)에 따른 속성 값 읽기/수정/삭제 JS속성 
* input 요소일 경우 값 읽기/수정/삭제는 value 속성 사용
* input이 아닌 다른 요소일 경우 값 읽기/수정/삭제는 textContent 또는 innerHTML 속성 사용
-----
## this
* 특정 DOM요소 이벤트(click, mouseover 등...) 내에서 작성하는 키워드
* 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용할 수 있기 때문에 쉬운 선언이 가능하다.
* 주의점) 화살표함수에는 사용불가, 익명함수에서만 사용가능
* DOM.이벤트리스너(이벤트, ()=>{ this }) //X
* DOM.이벤트리스너(이벤트, function(){ this }) //O
* 주의점2) 이벤트 내에 호출하는 함수라 해도 함수 내부에 this를 직접적으로 작성해선 안되며 이벤트 익명함수 내에서 작성해야한다.
* DOM.이벤트리스너(이벤트, 익명함수(){ 함수호출(this)} ) //O
* function 호출한함수명(){ this } //X