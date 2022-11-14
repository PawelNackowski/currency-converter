{
    const onInputChange = () => {

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency")

        const amount = amountElement.value;
        const currency = currencyElement.value;

        result = calculateResult(amount, currency);
        updateResult(amount, currency, result);
    }

    const calculateResult = (amount, currency) => {
        return amount * currency
    };

    const updateResult = (amount, currency, result) => {
        const plnElement = document.querySelector(".js-pln");
        const rateElement = document.querySelector(".js-rate");

        if (amount >= 0) {
            plnElement.innerText = result.toFixed(2);
        }
        else {
            plnElement.innerText = "podaj wartosć dodatnią"
        };

        rateElement.value = currency;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onInputChange);
    }

    init();
}