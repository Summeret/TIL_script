//thumnails.js
// 작은 썸네일 이미지 마우스 올렸을 시 큰 이미지 변경
//변수
const smallThum = document.querySelectorAll('.small a');
const bigThum = document.querySelector('.big img');
console.log(smallThum, bigThum);
//콘솔 확인 시 1개의 DOM요소가 아닌 [index]표시된 여러개 DOM요소로 출력될 때는 실제 사용 시 요소[index]를 붙여서 사용해야한다.
//thum2에 마우스 올렸을 시 big 이미지가 big2로 변경
/* smallThum[0].addEventListener('mouseover',function(){bigThumSrc(1)}) //매개변수 호출
smallThum[1].addEventListener('mouseover',function(){bigThumSrc(2)}) 
smallThum[2].addEventListener('mouseover',function(){bigThumSrc(3)}) 
smallThum[3].addEventListener('mouseover',function(){bigThumSrc(4)}) 
smallThum[4].addEventListener('mouseover',function(){bigThumSrc(5)}) 
function bigThumSrc(num){
    //console.log(1); //함수생성하고 작동하는지 테스트하기
    //return bigThum.src = '../image/big+"num"+.jpg'  //1번 이거 왜 에러임..
    return bigThum.src = `./image/big${num}.jpg`   //2번
} */
//함수가 실행될때마다 달라지면 매개변수로 만들어야한다.

//테두리 활성화 추가버전
//첫번째 썸네일 활성화 디자인(css)
smallThum[0].style.border = '3px solid #0aa5ff'  //img태그에 작업하면 border가 잘림 -> 위에 변수를 a로 수정
smallThum[0].addEventListener('mouseover', function(){bigThumSrcBorder(1, this)})
smallThum[1].addEventListener('mouseover', function(){bigThumSrcBorder(2, this)})
smallThum[2].addEventListener('mouseover', function(){bigThumSrcBorder(3, this)})
smallThum[3].addEventListener('mouseover', function(){bigThumSrcBorder(4, this)})
smallThum[4].addEventListener('mouseover', function(){bigThumSrcBorder(5, this)})
function bigThumSrcBorder(num, target){
    //사용자가 마우스 올리는 순서를 정의할 수 없기때문에 전부 초기화 기준으로 설정
    smallThum[0].style.border = '0' //or 'none'
    smallThum[1].style.border = '0'
    smallThum[2].style.border = '0'
    smallThum[3].style.border = '0'
    smallThum[4].style.border = '0'
    //현재 마우스 올린 작은썸변수에 테두리 생성(this(현재이벤트대상)활용)
    target.style.border = '3px solid #0aa5ff'
    return bigThum.src = `./image/big${num}.jpg`
}
// this
// * 특정 DOM요소 이벤트(click, mouseover...) 내에서 작성하는 키워드
// * 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용할 수 있기 때문에 쉬운 선언이 가능하다.
// 주의점) 화살표함수에는 사용불가, 익명함수에서만 사용가능
// DOM.이벤트리스너(이벤트, ()=>{ this }) //X
// DOM.이벤트리스너(이벤트, function(){ this }) //O
// 주의점2) 이벤트 내에 호출하는 함수라 해도 함수 내부에 this를 직접적으로 작성해선 안되며 이벤트 익명함수 내에서 작성해야한다.
// DOM.이벤트리스너(이벤트, 익명함수(){ 함수호출(this)} ) //O
// function 호출한함수명(){ this } //X