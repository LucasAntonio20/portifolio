/* Menu */

const menu = document.querySelector('.menu');
const headerMenu = document.querySelector('.header-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('allow');
    headerMenu.classList.toggle('allow');
})

headerMenu.addEventListener('click',() => {
    menu.classList.remove('allow');
    headerMenu.classList.remove('allow');
})

/* Text Skill */

const html = document.getElementById('html-s');
const htmltext = document.getElementById('html-skills-text');

html.addEventListener("mouseover", function() {
    htmltext.textContent = "HTML";
})

html.addEventListener("mouseout", function() {
    htmltext.textContent = "";
})

const css = document.getElementById('css-s');
const csstext = document.getElementById('css-skills-text');

css.addEventListener("mouseover", function() {
    csstext.textContent = "CSS";
})

css.addEventListener("mouseout", function() {
    csstext.textContent = "";
})

const js = document.getElementById('js-s');
const jstext = document.getElementById('js-skills-text');

js.addEventListener("mouseover", function() {
    jstext.textContent = "JavaScript";
})

js.addEventListener("mouseout", function() {
    jstext.textContent = "";
})

const java = document.getElementById('java-s');
const javatext = document.getElementById('java-skills-text');

java.addEventListener("mouseover", function() {
    javatext.textContent = "Java";
})

java.addEventListener("mouseout", function() {
    javatext.textContent = "";
})

/* Dark and Light Mode */

const darkorlightbtn = document.getElementById('btndarkorlight');

const body = document.querySelector('body');

darkorlightbtn.addEventListener('change', () => {
    body.classList.toggle('dark');
});