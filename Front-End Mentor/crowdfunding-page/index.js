const menuIcon = document.querySelector(".header__menu-icon");
const backProjectBtn = document.querySelector(".mastercratf__button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close-modal");
const bookmarkContainer = document.querySelector(".mastercratf__bookmark-container");
const bookmarkContainerIcon = document.querySelector(".bookmark-icon");
const bookmarkText = document.querySelector(".mastercratf__bookmark-text");
const bambooStandbtn = document.querySelector("[data-bamboo]");
const modalPledgeContainer = document.querySelectorAll(".modal__pledges");
const noRewardCheckbox = document.querySelector("#no-reward");
const bambooCheckbox = document.querySelector("#bamboo-stand");
const blackEditionCheckbox = document.querySelector("#black-edition");

menuIcon.addEventListener("click", () => {
    let imgSource = menuIcon.getAttribute("src");
    imgSource == "images/icon-hamburger.svg"
        ? menuIcon.setAttribute("src", "images/icon-close-menu.svg")
        : menuIcon.setAttribute("src", "images/icon-hamburger.svg");
});

backProjectBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

bookmarkContainer.addEventListener("click", () => {
    let imgSource = bookmarkContainerIcon.getAttribute("src");
    if (imgSource == "images/icon-bookmark.svg") {
        bookmarkContainerIcon.setAttribute(
            "src",
            "images/icon-bookmark-green.svg"
        );
        bookmarkText.classList.add("bookmark-active");
    } else {
        bookmarkContainerIcon.setAttribute("src", "images/icon-bookmark.svg");
        bookmarkText.classList.remove("bookmark-active");
    }
});

bambooStandbtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalPledgeContainer[1].classList.add("border-active");   
    bambooCheckbox.checked = true 
});

if (noRewardCheckbox.checked == true) {
    modalPledgeContainer[0].classList.add("border-active");   
} else if (bambooCheckbox.checked == true){
    modalPledgeContainer[1].classList.add("border-active"); 
}
