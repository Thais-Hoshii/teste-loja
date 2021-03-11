"use strict"
// Atalho para selecionar um conjunto de elementos
function $(txt) { return document.querySelectorAll(txt); }

// Quando iniciar a página ou mudar comprimento da tela, usar função
window.onload = toggleNavBar;
window.onresize = toggleNavBar;

// Adicionando funções para eventos relacionados a menus dropdown
$("#menu-btn")[0].addEventListener("click", () => { return openTabs(".nav-item"); });
$(".nav-item").forEach( (x, i) => {
    let n = $(".dropitem")[i];
    x.addEventListener("click",  () => {
        openTabs(".open-icon", i);
        openTabs(".close-icon", i);
        return openTabs(".dropitem", i);
    });
    x.addEventListener("focusout", () => {
        if (!n.classList.contains("hidden")) {
            n.classList.add("hidden");
        }
    });
})

// Função para ligar/desligar barra de navegação para telas com width >= 600px
function toggleNavBar() {
    let navItems = $(".nav-item");
    let attr = "hidden";

    if (window.innerWidth >= 600) {
        navItems.forEach ( x => {
            if (x.classList.contains(attr)) {
                x.classList.remove(attr);
            }
        })
    } else {
        navItems.forEach ( x => {
            if (!x.classList.contains(attr)) {
                x.classList.add(attr);
            }
        })
    }
}

// Função para ocultar ou mostrar um elemento
function openTabs(name, i) {
    let arr = $(name);
    let c = "hidden";

    if (i === undefined) {
        arr.forEach( x => {
            if (x.classList.contains(c)) {
                x.classList.remove(c);
            } else {
                x.classList.add(c);
            }
        });
    } else {
        if (arr[i].classList.contains(c)) {
            arr[i].classList.remove(c);
        } else {
            arr[i].classList.add(c);
        }
    }
}