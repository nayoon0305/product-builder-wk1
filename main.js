/**
 * 화면 전환 함수
 * @param {string} screenId 이동할 화면의 ID
 */
function showScreen(screenId) {
    // 모든 화면 숨기기
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // 대상 화면 보이기
    const targetScreen = document.getElementById('screen-' + screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        // 화면 전환 시 최상단으로 스크롤
        window.scrollTo(0, 0);
    }
}

/**
 * 항목 선택 토글 함수
 * @param {HTMLElement} element 클릭된 버튼 요소
 */
function toggleSelect(element) {
    element.classList.toggle('selected');
}

// 초기화: 페이지 로드 시 홈 화면으로 시작 (이미 HTML에서 설정되어 있음)
document.addEventListener('DOMContentLoaded', () => {
    console.log('윤사랑외과 프로토타입 로드 완료');
    
    // 예/아니오 버튼 클릭 시 시각적 피드백
    const ynButtons = document.querySelectorAll('.yn-btns .btn');
    ynButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.btn').forEach(b => b.classList.remove('btn-primary'));
            parent.querySelectorAll('.btn').forEach(b => b.classList.add('btn-outline'));
            
            this.classList.remove('btn-outline');
            this.classList.add('btn-primary');
        });
    });
});
