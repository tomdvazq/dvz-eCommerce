//Responsive Nav Menu//

const menu = document.getElementById("menu");
const menuMain = document.getElementById("menuMain");
const goBack = document.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = document.querySelector(".mobile-menu-close");
let subMenu;

menuMain.addEventListener("click", (e) => {
    if (menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
    }
});

goBack.addEventListener("click", () => {
    hideSubMenu();
})

menuTrigger.addEventListener("click", () => {
    toggleMenu();
})

closeMenu.addEventListener("click", () => {
    toggleMenu();
})

document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
})

function toggleMenu() {
    menu.classList.toggle("open");
    document.querySelector(".menu-overlay").classList.toggle("open");
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.getElementsByClassName(".current-menu-title").innerHTML = menuTitle;
    console.log(menuTitle)
    menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("active");
    }, 300);
    menu.getElementsByClassName(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
    if (this.innerWidth > 1022) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }

    }
}

// FAQ Accordeon //

const accordionItemHeader = document.querySelectorAll('.accordion-item-header');

accordionItemHeader.forEach(accordionItemHeader=>{
    accordionItemHeader.addEventListener('click', event => {
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else accordionItemBody.style.maxHeight = 0;
    })
})

// Internal Dropdown Button //

const optionMenu = document.querySelector(".select-menu");
selectBtn = optionMenu.querySelector(".select-btn");
options = optionMenu.querySelectorAll(".option"),
sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle('active'));

options.forEach(option =>{
    option.addEventListener('click', ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        console.log(selectedOption);

        optionMenu.classList.remove('active')
    })
})