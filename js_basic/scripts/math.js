//math.js
// Math.abs() : 절대값 반환
// Math.ceil() : 매개변수 소수점 이하 부분 반올림
// Math.floor() : 매개변수 소수점 이하 부분 버리기
// Math.max() : 매개변수 최대값 반환
// Math.min() : 매개변수 최소값 반환
// Math.random() : 0과 1사이 무작위 수 반환
// Math.round() : 매개변수 소수점 이하 부분 반올림
console.log(Math);
console.log(Math.PI);

const fruitDB = [
    {
        name:'토마토',
        price:5000,
    },{
        name:'바나나',
        price:2000,
    },{
        name:'사과',
        price:3000,
    }
]
const num = 123.567;
//const total = Math.min(fruitDB[0].price,fruitDB[1].price,fruitDB[2].price);
const total = Math.round(Math.random()*4);
console.log(total,fruitDB);

console.log(`-------------- 배경이미지 랜덤`);
console.log(Math.floor(Math.random()*5)+1);

const randomNum = Math.floor(Math.random()*5)+1;
const bodyDOM = document.querySelector('body');
console.log(randomNum,bodyDOM);
bodyDOM.style.backgroundImage = `url(./images/bg_0${randomNum}.jpg)`;

//생년월일 입력 후 '계산' 버튼 클릭 시 생일부터 지금까지 몇일이 지났는지, 몇시간이 지났는지 보여주는 프로그램 (양력기준)
//지금까지 흐른 날짜 계산법 : 1000*60*60*24로 나누기
//지금까지 흐른 시간 계산법 : 1000*60*60로 나누기
const birthDate = document.querySelector('#birthdate');
const birthBtn = document.querySelector('#birth_btn');
const resultDate = document.querySelector('.date em');
const resultTime = document.querySelector('.time em');
console.log(birthDate,birthBtn,resultDate,resultTime);
birthBtn.addEventListener('click',birthFunc)
function birthFunc(){
    //오늘 날짜와 생년월일을 같은 포맷으로 출력테스트
    //console.log(new Date(birthDate.value)); 
    //console.log(new Date());
    //위 테스트 사용하기 위해 변수 생성
    const birth = new Date(birthDate.value);
    const today = new Date();
    console.log(birth, today);

    //오늘 날짜에서 생년월일 빼기
    //nre Date가 복잡한 특수문자 및 문자를 포함하기 때문에 숫자만 반환해서 계산하도록 getTime() 함수활용
    const birthToday = today.getTime() - birth.getTime();
    console.log(birthToday);

    //흐른 날짜, 흐른 시간 계산
    const dateFlow = Math.floor(birthToday / (1000*60*60*24));
    const timeFlow = Math.floor(birthToday / (1000*60*60));
    //결과출력
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow;
}