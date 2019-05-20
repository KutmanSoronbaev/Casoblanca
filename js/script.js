window.onload = (function(){

    const introductionSection = document.querySelector('.introduction-section');
    const scrollButton = document.querySelector('.scroll-button');

    if(scrollButton && window.scrollTo) {
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: introductionSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }


    const AdvantagesCarousel = new Swiper('.advantages-section__carousel', {
        slidesPerView: 3,
        spaceBetween: 62,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            570: {
                slidesPerView: 1
            }
        }
    });

    //select dom ITEMS
    const menuBtn = document.querySelector('.hamburger');
    const menu = document.querySelector('.main-menu');
    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.nav-items')

    //Set initial state of menu

    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);
    function toggleMenu(e) {

        if(!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            //Set menu state
            showMenu = true;
        }else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            //Set menu state
            showMenu = false;
        }
        if(!e.target === navItems) {
            menuBtn.classList.remove('close')
        }
    }

})();