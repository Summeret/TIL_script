//es6if.js
//삼항조건연산자 기본문법
//조건? 조건이 참일 때 결과 : 조건이 거짓일 때 결과;
let x = 5;
let y = x+10;
//삼항조건의 참or거짓 결과가 콜솔로그에 출력되는 형태
console.log(y==15 ? 'o':'x'); 
let total = x>10 ? 'o':'x'; //콘솔로 바로 출력하지말고 변수를 활용하는게 좋은 방법.
//변수의 값으로 조건문을 작성하고 변수명으로 콜솔 출력.
console.log(total);

//연습2. 성인/미성년자 구분하기
//18살 이상이면 '성인입니다' 아니면 '미성년자입니다'
/* const useAge = prompt('당신의 나이는?');
total = useAge >= 18 ? '성인입니다.':'미성년자입니다.';
console.log(total); */

//연습3.
//봄 500점, 여름 600점
const game_score = [
    { //0
        name:'봄',
        score:500,
    },{ //1
        name:'여름',
        score:600,
    }]
console.log(game_score);
//오늘의 1등은 ㅇㅇ이고 점수는 ㅇㅇ입니다!
//조건예시) 봄이가 여름이보다 점수가 큰가?
//크면 봄이 1등
//작으면 여름이 1등
total = game_score[0].score > game_score[1].score ?  game_score[0]:game_score[1];
console.log(total); //참,거짓의 값이 최종적으로 대입된다.
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`);

//상함조건 + 리뷰 JS
const re = document.querySelector('textarea[name=re]');
const reBtn = document.querySelector('#re_btn')
console.log(re, reBtn);
reBtn.addEventListener('click',()=>{
    //콘솔테스트 : 리뷰내용 출력
    console.log(re.value);
    //콘솔테스트 : 리뷰글자 수 출력
    console.log(re.value.length);
    //리뷰내용이 100자 이상인가?
    //100자 이상이면 '등록완료'
    //아니면 '100자 이상 입력하세요.'
    result = re.value.length >= 100 ? '등록완료':'100자이상 입력하세요.'
    alert(result);
})

//삼항조건 쇼핑몰 수량과 가격 알고리즘 
//1개 가격 기준 12500원
//쇼핑몰 상품 데이터베이스
const productDB = [
    {
        name:'떡닭도리탕',
        price:12500,
        stock:10,  //재고수량(최대구매개수)
    },{
        name:'꼬막비빔장', //productDB[1].name
        price:5800,      //productDB[1].price
        stock:20,        //productDB[1].stock
    }]
console.log(productDB);
//DOM변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.shopping .price');
let num = 1; //주문수량 초기값
let result = '';
console.log(numInput, minusBtn, plusBtn, priceP);
//초기주문수량 표시
numInput.value = num; //변수활용하기
//증가 버튼 클릭 시 재고수량만큼 1씩 증가하고 재고수량 오버 시 '최대구매수량입니다' 경고창 출력
plusBtn.addEventListener('click',()=>{
    //조건: 현재수량이 상품재고수량보다 크거나 같은가
    result = num >= productDB[0].stock ? '최대구매수량입니다.': ++num;
    numOperatorFunc(0);
})

//감소 버튼 클릭 시 1씩 감소
minusBtn.addEventListener('click',()=>{
    result = num <= 1 ? '최소구매수량입니다': --num;
    alert(result);
    numOperatorFunc(0);
})
//공통 -> 함수로 따로 만들기
//증가, 감소 버튼 시 반복 실행하는 함수 (0,1로 매번 다른 인덱스만 매개변수처리)
function numOperatorFunc(index){
    numInput.value = num;
    priceP.textContent = (num*productDB[index].price).toLocaleString('ko-kr')+'원';
    console.log(result);
}