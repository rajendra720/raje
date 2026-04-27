async function loadRoadmap() {
  const res = await fetch('data/roadmap.json');
  const data = await res.json();
  const holder = document.getElementById('roadmap');
  holder.innerHTML = data.days.map(day => `
    <div class="timeline-item">
      <strong>Day ${day.day}: ${day.title}</strong>
      <p>${day.goal}</p>
      <small class="muted">Topic Ref: ${day.topicId || 'Practice/Revision'}</small>
    </div>
  `).join('');
}
loadRoadmap();
