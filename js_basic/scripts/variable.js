/* variable.js */
/* 템플릿 문자열 활용 - 월,요일 출력 */
// new Date(); -> 띄어쓰기 해야함
// getFullYear();
// getMonth();
// getDate();
/* 변수생성 시 기존 변수와 같은 위치에 작성하기 */
var test = new Date();  // 컴퓨터 시간 불러오기
var ye = test.getFullYear();  // 데이터를 가진 변수도 객체 대상으로 삼을 수 있음
var mon = test.getMonth();  // 컴퓨터는 숫자를 0부터 인식하므로 5월을 숫자 4로 인식한다. -> 월만 0부터 인식
var day = test.getDate();
//console.log(`${ye}년 ${mon+1}월 ${day}일`);  //2025년 5월 14일
// 객체의 개수를 체크할때는 보통 0부터 숫자를 인식하지만 특정 속성이나 함수는 1부터 인식하는 종류도 있다. 대표적인 1부터 인식하는 속성은 문자열의 길이를 체크하는 length 속성이다.
// hello.lrngth; 결과 -> 5
// ============= ES6 변수선언 let, const와 기존 변수 var
var num1 = 10;
var num1 = 20;
// var는 중복선언이 가능하다. 하지만 실무에서는 이미 생성한 변수명을 또 중복선언하는 문제를 내면 안되는데 var는 이를 오류로 선언하지 못해서 가능한 사용을 하지 않거나 주의해서 사용해야한다.
let num2 = 30;
//let num2 = 40;
// let 변수생성키워드는 이미 생성한 변수를 중복선언하지 못하도록 체크하기 때문에 개발자의 실수를 방지할 수 있다.
const num3 = 50;
//const num3; 중복선언 불가
//num3 = 60; 값 변경불가(처음 선언된 값을 끝까지 유지해야함!!)
//const num4; 상수는 무조건 생성되자마자 대입해야함. 값을 나중에 적는것도 변경하려는 시도로 인식해서 에러가 생김.
const num4 = 60; // 생성과 대입이 동시에 된 올바른 경우
console.log('================================================');
// =========== 객체 연습
// 1. 도형 정보저장 (너비, 높이, 좌표, 모서리, 색상)
let rectagle = { //rectagl 객체변수명은 콜스택에 저장
    width:300,  //{width~color} 객체모든속성은 메모리힙 저장
    height:200,
    x:0,
    y:100,
    border:0,
    color:'red', /* 문자가 값으로 되어 있을때는 반드시 ''로 묶기 */
}
console.log(rectagle.x, rectagle.y); /* 속성은 하나만 작성, 두개이상 작성하려면 , 로 구분하고 뒤에 객체명부터 작성 */
// 2. 회원정보 저장 (이름, 나이, 성별, 지역)
let user_info = {
    name:'여름',
    age:3,
    gender:'여성',
    area:'인천',
}
console.log(user_info.gender, user_info.area);
// 3. 쇼핑몰 상품을 저장할 때 (상품명, 상품가격, 상품 재고수량, 상품색상)
let product = {
    name:'텀블러',
    price:35000,
    count:3,
    color:'black,white,pink',
}
console.log(product.count, product.color);
console.log(`${product.name}의 재고수량은 ${product.count}개이다.`);
// 4. 영화관 좌석 지정 할 때 (좌석명, 좌석위치, 좌석가격)
let movie_theater = {
    name:'일반',
    pst:'F1',
    price:12000,
}
console.log(movie_theater);
console.log(movie_theater.name, movie_theater.price);
console.log(`오늘 ${movie_theater.name}좌석 ${movie_theater.pst}번 ${movie_theater.price}원에 예약했다.`);
console.log('================================================');
//==================== 배열 공부
// 배열작성법 1. (값은 개수제한 없음, 최소2개이상)
// let 배열변수명 = [배열값, 배열값, 배열값];  -> 변경가능
// const 배열변수명 = [배열값, 배열값, 배열값]; -> 변경불가능
const yoil = ['월','화','수','목','금','토','일']
console.log(yoil); //test
console.log(yoil[2]); //배열변수명[호출인덱스번호]
console.log(`오늘은 ${yoil[2]}요일입니다`);
console.log(`내일은 ${yoil[3]}요일입니다`);