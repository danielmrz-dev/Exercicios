import { calculateMortgage } from "./calculateMortgage.js";
import { validateField, validateMortgageType } from "./validations.js";

const mortgageAmount = document.querySelector("#mortgage-amount") as HTMLInputElement;
const mortgageTerm = document.querySelector("#mortgage-term") as HTMLInputElement;
const interestRate = document.querySelector("#interest-rate") as HTMLInputElement;
const repaymentOption = document.querySelector("#mortgage-type-repayment") as HTMLInputElement;
const interestOnlyOption = document.querySelector("#mortgage-type-interest") as HTMLInputElement;
const form: HTMLFormElement | null = document.querySelector(".calculator__form");

interestRate.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9,]/g, '');
});

if (form) {
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const isMortgageAmountValid: boolean = validateField("#mortgage-amount", ".currency-icon");
        const isMortgageTermValid: boolean = validateField("#mortgage-term", ".years-icon");
        const isInterestRateValid: boolean = validateField("#interest-rate", ".percentage-icon");
        const isMortgageTypeValid: boolean = validateMortgageType();

        const numberMortgageAmount = parseFloat(mortgageAmount.value);
        const numberInterestRate = parseFloat(interestRate.value.replace(",", "."));
        const numberMortgageTerm = parseFloat(mortgageTerm.value);
        
        if (isMortgageAmountValid && isMortgageTermValid && isInterestRateValid && isMortgageTypeValid) {
            let monthlyPayment =  calculateMortgage(numberMortgageAmount, numberInterestRate, numberMortgageTerm);
            if (repaymentOption.checked) {
                monthlyPayment = monthlyPayment
                //= renderizar o resultado na tela
                
            } else if (interestOnlyOption.checked) {
                monthlyPayment = ((monthlyPayment * 12) * Number(mortgageTerm.value)) - Number(mortgageAmount.value)                
                //= renderizar o resultado na tela
            }
            console.log(monthlyPayment);           
        }
    });
}
