console.log("Wtam Ciebie w moim prostym kalkulaorze walut :)")

let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency")
let rateElement = document.querySelector(".js-rate");

formElement.addEventListener("input", () => {

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let pln = amount * currency;

    if (amount >= 0) {
        plnElement.innerText = pln.toFixed(2);
    }
    else {
        plnElement.innerText = "podaj wartosć dodatnią"
    };

    rateElement.value = currency;
});
