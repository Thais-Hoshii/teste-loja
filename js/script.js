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