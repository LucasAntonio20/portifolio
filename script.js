const linkedin_icon = document.getElementById('linkedin_icon');
const github_icon = document.getElementById('github_icon');

linkedin_icon.addEventListener("mouseover", function() {
    this.style.color = "var(--linkedin-color)";
})

linkedin_icon.addEventListener("mouseout", function() {
    this.style.color = "var(--black-color)"
})

github_icon.addEventListener("mouseover", function() {
    this.style.color = "var(--github-color)";
})

github_icon.addEventListener("mouseout", function() {
    this.style.color = "var(--black-color)"
})

const menu = document.querySelector('.menu');
const headerMenu = document.querySelector('.header-menu');
const aboutHeader = document.getElementById('about-header');
const skillsHeader = document.getElementById('skills-header');

menu.addEventListener('click', () => {
    menu.classList.toggle('allow');
    headerMenu.classList.toggle('allow');
})

aboutHeader.addEventListener('click',() => {
    menu.classList.remove('allow');
    headerMenu.classList.remove('allow');
})

skillsHeader.addEventListener('click',() => {
    menu.classList.remove('allow');
    headerMenu.classList.remove('allow');
})
