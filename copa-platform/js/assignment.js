let topics = [];
const topicSelect = document.getElementById('assignmentTopic');
const promptEl = document.getElementById('assignmentPrompt');
const textEl = document.getElementById('submissionText');
const msgEl = document.getElementById('submissionMsg');

function renderPrompt(topicId) {
  const topic = topics.find(t => t.id === topicId);
  promptEl.innerHTML = `<h3>${topic.name} Practical Task</h3><p>${topic.assignment}</p>`;
}

async function init() {
  const res = await fetch('data/topics.json');
  const data = await res.json();
  topics = data.topics;
  topicSelect.innerHTML = topics.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  renderPrompt(topics[0].id);

  topicSelect.addEventListener('change', e => renderPrompt(e.target.value));

  document.getElementById('submitAssignment').addEventListener('click', () => {
    if (!textEl.value.trim()) {
      msgEl.textContent = 'Please write your submission first.';
      return;
    }
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push({
      topicId: topicSelect.value,
      text: textEl.value,
      time: new Date().toISOString()
    });
    localStorage.setItem('submissions', JSON.stringify(submissions));
    msgEl.textContent = 'Assignment submitted successfully!';
    msgEl.className = 'success';
    textEl.value = '';
  });
}
init();
