let slider = document.querySelector('input[type="range"]');
let dynamicPrice = document.querySelector(".container__dynamic-price");

dynamicPrice.innerHTML = `$${slider.value}.00`;
slider.oninput = function () {
    dynamicPrice.innerHTML = `$${this.value}.00`;
};

slider.addEventListener("input", function () {
    var x = ((slider.value - slider.min) / (slider.max - slider.min) * 100); // When it's not a 1 to 100 range input
    var color = `linear-gradient(90deg, #10d5c2 ${x}%, #eaeefb ${x}%)`;
    slider.style.background = color;
});
