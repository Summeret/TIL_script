//dom2.js
//25.05.22 이벤트와 함수
//함수의 매개변수, 익명함수, 화살표변수
//매개변수 : function 함수명(매개변수, 매개변수){실행}
//익명함수 : const 변수명 = function(){실행}
//화살표함수 : const 변수명 (매개변수) => {실행}
//------------- 객체(변수)
const bg = document.querySelector('#bg'); //동적으로 제어하고 싶어서 작성 (html 태그를 무조건 다 가져와서 작성하는것이 아님)
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg, bg1Btn, bg2Btn);
bg.style.height = '100vh';
bg.style.backgroundColor = 'yellow';
//버튼에 마우스 올렸을때 배경색변경제어 (aqua) 알고리즘
//이벤트와 함수 생성 후 생성한 함수를 이벤트 내 콜백함수로 불러오기
//------------- 이벤트
bg1Btn.addEventListener('mouseover',bgMouseOn);
bg1Btn.addEventListener('mouseout',bgMouseOut);
//bg2Btn.addEventListener('mouseover',bgChange('coral')); //문법에러
//(위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출가능
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral'); //익명함수 내 매개변수가 있는 함수호출
})
//익명함수 : const 변수명 = function(){실행} -> bg2Btn.addEventListener 이 변수명을 대신해주고 {}안에 함수호출을 한다.
bg2Btn.addEventListener('mouseout',()=> bgChange('brown'));
//화살표 함수 내 매개변수가 있는 함수 호출(한줄이면 중괄호 생략)
//매개변수 ver함수
function bgChange(color){
    return bg.style.backgroundColor = color; //변수는 '' 적지않기
}
//------------- 함수
function bgMouseOn(){
    return bg.style.backgroundColor = 'aqua';
}
function bgMouseOut(){
    return bg.style.backgroundColor = 'yellow';
}