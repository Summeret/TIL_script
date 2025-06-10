//math_ex.js
const dayDate = document.querySelector('#birthdate');
const dDayBtn = document.querySelector('#d_day_btn');
const result = document.querySelector('.result');
console.log(dayDate,dDayBtn,result);

dDayBtn.addEventListener('click',dDayFunc)
function dDayFunc(){
    const today = new Date();
    const dDay = new Date(dayDate.value);
    console.log(today,dDay);

    //디데이에서 오늘날짜 빼기
    const dDayResult = dDay.getTime() - today.getTime();
    console.log(dDayResult);

    const dateFlow = Math.floor(dDayResult / (1000*60*60*24));
    console.log(dateFlow);

    result.textContent = `D-day ${dateFlow}일입니다.`
}