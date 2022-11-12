{
    const calculate = () => {
        const plnElement = document.querySelector(".js-pln");
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency")
        const rateElement = document.querySelector(".js-rate");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const pln = amount * currency;

        if (amount >= 0) {
            plnElement.innerText = pln.toFixed(2);
        }
        else {
            plnElement.innerText = "podaj wartosć dodatnią"
        };

        rateElement.value = currency;
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", (calculate));
    }

    calculate();
    init();

}