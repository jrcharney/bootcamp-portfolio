/* File: assets/js/script.js */

/* TODO: animate the scrolling */
const nav = document.querySelector("nav");
const navInitOffsetTop = nav.offsetTop;

window.addEventListener('scroll', (event) => {
    if(window.scrollY >= nav.offsetTop){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});