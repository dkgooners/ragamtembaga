document.addEventListener('DOMContentLoaded', () => {
  const btnMobile = document.getElementById('btnMobile');
  const nav = document.getElementById('mobileNav');
  btnMobile.addEventListener('click', () => nav.classList.toggle('hidden'));
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop?.classList.remove('hidden');
    else backToTop?.classList.add('hidden');
  });
});

