const mark = document.querySelector('p.mark-all');
const number = document.querySelector('strong.number');
const cards = [];

const redDots = [document.getElementById('new1'), document.getElementById('new2'), document.getElementById('new3')]

for (let i = 0; i <= 3; i++) {
    cards.push(document.getElementById(`card${i}`))    
}

function markAsRead(card, redDot) {
    if (number.innerHTML > 0) {
        number.innerHTML -= '1'
        cards[card].style.background = 'white';    
        redDots[redDot].classList.add('hide-after');
    } else {
        number.innerHTML = '0';    
    }
}

function markAllAsRead() {
    number.innerHTML = '0';    
    cards[1].style.background = 'white';
    cards[2].style.background = 'white';
    cards[3].style.background = 'white';
    redDots[0].classList.add('hide-after');
    redDots[1].classList.add('hide-after');
    redDots[2].classList.add('hide-after');
}








