// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

(() => {
  const navbarMenuElement = document.getElementById("navbar-menu");

  const bsNavbarCollapse = new bootstrap.Collapse('#navbarCollapse', {
    toggle: false
  });

  document.querySelectorAll(".nav-link")
    .forEach((navLinkElement) => {
      navLinkElement.addEventListener("click", () => {
        setTimeout(() => {
          bsNavbarCollapse.hide();
        }, 100);

        setTimeout(() => {
          navbarMenuElement.style.top = "-66px";
        }, 700);
      });
    });
})();

(() => {
  let lastScrollY = window.scrollY;

  window.onscroll = () => {
    const navbarMenuElement = document.getElementById("navbar-menu");
    const currentScrollY = window.scrollY;
    const elementHeight = navbarMenuElement.offsetHeight;

    if (currentScrollY < lastScrollY) {
      navbarMenuElement.style.top = "0";
    } else {
      navbarMenuElement.style.top = `-${elementHeight}px`;
    }

    lastScrollY = currentScrollY;
  };
})();
