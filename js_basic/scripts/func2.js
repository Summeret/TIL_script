//func2.js
let b = 20; //전역변수 (블록{}밖)
let c = 30; //전역변수 (블록{}밖)
function test(){ //블록선언 (여기부터 지역스코프 시작)
    let a = 10; //지역변수(블록{}안)
    console.log(a+b); //30
} //블록종료 (지역 종료)
test(); // 함수 호출(함수밖에서) -> 함수는 만들기만 하면 작동하지 않으므로 반드시 함수 밖에서 함수호출을 해야 작동한다.
//console.log(a); //지역변수는 전역에서 호출하면 에러
//console.log(a+b); //실행X, 위와 동일 에러
console.log(b+c); //위에서 에러가 생기면 아래에도 전부 에러가 나므로 자주 확인
//전역변수이기 때문에 전역코프 위치 실행 가능
console.log(`---------------------`);
let d = 5; //전역
let e = 15; //전역
let f; //전역변수 생성(값 선언 안된 상태 undefined)
let g; //전역변수 생성(값 선언 안된 상태 undefined)
scopeTest(); //호출(함수실행)
console.log(f); //호출 후 f의 결과를 실행하는 함수이기 때문에 25가 실행된다.
//함수 대기상태에서는 절대 실행되지 않는다. 호출을 해야만 실행!!
function scopeTest(){ //함수 호출 전 대기 상태의 함수 생성구조
    f = 25; //지역 -> 전역변수 f에 25를 대입 => 생성된 위치
    g = 35; //지역
    console.log(d+f); //실행O 30 = 5+25
    console.log(e+g); //실행O 50 = 15+35
}
console.log(g+d); //실행X
console.log(d+e); //실행O 20 = 5+15
console.log(`---------------------`);
//함수선언 대기상태 안에서 다른 함수를 호출할 수 있다.
let x = 1; //전역변수
let y;  //전역변수
function func1(){ //함수 대기 상태 func1, 헨젤과 그레텔이 집으로 돌아가는 방법 돌 or 빵부스러기
    y = 5; //전역변수에 값 대입
    console.log(x+y);
}
function func2(){ // 함수 대기 상태 func2, 헨젤과 그레텔이 돌아갈 집 -> 목적
    let z = 10; //지역변수 생성과 값 대입
    func1(); //호출 6 / func2 함수대기 안 func1 함수 호출 (func2 대기상태로 실행되지 않음)
    console.log(x+y+z);
}
func2(); //호출 16 (func2 안 func1도 함께 절차에 맞게 실행)
console.log(`--------------------- 헨젤과 그레텔 알고리즘`);
function storyFunc1(){
    let person = ['헨젤','그레텔'];
    let src = '조약돌';
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용하여 집을 찾아갔습니다.`)
}
function storyFunc2(){
    let person = ['헨젤','그레텔'];
    let src = '빵부스러기';
    //헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를 이용하여 집을 찾아갔습니다.`)
}
storyFunc1(); //함수호출
storyFunc2(); //함수호출
console.log(`--------------------------------------------------`);
console.log(`--------------------- 헨젤과 그레텔 알고리즘 - 매개변수`);
function storyFunc(src){ //매개변수생성 -> undefined (변수생성 선언 필요 없음)
    let person = ['헨젤','그레텔'];
    //let src = '빵부스러기';
    //헨젤과 그레텔이 조약돌를(을) 이용해서 집을 찾아갔습니다.
    //헨젤과 그레텔이 빵부스러기를(을) 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를(을) 이용하여 집을 찾아갔습니다.`) //출력,실행
}
storyFunc('조약돌'); //대입
storyFunc('빵부스러기'); //대입
console.log(`--------------------------------------------`);
console.log(`----------------------- 커피레시피(기본값 포함)`);
//function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다
//function coffeeFunc1(data1){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기 떄문에 매개변수를 1개 생성한다.
//function coffeeFunc1(data1, data2){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
//===============================================
//function coffeeFunc1(data1){}
//coffeeFunx1(10);
//(위)프로그래밍 해석 : 함수를 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성완료. 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
//===============================================
//function coffeeFunc1(data1){실행함수+매개변수data1활용}
//coffeeFunx1(10);
//매개변수를 생성하고 매개변수에 닶을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
//매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야한다. function 함수명(매개변수=기본값){}
//기본값은 선택(상황에 따라)
function coffeeFunc1(data1=1, data2=0.5){
    let water = data1+'컵 물을 채운다';
    let espresso = `${data2}샷 에스프레소를 넣는다`;
    console.log(water, espresso);
}
coffeeFunc1(2, 1);
coffeeFunc1(3, 0.5);
coffeeFunc1(); //기본값을 설정하고 매개변수를 요청하지 않으면 기본값 호출.
//=========================== 커피주문 알고리즘(고객입장)
console.log(`-------------------------------------------`);
console.log(`---------------------------- 커피주문 알고리즘`);
function coffeFunc2(menu, num=1){
    let msg = '잔 주문완료되었습니다.'
    console.log(menu,num,msg)
}
coffeFunc2('카페라떼'); //기본값이라 두번째 매개변수 생략
coffeFunc2('아메리카노', 2); //기본값이 아니라 매개변수 모두 작성
coffeFunc2('녹차라떼');
coffeFunc2('아메리카노', 4);
console.log(`-------------------------------------------`);
console.log(`------------------------ 커피주문 알고리즘 활용`);
function coffeeFunc3(opt, menu, num=1){
    let txt = '잔 주문완료되었습니다.'
    const type = ['따뜻한','차가운'];
    console.log(type[opt],menu,num,txt);
}
coffeeFunc3(0,'카페라떼',2);
coffeeFunc3(1,'아메리카노');
coffeeFunc3(0,'녹차라떼',2);
coffeeFunc3(1,'아메리카노');
console.log(`-------------------------------------------`);
console.log(`------------------------- 함수의 리턴(return)`);
//더하기 알고리즘
//함수 내부{}는 대기장소로 호출하지 않는한 절대 실행되지 않는다.
//함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행할 수 있는 위치다.
//함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는 것을 말한다.
function plusFunc(num){
    let total = num+1;
    //return console.log(total); //외부로 보내서 실행한다. 반환위치
    return total; //리턴으로 실행함수가 아닌 값만 보냈다면? (return이 있기 때문에 외부로 반환할 수 있다.)
    //return은 필수라고 생각해도 무방하다.
}
plusFunc(2); //호출
//호출할 때 리턴이 보낸 반환값을 묶어주는 실행함수를 별도로 작성한다.
console.log(plusFunc(2));
console.log(`-------------------------------------------`);
console.log(`----------- 구구단 알고리즘(리턴과 매개함수 활용)`);
let dan99 = ''; //전역변수(초기값) 앞으로 문자데이터가 들어올 예정으로 빈문자 초기값 설정
function dan99Func(num){
    dan99 = `${num}x1=${num*1} `;
    dan99 += `${num}x2=${num*2} `; //dan99 = dan99 + `${num}x2=${num*2} ` 기존 dan99변수에 우측 데이터를 더해서 대립해라
    dan99 += `${num}x3=${num*3} `;
    dan99 += `${num}x4=${num*4} `;
    dan99 += `${num}x5=${num*5} `;
    dan99 += `${num}x6=${num*6} `;
    dan99 += `${num}x7=${num*7} `;
    dan99 += `${num}x8=${num*8} `;
    dan99 += `${num}x9=${num*9}`; //= 앞에 대입한 식은 계속 지워진 상태므로 복합연산자 +=로 기존값에 더해서 대입한다.
    return dan99; //반환선언
}
dan99Func(2); //구구단 2단 -> 호출
console.log(dan99Func(2)); //실행함수 -> 출력
console.log(dan99Func(7));
console.log(`-------------------------------------------`);
console.log(`----------------------------- 할인율 계산기`);
// 27500원을 입력했을 때 (가격은 달라질수 있음)
// 입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율 동시출력
// 10% 할인율 계산법 : 가격 * 9%
// 4% 할인율 계산법 : 100-4 = 96 -> 가격 * 0.96
// 결과예시) 5% 할인율 결과 = ???원
let discountResult = '';
function discount(num){
    discountResult = `5% 할인율 결과 = ${num*0.95}원 / `;
    discountResult += `10% 할인율 결과 = ${num*0.9}원 / `;
    discountResult += `20% 할인율 결과 = ${num*0.8}원 / `;
    discountResult += `30% 할인율 결과 = ${num*0.7}원 / `;
    discountResult += `40% 할인율 결과 = ${num*0.6}원 / `;
    discountResult += `50% 할인율 결과 = ${num*0.5}원`;
    return discountResult;
}
//discount(27500); //숫자 작성 시 , 쓰지 말것
console.log(discount(27500));
//------------------------------- 함수 25/05/20
console.log(`-------------------------------------`);
console.log(`------------------------- 익명함수`);
//익명함수란? 변수 내 function 키워드를 지정해 대입하는 함수
//함수 자체의 이름이 아닌 변수 이름에 의존해서 할당(대입)되기 때문에 익명함수라 부른다.
//function greeting (){}  //일반함수 
const greeting = function(){  //익명함수
    console.log(`hello`);
} 
greeting(); //익명함수를 호출할때는 함수명이 아닌 변수명으로 호출한다.
//익명함수는 일반함수와 다르게 함수선언보다 먼저 호출하면 오류 발생
console.log(`------------------------- 화살표함수ES6이후`);
//화살표 함수는 일반함수가 아닌 익명함수일 때 함수를 간결하게 줄이는 목적으로 사용한다.
//function을 => 기호로 바꿔서 사용
//대입연산자(=)와 화살표함수를(=>)를 붙여서 사용할 수 없기 때문에 매개변수와 함수선언표시 순서를 =()=> 로 사용한다. (대입, 매개변수, 화살표함수)
//일반함수일 경우
function bab(num){
    return `밥 ${num} 공기 주세요`;
}
console.log(bab(1));
//화살표함수일 경우
const bab2 = (num) =>
    {return  `밥 ${num} 공기 주세요`;}
console.log(bab2(2));
//함수 호출할 때 마다 아래와 같이 출력하기(매개변수 활용)
//밥 주세요
//반찬 주세요
//국 주세요
/* function food(txt){
    return `${txt} 주세요`;
}
console.log(txt('밥')); */ //일반함수
const food = (txt) =>
    {return `${txt} 나왔습나다.`}
console.log(food('밥'));
console.log(food('반찬'));
console.log(food('국'));   //익명함수