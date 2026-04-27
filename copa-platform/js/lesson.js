let topics = [];
const topicSelect = document.getElementById('topicSelect');
const lessonContent = document.getElementById('lessonContent');

function renderLesson(topic) {
  lessonContent.innerHTML = `
    <h2>${topic.name}</h2>
    <p><strong>Explanation:</strong> ${topic.explanation}</p>
    <h3>Key Points</h3>
    <ul>${topic.keyPoints.map(k => `<li>${k}</li>`).join('')}</ul>
    <h3>Real-life Example</h3>
    <p>${topic.example}</p>
  `;
}

async function init() {
  const res = await fetch('data/topics.json');
  const data = await res.json();
  topics = data.topics;
  topicSelect.innerHTML = topics.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

  const params = new URLSearchParams(location.search);
  const queryTopic = params.get('topic');
  const initial = topics.find(t => t.id === queryTopic) || topics[0];
  topicSelect.value = initial.id;
  renderLesson(initial);

  topicSelect.addEventListener('change', e => {
    const selected = topics.find(t => t.id === e.target.value);
    renderLesson(selected);
  });
}
init();
