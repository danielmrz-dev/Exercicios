const background = document.querySelector('body');
const card = document.querySelector('.card');
const title = document.querySelector('.card__title');
const region = document.querySelector('.card__location');
const links = document.querySelectorAll('.card__link');
const description = document.querySelector('.card__description');
const checkbox = document.querySelector('.card__toggle-checkbox');
const img = document.querySelector('.card__toggle-img');
const profilePicture = document.querySelector('.card__img');


checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        background.classList.add('bg-White');
        title.classList.add('text-OffBlack');
        card.classList.add('bg-Silver');
        region.classList.add('text-DarkGreen');     
        description.classList.add('text-OffBlack');
        profilePicture.classList.add('border-DarkGreen');
        img.setAttribute('src', 'assets/images/moon-solid.svg');
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add('hover:bg-DarkGreen', 'bg-Platinum', 'text-OffBlack', 'hover:text-White');            
        }   
    } else {
        background.classList.remove('bg-White');     
        title.classList.remove('text-OffBlack');        
        card.classList.remove('bg-Silver');        
        region.classList.remove('text-DarkGreen');   
        description.classList.remove('text-OffBlack');
        profilePicture.classList.remove('border-DarkGreen');
        img.setAttribute('src', 'assets/images/sun-solid.svg');        
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('hover:bg-DarkGreen', 'bg-Platinum', 'text-OffBlack', 'hover:text-White');            
        }        
    }
});




