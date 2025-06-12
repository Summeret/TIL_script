//timer2.js
let num = 2; //0, 400, 800 출력을 위한 변수
const slideContainer = document.querySelector('.slide_container');
slideContainer.style.transition = 'transform 0.3s'

const slideTimer = setInterval(()=>{
    num++;
    if(num>2){num=0}
    slideContainer.style.transform = `translateX(-${400*num}px)`;
    console.log(`현재 num:${num}, x축값:${400*num}`);
},3000)
// 처음에 보고 있는게 0번(1번슬라이드)이기때문에 1번으로 시작해야하고 다시 돌아올때는 0으로 돌아와야한다. (0번부터 시작하면 1번슬라이드가 보이는 형태에서 3초가 더 추가되서 1번 슬라이드가 다른 슬라이드보다 길게 보인다.)



//콜백함수
/* setInterval(numTimer,2000);
function numTimer(){
    num++;
    console.log(num);
} */

//익명함수
/* const numTimer = setInterval(function(){
    num++;
    console.log(num);
},2000); */

//화살표함수
/* const numTimer = setInterval(()=>{
    num++;
    console.log(num);
},2000); */

//이벤트의 다양한 함수 호출방법(콜백->화살표함수->익명함수 순서)
//DOM.addEventListener('event',콜백함수)
//DOM.addEventListener('event',()=>{})
//DOM.addEventListener('event',function(){})

//타이머의 다양한 함수 작성방법
//setInterval(콜백함수, 밀리초);
//  => 콜백함수를 재사용할 수 있다.
//const 변수명 = setInterval(익명함수, 밀리초);
//  => 타이머를 담은 변수명을 타이머 정지, 다시재생 등의 제어를 할 수 있다.
