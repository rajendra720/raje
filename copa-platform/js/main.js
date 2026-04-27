const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
if (currentUser) {
  document.querySelectorAll('.brand').forEach(b => {
    b.textContent = `COPA Learning Platform - Welcome, ${currentUser.name.split(' ')[0]}`;
  });
}
