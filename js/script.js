"use strict"
// Atalho para selecionar um conjunto de elementos
function $(txt) { return document.querySelectorAll(txt); }

// Quando iniciar a página ou mudar comprimento da tela, usar função
window.onresize = toggleNavBar;
window.addEventListener("load", () => {
    toggleNavBar();
    if (window.innerWidth >= 600) {
        $("#nav-mobile")[0].classList.add("hidden");
    }
});

// Adicionando funções para eventos relacionados a menus dropdown
$("#menu-btn")[0].addEventListener("click", () => {
    return openTabs("#nav-menu");
});
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

// Faz com que a barra de navegação mude quando o viewport passa do cabeçalho
let headerBottom = $("header")[0].offsetTop + $("header")[0].offsetHeight;

window.addEventListener("scroll", () => {
    let base = window.pageYOffset;
    let mobile = $("#nav-mobile")[0];
    let desktop = $("#nav-menu")[0];

    if (window.innerWidth >= 600) {
        if (base >= headerBottom) {
            mobile.classList.remove("hidden");
            if (!desktop.classList.contains("hidden")) {
                desktop.classList.add("hidden");
            }
        } else {
            mobile.classList.add("hidden");
            if (desktop.classList.contains("hidden")) {
                desktop.classList.remove("hidden");
            }
        }
    }
});

// Função para ligar/desligar barra de navegação para telas com width >= 600px
function toggleNavBar() {
    let navItems = $("#nav-menu");
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