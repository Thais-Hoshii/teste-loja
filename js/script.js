"use strict"

// Atalhos para selecionar elementos
function $(txt) { return document.querySelectorAll(txt); }


// Quando iniciar a página ou mudar comprimento da tela, usar função
window.onresize = checkWidth;
window.addEventListener("load", () => {
    checkWidth();
    if (window.innerWidth >= 600) {
        $("#nav-mobile")[0].classList.add("hidden");
        if (window.pageYOffset >= headerBottom) {
            checkViewportTop();
        }
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
        setTimeout(() => {
            if (!n.classList.contains("hidden")) {
                n.classList.add("hidden");
            }
        }, 100);
    });
})

// Faz com que a barra de navegação mude quando o viewport passa do cabeçalho
window.addEventListener("scroll", () => { return checkViewportTop() });


// Função para checar o topo da tela e se passar do cabeçalho, mudar barra de navegação
let headerBottom = $("header")[0].offsetTop + $("header")[0].offsetHeight;

function checkViewportTop() {
    let base = window.pageYOffset;
    let mobile = $("#nav-mobile")[0];
    let desktop = $("#nav-menu")[0];
    let c = "hidden";

    if (window.innerWidth >= 600) {
        if (base >= headerBottom) {
            mobile.classList.remove(c);
            if (!desktop.classList.contains(c)) {
                desktop.classList.add(c);
            }
        } else {
            mobile.classList.add(c);
            if (desktop.classList.contains(c)) {
                desktop.classList.remove(c);
            }
        }
    }
}

// Função para ligar/desligar barra de navegação para telas com width >= 600px
function checkWidth() {
    let navItems = $("#nav-menu");
    let c = "hidden";

    if (window.innerWidth >= 600) {
        navItems.forEach ( x => {
            if (x.classList.contains(c)) {
                x.classList.remove(c);
            }
        })
    } else {
        navItems.forEach ( x => {
            if (!x.classList.contains(c)) {
                x.classList.add(c);
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