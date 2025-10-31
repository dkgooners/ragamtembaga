const btnMobile = document.getElementById('btnMobile');
const mobileNav = document.getElementById('mobileNav');
const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');

btnMobile.addEventListener('click', () => {
    const isHidden = mobileNav.classList.contains('hidden');

    if (isHidden) {
        mobileNav.classList.remove('hidden');
        setTimeout(() => {
            mobileNav.classList.remove('opacity-0', 'scale-y-0');
        }, 10);
        iconMenu.classList.add('hidden');
        iconClose.classList.remove('hidden');
    } else {
        mobileNav.classList.add('opacity-0', 'scale-y-0');
        iconClose.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileNav.classList.add('hidden');
        }, 300);
    }
});
