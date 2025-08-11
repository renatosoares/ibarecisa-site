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

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("last-broadcasts-solemn-worship");

    fetch("https://gist.githubusercontent.com/renatosoares/bc4714a9ba467b175ae5a70032904101/raw/ibarecisa-solemn-worship-broadcasts.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o JSON");
        }
        return response.json();
      })
      .then(data => {
        data
          .slice(-3)
          .reverse()
          .forEach(item => {
            const col = document.createElement("div");
            col.className = "col";

            col.innerHTML = `
              <div class="card shadow-sm">
                <iframe
                  class="bd-placeholder-img card-img-top"
                  height="225"
                  width="100%"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  src="https://www.youtube.com/embed/${item.videoId}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>

                <div class="card-body">
                  <p class="card-text">${item.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">

                    </div>
                    <small class="text-body-secondary">${item.timestamp}</small>
                  </div>
                </div>
              </div>
            `;

            container.appendChild(col);
          });
      })
      .catch(error => {
        console.error("Erro ao carregar os dados:", error);
      });
  });
})();
