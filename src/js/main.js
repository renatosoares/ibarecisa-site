// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const bsNavbarCollapse = new bootstrap.Collapse('#navbarCollapse', {
  toggle: false
});

document.querySelectorAll(".nav-link")
  .forEach((navLinkElement) => {
    navLinkElement.addEventListener("click", () => {
      bsNavbarCollapse.hide();
    });
  })
