const apiUrl = "https://jsonplaceholder.typicode.com/comments";

const button = document.querySelector(".showBtn");
button.addEventListener("click", fetchComments);

async function fetchComments() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`); // 오류 없길..
    }
    const comments = await response.json();
    let slicedData = comments.slice(0, 10); //0~9까지만 싸악

    const commentsDiv = document.getElementById("comments");
    slicedData.forEach((comment) => {
      let slicedBody =
        comment.body.length >= 40
          ? comment.body.slice(0, 40) + "..."
          : comment.body;
      const commentElement = document.createElement("div"); // div 쓰윽 넣기
      commentElement.innerHTML = `
                <h2>${slicedBody}</h2>
                <p>사용자 이름: ${comment.name}</p>
                <p>이메일: ${comment.email}</p>
            `;
      commentsDiv.appendChild(commentElement);
    });
  } catch (error) {
    console.error("오류:", error);
  }
}
