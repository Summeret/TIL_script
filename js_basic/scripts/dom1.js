//dom1.js
//script 연결 시 defer 작성하기
//HTML태그에서 JS로 동적제어 하고 싶은 대상만 변수로 만든다.
// 회원만 주문되는 주문하기 버튼 알고리즘
// (비회원인 경우) 주문하기 버튼을 클릭했을 때 '회원만 주문할 수 있습니다' 메세지 출력
// 이벤트 리스너 -> 리스너(Listener)란 특정 이벤트가 발생했을 때 실행할 함수를 말한다.
// 주문하기 버튼 == DOM 객체 변수
// 클릭했을 때 == event < 1)HTML, 2)Javascript >
// 회원만 메세지 출력 == 함수
const buyBtn = document.querySelector('#buyBtn'); //변수생성
//id가 buyBtn이라는 이름을 문서에서 찾아서 변수 buyBtn에 대입해라
console.log(buyBtn);   //변수 정상 확인 (undefiend, null, NaN 전부 에러)

// 버튼 onclick 이벤트리스너로 호출할 함수 생성
function userOrderMsg(){  //일반함수
    return console.log('회원만 주문가능합니다. 로그인해주세요.');
}
// 결제하기 클릭 시 '결제가 완료되었습니다.'
const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function buyCompletion(){
    return console.log('결제가 완료되었습니다.');
}
// 아이디 중복확인 클릭 시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다'
const idBtn = document.querySelector('#idBtn');
console.log(idBtn);
function idCheck(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다.');
}
//키보드 이벤트
//리뷰입력창에 키보드를 눌렀을 때 '50자 이상로 입력하세요' 출력 알고리즘
const userReview = document.querySelector('input[name*=review]'); //속성선택자
console.log(userReview);
function review50Msg(){
    return console.log('50자 이상로 입력하세요');
}
//id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '아이디는 영여로 시작해야 합니다'
const userId = document.querySelector('input[name=user_id]');
console.log(userId);
function idEnglish(){
    return console.log('아이디는 영어로 시작해야합니다.');
}
//pw 입력창 객체 준비 후 키도브를 아무키나 입력했을 때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요.'
const userPw= document.querySelector('input[name*=pw]');
console.log(userPw);
function pw12Msg(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요.');
}
//기타이벤트
//focus 특정요소에 포커스(커서 활성화)됐을 경우
//userId.style.border = '3px solid green'; //즉시실행 테스트
userId.style.outline = 'none'; //테두리 기본값 없애기
function focusGreen(){
    return userId.style.border = '3px solid green';
}
function blurGray(){
    return userId.style.border = '1px solid gray';
}
//수량 입력 알고리즘
//기본 수량 1
//사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑변경
//커서를 빼면 배경색 흰색
const buyCount = document.querySelector('input[name*=count]');
console.log(buyCount);
function focusYellow(){
    return buyCount.style.backgroundColor = 'yellow';
}
function blurWhite(){
    return buyCount.style.backgroundColor = '#fff';
}
//문서가 로딩되었을 때 실행 함수
function loadMsg(){
    return alert('문서 로딩 완료');
}
console.log('----------------------- 이벤트와 콜백함수')
//객체 -> 이벤트 -> 함수
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
//자바스크립트에 작성하는 객체 이벤트 문법
//객체.addEventListener('이벤트','콜백함수')
//addEventListener 이벤트 작성 시 'on'없이 이벤트만 작성한다. ('on'은 html 에만 작성)
//구글 아이디로 가입하기
googleJoin.addEventListener('click',googleGo); //콜백함수 작성 시 () 생략하고 함수명만 작성
function googleGo(){
    return window.open('http://accounts.google.com','_blank');
}
//네이버 아이디로 가입하기
const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);
naverJoin.addEventListener('click', naverGo);
function naverGo(){
    return window.open('https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/','_blank')
}
//카카오 아이디로 가입하기
const kakaoJoin = document.querySelector('.kakao_join');
console.log(kakaoJoin);
kakaoJoin.addEventListener('click', kakaoGo);
function kakaoGo(){
    return window.open('https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount#login','_blank')
}
//현재 페이지 변경방법
//5월 20일 파일보기
//1. 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
//2. 이벤트
fileLink.addEventListener('click',link0520);
//3. 함수
function link0520(){
    return window.location.href = 'bom1.html'
}
//자바스크립트는 연결된 html 파일 기준으로 경로를 작성
//JS에서 상대경로 연결 시 js파일 기준이 아닌 js가 연결된 html파일이 저장된 위치를 기준으로 상대경로를 작성한다.
//index 파일보기
const indexLink = document.querySelector('.index_link');
console.log(indexLink);
indexLink.addEventListener('click',linkIndex);
function linkIndex(){
    return window.location.href = 'index.html';
}
//readme 파일보기
const readmeLink = document.querySelector('.readme_link');
console.log(readmeLink);
readmeLink.addEventListener('click',linkReadme);
function linkReadme(){
    return window.location.href = "../README.md";
}
console.log('---------------------- 상품 수량 증가 알고리즘');
//1. 수량 초기값 1 세팅 
//2. + 버튼 클릭 시 수량이 1씩 증가해야한다.
//3. - 버튼 클릭 시 수량이 1씩 감소해야한다.
//--------------------------------------
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
const numBtnMinus = document.querySelector('#num_btn_minus');
console.log(numInput,numBtn,numBtnMinus);
//1. 수량 초기값 1 세팅 (html에서 할 수 있는것도 자바스크립트 알고리즘에 해당되면 관리가 용이하게 자바스크릡트에 작성한다.)
numInput.value = 1; //초기값이므로 이벤트 없이 바로 작성
//2 + 버튼 클릭 시 수량이 1씩 증가해야한다.
numBtn.addEventListener('click',countAdd);
//3. - 버튼 클릭 시 수량이 1씩 감소해야한다.
numBtnMinus.addEventListener('click', countMinus);
function countAdd(){
    //수량이 1씩 증가해야한다.
    //기존의 input 값이 항상 1 증가해야한다.
    //1.증감연산자 활용
    //return numInput.value = ++numInput.value;
    //2. 더하기연산자와 형변환메서드 활용법
    console.log(typeof numInput.value);  //return을 만나면 끝난다는 뜻이므로 return 위에 작성해야한다
    return numInput.value = Number(numInput.value)+1; 
}
function countMinus(){
    return numInput.value = --numInput.value; //증감연산자 활용법
    //console.log(typeof numInput.value);
    //return numInput.value = Number(numInput.value)-1;  //빼기연산자와 형변환메서드 활용법
}