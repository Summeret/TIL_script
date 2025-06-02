//birth_flower.js
/* //사용자가 생년월일을 입력하고 버튼을 클릭하면 함수 실행
const userYear = document.querySelector('input[name=user_year]');
const userMonth = document.querySelector('.user_month');
const userDay = document.querySelector('input[name=user_day]');
const resultBtn = document.querySelector('#flower_chk_btn')
const result = document.querySelector('#result')
console.log(userYear,userMonth,userDay,resultBtn,result);

console.log(birthday_flower);
resultBtn.addEventListener('click',function(){
    const month = parseInt(userMonth.value);
    const flower = birthday_flower.find(item => item.month === month);
    if(flower){
    result.innerHTML = `${month}월의 탄생화는 ${flower.flower}입니다. <br>꽃말: <em>${flower.content}</em>`;
    }
}) */

//풀이
//test
console.log(birthday_flower[0].month);
console.log(birthday_flower[0].flower);
console.log(birthday_flower[0].content);
//변수
const userMonth = document.querySelector('.user_month')
const resultBtn = document.querySelector('#flower_chk_btn')
const result = document.querySelector('#result')
console.log(userMonth, resultBtn, result);
resultBtn.addEventListener('click',birthdayfunc)
function birthdayfunc(){
    if(userMonth.value >= 1 && userMonth.value <= 12){
        result.innerHTML = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}입니다. <br>꽃말: <em>${birthday_flower[userMonth.value-1].content}</em>`;
    }
    //1월부터 12월까지 범위를 만들때 논리연산자 응용하기

    //사용자가 입력한 값이
    //if(userMonth.value == 1){
        /* result.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}입니다.꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.` */
        /* result.innerHTML = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}입니다. <br>꽃말: <em>${birthday_flower[userMonth.value-1].content}</em>`; */
    //}
}