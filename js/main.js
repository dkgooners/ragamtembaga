document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const btnMobile = document.getElementById("btnMobile");
  const nav = document.getElementById("mobileNav");

  if (btnMobile && nav) {
    btnMobile.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }

  // --- Back to Top Button ---
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    // Tampilkan tombol saat scroll ke bawah
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.remove("hidden");
      } else {
        backToTop.classList.add("hidden");
      }
    });

    // Scroll halus ke atas saat diklik
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200; // semakin kecil semakin cepat

  const animateCounters = () => {
    counters.forEach(counter => {
      const isPercent = counter.querySelector('.percent') ? true : false;

      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText.replace('%', '');
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment > target ? target : count + increment;
          if (isPercent) counter.innerText += '%';
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
          if (isPercent) counter.innerText += '%';
        }
      };
      updateCount();
    });
  };

  // Trigger saat stats terlihat di viewport
  const statsSection = document.getElementById('stats');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.unobserve(statsSection); // hanya sekali
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
});
