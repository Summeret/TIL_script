//elseif.js
const aniImg = document.querySelector('main > img');
const topBtn = document.querySelector('.control .top');
const downBtn = document.querySelector('.control .down');
const leftBtn = document.querySelector('.control .left');
const rightBtn = document.querySelector('.control .right');
const inputMove = document.querySelector('.io input');
let currentY = 0; //이미지의 y 초기좌표
let currentX = 0; //이미지의 x 초기좌표
console.log(aniImg, topBtn, downBtn, leftBtn, rightBtn, inputMove);
//aniImg.style.transform = 'translate(20px, 20px)';
//↓버튼 클릭 시 이미지를 아래방향으로 20px 이동시키기
downBtn.addEventListener('click',downFunc)
topBtn.addEventListener('click',topFunc)
rightBtn.addEventListener('click',rightFunc)
leftBtn.addEventListener('click',leftFunc)
function downFunc(){
    currentY += 20;
    btnTranslate()  //동적 -> 변수생성
}
function topFunc(){
    currentY -= 20;
    btnTranslate()
}
function rightFunc(){
    currentX += 20;
    btnTranslate()
}
function leftFunc(){
    currentX -= 20;
    btnTranslate()
}
//반복되는 값이 있으면 함수로 만들어서 호출하는 방법이 효율적이다.
function btnTranslate(){
    aniImg.style.transform =`translate(${currentX}px, ${currentY}px)`;
}

//input입력창에 허용 키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
// 허용 키 : 왼/오른/위/아래
inputMove.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        //console.log('엔터확인'); //특정키만 인식하게 함
        //추가로 작성해도 여기안에 작성해야 enter 작동
        //왼쪽이라고 입력 후 Enter 실행 시 이미지가 왼쪽 20px 이동
        if(inputMove.value === '왼쪽'){ //조건1
            currentX -= 20;
            inputMoveFunc()
        }else if(inputMove.value === '오른쪽'){ //조건1 거짓일때 검사하는 조건2
            currentX += 20;
            inputMoveFunc()
        }else if(inputMove.value === '위'){ //조건1,2 거짓일때 검사하는 조건3
            currentY -= 20;
            inputMoveFunc()
        }else { //조건1,2,3 모두 거짓일때 실행 결과
            inputMove.value === '아래'
            currentY += 20;
            inputMoveFunc()
        }
    }
})
//반복되는 값이 있으면 함수로 만들어서 호출하는 방법이 효율적이다.
function inputMoveFunc(){
    aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`;
    inputMove.value = '';
}