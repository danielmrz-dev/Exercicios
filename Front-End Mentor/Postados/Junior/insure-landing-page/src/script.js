const menuIcon = document.querySelector(".menu-icon")
const checkbox = document.querySelector(".checkbox")
const menuUl = document.querySelector(".menu")

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        menuIcon.setAttribute("src", "../images/icon-close.svg")
    } else {
        menuIcon.setAttribute("src", "../images/icon-hamburger.svg")        
    }
})

menuUl.addEventListener("click", (e) => {
    let classes = e.target.className;
    if (checkbox.checked && !(classes.includes("menu-item") || classes.includes("menu-link"))) {
        checkbox.checked = false
        menuIcon.setAttribute("src", "../images/icon-hamburger.svg")  
    }    
})