const container = document.getElementById('table-container');

// 테이블 요소를 생성합니다.
const table = document.createElement('table');
table.style.width = '100%';
table.setAttribute('border', '1');

// 테이블의 헤더를 생성합니다.
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['선수', '시즌', '스킬 부스트', '키', '개인기'];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// 테이블의 본문을 생성합니다.
const tbody = document.createElement('tbody');
const data = [
    ['이사크', 'UCL24', '타이거','191','룰렛'],
    ['크라우치', '히어로', '스킬 부스트','201','개인기'],
    ['손흥민', '룰브레이커', '도미네이션','183','룰렛'],
    ['임모빌레', 'UCL24', '결정력','185','힐투힐'],
   // ['수아레스', '해트트릭', '미공개','182','미공개'],
    ['레반도프스키', '24TOTY', '결정력','185','라 크로케타'],
    ['해리 케인', 'FC24', '파워풀','188','힐투힐'],
    ['호나우두', '트로피 아이콘', '막스맨','183','라 크로케타'],
    ['호나우두', '월드컵', '타이거','183','라 크로케타'],
    ['크리스텐센', '언성히어로', '월','187','레인체인지'],
    ['바란', '라이벌', '홀딩','191','레인체인지'],
    ['윌리암 살리바', '24TOTY', '앵커','193','레인체인지'],
    ['조 고메스', '언성히어로', '특별구성','188','힐투힐'],
    ['욘 아르넬 리세', '라이벌', '글레디에이터','185',' 힐투힐'],
    ['킬리안 음바페', 'U-TOTY', '슈퍼카','183','라 크로케타'],
    ['카림 벤제마', 'FC24', '결정력','185','룰렛'],
    ['르베르 피레스', 'NYI', '아키텍트','187','룰렛'],
    ['자이르지뉴', 'NYI', '세컨드 스트라이커','173','레인보우'],
    ['게오르게 하지', 'NYI', '아키텍트','174','룰렛'],
    ['소크라테스', 'NYI', '세컨드 스트라이커','192','룰렛'],
    ['페트르 체흐', 'NYI', '다이빙','196','스텝오버'],
    ['슈바인슈타이거', 'NYI', '짧은패스','183','힐투힐'],
    ['폴 스콜스', 'NYI', '마에스트로','168','라 크로케타'],
    ['카를루스 아우베르투', 'NYI', '태클','180','힐투힐'],
    ['사비 알론소', 'NYI', '주장','183','라 크로케타'],
    ['젠나투 가투소', 'NYI', '월','177','레인체인지'],
    ['디보르 슈케르', 'NYI', '결정력','183','라 크로케타'],
    ['로빈 반페르시', 'NYI', '파워풀','183','룰렛'],
    ['필립 람', 'NYI', '홀딩','170','힐투힐'],
    ['지쿠', 'NYI', '마에스트로','172','라 크로케타'],
    ['베론', 'NYI', '스나이퍼','186','룰렛'],
    ['반데르사르', 'NYI', '라스트라인','198','스텝오버'],
    ['반니스텔로이', 'NYI', '타이거','188','힐투힐'],
    ['셰우첸코', 'NYI', '결정력','183','힐투힐'],
    ['차범근', 'NYI', '슈퍼카','179','룰렛'],
    ['차범근', '피어리스', '타이거','179','라 크로케타'],
    ['손흥민', 'U-TOTY', '결정력','183','라 크로케타'],
    ['리오넬 메시', 'U-TOTY', '마에스트로','169','라 크로케타'],
    ['홀란', 'U-TOTY', '아키텍트','195','룰렛'],
    ['더브라위너', 'U-TOTY', '스나이퍼','181','라 크로케타'],
    ['벨링엄', 'U-TOTY', '마에스트로','186','룰렛'],
    ['로드리', 'U-TOTY', '월','191','힐투힐'],
    ['후벵 디아스', 'U-TOTY', '월','187','레인체인지'],
    ['버질 반데이크', 'U-TOTY', '홀딩','195','레인체인지'],
    ['제레미 프림퐁', 'U-TOTY', '홀딩','172','라 크로케타'],
    ['테오', 'U-TOTY', '플라이윙','184','힐투힐'],
    ['알리송', 'U-TOTY', '글러브','193','스텝오버'],
    ['크리스티아누 호날두', 'U-TOTY', '결정력','187','라 크로케타'],
    ['해리 케인', 'U-TOTY', '막스맨','188','힐투힐'],
    ['김민재', 'U-TOTY', '월','190','레인체인지'],
    ['발베르데', 'U-TOTY', '스나이퍼','182','라 크로케타'],
    ['알렉산더 아놀드', 'U-TOTY', '플라이윙','180','라 크로케타'],
    ['토니 크로스', 'U-TOTY', '플레이메이커','183','룰렛'],
    ['테어슈테겐', '24TOTY', '다이빙', '187', '스텝오버'],
    ['에데르송', '24TOTY', '라스트라인', '188', '스텝오버'],
    ['루카 모드리치', '24TOTY', '주장', '172', '라 크로케타'],
    ['마르키뉴스', '24TOTY', '스톤', '183', '힐투힐'],
    ['귄도안', '24TOTY', '미드엔진', '180', '라 크로케타'],
    ['비니시우스 주니어', '24TOTY', '호크', '176', '룰렛'],
    ['모하메드 살라', '24TOTY', '세컨드 스트라이커', '175', '룰렛'],
    ['데클런 라이스', '24TOTY', '홀딩', '185', '룰렛'],
    ['그리즈만', '24TOTY', '아키텍트', '176', '룰렛'],
    ['부카요 사카', '24TOTY', '호크', '178', '라 크로케타'],
    ['비르츠', '24TOTY', '마에스트로', '176', '룰렛'],
    ['빅터 오시멘', '24TOTY', '결정력', '185','힐투힐'],
    ['바스토니', '24TOTY', '스톤', '190', '레인체인지'],
    ['추아메니', '24TOTY', '짧은패스', '187', '힐투힐'],
    ['알레시 가르시아', '24TOTY', '플레이메이커', '173', '힐투힐'],
    ['페드리', '24TOTY', '아키텍트', '173', '아키텍트'],
    ['실바', '24TOTY', '주장', '173', '라 크로케타'],
    ['쥘 쿤데', '24TOTY', '월', '180', '힐투힐'],
    ['외데고르', '24TOTY', '세컨드 스트라이커', '178', '라 크로케타'],
    ['디마르코', '24TOTY', '글레디에이터', '175', '힐투힐'],
    ['라우타로 마르티네스', '24TOTY', '결정력', '174', '라 크로케타'],
    ['자네', '24TOTY', '스나이퍼', '183', '녹 온 드리블'],
    ['카림 벤제마', '24TOTY', '드리블', '185', '룰렛'],
    ['흐비차 크바라츠헬리아', '24TOTY', '민첩성', '183', '룰렛'],
    ['세투 기라시', '24TOTY', '공격 마스터', '187', '힐투힐'],
    ['잭 그릴리쉬', '24TOTY', '세컨드 스트라이커', '180', '룰렛'],
    ['존 스톤스', '24TOTY', '마크', '188', '힐투힐'],
    ['하파엘 레앙', '24TOTY', '결정력', '188', '룰렛'],
    ['뎀벨레', '24TOTY', '페이스', '178', '녹 온 드리블'],
    ['마레즈', '24TOTY', '어택미드', '179', '룰렛'],
    ['라비오', '24TOTY', '가로채기', '191', '힐투힐'],
    ['그라니트 자카', '24TOTY', '홀딩', '185', '힐투힐'],
    ['셰우첸코', 'IF','세컨드 스트라이커', '183','라 크로케타'],
    ['아우나르트 단주마','FC24','세컨드 스트라이커', '178','라 크로케타'],
    ['하파엘 레앙', 'UCL24','나이프', '188','룰렛'],
    ['크리스티아누 호날두', '피어리스','파워풀', '187','스쿱턴'],
    ['킬리안 음바페', 'FC24','세컨드 스트라이커', '183','녹 온 드리블'],
    ['벨링엄', 'FC24','미드엔진', '186','룰렛'],
    ['가야', '24TOTY', '반응도', '172', '룰렛'],
    ['구보 다케후사', '24TOTY', '민첩성', '173', '라 크로케타'],
    ['기마랑이스', '24TOTY', '특별 구성', '182', '라 크로케타'],
    ['홀란', 'UCL24', '민첩성', '195', '힐투힐'],
    ['마르쿠스 튀람','UCL24', '결정력', '192', '힐투힐'],
    ['레반도프스키','HT24','결정력', '185', '스쿱턴'],
    ['안정환', 'HT24', '마에스트로', '178', '룰렛'],
    ['라울', 'HT24', '결정력', '180', '룰렛'],
    ['헨릭 라르손', 'HT24', '공격', '178', '힐투힐'],
    ['앨런 시어러', 'HT24', '결정력', '182', '힐투힐'],
    ['최용수', 'HT24', '결정력', '184', '힐투힐'],
    ['최진철', 'HT24', '마크', '187', '레인체인지'],
    ['로날트 쿠만', 'HT24', '수비 마스터', '181', '힐투힐'],
    ['페르난도 이에로', 'HT24', '수비 마스터', '187', '레인체인지'],
    ['크리스티아누 호날두', 'HT24', '결정력', '187', '호날두 촙'],
    ['해리 케인', 'HT24', '결정력', '188', '스쿱턴'],
    ['홀란', 'HT24', '결정력', '195', '바디 페인팅'],
    ['모하메드 살라', 'HT24', '결정력', '175', '플립 플랩'],
    ['벤제마','HT24','결정력','185','힐 킥'],
    ['게르트 뮐러','HT24','FW 레코드 브레이커','175','힐투힐'],
    ['호나우지뉴','HT24','FW 레코드 브레이커','180','라 크로케타'],
    ['요한 크루이프','HT24','FW 레코드 브레이커','180','라 크로케타'],
    ['펠레','HT24','FW 레코드 브레이커','173','룰렛'],
    ['에우제비우','HT24','FW 레코드 브레이커','175','라 크로케타'],
    ['페르난도 토레스','HT24','FW 레코드 브레이커','186','라 크로케타'],
    ['설기현','HT24','FW 레코드 브레이커','187','라 크로케타'],
];

