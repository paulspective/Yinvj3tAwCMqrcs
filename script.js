function runTypewriter() {
  const h1 = document.getElementById('main-title');
  const text = h1.innerText;
  h1.innerText = '';
  h1.style.opacity = '1';
  h1.classList.add('typewriter-cursor');
  let i = 0;
  function type() {
    if (i < text.length) {
      h1.innerText += text.charAt(i);
      i++;
      setTimeout(type, 160);
    } else {
      setTimeout(() => h1.style.borderRight = 'none', 1200);
    }
  }
  setTimeout(type, 1000);
}

function createParticles() {
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 25 + 12 + 'px';
    const colors = ['#f9f0c1', '#cbb2d9', '#e8d5f2'];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.opacity = (Math.random() * 0.3 + 0.1);

    p.style.width = size;
    p.style.height = size;
    p.style.top = Math.random() * 100 + 'vh';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.setProperty('--x1', (Math.random() * 100 - 50) + 'px');
    p.style.setProperty('--y1', (Math.random() * 200 - 100) + 'px');
    p.style.setProperty('--x2', (Math.random() * 200 - 100) + 'px');
    p.style.setProperty('--y2', (Math.random() * 200 - 100) + 'px');
    p.style.setProperty('--t', (Math.random() * 20 + 25) + 's');
    document.body.appendChild(p);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

window.addEventListener('load', () => {
  createParticles();
  runTypewriter();
  document.querySelectorAll('.section, footer, header p, .scroll-hint').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

const jokes = [
  { q: "What goes up but never comes down?", a: "Your age. Sorry." },
  { q: "What improves with age?", a: "You. Annoyingly." },
  { q: "18 looks good on you.", a: "But then again, everything does." },
  { q: "Is it legal to be this adorable?", a: "Apparently yes. I checked." },
  { q: "You're 18 now. Feeling grown?", a: "Same software. Just updated the version number." }
];
let currentJoke = 0;
function nextJoke() {
  document.getElementById('joke-text').innerText = jokes[currentJoke].q;
  document.getElementById('joke-punchline').innerText = jokes[currentJoke].a;
  currentJoke = (currentJoke + 1) % jokes.length;
}

function togglePoop() {
  const p = document.getElementById('poop-container');
  p.style.display = 'block';
  setTimeout(() => { p.style.display = 'none'; }, 2000);
}

function checkPasscode() {
  const code = document.getElementById('passcode').value;
  if (code === "2008") {
    document.getElementById('lock-container').style.display = 'none';
    const content = document.getElementById('secret-content');
    content.style.display = 'block';
    content.classList.add('active');
  } else {
    alert("Hint: It's your birth year. The year the '08 legends were born.");
    document.getElementById('passcode').value = '';
  }
}

const music = document.getElementById('bg-music');
const progressBar = document.getElementById('progress-bar');

let isPlaying = false;

function toggleMusic() {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }
}

music.addEventListener('timeupdate', () => {
  if (!music.duration) return;
  const percent = (music.currentTime / music.duration) * 100;
  progressBar.style.width = percent + '%';
});
