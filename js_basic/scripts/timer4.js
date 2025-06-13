//timer4.js
//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고 
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
console.log(joinBtn,joinMsg);
joinMsg.classList.add('hide'); //초기상태 (숨기기)

joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide'); //보이기
    joinMsg.textContent = '가입을 축하합니다.';
    //(메세지 출력 후) 3초 후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide'); //앞에서 적은 속성,값과 비슷한것으로 작성한다.
    },3000)
})


//알림메세지 후 다른 페이지로 이동
//"결제완료 되었습니다" 메세지 출력 후 5초 뒤 timer3.html로 이동
const payBtn = document.querySelector('#pay');
const payResetBtn = document.querySelector('#pay_reset');
const payMsg = document.querySelector('.pay_msg');
let page;
console.log(payBtn, payMsg);
payMsg.classList.add('hide'); //초기 숨기기(클래스 재사용 가능)
payResetBtn.classList.add('hide'); //초기 숨기기(클래스 재사용 가능)

payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide'); //숨기는 클래스 제거로 보이기
    payResetBtn.classList.remove('hide'); //숨기는 클래스 제거로 보이기
    console.log(`결제가 완료되었습니다.`);
    payMsg.textContent = '결제가 완료되었습니다. 5초 후 광고사이트로 이동합니다.';
    //(메세지 출력 후) 5초 후 timer3.html로 이동
    page = setTimeout(()=>{
        window.location.href = './timer3.html' //광고
    },5000)
})

payResetBtn.addEventListener('click',()=>{
    clearTimeout(page);
})