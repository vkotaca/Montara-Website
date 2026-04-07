/* ===== COUNSELING PAGE INTERACTIONS ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. ANIMATED COUNTERS --- */
  const counters = document.querySelectorAll('.cc-school-count[data-count]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counters.forEach((el, i) => {
      const raw = el.dataset.count;
      const hasPlus = raw.includes('+');
      const target = parseInt(raw);
      if (isNaN(target)) { el.textContent = raw; return; }

      const duration = 1200;
      const delay = i * 60;
      const start = performance.now();

      setTimeout(() => {
        function tick(now) {
          const elapsed = now - start - delay;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const current = Math.round(eased * target);
          el.textContent = current + (hasPlus ? '+' : '');
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }, delay);
    });
  }

  /* --- 2. COLLAPSIBLE TIMELINE --- */
  document.querySelectorAll('.tl-card h3').forEach(h3 => {
    h3.style.cursor = 'pointer';
    h3.addEventListener('click', () => {
      const card = h3.closest('.tl-card');
      card.classList.toggle('tl-collapsed');
    });
  });

  /* --- 3. SCROLL REVEAL --- */
  const revealElements = document.querySelectorAll(
    '.cc-diff-card, .tl-item, .cc-compare-row:not(.cc-compare-header), .cc-school, .cc-price-card, .cc-counselor-inner'
  );
  revealElements.forEach(el => el.classList.add('reveal'));

  /* --- INTERSECTION OBSERVER (handles counters + reveals) --- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Scroll reveals
        if (entry.target.classList.contains('reveal')) {
          entry.target.classList.add('revealed');
        }
        // Counter trigger
        if (entry.target.classList.contains('cc-record')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // Also observe the track record section for counter trigger
  const recordSection = document.querySelector('.cc-record');
  if (recordSection) observer.observe(recordSection);

});
