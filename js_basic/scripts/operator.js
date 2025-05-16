//operator.js
//연산자 25/05/16
//증감연산자(단항)
let a = 1;
let b = 10;
//console.log(a,b);
b = a++; /* 대입되면서 기존값은 지워지고 새로운 값을 받는다. */
//console.log(a,b); 
a = --b;
//console.log(a,b); //초기값이 아닌 받은값으로 다음 연산진행
// ========== 예제2
let x= 5;
//let y = ++x; //1증가된 x값을 대입받는 y변수 
//증감연산은 x변수 자제에 영향을 주기 때문에 일회성 연산으로 +1을 붙여서 계산하고 x에 영향을 주지않게 y에 대입한다. 
//같이 증가시키고 싶다면 증감연산자, 하나만 증가시키고 싶다면 산술연산자
let y = x+1; 
console.log(x,y); //5, 6
y = x++;
console.log(x,y); //6, 5
x = ++y;
console.log(x,y); //6, 6
x++;
console.log(x,y); //7, 6
--y; // 증간연산자는 대입이 없어도 변수에 영향을 준다.
console.log(x,y); //7, 5
x+1; // 더하기, 빼기, 곱하기, 나누기 등 일반 산술연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다.
console.log(x,y); //7, 5 -> 증감연산자만 대입없이 썼을 때 변수에 영향을 주고 산술연산자는 대입없이는 영향을 주지 않는다.
// =============== 증감연산자 연습문제
console.log(`===========================================`);
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
// num1, num2. num3, num4의 값은? // 10, 20, 30, 40
console.log(num1, num2, num3, num4);
num1++;
num2--;
num3++;
num4--;
// num1, num2. num3, num4의 값은? // 11, 19, 31, 39
console.log(num1, num2, num3, num4);
num1 = ++num2;
num2 = num1++;
// num1, num2. num3, num4의 값은? // 1)20, 20, 31, 39  2)21, 20, 31, 39
console.log(num1, num2, num3, num4);
num3 = num1+num2;
num4 = ++num3;
// num1, num2. num3, num4의 값은? // 1)21, 20, 41, 39  2)21, 20, 42, 42 
console.log(num1, num2, num3, num4);
num1 = ++num3 + 10;
num2 = --num4 + 1 ; // 산술연산자는 변수 자체에는 영향을 주지 않기 때문에 증감연산자만 연산한다. 산술연산까지 한 연산이 대입한 값이 되는것.
// num1, num2. num3, num4의 값은? // 1)53, 20, 53, 42  2)53, 42, 53, 42 -> `53, 42, 43, 41`
console.log(num1, num2, num3, num4);
console.log(`===========================================`);
//====================== 복합대입연산자
let number = 10;
// number = 15;  //기존값 버리고 단순 새로운 값 삽입 X
// number = 5;   //위와 동일
//number = number + 5;  //기존값을 유지하고 원하는 계산 추가하기 O
number += 5; //복합대입 활용 (위와 결과 동일)
console.log(number); //15 
number -= 5; // 빼기복합 number = number - 5;
console.log(number); //10
number *= 5; //곱하기복합 number = number * 5;
console.log(number); //50
number /= 5; //나누기복합 number = numbrer / 5;
console.log(number); //10
number %= 5; //나머지복합 nummber = number % 5;
console.log(number); //0