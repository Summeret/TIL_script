# 오늘의 집 상품 주문영역 알고리즘
## 0. 페이지 경로 클릭 시 해당 페이지로 이동링크 -> a태그 (JS x)
* line 15~21 index.html `<a href="#">반려동물</a>`
## 1. 작은 썸네일 이미지 마우스 올렸을 시 큰 이미지 변경
* ex) thum4에 마우스 올렸다 -> big 이미지의 src속성값이 big4 변경 (태그를 변수로)
* line 4~18 Thumnails.js
## 2. 큰 이미지에서 마우스 드래그 시 이미지 좌우 변경
## 3. 제목 북마크 아이콘 클릭 시 회원일 경우 북마크 등록 / 회원이 아니라면 로그인페이지 이동
## 4. 제목 옆 공유하기 아이콘 클릭 시 카카오톡공유과 주소공유 가능
## 5. 리뷰 클릭 시 같은 페이지의 하단 리뷰위치로 스크롤 이동
* `<section id="review">리뷰</section>` 이동할 위치태그 생성
* `<a href="#review" class="reivew">` (위)위치로 이동할 링크연결
* `body,html {scroll-behavior:smooth;}` 스크롤 애니메이션 추가
## 6. 할인 전 옆 i 아이콘 클릭 시 판매정보 출력
## 7. 내일출발 i 클릭 시 배송정보 출력
## 8. 도착예정 클릭 시 평일기준 확률정보와 함께 배송정보 출력
## 9. '울리' 브랜드 클릭 시 해당 브랜드 페이지로 이동
## 10. 브랜드 옆 북마크 클릭 시 위 (3)번과 동작 동작
## 11. 상품옵션 선택 시 색상 선택 후 사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가
* **select태그 비활성화 속성** : `DOM.disabled = true`
* **select태그 활성화 속성** : `DOM.disabled = false`
* color select 대상에 change 이벤트 적용하고 color 변경 시 호출하는 함수에 size select 활성화하는 함수 연결 - line 2~13 product.js
-------
## 12. 색상->사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
### 12-1 위 12번 진행 전 새로운 요소 (.order.select) 숨기기
### 12-2 위 12번 색상,사이즈 선택 시 새로운 요소 (.order.select) 보이기
* line 20~49 product.js
## 13. 수량 조정 시 1~9999개까지 선택 가능 기능
### 13-1 `-`버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다 메세지 출력
### 13-1 `+`버튼 클릭 시 수량값이 9999보다 크면 1~9999개까지 선택가능합니다 메세지 출력
### 13-3 `-`,`+`버튼 클릭 시 수량이 범위값 안에서 1씩 감소 또는 증가
## 14. 수량 조정 시 수량에 따라 가격이 증가
* 13,14번 line 51~91 product.js
## 15. 위 (12)번에서 나온 박스의 X 클릭 시 주문 정보 모두 삭제
* line 93~103 product.js
## 16. 위 (12)번을 진행하지 않은 상태에서 장바구니, 바로구매 클릭 시 "옵션 선택 후에 버튼을 클릭해주세요."경고창 출력
## 17. 위 (12)번을 진행한 상태에서 장바구니 버튼 클릭 시 새로운 팝업창이 실행되면 추가 광고상품과 쇼핑 게속하기, 장바구니 가기 버튼과 함께 상품이 담겼다는 메세지출력(비회원가능)
## 18. 위 (12)번을 진행한 상태에서 구매하기 버튼 클릭 시 비회원일 경우 로그인 화면 새창 출력 / 로그인한 회원일 경우 구매페이지 이동