//bom1.js
//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시 기다려주세요.'); //일회성으로 띄우는 메시지창으로 변수에 영향을 주지않음 undefined
const msg2 = window.alert('잘못 접근하셨습니다.') //작성순서대로 출력
console.log(msg1); */
//=====================================================
/* const userAge = window.prompt('나이를 입력하세요.') //입력정보가 변수에 들어간다.
console.log(userAge); //입력한 값이 출력된다. */
//=====================================================
/* const userPrint = window.confirm('인쇄하시겠습니까'); //결제하시겠습니까 등
console.log(userPrint); //확인 ture, 취소 fales 논리형데이터로 나눠줌 */
//=====================================================
/* const userInfo = window.open('https://google.com','_blank'); //주소-> 결제시스템 주소 등, 새로운창으로 구글열기 */
//=====================================================
/* const userWrite = window.document.write('hello js'); //변수 생략하고 작성하기도 함
window.document.write('안녕하세요 자바스크립트'); */
//재사용할게 아니라면(한번 띄우고 없어지는것) 변수 생략하고 작성
//대입을 한다면 변수작성
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우 변수를 선언할 필요 없이 바로 내장함수를 작성해도 된다.
//변수 선언이 필요한 BOM 내장함수 : prompt(), confirm()
//=====================================================
/* window.print(); */  //인쇄의 횟수 제한을 둬야하는 경우는 변수를 작성해야함
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야한다.
//=============================== DOM - HTML Node ===
const pTag = document.getElementsByTagName('p');
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group'); //앞에 class선언이 있으니까 . 작성하면 안됨
const liCls = document.getElementsByClassName('list');
const liAct = document.getElementsByClassName('active');
const wrapId =document.getElementById('wrap');
console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(liAct);
console.log(wrapId);
//=============================== DOM 객체 속성
//객체.style = 'css속성:값';
pTag[0].style = 'background-color:yellow';
pTag[1].style = 'background-color:pink';
ulCls[0].style = 'border:1px solid red';
liCls[0].style = 'border-bottom:1px solid blue';
liCls[1].style = 'border-bottom:1px solid green';
liCls[2].style = 'border-bottom:1px solid purple';
liCls[3].style = 'border-bottom:1px solid black';
liAct[0].style = 'color:red';
liAct[1].style = 'color:blue';
wrapId.style = 'padding:30px';
func.style = 'color:red';
//위와 같이 style속성을 이용한 css는 일반 css선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12 개발자도구에서만 확인가능하다.
//css 우선순위 : 자바스트립트 style속성 > ID > Class > Tag
//========== 예제) dl부터 각각 배경색 다르게 넣기 =============
const dlCls = document.getElementsByClassName('define');
const dtId = document.getElementById('title');
const ddCls = document.getElementsByClassName('contents');
const dtTag = document.getElementsByTagName('dt')[1]; /* 인덱스 번호를 여기서 쓰면 실행할때는 인덱스 생략하고 작성 */
console.log(dlCls);
console.log(dtId);
console.log(ddCls);
console.log(dtTag);
dlCls[0].style = 'background-color:red';
dtId.style = 'background-color:yellow';
ddCls[0].style = 'background-color:green';
ddCls[1].style = 'background-color:lime';
dtTag.style = 'background-color:pink'; //변수 선언 시 인덱스 번호를 같이 작성하면 실행할때는 생략하고 작성
console.log('==================================================');
//ES6 querySelector 이용 DOM 선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li'); //css랑 비슷하게 작성
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item'); //이름이 중복될 가능성이 있다면 앞에 부모를 같이 작성해준다.
console.log(orderOl);
console.log(orderLi);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size:2rem';
orderToday.style = 'font-weight:600';
orderItem.style = 'font-weight:600';
orderLi[3].style = 'font-weight:600';
console.log('==================================================');
//1.모든 a의 글자색 검정
//2.nav 배경색
//3.gnb의 자식 li는 테두리 두께1, lnb의 자식 li테두리 두께2
//4.gnb,lnb 각각 다른 배경색
const navA = document.querySelectorAll('nav a')
const nav = document.querySelector('nav');
const gnbLi = document.querySelectorAll('.gnb > li');
const lnbLi = document.querySelectorAll('.lnb > li'); //나중에 깊이가 생길 수 았으니 > 넣어주기
const gnb = document.querySelector('.gnb');
const lnb = document.querySelector('.lnb');
//const navUl = document.querySelectorAll('nav ul'); //gnb,lnb 한번에 작성하기, 같은 태그 ul이라는 점으로 한번에 작성해서 배열로 처리하기
console.log(navA);
console.log(nav);
console.log(gnbLi);
console.log(lnbLi);
console.log(gnb);
console.log(lnb);
//console.log(navUl);
navA[0].style = 'color:#000';
navA[1].style = 'color:#000';
navA[2].style = 'color:#000';
navA[3].style = 'color:#000'; //index가 있으면 하나하나 따로 작성해줘야한다. 같은 값이라고 한꺼번에 적지 않기
nav.style = 'background-color:lime';
gnbLi[0].style = 'border:1px solid blue';
gnbLi[1].style = 'border:1px solid blue';
lnbLi[0].style = 'border:2px solid red';
lnbLi[1].style = 'border:2px solid red';
gnb.style = 'background-color:#ddd';
//lnb.style = 'background-color:pink';
//객체.속성 = '값';
//객체.속성.속성 = '값'; -> css속성은 카멜표기법으로 작성
lnb.style.backgroundColor = 'pink';
lnb.style.padding = '30px';
lnb.style.borderTop = '2px solid black';
/* navUl[0].style = 'background-color:#eee';
navUl[1].style = 'background-color:pink'; */
//css언어를 쓸 수는 있지만 css오류(오타)는 잡지 못함
console.log('==================================================');
let a = 10;
let b = '10';
console.log(a, typeof a); //10 number
console.log(b, typeof b); //10 string
/* let age = prompt('당신의 나이는?');
alert(typeof age); */
//prompt로 사용자가 입력하는 값은 무조건 문자(string)으로 처리된다. => 암시적 형변환
//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고 싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.
//Number(숫자로 변환하고 싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?'); 
//const age = Number(prompt('당신의 나이는?'));
//(위) 프로그래밍 동작 순서
//1. prompt('당신의 나이는?') : 사용자가 입력한 값을 문자로 자동변환
//2. Number() : prompt()가 문자로 변환한 값을 숫자로 명시적 변환
//3. age = : 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age+1)}살입니다.`); //변수를 데이터로 사용한 곳에 명시적 형변환 -> 변환하고 싶은 데이터
//(위) 전체 적용
//(밑) 일회성 적용
console.log('=================== 쇼핑몰 구입 알고리즘');
//상품 1개 가격 기준 15700원
//현재 이벤트중 1+1
//1. 사용자가 구입할 물건 개수 정하기
//2. 개수에 따라 최종 가격 구하기
//결과예) 구입할 물건은 ?개이고 이벤트상품 ?개가 추가됩니다. 총 결제 금액은 ?원입니다
let price = 15700;
const productQa = Number(prompt(`구입할 개수를 입력하세요.`));
let eventNum = productQa; //이벤트 증정개수
let total = price*productQa; //최종결제금액
console.log(`구입할 물건은 ${eventNum}개이고 이벤트 상품 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${total}원입니다.`);