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
//destination tab panel
// var arrayOfTabList = document.querySelectorAll('.nav-text');
// console.log(arrayOfTabList);

// var clickHandler = function clickHandler(e) {
//     var arrayOfTabpanels = document.querySelectorAll(".tabpanel");

//     var planetImg = document.getElementById("planet-img");
//     arrayOfTabpanels.forEach(function (el) {
//         if(el.getAttribute("aria-labelledby")==e.target.id){
//             e.target.ariaSelected = "true";
//             el.removeAttribute("hidden");
//             e.target.classList.add("visited-link");
//             arrayOfTabList.forEach(function (elem){
//                 if(e.target.id !== elem.id){
//                     elem.ariaSelected = "false";
//                     elem.classList.remove("visited-link");
//                 }
//             });
//             switch(e.target.id){
//                 case "moon-tab":
//                     planetImg.src="./assets/destination/image-moon.png";
//                     break;
//                 case "mars-tab":
//                     planetImg.src="./assets/destination/image-mars.png";
//                     break;
//                 case "europa-tab":
//                     planetImg.src="./assets/destination/image-europa.png";
//                     break;
//                 case "titan-tab":
//                     planetImg.src="./assets/destination/image-titan.png";
//                     break;
//             }
//         }else{
//             var attr = document.createAttribute("hidden");
//             el.setAttributeNode(attr);
//         }
//     });
// };
// arrayOfTabList.forEach(function (element){
//     element.addEventListener("click",clickHandler);
// });
const navText = document.querySelectorAll(".nav-text");
// console.log(navText);
const $ = document.querySelector.bind(document);
var planetImg = document.getElementById("#planet-img");
const tabpanel = document.querySelectorAll(".tabpanel");
// console.log(tabpanel);
navText.forEach((visitedLink,index) => {
    const panel = tabpanel[index];
    var planetImg = document.getElementById("#planet-img");

    visitedLink.onclick = function () {
        console.log(panel.id);
        $(".nav-text.visited-link").classList.remove("visited-link");
        this.classList.add("visited-link");
        // panel.removeAttribute(hidden);
        // switch(panel.id){
        //     case "moon":
        //         planetImg.src ="./assets/destination/image-moon.png";
        //         break;
        //     case "mars":
        //         planetImg.src ="./assets/destination/image-mars.png"
        //         break;
                
        // }
    }
})