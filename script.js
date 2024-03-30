const container = document.getElementById('table-container');

// 테이블 요소를 생성합니다.
const table = document.createElement('table');
table.style.width = '100%';
table.setAttribute('border', '1');

// 테이블의 헤더를 생성합니다.
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['선수', '시즌', '세부사항', '키', '개인기'];
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
    ['이사크', '챔스', '타이거','191','롤렛'],
    ['크라우치', '히어로', '스킬 부스트','201','개인기'],
    ['손흥민', '룰브', '도미네이션','183','롤렛'],
    ['임모빌레', '챔스', '결정력','185','힐투힐'],
    ['수아레스', '헤트트릭', '미공개','182','미공개'],
    ['레반도프스키', '토티', '결정력','185','라 크로케타'],
    ['해리 케인', 'FC', '파워풀','188','힐투힐'],
    ['호나우두', '트로피', '막스맨','183','라 크로케타'],
    ['호나우두', '월드컵', '타이거','183','라 크로케타'],
    ['크리스텐센', '언성히어로', '월','187','레인체인지'],
    ['바란', '라이벌', '홀딩','191','레인체인지'],
    ['윌리암 살리바', '토티', '앵커','193','레인체인지'],
    ['조 고메스', '언성히어로', '특별구성','188','힐투힐'],
    ['욘 아르넬 리세', '라이벌', '글레디에이터','185',' 힐투힐'],
    ['음바페', '얼토티', '슈퍼카','183','라 크로케타'],
    ['카림 벤제마', 'FC', '결정력','185','롤렛'],
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


