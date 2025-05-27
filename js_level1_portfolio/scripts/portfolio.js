//portfolio.js
//프로젝트소개 팝업 알고리즘
//1. 팝업 숨기기 (popup_bg) display:none;
//2. 썸네일 이미지(a) 클릭 시 팝업 보이기 (popup_bg)
//3. (팝업 실행 기준) 배경 클릭 시(popup_bg) 팝업 숨기기 (popup_bg)
// 프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
// 1. 클릭한 대상의 이미지 경로 확인
// 2. 위 경로를 팝업 이미지의 경로에 대입
// a클릭하면 그 자식의 경로를 확인하고 popup_bg의 자식의 자식의 src에 그 경로를 대입해라

// 알고리즘 기준으로 반복해야하는 데이터를 변수로 생성하기
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a')
console.log(popupBg, thumbNailA);

//1. 팝업 숨기기
popupBg.style.display = 'none';
//2. 썸네일 이미지(a) 클릭 시 팝업 보이기
// 변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
thumbNailA[0].addEventListener('click',function(){
    console.log(0); //작동테스트
    console.log(this); //이벤트 객체 자동인식하는지 확인 -> 객체이름을 안적어도됨
    console.log(this.children[0].src); //콘솔에 배열형태로 뜨면 무조건 배열로 잡아줘야한다.
    console.log(popupBg.children[0].children[0].src); //팝업bg의 자식의 자식의 src확인
    popupShow(this); //팝업 출력 함수 호출 (함수개별호출 시 괄호 붙이기)
}) //클릭 시(이벤트)
thumbNailA[1].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)
thumbNailA[2].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)
thumbNailA[3].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)
thumbNailA[4].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)
thumbNailA[5].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)
thumbNailA[6].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)
thumbNailA[7].addEventListener('click',function(){
    popupShow(this);
}) //클릭 시(이벤트)

function popupShow(target){
    console.log('------------함수시작위치와 에러체크')
    //console.log(this.children[0]); //정상체크
    //this는 특정이벤트 안에서만 사용가능 -> 함수로 불러오는 구조로 되어있어야만 한다.
    popupBg.style.display = 'flex'; //보이기 하는 함수
    // css에서 flex로 설정했기때문에 js에서도 flex로 작성해야한다.
    // -> 원래 가지던 속성을 그대로 가져오기
    //popupBg.children[0].children[0].src = this.children[0].src //에러
    // this를 매개변수로 변경해야한다.
    popupBg.children[0].children[0].src = target.children[0].src
    return // 함수 종료선언
}
//3. (팝업 실행 기준) 배경 클릭 시(popup_bg) 팝업 숨기기
popupBg.addEventListener('click',popuphide)
function popuphide(){
    return popupBg.style.display = 'none';
}