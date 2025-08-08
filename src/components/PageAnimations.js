"use client";

import { useEffect } from "react";

export default function PageAnimations() {
  useEffect(() => {
    // Stat counter
    document.querySelectorAll('.stat-number').forEach(function(el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      let count = 0;
      const duration = 1200;
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      const increment = target / totalFrames;
      function update() {
        count += increment;
        if (count < target) {
          el.textContent = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      }
      el.textContent = "0";
      update();
    });

    // Skill bar animation
    function animateSkillBars() {
      document.querySelectorAll('.skill-progress').forEach(function(bar) {
        const rect = bar.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && bar.style.width !== bar.getAttribute('data-width')) {
          bar.style.transition = 'width 1.5s cubic-bezier(.4,0,.2,1)';
          bar.style.background = 'linear-gradient(90deg, #2563eb 60%, #60a5fa 100%)';
          bar.style.width = bar.getAttribute('data-width');
        }
      });
    }
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();

    // Timeline animation
    function animateTimeline() {
      document.querySelectorAll('.timeline-item').forEach(function(item, idx) {
        const rect = item.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && item.style.opacity !== "1") {
          item.style.animation = 'cardSlideIn 1.5s cubic-bezier(.4,0,.2,1) forwards';
          item.style.animationDelay = (idx * 0.5) + 's';
        }
      });
      document.querySelectorAll('.timeline-marker').forEach(function(dot, idx) {
        const rect = dot.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && dot.style.opacity !== "1") {
          dot.style.animation = 'dotPop 1s cubic-bezier(.4,0,.2,1) forwards';
          dot.style.animationDelay = (idx * 0.5) + 's';
        }
      });
    }
    window.addEventListener('scroll', animateTimeline);
    animateTimeline();

    return () => {
      window.removeEventListener('scroll', animateSkillBars);
      window.removeEventListener('scroll', animateTimeline);
    };
  }, []);

  return null;
}