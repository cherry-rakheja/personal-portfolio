var typed = new Typed('#element', {
  strings: ['Engineering Student', 'Web Developer', 'Code, Craft, Conquer'],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
  loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button interactions
document.querySelector('.btn').addEventListener('click', function() {
  alert('Resume download is not implemented yet!');
});

document.querySelectorAll('.btn')[1].addEventListener('click', function() {
  window.open('https://github.com/yourgithubprofile', '_blank');
});

// Prompt message on page load
window.addEventListener('load', () => {
  prompt("Welcome to Cherry's Portfolio");
});
