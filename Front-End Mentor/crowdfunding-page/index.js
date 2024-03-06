const menuIcon = document.querySelector(".header__menu-icon");
const backProjectBtn = document.querySelector(".mastercratf__button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close-modal");
const bookmarkContainer = document.querySelector(".mastercratf__bookmark-container");
const bookmarkContainerIcon = document.querySelector(".bookmark-icon");
const bookmarkText = document.querySelector(".mastercratf__bookmark-text");
const bambooStandbtn = document.querySelector("[data-bamboo]");
const blackEditionBtn = document.querySelector("[data-black-edition]");
const modalPledgeContainer = document.querySelectorAll(".modal__pledges");
const noRewardCheckbox = document.querySelector("#no-reward");
const bambooCheckbox = document.querySelector("#bamboo-stand");
const blackEditionCheckbox = document.querySelector("#black-edition");
const enterPledge = document.querySelectorAll('.modal__enter-pledge')
const confirmPledge = document.querySelectorAll('.modal__confirm-pledge');
const thankYouPage = document.querySelector('.ty');
const thankYouBtn = document.querySelector('.thank-you__button');
const twentyFivePledge = document.querySelector('[data-25]').value;
const seventyFivePledge = document.querySelector('[data-75]').value;

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
    modalPledgeContainer.forEach(container => {
        container.classList.remove('border-active')
    })
    modalPledgeContainer[1].classList.add("border-active");   
    bambooCheckbox.checked = true 
    enterPledge.forEach(form => {
        form.style.display = 'none'
    })
    enterPledge[1].style.display = 'flex';
});

blackEditionBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalPledgeContainer.forEach(container => {
        container.classList.remove('border-active')
    })
    modalPledgeContainer[2].classList.add("border-active");   
    blackEditionCheckbox.checked = true 
    enterPledge.forEach(form => {
        form.style.display = 'none'
    })
    enterPledge[2].style.display = 'flex';
});

noRewardCheckbox.addEventListener('change', () => {
    enterPledge.forEach(form => {
        form.style.display = 'none'
    })
    modalPledgeContainer.forEach(container => {
        container.classList.remove('border-active')
    })
    modalPledgeContainer[0].classList.toggle('border-active')
    enterPledge[0].style.display = 'flex';
})

bambooCheckbox.addEventListener('change', () => {
    enterPledge.forEach(form => {
        form.style.display = 'none'
    })
    modalPledgeContainer.forEach(container => {
        container.classList.remove('border-active')
    })
    modalPledgeContainer[1].classList.toggle('border-active')
    enterPledge[1].style.display = 'flex';
})

blackEditionCheckbox.addEventListener('change', () => {
    enterPledge.forEach(form => {
        form.style.display = 'none'
    })
    modalPledgeContainer.forEach(container => {
        container.classList.remove('border-active')
    })
    modalPledgeContainer[2].classList.toggle('border-active')
    enterPledge[2].style.display = 'flex'
})

thankYouBtn.addEventListener('click', () => {
    thankYouPage.style.display = 'none';
})


confirmPledge.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'none';
        thankYouPage.style.display = 'flex';
    })
})


