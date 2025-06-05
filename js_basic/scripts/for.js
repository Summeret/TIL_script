//for.js
//for(초기변수; 조건문; 증감식){조건문이 참일 때 반복실행결과}
//'자바스크립트' 문자열 10번 반복
for(let i=1; i<11; i++){
    console.log('자바스크립트'+i);
}
//1월~12월까지 12번 반복
//개발자가 화면에 출력하고 싶은 첫번쨰 번호가 for문의 초기변수에 들어가는 값이 된다.
//i를 1로 시작하고 1가 12보다 작거나 같을때까지 증감하라 결과
for(let i=1; i<=12; i++){
    console.log(`${i}월`);
}
console.log('=================');
//6월부터 12월
for(let i=6; i<=12; i++){
    console.log(i+'월');
}
console.log('=================');
const coffee = ['아메리카노', '카페라떼','바닐라라떼','돌체라떼','초코라떼','녹차라떼','프라푸치노']
console.log(coffee);
for(let i=0; i<coffee.length; i++){
    console.log(coffee[i]);
}
console.log('=================');
//1번 메뉴 아메리카노
//2번 메뉴 카페라떼...반복
for(let i=0; i<coffee.length; i++){
    console.log(`${i+1}번 메뉴 ${coffee[i]}`);
}
console.log('=================');
//역순 카페 메뉴 출력
for(let i=coffee.length-1; i>=0; i--){
    console.log(coffee[i]);
}
console.log('=================');
//구구단 2단~9단
//2x1=2 형태로 출력하기
//2x1=(2*1)
//2x2=(2*2)
//2x3=(2*3) ...
for(let i=1; i<=9; i++){
    console.log(`2X${i}=${2*i}`);
}
console.log('=================');
//for 반복 + if 조건
//1~20까지 출력하는 반복문
for(let i=1; i<=20; i++){
    //조건문 if 활용 1~20까지 반복숫자 중 홀수만 출력
    //숫자2% == 1 -> 홀수식
    if(i%2 == 1){
        console.log(i);
    }
}
console.log('=================');
//10~20까지 역순으로 짝수만 출력하는 반복문
for(let i=20; i>=10; i--){
    if(i%2==0){console.log(i);}
}
console.log('=================');
const navA = document.querySelectorAll('nav a');
console.log(navA);
for(let i=0; i<navA.length; i++){
    //console.log(navA[i]);
    //모든 a 글자 빨강
    //navA[i].style.color = '#f00';
    //홀수 a 빨강, 짝수 a 파랑
    if(i%2==1){
        navA[i].classList.add('odd');
        //navA[i].style.color = '#f00';
        //navA[i].style.backgroundColor = '#ff0'
    }else {
        navA[i].classList.add('even');
        //navA[i].style.color = 'blue'; //#00f
        //navA[i].style.backgroundColor = '#eee'
    } //홀수,짝수는 홀 아니면 짝이기 때문에 조건문을 더 작성할 필요가 없다.
}

//li에 대한 변수를 만들고 배경 노란색 변경
const liA = document.querySelectorAll('.list li');
console.log(liA);
for(let i=0; i<liA.length; i++){
    liA[i].style.backgroundColor = 'yellow'; //#ff0
}