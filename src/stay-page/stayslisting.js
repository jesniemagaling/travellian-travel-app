const userBtn = document.querySelector('.user-profile-btn');
const userNav = document.getElementById('userNav');

userBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click from bubbling
  userNav.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!userNav.contains(e.target) && !userBtn.contains(e.target)) {
    userNav.classList.remove('show');
  }
});
