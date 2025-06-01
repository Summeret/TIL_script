//birth_flower.js
//사용자가 생년월일을 입력하고 버튼을 클릭하면 함수 실행
const userYear = document.querySelector('input[name=user_year]');
const userMonth = document.querySelector('.user_month');
const userDay = document.querySelector('input[name=user_day]');
const resultBtn = document.querySelector('#flower_chk_btn')
const result = document.querySelector('#result')
console.log(userYear,userMonth,userDay,resultBtn,result);
const birthday_flower = [          
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'프리지아',
        content:'순결, 우정',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
console.log(birthday_flower);
resultBtn.addEventListener('click',function(){
    const month = parseInt(userMonth.value);
    const flower = birthday_flower.find(item => item.month === month);
    if(flower){
    result.innerHTML = `${month}월의 탄생화는 ${flower.flower}입니다. <br>꽃말: <em>${flower.content}</em>`;
    }
})
