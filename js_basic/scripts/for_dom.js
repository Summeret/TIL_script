//for_dom.js
//for(변수초기값; 조건식; 증감식){조건이 참일 때 반복구문} 반복종료
for(let i=0; i<5; i++){console.log(i+1)} //조건말고 출력식을 바꿔서 값을 바꾸기
const li = document.querySelectorAll('ul li');
console.log(li);
for(i=1; i<=2; i++){
    li[i].classList.add('list_active');
    //li[i].style.backgroundColor = 'yellow';
    //li[i].style.textAlign = 'center';
}
//태그 2개 이상 다수를 변수로 대입할 때 querySelectorAll 선언 수 사용 시 [index] 활용하기 (주로 for 반복문과 함께 활용)

//--------------- JS DOM 복제붙여넣기(데스크탑 내비와 모바일 내비에 주로 활용)
//붙여넣기 위치 DOM, 복제 DOM 변수 만들기
const section = document.querySelector('section');
const ul = document.querySelector('ul'); //ul DOM선택
const ulClone = ul.cloneNode(true); //ul 자식,자손포함 복제(ctrl+c 눌러놓은 상태와 같다.)
//cloneNode 작성에 따라 자신만 인식하거나 또는 자식자손까지 인식(true)한다
console.log(section, ul, ulClone);

//복제한 요소 붙여넣기(대상요소의 마지막 자식 위치로 붙여넣기)
section.appendChild(ulClone); //section의 마지막 자식위치에 복제대상 붙여넣기 (ctrl+v)

//----------------------------------------------
//while 반복문 - 조건이 참일 경우 무한반복
//while(조건){ 괄호 안 조건이 참일 경우 실행문 } 조건거짓실행
/* let htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요.');
console.log(htmlQ); //확인(true) 취소(false)
//위 문제를 푸는 학생이 문제를 틀리면 무한반복질문
//문제를 맞추면 -> alert('정답입니다!')
while(htmlQ != false){
    htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요.');
}
alert('정답입니다!');

let cssQ = confirm('background속성 중 position이 포함되어 있다. 맞으면 확인, 틀리면 취소를 누르세요.');
console.log(cssQ);
while(cssQ != true){
    cssQ = confirm('background속성 중 position이 포함되어 있다. 맞으면 확인, 틀리면 취소를 누르세요.');
}
alert('정답입니다!');

let jsQ = confirm('배열은 {}안에 작성한다. 맞으면 확인 틀리면 취소를 누르세요.');
while(jsQ != false){
    jsQ = confirm('배열은 {}안에 작성한다. 맞으면 확인 틀리면 취소를 누르세요.');
}
alert('정답입니다!'); */

/* let num = 1;
while(num <= 10){
    if(num ==5) break;
    console.log(num);
    num++;
}
console.log('============= continue ===========');

for(var i=1;i<=10; i++){
    continue;
    console.log(i);
}
console.log(i);
//조건식 -> 실행 -> continue로 막힘 -> 증감 -> 조건식 반복되다가 11이 되었을때 거짓이 되어서 반복문이 종료되고 전역변수로 밖에 console에 최종적으로 11이 출력됨.

console.log('==========다중반복문');
//for문 안 for문이 추가로 되어 있는 구조(2단, 3단 반복가능)
//첫번째 for문이 한번실행 될 때 두번째(안쪽) for문은 조건이 거짓이 될 때까지 모두 반복실행한다.
for(let i=1; 1<3; i++){ //첫번째 for문
    for(let j=0; j<2; j++){ //두번째 for문
        console.log('첫번째 i값:', i , '두번째 j값', j);
    }//이미 지역 안이기 때문에 i를 중복할 수 없어서 이럴때는 j,k,n,m 을 많이 사용한다.
} */

console.log(`===========다중반복문 활용 구구단`)
for(let i=2; i<=9; i++){ //2
    for(let j=1; j<=9; j++){ //123456789
        console.log(`${i}X${j}=${i*j}`);
    } //2단 for 조건이 거짓일때(9보다 클때) 종료위치
    console.log(`---------------`) //2단 for 종료 구분선 표시
}

const dan99 = document.querySelector('.dan99');
console.log(dan99);
for(let i=2; i<=9; i++){ //2
    for(let j=1; j<=9; j++){ //123456789
        dan99.innerHTML += `${i}X${j}=${i*j}<br>`;
    } //2단 for 조건이 거짓일때(9보다 클때) 종료위치
    dan99.innerHTML += `<hr>`;
}

console.log(`============ES6 for~in`);
const study = [`html`,`css`,`js`]
const abc ='abcdefghijklmn'
const user = {name:'여름', age:'20', area:'서울'}
console.log(study);

for(let i of study){
    //console.log(study[i]);
    console.log(i);
}
for(let i of abc){
    console.log(i);
}
for(let i in user){
    console.log(i); //객체일때는 속성이 먼저 보인다. 값을 보고 싶다면 아래처럼 작성한다.
    console.log(user[i]); //객체인데도 배열개념을 사용해서 인덱스번호를 가져온다
}

for(let i of li){ //querySelectorAll로 생성한 다수 li 변수 접근
    console.log(i);
}