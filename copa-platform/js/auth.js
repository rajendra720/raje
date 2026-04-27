function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function setUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('registerBtn').addEventListener('click', () => {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pass = document.getElementById('regPass').value;
  const msg = document.getElementById('regMsg');

  if (!name || !email || !pass) return msg.textContent = 'All fields are required.';
  const users = getUsers();
  if (users.some(u => u.email === email)) return msg.textContent = 'Email already registered.';

  users.push({ name, email, pass });
  setUsers(users);
  msg.textContent = 'Registration successful. You can login now.';
  msg.className = 'success';
});

document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('logEmail').value.trim().toLowerCase();
  const pass = document.getElementById('logPass').value;
  const msg = document.getElementById('logMsg');
  const user = getUsers().find(u => u.email === email && u.pass === pass);

  if (!user) {
    msg.textContent = 'Invalid credentials.';
    return;
  }
  localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
  msg.textContent = 'Login successful. Redirecting to dashboard...';
  msg.className = 'success';
  setTimeout(() => location.href = 'dashboard.html', 800);
});
