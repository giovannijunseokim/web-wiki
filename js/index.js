console.log(
    "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
    "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

function addComment() {
    // 댓글 입력창과 댓글 목록 요소를 가져옵니다.
    const commentInput = document.querySelector('.comment-input');
    const commentList = document.querySelector('.comment-list');

    // 입력된 댓글 내용 가져오기
    const commentText = commentInput.value.trim();

    // 댓글 내용이 비어있지 않은 경우에만 처리
    if (commentText) {
        // 새로운 댓글 요소 생성
        const newComment = document.createElement('li');
        newComment.innerHTML = `
            <div class="comment-item">
                <div class="comment-author">
                    <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
                    <span>방문자</span>
                </div>
                <div class="comment-content">
                    ${commentText}
                </div>
            </div>
        `;

        // 댓글 목록에 추가
        commentList.appendChild(newComment);

        // 알림 메시지 표시
        alert("댓글이 등록되었습니다.");

        // 입력창 초기화
        commentInput.value = '';
    } else {
        alert("댓글 내용을 입력해주세요.");
    }
}
