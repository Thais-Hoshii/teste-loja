"use strict"

function $(txt) { return document.querySelectorAll(txt); }

function openTabs(name) {
    let options = $(name);
    let c = "hidden";

    options.forEach( x => {
        if (x.classList.contains(c)) {
            x.classList.remove(c);
        } else {
            x.classList.add(c);
        }
    });
}