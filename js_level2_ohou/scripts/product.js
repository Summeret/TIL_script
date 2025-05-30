//product.js
// 11. 상품옵션 선택 시 색상 선택 후(클릭(X) 변경(O)) 사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가
//색상, 사이즈 select태그 변수선언
const colorSelect = document.querySelector('select[name=color]');
const sizeSelect = document.querySelector('select[name=size');
const orderColor = document.querySelector('.order_select .color');
const orderSize = document.querySelector('.order_select .size');
console.log(colorSelect, sizeSelect);
console.log(orderColor,orderSize);
sizeSelect.disabled = true; //사이즈 비활성화 초기값 설정

//색상 select를 변경했을때 이벤트 생성
/* colorSelect.addEventListener('change',changefun) //change : 바꿨을때 이벤트
function changefun(){  //색상이 변경되었을때 호출하는 함수
    return sizeSelect.disabled = false; //색상을 변경했을 때 사이즈가 활성화
} */  //밑에서 upgrade

console.log('---------12번 product.js--------')
// 12. 색상->사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
// 12-1 위 12번 진행 전 새로운 요소 (.order.select) 숨기기
const orderSelect = document.querySelector('.order_select');
console.log(orderSelect);
orderSelect.style.display = 'none';
// 12-2 위 12번 색상,사이즈 선택 시 새로운 요소 (.order.select) 보이기
//색상->사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderfunc)
sizeSelect.addEventListener('change',orderfunc)
function orderfunc(){
    //console.log(0); //정상작동 확인
    //console.log(colorSelect.value); //js가 value 추적가능, 선택한 색상 값 확인
    //console.log(sizeSelect.value); //선택한 사이즈 값 확인
    sizeSelect.disabled = false; //사이즈 활성화
    //특정상황에서 아래 orderSelect가 출력되고 싶다면? 상황을 조건문으로 작성
    //ordrselect 출력 조건 -> color의 value값이 존재하는 option선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우
    //orderSelect.style.display = 'block'; //조건이 성립될때 실행되야하기때문에 조건문으로 다시 작성
    //조건문 연습
    //if(조건식){조건식이 참일 경우 실행되는 명령}
    //if('블랙'){console.log('조건실행테스트')}
    console.log(Boolean(colorSelect.value))
    //사용자가 선택한 color, sizw의 값(value)이 모두 참일때 조건 실행(value='' 빈문자열이면 거짓)
    if(colorSelect.value && sizeSelect.value){  //논리연산자 &&(AND)
        orderSelect.style.display = 'block'; //주문영역 보이기
        //선택한 정보 보이기
        //order_select의 color안에 선택한 colorSelect 값 대입하기
        orderColor.textContent = colorSelect.value;
        //order_select의 size안에 선택한 sizeSelect 값 대입하기
        orderSize.textContent = sizeSelect.value;
    }
}

// 13. 수량 조정 시 1~9999개까지 선택 가능 기능
// 13-1 `-`버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다 메세지 출력
// 13-1 `+`버튼 클릭 시 수량값이 9999보다 크면 1~9999개까지 선택가능합니다 메세지 출력
// 13-3 `-`,`+`버튼 클릭 시 수량이 범위값 안에서 1씩 감소 또는 증가
// 14. 수량 조정 시 수량에 따라 가격이 증가
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('input[name=user_num]');
const totalPrice = document.querySelector('.order_select .price em')
let num = 1; //초기수량
let price = 39900; //초기가격  
let total = 0; //수량에 따라 가격 계산하는 최종 변수 //계속 변경되는 값도 변수로 만들어주기
console.log(minusBtn,plusBtn,orderNum,totalPrice);

//초기설정
orderNum.value = num;
//증가 + 버튼 클릭 시 수량이 1씩 증가되서 orderNum 출력
plusBtn.addEventListener('click',()=>{
    num++;  //1씩 증가해서
    //toLocaleString 숫자 사이 ',' '.' '' 넣어주는 내장함수
    //객체.함수
    //, ko-kr (한국,미국 ...)
    //공백 fi-fi
    if(num > 9999){alert('1~9999개까지 선택가능합니다.')}
    if(num >= 1 && num <= 9999){ //9999이하일때 작동되는 조건
        total = num*price;
        orderNum.value = num; //orderNum에 넣는다
        totalPrice.textContent = total.toLocaleString('ko-kr');  //최종 출력 //input - value, 그외태그 - textContent
    }
})
//감소 - 버튼 클릭 시 수량이 1씩 감소되서 orderNum에 출력
minusBtn.addEventListener('click',()=>{  //화살표함수 사용할때는 this 사용 불가 (this사용할때는 익명함수)
    num--;
    //감소 수량이 1보다 작은경우 경고메세지 출력
    if(num < 1){alert('1~9999개까지 선택가능합니다.')}
    /* if(num >= 1){  //1이상일때 작동되는 조건 -> 경고문 확인 누른 후에도 숫자가 1 밑으로 변경되지 않음
        total = num*price;  //증가감소에 따라 식이 달라지지않는다.
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    } */
})

// 15. 위 (12)번에서 나온 박스의 X 클릭 시 주문 정보 모두 삭제
const closeBtn = document.querySelector('.order_select .close');
console.log(closeBtn);
/* closeBtn.addEventListener('click',listClose)
function listClose(){
    orderSelect.style.display = 'none';
} */
closeBtn.addEventListener('click',function(e){
    e.preventDefault();
    orderSelect.style.display = 'none';
})

// 16. (12)번을 진행하지 않은 상태에서 장바구니, 바로구매 클릭 시 "옵션 선택 후에 버튼을 클릭해주세요."경고창 출력


//장바구니 클릭 시 '장바구니 담겼습니다' 메세지출력
//바로구매 클릭 시 '로그인이 필요합니다' 메세지출력
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
console.log(cartBtn, buyBtn);
/* cartBtn.addEventListener('click',()=>{
    alert('장바구니 담겼습니다.');
})  //화살표함수 */
/* cartBtn.addEventListener('click',cartOnMsg)
function cartOnMsg(){
    return alert('장바구니 담겼습니다.');
}  //일반함수 */
cartBtn.addEventListener('click',function(){
    alert('장바구니에 담겼습니다.')
})  //익명함수

/* buyBtn.addEventListener('click',()=>{
    alert('로그인이 필요합니다.');
})  //화살표함수 */
/* buyBtn.addEventListener('click',loginMsg)
function loginMsg(){
    return alert('로그인이 필요합니다.');
}  //일반함수(함수가 반복될 경우, 반복가능성이 조금이라도 있다면 일반함수로 작성) */
buyBtn.addEventListener('click',function(){
    alert('로그인이 필요합니다.');
})  //익명함수(this가 필요한 경우에는 익명함수로 작성)