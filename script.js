// ==========================================================================
// MUHAMMAD KASHIF SHABEER - PORTFOLIO INTERACTION SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Dynamic Rotating Hero Text ---
  const roles = [
    'Full-Stack Software Engineer',
    'Cross-Platform Mobile Engineer (iOS & Android)',
    'React Native & Flutter Specialist',
    'Next.js & React Architect',
    'Node.js & Python/FastAPI Backend Developer',
    'AI & LLM Integration Specialist'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const roleElement = document.getElementById('hero-dynamic-role');
  const typingSpeed = 70;
  const deletingSpeed = 40;
  const pauseEnd = 2000;

  function typeRole() {
    if (!roleElement) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, pauseEnd);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeRole, speed);
  }
  typeRole();

  // --- 2. Project Filtering Logic ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- 3. Animated Stats Counter ---
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  function animateCounters() {
    const triggerBottom = window.innerHeight * 0.9;
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    const statsTop = statsSection.getBoundingClientRect().top;

    if (statsTop < triggerBottom && !animated) {
      animated = true;
      statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const countStep = target / 40;
        let count = 0;

        const updateCount = () => {
          count += countStep;
          if (count < target) {
            stat.innerText = Math.ceil(count);
            setTimeout(updateCount, 30);
          } else {
            stat.innerText = target;
          }
        };
        updateCount();
      });
    }
  }
  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Check on load

  // --- 4. Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  // --- 5. Toast Notification Helper ---
  window.showToast = function (message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    if (type === 'success') {
      toastIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />`;
      toastIcon.className = 'w-5 h-5 text-emerald-400';
    } else {
      toastIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`;
      toastIcon.className = 'w-5 h-5 text-cyan-400';
    }

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  // --- 6. Quick Copy to Clipboard ---
  window.copyToClipboard = function (text, label) {
    navigator.clipboard.writeText(text).then(() => {
      window.showToast(`${label} copied to clipboard!`, 'success');
    }).catch(() => {
      window.showToast(`Failed to copy to clipboard`, 'error');
    });
  };

  // --- 7. Contact Form Submission Handling ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name')?.value || 'Someone';
      const email = document.getElementById('sender-email')?.value || '';
      const subject = document.getElementById('sender-subject')?.value || 'Portfolio Contact';
      const message = document.getElementById('sender-message')?.value || '';

      // Direct mailto fallback / action
      const mailtoUrl = `mailto:kashifkhan26262@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
      
      window.showToast(`Thank you, ${name}! Opening your email client...`, 'success');
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);

      contactForm.reset();
    });
  }

  // --- 8. Active Nav Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-sky-400', 'border-b-2', 'border-sky-400');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-sky-400', 'border-b-2', 'border-sky-400');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll);
});