data.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
    });
    tbody.appendChild(row);
});
table.appendChild(tbody);

// 최종적으로 생성한 테이블을 container div에 추가합니다.
container.appendChild(table);
window.enterkeySearch = () => {
    if (window.event.keyCode == 13) {
        searchPost();
    }
};


function filterTable() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const cellText = Array.from(cells).map(cell => cell.textContent.toLowerCase());
        // 검색어가 셀 텍스트에 포함되는지 확인합니다.
        const matchesSearchTerm = cellText.some(text => text.includes(searchTerm));
        row.style.display = matchesSearchTerm ? "" : "none"; // 일치하면 표시, 아니면 숨깁니다.
    });
}
// 페이지당 표시할 데이터 수
const rowsPerPage = 20;

// 현재 페이지 번호
let currentPage = 1;

function displayPage(page) {
    // 시작 인덱스
    const start = (page - 1) * rowsPerPage;
    // 종료 인덱스
    const end = page * rowsPerPage;
    // 현재 페이지의 데이터 추출
    const paginatedItems = data.slice(start, end);

    // 테이블 본문 클리어
    tbody.innerHTML = '';

    // 현재 페이지 데이터로 테이블 본문 채우기
    paginatedItems.forEach(item => {
        const row = tbody.insertRow();
        item.forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });

    // 페이지네이션 버튼 업데이트
    setupPagination(data.length, page);
}

function setupPagination(totalItems, currentPage) {
    const pageCount = Math.ceil(totalItems / rowsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // 기존 페이지네이션 버튼 제거

    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => displayPage(i));
        paginationContainer.appendChild(btn);
    }
}

// 초기 페이지 로딩
displayPage(currentPage);
