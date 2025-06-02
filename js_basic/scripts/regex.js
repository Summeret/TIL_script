//regex.js
//정규표현식 REgEX
//필터시작과 끝 표시 /
//필터.test('검사문자')
//상황1. 쇼핑몰 리뷰 작성 시 리뷰 내용에 ' 별로' 라는 단어 입력금지
const userText = '구매하지 마세요 별로에요';
const regexFilter = /별로/
let result = regexFilter.test(userText);
console.log(result); //true

//상황2. 쇼핑몰 리뷰내용에 '별로',;최악' 단어금지
//필터에서 (별로|최악)
const reviewTxt = '별로에요. 완전최악'
const reviewFilter = /(별로|최악)/
result = reviewFilter.test(reviewTxt); //let 재사용할때는 앞에 let 붙이지말고 쓰기
console.log(result);
console.log('----------회원가입 알고리즘(정규표현식)---------');
//회원가입 알고리즘
//아이디에 영어만 입력하능한(정규표현식) 조건 생성
//실시간 추적 event -> input
const userId = document.querySelector('input[name*=id')
const userIdErr = document.querySelector('.error_id')
console.log(userId, userIdErr);
userId.addEventListener('input',idChk) 
//function inputTest(){return console.log('입력확인')}
function idChk(){
    if(!/^[a-zA-Z]+$/.test(userId.value)){
        userIdErr.textContent = '영어만 입력가능합니다.'
        //영어가 아니면(false) 실행(true) -> 참을 거짓으로 반전 논리연산자 NOT(!)
        // /^[a-zA-Z]+$/ 영어만 입력가능한 정규표현식
    }else{
        return userIdErr.textContent = '';
    }
}

//숫자만 입력가능한 정규표현식 활용 사용자 나이 받기
const userAge = document.querySelector('input[name*=age]')
const userAgeErr = document.querySelector('.error_age')
console.log(userAge, userAgeErr);
userAge.addEventListener('input',ageChk)
function ageChk(){
    //console.log(0);
    if(!/^\d+$/.test(userAge.value)){
        userAgeErr.textContent = '숫자만 입력가능합니다.'
        //input -> vlaue  |  그외 태그 -> textContent
        // /^\d+$/ 숫자만 입력가능한 정규표현식
    }else{
        return userAgeErr.textContent = '';
    }
}

//알파벳과 숫자 조합만 가능한 비밀번호 칸 정규표현식 만들기
const userPw = document.querySelector('input[name*=pw]')
const userPwErr = document.querySelector('.error_pw')
console.log(userPw, userPwErr);
userPw.addEventListener('input',pwChk)
function pwChk(){
    //console.log(0)
    if(!/^[a-zA-Z0-9]+$/.test(userPw.value)){
        userPwErr.textContent = '알파벳과 숫자조합만 입력가능합니다.'
        // /^[a-zA-Z0-9]+$/ 알파벳과 숫자 조합만 가능한 정규표현식
    }else{
        return userPwErr.textContent = '';
    }
}

//리뷰 최대글자수 제한 알고리즘
//리뷰 작성 시 입력 글자수 실시간 출력 . current
//현재 포맷(제목, 내용, 리뷰 등)에 맞는 최대 글자수 초기 표시 .max
//리뷰 작성 시 최대글자수를 오버하면 출력 메세지 출력
const userReview = document.querySelector('textarea[name=review]')
const reviewCurrentNum = document.querySelector('.current')
const reviewMax = document.querySelector('.max')
const reviewErr = document.querySelector('.error_msg')
const reviewMaxNum = 100; //최대입력수제한
console.log(userReview, reviewCurrentNum, reviewMax, reviewErr);
//이벤트 전 초기세팅
reviewMax.textContent = reviewMaxNum;
//이벤트 실시간
userReview.addEventListener('input',reviewFunc)
function reviewFunc(){
    //글자 수 속성 length
    //reviewCurrentNum.textContent = userReview.value.length; //글자수 실시간 추적
    if(/^.{0,100}$/.test(userReview.value)){
        //0~100자 입력 사이일때 (참 결과)
        reviewCurrentNum.textContent = userReview.value.length;
        //참일때 실시간추적
    }else{
        //100자보다 클때 (거짓결과)
        reviewErr.textContent = '최대 100자까지 입력가능합니다.'
        //입력비활성화
        //userReview.disabled = true; //비활성화
        //html에서 textarea 속성 maxlength="100" //100자 넘으면 더 이상 입력불가
    }
}