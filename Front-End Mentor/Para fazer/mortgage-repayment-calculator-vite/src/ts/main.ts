// import { calculateMortgage } from "./calculateMortgage.js";

import { validateField, validateMortgageType } from "./validations.js";

const form: HTMLFormElement | null =
    document.querySelector(".calculator__form");
// const mortgageTypeRepayment: HTMLInputElement | null = document.querySelector("#mortgage-type-repayment");
// const mortgageTypeInterest: HTMLInputElement | null = document.querySelector("#mortgage-type-interest");

if (form) {
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        validateField("#mortgage-amount", ".currency-icon");
        validateField("#mortgage-term", ".years-icon");
        validateField("#interest-rate", ".percentage-icon");
        validateMortgageType();
        // const amount = Number(mortgageAmount?.value);
        // const term = Number(mortgageTerm?.value);
        // const interest = Number(interestRate?.value);
        // const monthlyPayment = calculateMortgage(amount, interest, term);
        // const interestOnly = Number((((monthlyPayment * 12) * term) - amount).toFixed(2))
    });
}
