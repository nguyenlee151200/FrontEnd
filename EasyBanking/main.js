const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header-home');
const overlay = document.querySelector('.overplay');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');



btnHamburger.addEventListener("click", () => {

    if (header.classList.contains("open")) {
        header.classList.remove("open");
        overlay.style.display = "none";
        body.classList.remove("no-scroll");
        headerMenu.style.display = "none";

    } else {

        body.classList.add("no-scroll");
        header.classList.add("open");
        overlay.style.display = "block";
        body.classList.add("no-scroll");
        headerMenu.style.display = "block";

    }

})

