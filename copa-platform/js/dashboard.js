async function initDashboard() {
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  document.getElementById('dashUser').textContent = user ? `${user.name} (${user.email})` : 'Guest (Please login)';

  const completed = JSON.parse(localStorage.getItem('completedTopics') || '[]');
  const scores = JSON.parse(localStorage.getItem('topicScores') || '{}');
  const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');

  const res = await fetch('data/topics.json');
  const data = await res.json();
  const totalTopics = data.topics.length;

  document.getElementById('topicsCompleted').textContent = `${completed.length}/${totalTopics}`;
  document.getElementById('assignmentCount').textContent = submissions.length;

  const scoreValues = Object.values(scores);
  const avg = scoreValues.length ? Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length) : 0;
  document.getElementById('avgScore').textContent = `${avg}%`;

  const progress = Math.round((completed.length / totalTopics) * 100);
  document.getElementById('overallProgress').style.width = `${progress}%`;
  document.getElementById('progressText').textContent = `You completed ${progress}% of the course.`;
}
initDashboard();
