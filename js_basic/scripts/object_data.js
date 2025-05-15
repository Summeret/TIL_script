// object_data.js
/* 25/05/15 배열공부 */
//const yoil = ['월', '화', '수']; // 이 방법으로 많이 이용
const yoil = new Array('월','화','수','목','금','토','일');  //앞에 new Array가 자바스크립트의 함수를 부르는 내장함수이기 때문에 배열이지만 ()사용
//console.log(yoil[0]);
//console.log(yoil[1]);
//console.log(yoil[2]);
//=================색상배열
const colorArray = ['빨강','주황','노랑','파랑','보라','검정','초록']; // 0 1 2 3 4 5 6 
// 콘솔 결과예시 : 빨강 노랑 보라 초록
// 콘솔 결과예시 : 제가 좋아하는 색상은 주황, 파랑, 보라색입니다.
console.log(colorArray[0], colorArray[2], colorArray[4], colorArray[6]); // +는 연결연산자 ,는 구분
console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]}, ${colorArray[4]}색입니다.`); // 템플릿문자열
console.log('-------------------------------');
// 과일 역순으로 출력하기
const fruitArray = ['바나나','딸기','망고','사과','귤']; // 0 1 2 3 4
console.log(fruitArray[4], fruitArray[3], fruitArray[2], fruitArray[1], fruitArray[0],);
//배열은 값이기때문에 객체의 값으로 들어갈 수 있다.
//(위) 요일배열와 새로운 날씨카드배열 활용 문자출력하기
console.log(`-------------------------------`);
const weatherCard = ['비','눈','맑음','흐림'];
// 오늘 목요일 날씨 : 비
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`);
// 금요일 날씨 : 맑음
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`);
console.log(`-------------------------------`);
// =======================객체와 배열
// 속성이 많으면 객체, 값이 2개이상이면 배열
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
    releaseDate:'2025.05.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고',   // 마지막에도 ,붙여주기
}
const movieInfo_v2 = {
    name:'야당',
    director:'황병국',
    genre:['범죄','액션'],
    rating:122,
    actor:['강하늘','유해진','박해준'],
    releaseDate:'2025.04.16',
    age:'청소년관람불가',
    story:'누명을 쓰고 교도소에 수감된 이강수(강하늘)는',
}
// 동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
        releaseDate:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고',
    },{
        name:'야당',
        director:'황병국',
        genre:['범죄','액션'],
        rating:122,
        actor:['강하늘','유해진','박해준'],
        releaseDate:'2025.04.16',
        age:'청소년관람불가',
        story:'누명을 쓰고 교도소에 수감된 이강수(강하늘)는',
    },
]  //데이터베이스 공간
console.log(movieAll[0].name);  // 영화를 값으로 배열하고 []가 객체가 되고 그 안에 속성으로 작성해서 호출한다. 객체명.속성 -> 객체값 호출방법
//감독 : 크리스토퍼 맥쿼리
//장르 : 액션 / 169분
//등급 : 15세 이상 관람가
console.log(`감독 : ${movieAll[0].director}`);
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);
console.log(`-------------------------------`);
//======================== 산술연산자
const greeting = 'hello';
const lang = ['figma','html','css'];
//hello figma
console.log(greeting+lang[0]); // (= 'hello'+'figma') 데이터를 가진 변수를 만들고 그 변수를 출력해 사용해야한다. -> 유지보수
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log((num1+num7) + global);
console.log(`-------------------------------`);
//============== 빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여 있을 시 자동으로 숫자로 형변환시킨다
const data1 = 1;
const data7 = '7';
console.log(data1+data7); //17
console.log(data1-data7); //-6
console.log(data1*data7); //7
console.log(data1/data7); //0.1428
console.log(data1%data7); //1
console.log(data1**data7); //1
console.log(typeof (data1+data7));
console.log(typeof (data1-data7));