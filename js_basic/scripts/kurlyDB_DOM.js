//kurlyDB_DOM.js
//<ul id="container"> DB 무한스크롤 삽입
const container = document.querySelector('#container');
//무한스크롤로 인해서 불러오는 DB값이 매번 다르므로 필요한 변수 생성
//한번에 출력되는 개수는 4
const itemLoad = 4;
//스크롤내릴때 인식하는 반복문의 초기값
const startIndex = 0;
//스크롤내릴때 인식하는 반복문의 종료값(조건)
let endIndex = startIndex + itemLoad; //초기값 + 출력개수
console.log(itemLoad, startIndex, endIndex);
let isLoading = false; //로딩완료 true, 로딩미완료 false
//모든곳에서 활용하기 위해 전역변수로 생성, 값이 변경되므로 let으로 생성
console.log(container);

loadMoreContent() //처음보이는 제품나열을 위한 함수 호출
function loadMoreContent(){
    //1. 태그만들기 (ul밑 자식으로 들어가는 li태그)
    //2. 이미지 -> 제품명 -> 요악설명->가격->할인가->세일->리뷰 순으로 데이터 삽입하기
    //할인가 계산식
    //(원가 * (1 - 할인율 / 100)).toLocalestring('ko-kr')
    //Math.round((원가 * (1 - 할인율 / 100))).toLocalestring('ko-kr')
    
    //변수를 활용한 반복문
    for(let i=startIndex; i<endIndex; i++){ //반복할 대상은 전부 for안에 넣기
        const newLi = document.createElement('li');
        newLi.innerHTML = `<img src="${kurlyDB[i].src}" alt="${kurlyDB[i].name}">`
        //대입연산자때문에 이전데이터가 지워지므로 복한연산자로 작성한다.
        //css를 자유롭게 하기 위해서 개별 class이름 지정하기
        newLi.innerHTML += `<p class="name">${kurlyDB[i].name}</p>` 
        newLi.innerHTML += `<p class="summary">${kurlyDB[i].summary}</p>`
        newLi.innerHTML += `<p class="price_original"><del>${(kurlyDB[i].price).toLocaleString('ko-kr')}원</del></p>`
        //()로 먼저 인식하도록 우선순위 묶어주고 가격 세자리수마다 , 붙이는 함수 toLocalestring('ko-kr') => 한국기준
        newLi.innerHTML += `<p class="price">${Math.round((kurlyDB[i].price * (1 - kurlyDB[i].sale / 100))).toLocaleString('ko-kr')}원</p>`
        //Math.round() 소수점이하 반올림 -> Math는 숫자만 계산하므로 괄호를 toLocalestring 앞까지 묶어준다.
        newLi.innerHTML += `<p class="sale">${kurlyDB[i].sale}%</p>`
        newLi.innerHTML += `<p class="review">${kurlyDB[i].review}+</p>`
        container.appendChild(newLi);
        console.log(newLi);
    }
    //위 for문 한번 출력 후 스크롤이벤트로 인해 재출력 시 endIndex값이 다음 출력되는 개수만큼 증가되게 수정
    endIndex += itemLoad;
    isLoading = false;
}

//광고 뷰포트 영역에서 등장하는 자바스크립트
const ad = document.querySelectorAll('.ad p'); //나중에 변수이름만 생성해서 밑에 for(69번줄)에 변수이름만 바꿔넣어서 활용가능
console.log(ad);

//스크롤 이벤트
window.addEventListener('scroll',()=>{
    
    //1. 요소가 뷰포트와의 거리가 어떻게 되는지 확인하는 변수
    /* const adTop = ad[0].getBoundingClientRect().top;
    console.log(adTop);
    //2. 요소가 뷰포트의 80%지점에 도착했을 때
    if(adTop < window.innerHeight * 0.8){
        ad[0].classList.add('active'); //나타나기
    }else{
        ad[0].classList.remove('active'); //올리면 사라지기
    }
    //ad[1]
    if(adTop < window.innerHeight * 0.8){
        ad[1].classList.add('active'); //나타나기
    }else{
        ad[1].classList.remove('active'); //올리면 사라지기
    } */
    
    //(위)반복문 활용
    for(let i of ad){ //ad여러개를 i가 전부 인식한다.
        const adTop = i.getBoundingClientRect().top; //ad를 모두 인식 i의 위치 추적

        if(adTop < window.innerHeight * 0.9){
            i.classList.add('active');
        }else{
            i.classList.remove('active');
        }
    }

    //현재 뷰포트 하단 위치 window.scrollY + window.innerHeight
    //문서 전체 위치 document.documentElement.scrollHeight
    const currenScroll = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrollValue = 0.8; //0~1 기준으로 사용자의 스크롤 위치 파악값
    //console.log(`현재 뷰포트값 ${currenScroll}, 전체높이 ${totalHeight}`);

    //현재 스크롤 위치가 전체 스크롤 위치대비 80% 뷰포트 위치에 있는지 + DB로드 안된 상태인지
    //현재 뷰포트값 >= 전체스크롤값 * 사용자위치값
    if(currenScroll >= totalHeight * scrollValue && !isLoading){
        //로드된 종료인덱스가 DB전체 개수보다 같으면 종료
        if(endIndex >= kurlyDB.length){ return }
        //console.log('새로운 콘텐츠 로드 중....')
        isLoading = true;
        loadMoreContent();
    }

}) //스크롤이벤트 종료위치

