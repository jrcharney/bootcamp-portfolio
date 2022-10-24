/* File: assets/js/script.js */

// I don't know why I couldn't set the visibility of the top link in CSS, so I had to forcce it by setting the HTML attribute.
const nav = document.querySelector("nav");
const topLink = document.querySelector(".navmenu > ul > li:last-child");
window.addEventListener('scroll', () => {
    if(window.scrollY >= nav.offsetTop){
        nav.classList.add("sticky");
        topLink.setAttribute("style",'visibility:visibile;')
    }else{
        nav.classList.remove("sticky");
        topLink.setAttribute("style",'visibility:hidden;')
    }
});