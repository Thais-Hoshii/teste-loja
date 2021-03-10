"use strict"

function $(txt) { return document.querySelectorAll(txt); }

window.onload = checkViewportWidth;
window.onresize =  checkViewportWidth;

function checkViewportWidth() {
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

function openTabs(name) {
    let options = $(name);
    let attr = "hidden";

    options.forEach( x => {
        if (x.classList.contains(attr)) {
            x.classList.remove(attr);
        } else {
            x.classList.add(attr);
        }
    });
}