//insta.js
//인스타그램 알고리즘
//1. 프로필 클릭 시 개인 프로필 페이지로 이동기능 (O - 페이지제작)
//별도의 동적기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크 걸기
//동적기능 예) 해외접속IP차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무확인 등
//클릭 == 터치 동일 이벤트 처리
const profileDOM = document.querySelector('.profile');
console.log(profileDOM);
profileDOM.addEventListener('click',profilsGo);
function profilsGo(){
    return window.location.href = 'insta_profile.html'; //주소,링크 실행하는 내장함수 window.location.href
}

//2. 우측 메뉴 클릭 시 저장~신고 등 기능 실행 (O - 페이지 제작)
//3. 사진 기준 한번 클릭 시 반응없음 (x js)
//4. 사진 두번 클릭 시 좋아요 등록 (O)
//제어하고 싶은게 있다면 무조건 전부 변수로 만들어줘야한다.
const photo = document.querySelector('main > .photo');
const likeImage = document.querySelector('.like img'); //메인사진을 더블클릭했을때 좋아요 아이콘이 변경되는 이벤트를 걸어주기 위해 변수생성
console.log(photo,likeImage);
console.log(likeImage.src); //속성도 console 출력 확인가능
//객체.속성  // 속성를 읽는다
//객체.속성 = 값 // 속성을 변경하겠다
photo.addEventListener('dblclick',likeOn); //dbl 더블의 약자
function likeOn(){
    //console.log('test'); //동작이 되는지 테스트가능
    return likeImage.src = './images/like_on.png'; //더블클릭하면 이미지 경로(src)가 off -> on으로 변경
}

//5. 하트 아이콘 클릭 시 한번 터치 종아요(O), 다시 터치 좋아요 해제 반복(x - 조건문 공부필요)
//이미지 더블클릭 하기 전 기준
//위 likeImage 변수 활용 (추가 변수 X)
//호출함수 이미 준비됨(likeOn)
//likeImage.addEventListener('click',likeOn); //이벤트만 생성
//(위)likeImage 클릭 시 실행되는 콜백함수
//(아래)likeImage객체가 a태그로 클릭 시 새로고침되서 스크롤이 위로 올라가는 문제 해결을 위한 방법
//콜백함수 호출이 아닌 익명함수 또는 화살표함수 이용필수
//익명함수 또는 화살표함수로 작성 시 이벤트 앞 객체정보가 함수의 매개변수로 자동으로 대입된다.
//위 매개변수가 받은 정보를 확인하려면 매개변수에 변수명(e)을 작성하고 console.log()로 확인할수있다.
likeImage.addEventListener('click',function(e){
    //console.log(e);
    e.preventDefault(); //태그의 동적기능을 취소 (a태그의 새로고침)
    likeOn(); //익명함수안에서 함수호출할때는 ()붙이기
})

//6. 댓글 아이콘 클릭 시 댓글창 실행(O - 페이지 제작), 실행화면에서 바깥쪽 영역터치 입력창 닫힘 (x - 조건문 공부필요)
//7. 공유 아이콘 클릭 시 밑에서 공유할 dm목록과 외부 공유가능한 앱들이 나타남, 바깥쪽 영역 터치 시 닫힘 (O - 페이지제작)
//8. 저장 아이콘 클릭 시 검정색으로 활성화됨, 저장(x-DB필요)과 동시에 컬렉션 선택화면 출력(O), 바깥쪽 터치 시 닫힘 
//9. 글 1줄 날짜만 미리표시, 글 터치 시 전체내용 (나머지 글 줄과 해시태그 포함) 펼치기 (O)
//글 1줄, 날짜만 미리표시
//밑 tag 변수 활용
const storyDOM = document.querySelector('.story');
const dateDOM = document.querySelector('.date');
const tagDOM = document.querySelector('.tag'); //밑에 있던 tagDOM 변수를 위로 옮김
console.log(storyDOM, dateDOM);
//함수를 생성하지 않고 바로 작성한 이유는 반복이 아니고 즉시 실행되지 때문에 함수를 만들 필요가 없다 (but 사용자가 반복실행할 경우에는 함수 생성)
tagDOM.style.display = 'none'; //변수선언보다 먼저 작성해서 에러발생 -> 밑에 있던 변수를 위로 올려주면 해결
//글 클릭 시 태그 표시
storyDOM.addEventListener('click',tagShow);
function tagShow(){
    return tagDOM.style.display = 'block';
}

//10. 태그 터치 시 해당 태그 사용 게시글 페이지로 이동 (O - 페이지제작)

console.log(tagDOM);
tagDOM.addEventListener('click',tagGo);
function tagGo(){
    return window.location.href = 'insta_tag.html';
}

//11. 날짜 기능없음 (x js)
//추가페이지 목록 : 프로필페이지(insta_profile.html), 저장~신고페이지, 댓글창페이지, 공유페이지, 컬렉션 선택 화면, 해시태그 작성 게시물페이지(insta_tag.html)