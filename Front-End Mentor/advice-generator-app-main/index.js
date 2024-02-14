const adviceId = document.querySelector('.advice__number')
const adviceText = document.querySelector('.advice__text')
const diceBtn = document.querySelector('.advice__dice-container')

async function getAdvice() {
    const api = await fetch('https://api.adviceslip.com/advice');
    const advice = await api.json();
    adviceId.innerHTML = `${advice.slip.id}`;
    adviceText.innerHTML = `"${advice.slip.advice}"`;    
}

diceBtn.addEventListener('click', getAdvice)


// diceBtn.addEventListener('click', () => {
//     const api = fetch('https://api.adviceslip.com/advice')
//         .then((res) => res.json())
//         .then((item) => {
//             adviceId.innerHTML = `${item.slip.id}`
//             adviceText.innerHTML = `"${item.slip.advice}"`
//         });
// })