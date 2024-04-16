const togglePriceBtn = document.querySelector("[data-toggle-btn]");
const prices = document.querySelectorAll("[data-price]");

function convertedPrice(priceElement, conversionFactor) {
    const priceNumber = Number(priceElement.innerText);
    const convertedPrice = (priceNumber * conversionFactor).toFixed(2)
    priceElement.innerText = convertedPrice
}

togglePriceBtn.addEventListener("change", () => {
    const conversionFactor = togglePriceBtn.checked ? 0.1 : 10;
    prices.forEach(price => convertedPrice(price, conversionFactor))
})