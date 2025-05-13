// 변수
// var 변수명 = 대입값;
// var 변수선언 키워드
// = 대입연산자 (오른쪽에서 왼쪽으로 값 대입)
/* var num; */ //num변수를 생성 (;-> 종료)
/* num = 1; */ //1을 num에 대입한다 (변수에 값 대입) -> 이미 생성했으니까 var는 중복으로 작성하지 말것.
// 생성과 대입을 따로 작성 or 한번에 작성 둘 다 가능, 상황에 따라 작성하기
/* var num2 = 2; */ //생성과 대입이 동시에
// 콘솔 실행 함수
/* console.log(num2); */
//객체.함수(실행하는값);
//콘솔창(객체)에 num2변수값(실행값)을 로그로 출력(실행함수)하겠다
/* console.log(num); */
//=============================== 2일차 25/05/13
var bowl;
bowl = '쌀';
//console.log(bowl); /* 순서에 따라 다른 결과를 보여줌 -> 함수가 최종 값보다 위에 있으면 절차대로 기존 데이터를 출력한다(최종적으로 콩이 담겨져 있는것은 맞음) */
bowl = '콩'; /* 같은 그릇에 두개의 데이터가 담기면 기존 데이터를 삭제하고 새로운 데이터를 담는다 */
//console.log(bowl);
// 자바스크립트는 절차적 언어이기 때문에 css처럼 우선순위에 따라 최종 결과값만 인식하는 것이 아닌 실행 함수의 작성 위치에 따라 다른 변수값을 인식할 수 있다.
var a = 1;
var b = 5;
var c = 10;
// a = b -> 문자b가 아닌 변수 b를 a에 대입한다(o) 변수를 대입한다 = 변수값을 대입한다.
c = a;
console.log(a); //b의 값 받기 전 a의 기존 값 출력 -> 대입받기전에 이미 출력
a = b; 
console.log(b);
b = c;
console.log(c);
// ============================ 자료형 구분 내장함수 typeof
//console.log(typeof a);
//console.log(typeof (b));
console.log('==========데이터공부')
var d;
console.log(typeof d); // 값이 할당되지 않은 상태 undefined (보통 오류점검용으로 사용)
d = a; 
console.log('d의 값은'+ d); // 'd의 값은', or + d
console.log('a의 값은'+a);
console.log('c의 값 = ',c);
console.log('b의 값 => ',b);
console.log('===================================='); /* 구분용으로 활용하기 */
console.log(1+1); // 숫자+숫자 = 더하기 2
console.log('1'+1); // 문자+숫자 = 연결결과 11
console.log('===================================='); /* 구분용으로 활용하기 */
var box1 = 10;
var box2 = 'hello';
var box3 = 'javascript';
var box4;
console.log('box1='+box1+ ', box1은 '+typeof box1+'타입이다.'); //box1=10, box1은 number타입이다.
// 두번 수정하는 일이 없도록 값이 아닌 연산자 이름을 적어준다.
//console.log(box2, box3+'는', typeof(box2+box3)+'입니다!'); // hello javascript는 String입니다!
console.log(box2+' '+box3+'는 '+typeof(box2+box3)+'입니다!');
// 공백도 문자로 인식 -> 띄어쓰기를 ''안에 넣어주기
console.log(box4); // undefined 정의안된상태(오류)
box4 = box2+box3;
console.log(box4); // hellojavascript 절차 방향에 따라 읽기때문에 위에 undefined가 사라지지는 않는다.
//box4 = null; // 값 제거
//box4 = 0; //숫자 초기화(데이터 타입은 유지)
box4 = ''; //문자 초기화(테이터 타입은 유지) -> 공백도 넣지말고 빈 문자로
console.log(box4);
console.log(box4.length); //hello의 문자 개수는? -> 쇼핑몰 리뷰칸에 이용
// 객체.속성;
// 객체.함수();
console.log('==========================');
var num1 = 10;
var num2 = 20;
var num3 = 0;
var total; // 결과 변수(위 데이터 변수들이 최종 대입될 대상)
console.log(num1, num2, num3); // 10 20 0 숫자 작성 시 더하기 안되게 하려면 , 사용하기
console.log(num1+ num2+ num3); // 30 -> 유지보수가 떨어짐
total = num1 + num2;
console.log(total); //30
console.log("she's gone");
console.log('===============================');
console.log('1+1은 '+(1+1)+'입니다.'); // 1+1은 2입니다. 템플릿 적용 전
// 일반 문자와 프로그래밍식을 쉽게 작성할 수 있게 하는 템플릿문자열 활용
console.log(`1+1은 ${1+1}입니다.`);
var num4 = 1; //변수이름은 정적, 변수값은 변경 동적
var num5 = 2;
console.log(`변수 num4의 값은 ${num4}입니다.`);
console.log(`num4와 num5의 더한 결과값은 ${num4+num5}입니다.`);
console.log('=================================');
var subway = 2500;
var coffee = 3000;
var result = subway + coffee;
console.log(`오늘 총 지출액은 ${result}원입니다.`);
console.log('========================== 구구단');
var dan99 = 2;
// 2X1=2
// ...
// 2X9=18
console.log(`${dan99}X1=${dan99*1}`);
console.log(`${dan99}X2=${dan99*2}`);
console.log(`${dan99}X3=${dan99*3}`);
console.log(`${dan99}X4=${dan99*4}`);
console.log(`${dan99}X5=${dan99*5}`);
console.log(`${dan99}X6=${dan99*6}`);
console.log(`${dan99}X7=${dan99*7}`);
console.log(`${dan99}X8=${dan99*8}`);
console.log(`${dan99}X9=${dan99*9}`);