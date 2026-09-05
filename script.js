const jokes = [
  { question: "왕이 넘어지면?", answer: "킹콩!" },
  { question: "세상에서 가장 뜨거운 과일은?", answer: "천도복숭아!" },
  { question: "세상에서 가장 억울한 도형은?", answer: "원통하다!" },
  { question: "자동차가 놀라면?", answer: "카놀라유!" },
  { question: "오리가 얼면?", answer: "언덕!" },
  { question: "신사가 자기소개할 때 하는 말은?", answer: "신사임당!" },
  { question: "세상에서 가장 쉬운 숫자는?", answer: "190000(십구만 = 쉽구만)!" },
  { question: "세상에서 가장 뜨거운 전화는?", answer: "화상전화!" },
  { question: "사과가 웃으면?", answer: "풋사과!" },
  { question: "소가 웃으면?", answer: "우하하!" },
  { question: "세상에서 가장 지저분한 집은?", answer: "돼지우리!" },
  { question: "개가 사람을 가르치면?", answer: "개인교수!" }
];

const jokeBtn = document.getElementById("jokeBtn");
const answerBtn = document.getElementById("answerBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

let currentJoke = null;
let lastIndex = -1;

function pickJoke() {
  let index;

  if (jokes.length === 1) {
    index = 0;
  } else {
    do {
      index = Math.floor(Math.random() * jokes.length);
    } while (index === lastIndex);
  }

  lastIndex = index;
  currentJoke = jokes[index];

  // 아재개그 버튼에서는 질문만 출력
  jokeDisplay.innerHTML = `<p class="question">Q. ${currentJoke.question}</p>`;
}

function showAnswer() {
  if (!currentJoke) {
    jokeDisplay.innerHTML =
      '<p class="guide">먼저 아재개그 버튼을 눌러 질문을 받아보세요.</p>';
    return;
  }

  // 정답보기 버튼을 눌렀을 때만 현재 질문의 정답 출력
  jokeDisplay.innerHTML = `<p class="answer">A. ${currentJoke.answer}</p>`;
}

jokeBtn.addEventListener("click", pickJoke);
answerBtn.addEventListener("click", showAnswer);
