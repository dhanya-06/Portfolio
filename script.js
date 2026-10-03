// Loader Fadeout
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hide');
  setTimeout(() => loader.remove(), 450);
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 700,
  once: true,
  easing: 'ease-out-cubic'
});

// Typing Text Effect
const typingText = document.querySelector('.typing-text');
const phrases = [
  'AI Enthusiast',
  'Data Science Learner',
  'Web Developer',
  'Innovator'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];
  typingText.textContent = current.slice(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeLoop, 90);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 55);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(typeLoop, 1000);
  }
}

typeLoop();

// Particle Canvas Animation
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 150 };
let animationFrameId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.radius = Math.random() * 2 + 1.2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

    // Gentle magnetic mouse attraction/repulsion logic
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        // Subtle pull towards mouse
        this.vx += (dx / dist) * force * 0.015;
        this.vy += (dy / dist) * force * 0.015;

        // Cap speed
        const speed = Math.hypot(this.vx, this.vy);
        if (speed > 0.8) {
          this.vx = (this.vx / speed) * 0.8;
          this.vy = (this.vy / speed) * 0.8;
        }
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 75);
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  // Draw node lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.hypot(dx, dy);
      const maxDist = 110;
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.09;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw lines to mouse
  if (mouse.x !== null && mouse.y !== null) {
    particles.forEach(p => {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouse.radius) {
        const alpha = (1 - dist / mouse.radius) * 0.12;
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  }

  if (!document.hidden) {
    animationFrameId = requestAnimationFrame(animateParticles);
  }
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationFrameId);
  } else {
    animateParticles();
  }
});

// Setup Canvas initially
resizeCanvas();
animateParticles();

// 3D Tilt and Card Glow Hover Calculations
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Pass coords to css variables for glow
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Calculate rotation angles based on cursor offset from card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // Max 6deg tilt for subtle professional feel
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});

// Viewport Triggered Skills Progress Animating
const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
      observer.unobserve(bar);
    }
  });
}, {
  threshold: 0.1
});

progressBars.forEach(bar => progressObserver.observe(bar));

// Magnetic Hover Interactions for Buttons & Links
const magnetics = document.querySelectorAll('.btn, .social-row a, .back-top, .nav-btn');
magnetics.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px) scale(1.04)`;
    if (btn.classList.contains('btn-primary') || btn.classList.contains('nav-btn')) {
      btn.style.boxShadow = '0 12px 28px rgba(56, 189, 248, 0.32)';
    }
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.boxShadow = '';
  });
});

// Navbar Scrolled shrinking and blur intensification
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
