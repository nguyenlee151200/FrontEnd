const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-list');
const body = document.querySelector('body');
//menu-hamburger
menu.addEventListener('click', function () {
    const menuLogo = document.querySelector("#menu-logo");
    if (menuLogo.src.match("./assets/shared/icon-hamburger.svg")) {
        menuLogo.src = "./assets/shared/icon-close.svg";
        nav.style.transform = "scale(1)";
    }
    else {
        menuLogo.src = "./assets/shared/icon-hamburger.svg";
        nav.style.transform = "scale(0)";
    }
});
//nav
const list = document.querySelectorAll("ul.nav-list li a");
var clickNav = function clickNav(e) {
    console.log(list);
    // list.forEach(function (item) {
    //     if(item.)
    // })
}

list.forEach(function (element) {
    element.addEventListener('click', clickNav);
})
//destination tab panel
const navText = document.querySelectorAll(".nav-text");
const planetImg = document.getElementById("planet-img");
const tabpanels = document.querySelectorAll(".tabpanel");

var clickHandler = function clickHandler(e) {
    tabpanels.forEach(function (el) {
        if (el.getAttribute("aria-labelledby") == e.target.id) {
            el.removeAttribute("hidden");
            e.target.ariaSelected = true;
            e.target.classList.add("visited-link");
            navText.forEach(function (ele) {
                if (ele.id !== e.target.id) {
                    ele.ariaSelected = "false";
                    ele.classList.remove("visited-link");
                }
            });
            switch (e.target.id) {
                case "moon-tab":
                    planetImg.src="./assets/destination/image-moon.png";
                    break;
                case "mars-tab":
                    planetImg.src="./assets/destination/image-mars.png";
                    break;
            }
        }
        else {
            var attr = document.createAttribute("hidden");
            el.setAttributeNode(attr);
        }
    })
}
navText.forEach(function (element) {
    element.addEventListener("click", clickHandler);
});
//code for crew page
const arrayOfInfo = document.querySelectorAll(".info");
const arrayOfCrewTabList = document.querySelectorAll(".nav-circle");
const specialistImg = document.getElementById("specialist-img");

var crewClickHandler = function crewClickHandler(ev) {
    arrayOfInfo.forEach(function (el) {
        if (el.getAttribute("aria-labelledby") == ev.target.id) {
            el.removeAttribute("hidden");
            ev.target.ariaSelected = "true";
            ev.target.classList.add("active-circle");
            arrayOfCrewTabList.forEach(function (e) {
                if (ev.target.id !== e.id) {
                    e.ariaSelected = "false";
                    e.classList.remove("active-circle");
                }
            });
            switch (ev.target.id) {
                case "commander-tab":
                    specialistImg.src = "./assets/crew/image-douglas-hurley.png";
                    specialistImg.classList.add = "douglas";
                    specialistImg.style.marginTop = "0"; 
                    
                    break;
                case "specialist-tab":
                    specialistImg.src = "./assets/crew/image-anousheh-ansari.png";
                    specialistImg.classList.add = "shuttleworth";
                    break;
            }
        }
        else {
            var attr = document.createAttribute("hidden");
            el.setAttributeNode(attr);
        }
    })
}
arrayOfCrewTabList.forEach(function (element) {
    element.addEventListener("click", crewClickHandler);
});
//code for technology page
const technologyImg = document.getElementById("technology-img");
const firstSrc = document.getElementById("firstSrc");
const secondSrc = document.getElementById("secondSrc");
const infoTechnology = document.querySelectorAll(".info-technology");
const technologyCircle = document.querySelectorAll(".technology-circle");

var clickTechnology = function clickTechnology(ee) {
    console.log(ee.target.id);
    infoTechnology.forEach(function (ele) {
        if (ele.getAttribute("aria-labelledby") == ee.target.id) {
            ele.removeAttribute("hidden");
            ee.target.ariaSelected = "true";
            ee.target.classList.add("active-circle");
            technologyCircle.forEach(function (elem) {
                if (elem.id !== ee.target.id) {
                    elem.ariaSelected = "false";
                    elem.classList.remove("active-circle");
                }
            })
        } else {
            var attr = document.createAttribute("hidden");
            ele.setAttributeNode(attr);
        }
    })
}
technologyCircle.forEach(function (element) {
    element.addEventListener("click", clickTechnology);
})
