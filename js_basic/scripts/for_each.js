//for_each.js
//forEach
//for ~ in 요소의 인덱스에 접근하는 반복문
//for ~ of 요소의 각 객체에 접근하는 반복문
//forEach 요소의 인덱스와 객체에 동시 접근가능한 반복문
//forEach 문법
//변수.forEach(function(객체,인덱스,배열){반복결과})
//변수.forEach((객체,인덱스,배열)=>{반복결과})
const btn = document.querySelectorAll('.btn');
console.log(btn);
// 1. 반복문없이 mouseover, mouseout 이벤트 작성법
/* btn[0].addEventListener('mouseover',()=>eventColor('#ea2f14', btn[0]))
btn[0].addEventListener('mouseout',()=>eventColor('#fcef91',btn[0]))
btn[1].addEventListener('mouseover',()=>eventColor('#ea2f14', btn[1]))
btn[1].addEventListener('mouseout',()=>eventColor('#fcef91',btn[1])) */

// 2. 반복문 for ~ of 활용 mouseover, mouseout 이벤트 작성법
/* for(let i of btn){
    console.log(i); //두개 동시에 인식
    i.addEventListener('mouseover',()=>eventColor('#0abab5',i))
    i.addEventListener('mouseout',()=>eventColor('#adeed9',i))
} */

// 3. forEach 활용 mouseover, mouseout 이벤트 작성법
btn.forEach((obj,ind,arr)=>{
    console.log(obj,ind,arr);
    obj.addEventListener('mouseover',()=>eventColor('#b6f500',obj))
    obj.addEventListener('mouseout',()=>eventColor('#fffabc',obj))
})

function eventColor(value, target){
    return target.style.backgroundColor = value;
}

console.log(`------ 전체약관 JS제작`);
//전체동의하기 클릭 시 나머지 필수약관들 모두 선택하기
//객체.checked 선택상태 만들어주는 속성
const lawAllChk = document.querySelector('#all'); //전체동의하기
const lawChk = document.querySelectorAll('input[name^=law]'); //나머지
console.log(lawAllChk, lawChk);
lawAllChk.addEventListener('click',function(){
    console.log(this.checked) //활성화(true) 비활성화(false)
    if(this.checked == true){ //현재(this)선택상태(checked)가 선택됐다면(true)
        for(let i of lawChk){ //모든 lawChk에 반복접근하여 그 이름을 i로 사용한다
            i.checked = true; //i(lawChk)의 선택상태(checked)는 참(true)이다
        }
    }else{ //위 if 조건이 거짓이라면(산택안된상태라면)
        for(let i of lawChk){
            i.checked = false;
        }
    }
})

console.log(`----------------------------`);
console.log(`-------------- 탭(카테고리) JS`);
//탭제목 클릭 시 해당되는 내용만 보이기 (나머지 내용 숨기기)
//탭1 -> 탭 내용1
//탭2 -> 탭 내용2
//초기설정) 내용1만 보이기
const tabTitle = document.querySelectorAll('aside a');
const tabContents = document.querySelectorAll('.tab_c');
console.log(tabTitle, tabContents);
//모든 내용 숨기고 첫번째 내용만 보이기 (반복문 활용)
for(let i of tabContents){
    console.log(i);
    i.style.display = 'none';
}
tabContents[0].style.display = 'block';

//forEach로 객체와 인덱스 동시 활용법
//객체(제목 접근)
tabTitle.forEach((obj,ind)=>{
    //console.log(obj,ind);
    obj.addEventListener('click',()=>{
        //클릭한 대상과 동일한 인덱스 내용 보이기
        console.log(ind);
        //순서중요! 숨기고 보이기(잘 보이게 해놓고 다 숨겨버리는 의미없는 짓 하지말기)
        for(let i of tabContents){ i.style.display = 'none';}
        tabContents[ind].style.display = 'block';
    })
})