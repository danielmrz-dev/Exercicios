async function getAdvice() {
    const api = await fetch('https://api.adviceslip.com/advice');
    const advice = await api.json();
    console.log(advice.slip.advice)
    console.log(advice.slip.id)
    
}

diceBtn.addEventListener('click', getAdvice)

