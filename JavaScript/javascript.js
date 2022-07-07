//Hambuer Menu
function hamburgerClick() {
    const nav = document.querySelector(".menu-list");
    const navbar = document.querySelector(".menu-list ul");
    const hamburger = document.querySelector(".menu-button");

    hamburger.style.opacity = '0';

    nav.style.opacity = '1';
    nav.style.zIndex = '100';
    nav.style.height = '100vh';
    nav.style.transition = '0.5s';
    nav.style.transitionDuration = 'ease-in-out';
    nav.style.top = '0';
    navbar.style.display = 'flex';
}

function closeHamburger() {
    const nav = document.querySelector(".menu-list");
    const navbar = document.querySelector(".menu-list ul");
    const hamburger = document.querySelector(".menu-button");

    hamburger.style.opacity = '1';

    nav.style.opacity = '0';
    navbar.style.display = 'none';
    nav.style.zIndex = '-1';
    nav.style.height = '0';
}

//Scrolling portfolio

function openAll() {
    const all = document.querySelector(".java-scrolling__all");
    const projects = document.querySelector(".java-scrolling__projects");
    const social = document.querySelector(".java-scrolling__social");
    const product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "3px solid orange";
    projects.style.borderBottom  = "none";
    social.style.borderBottom  = "none";
    product.style.borderBottom  = "none";

    conall.style.display = "grid";
    conprojects.style.display = "none";
    consocial.style.display = "none";
    conproduct.style.display = "none";
}

function openProject() {
    const all = document.querySelector(".java-scrolling__all");
    const projects = document.querySelector(".java-scrolling__projects");
    const social = document.querySelector(".java-scrolling__social");
    const product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "none";
    projects.style.borderBottom  = "3px solid orange";
    social.style.borderBottom  = "none";
    product.style.borderBottom  = "none";

    conall.style.display = "none";
    conprojects.style.display = "grid";
    consocial.style.display = "none";
    conproduct.style.display = "none";

}

function openSocial() {
    const all = document.querySelector(".java-scrolling__all");
    const projects = document.querySelector(".java-scrolling__projects");
    const social = document.querySelector(".java-scrolling__social");
    const product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "none";
    projects.style.borderBottom  = "none";
    social.style.borderBottom  = "3px solid orange";
    product.style.borderBottom  = "none";

    conall.style.display = "none";
    conprojects.style.display = "none";
    consocial.style.display = "grid";
    conproduct.style.display = "none";

}

function openProduct() {
    const all = document.querySelector(".java-scrolling__all");
    const projects = document.querySelector(".java-scrolling__projects");
    const social = document.querySelector(".java-scrolling__social");
    const product = document.querySelector(".java-scrolling__product");

    const conall = document.querySelector(".container11");
    const conprojects = document.querySelector(".container22");
    const consocial = document.querySelector(".container33");
    const conproduct = document.querySelector(".container44");

    all.style.borderBottom = "none";
    projects.style.borderBottom  = "none";
    social.style.borderBottom  = "none";
    product.style.borderBottom  = "3px solid orange";

    conall.style.display = "none";
    conprojects.style.display = "none";
    consocial.style.display = "none";
    conproduct.style.display = "grid";

}

