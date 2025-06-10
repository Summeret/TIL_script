//to_do_list.js
//오늘의 할일 JS
// 1. 텍스트박스에 할일을 입력하고 등록 버튼을 클릭 시 화면에 등록되면서 출력
// 2. 완료된 일정을 클릭 시 취소선이 그어진다.
// 3. X버튼 클릭 시 일정 삭제

// 1. 할 일 입력 후
// 2. 등록버튼 클릭 시(클릭 이벤트 내에서 1번 입력값 인식)
// 3. '여기에 할 일이 등록됩니다' 기존 li의 다음 형제 위치에 입력한 정보 등록
// 변수 : 할 일, 등록버튼, 기존li 위치 변수
// 위 알고리즘 3번 작업 시 주의사항
// ul 태그에 마지막 자식 위치(appendchild)로 li 추가(<li>"X" creatElement()가능)
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul')
console.log(toInput, toBtn, ul);
toBtn.addEventListener('click',()=>{ //==> 클릭했을때
    if(toInput.value == ''){ //input의 값이 입력되지 않았을 경우
        //경고창으로 '입력 후 등록하세요.' 메세지 출력
        alert('입력 후 등록하세요');
    }else{
        //console.log(toInput.value); //input에 입력한 내용(값 / value)이 콘솔에 출력
        //ul.appendChild("<li>abc</li>") //문자열삽입에러 X
        let li = document.createElement('li'); //==> 새로운 li를 만들어서
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`; //==> input 입력한 text와 함께
        console.log(li); //<li></li>
        ul.appendChild(li); //==> ul의 마지막 자식으로 넣는다
        toInput.value = ''; //입력값 초기화 -> 등록 후 input에 남아있는 이전 할일 지워지게 하기

        //등록된 할일 옆 x 클릭 시 내 부모 li 제거하기
        const close = document.querySelectorAll('.del_btn');
        for(let i of close){  // close(X)버튼을 i로 인식해서 추적
            console.log(i); // 배열형태가 아닌 객체형태로 개별 출력되서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{ //내 부모를 잡기 위해 '나' i 에 이벤트
                i.parentNode.remove(); //부모를 지우기
            })
        }
        const span = document.querySelectorAll('li span');
        for(let i of span){
            console.log(i);
            i.addEventListener('click',()=>{
                i.style.textDecoration = 'line-through';
            })
        }
    } //조건문 else(거짓) 사용자가 값을 입력했을때 블록 위치
}) //toBtn 이벤트 종료위치