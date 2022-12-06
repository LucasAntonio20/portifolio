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
