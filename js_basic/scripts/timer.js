//timer.js
function greeting(){
    return console.log('hello')
}
setInterval(greeting,3000); //일정시간 간격으로 작업을 반복 실행하는 함수

//타이머함수 setInterval 일정시간반복
let num1 = 0;
function num1Func(){
    if(num1>4){num1=1} //제한을 걸어주고 초기값으로 돌아오게 설정 => 배너 슬라이드에 많이 사용
    num1++;
    console.log(num1);
    //123412341234...
}
//setInterval(num1Func,1000);

let num2 = 0;
//0~5 반복출력되는 타이머
function num2Func(){
    console.log(num2); //증감되기전에 0부터 출력하고 돌아와서 1씩 증가
    num2++;
    if(num2>5){num2=0}
}
//setInterval(num2Func,1000);

//6~0까지 출력 6543210
let num3 = 6;
function num3Func(){
    console.log(num3);
    num3--;
    if(num3<0){num3=6}
}
//setInterval(num3Func,1000);