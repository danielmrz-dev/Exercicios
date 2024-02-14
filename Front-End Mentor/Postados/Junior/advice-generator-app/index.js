const adviceId = document.querySelector(".advice__number");
const adviceText = document.querySelector(".advice__text");
const diceBtn = document.querySelector(".advice__dice-container");

diceBtn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Erro ao obter conselho");
            }
            return res.json();
        })
        .then((item) => {
            adviceId.innerHTML = `${item.slip.id}`;
            adviceText.innerHTML = `"${item.slip.advice}"`;
        })
        .catch((error) => {
            console.error("Erro:", error);
            adviceId.innerHTML = `000`;
            adviceText.innerHTML = `Sorry, error while fetching the advice.`;
        });
});
