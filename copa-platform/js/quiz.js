let topics = [];
const topicSelect = document.getElementById('quizTopic');
const form = document.getElementById('quizForm');
const result = document.getElementById('quizResult');

function renderQuiz(topicId) {
  const topic = topics.find(t => t.id === topicId);
  form.innerHTML = `<h3>${topic.name} Quiz (5 MCQ)</h3>` + topic.mcqs.map((m, i) => `
    <div class="card" style="margin-top:10px;">
      <p><strong>Q${i + 1}. ${m.q}</strong></p>
      ${m.options.map(opt => `<label class="quiz-option"><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`).join('')}
    </div>
  `).join('');
}

function saveProgress(topicId, score) {
  const scores = JSON.parse(localStorage.getItem('topicScores') || '{}');
  scores[topicId] = score;
  localStorage.setItem('topicScores', JSON.stringify(scores));

  const completed = JSON.parse(localStorage.getItem('completedTopics') || '[]');
  if (!completed.includes(topicId)) completed.push(topicId);
  localStorage.setItem('completedTopics', JSON.stringify(completed));
}

async function init() {
  const res = await fetch('data/topics.json');
  const data = await res.json();
  topics = data.topics;
  topicSelect.innerHTML = topics.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  renderQuiz(topics[0].id);

  topicSelect.addEventListener('change', e => renderQuiz(e.target.value));

  document.getElementById('submitQuiz').addEventListener('click', () => {
    const topic = topics.find(t => t.id === topicSelect.value);
    let score = 0;
    topic.mcqs.forEach((mcq, i) => {
      const checked = form.querySelector(`input[name="q${i}"]:checked`);
      if (checked && checked.value === mcq.answer) score++;
    });
    const percentage = Math.round((score / topic.mcqs.length) * 100);
    result.textContent = `Your Score: ${score}/${topic.mcqs.length} (${percentage}%)`;
    result.className = 'result success';
    saveProgress(topic.id, percentage);
  });
}
init();
