// js_level2_m_naver_login/login.js
//main .lang_group 기준
//초기설정 : 한국어~중국어 옵션 숨기기
//#lang_select 클릭 시 .lang_open 보이기
//.lang_open이 보이는 상태라면 #lang_select 클릭 시 .lang_open 숨기기
//변수생성 -> 이벤트제작 -> 이벤트 만족 시 실행함수 (중간중간 콜솔 자주체크)

const langSelect = document.querySelector('#lang_select');
const langOpen = document.querySelector('.lang_open');
console.log(langSelect, langOpen);
langOpen.style.display = 'none';
//참(보이기) 거짓(숨기기)
let openif = false; //초기 거짓(숨겨진) 상태
langSelect.addEventListener('click',()=>{  //같은 이벤트안에서 작성
    if(openif==false){ 
        //langOpen 숨겨진 상태면 보이기
        langOpen.style.display = 'flex';
        openif = true; //상태값 변경
    }else if(openif== true){
        //langOpen 보이는 상태면 숨기기
        langOpen.style.display = 'none';
        openif = false; //상태값 변경
    }
})

//네이버 로그인 에러메세지 알고리즘
/* 
1. 아이디입력 안하고 로그인 버튼 누르면 아이디 혹은 전화번호 입력하라는 에러메시지
2. 아이디는 입력하고 비밀번호는 입력안하고 로그인 버튼 누르면 오류 혹은 반대
3. 둘다 틀렸을 경우 둘 중 하나가 틀렸으니 확인하라는 메세지

조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
    결과) 아이디 또는 전화번호를 입력해주세요
조건2) 아이디를 입력하고 비밀번호를 입력하지 않고 로그인 클릭 시
    결과) 비밀번호를 입력해주세요
조건3) 아이디, 비밀번호를 모두 입력하고 로그인 클릭 시 정보가 틀렸을 때
    결과) 아이디 또는 비밀번호가 잘못되었습니다. 아이디와 비밀번호를 정확히 입력해주세요.
조건4) 조건 3 상황에서 로그인 실패가 3회 이상일 때
    결과) 영수증 퀴즈와 '아이디(로그인 전화번호, 로그인 전용 아이디), 비밀번호 또는 자동입력 방지 문자를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요' 메세지 출력
*/

//조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
//  결과) 아이디 또는 전화번호를 입력해주세요.
const userId = document.querySelector('input[name=user_id');
const userPw = document.querySelector('input[name=user_pw');
const errorMsg = document.querySelector('#login_frm .error_msg');
const loginBtn = document.querySelector('#login_btn');
console.log(userId, userPw, errorMsg, loginBtn);

loginBtn.addEventListener('click',()=>{
    //if문 활용
    /* if(userId.value == '' && userPw.value == ''){  //userId와 userPw의 값이 모두 빈문자(입력하지 않고)와 같은가
        errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요.';
    } */
    
    //삼항조건 활용 조건 1 (위)if문 삼항조건으로 바꾸기
    //조건식 ? 조건식참결과 : 조건식거짓결과
    //조건결과대입변수 = 조건식 ? 조건식참결과 : 조건식거짓결과
    errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해주세요.' : ''
})