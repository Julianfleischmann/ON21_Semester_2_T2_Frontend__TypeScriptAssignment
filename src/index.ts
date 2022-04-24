//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

// import { helloWorld, Beispiel } from "./myModule";
// import { alertMe } from "./myOtherModule";

// console.log(helloWorld);
// customElements.define("my-beispiel", Beispiel);

// alertMe();

// const myInputValue = document.querySelector<HTMLInputElement>("#myInput");

// const myInputValueAlternate = document.querySelector(
//   "#myInput"
// ) as HTMLInputElement;

// document
//   .querySelector<HTMLInputElement>("#myInput")
//   ?.addEventListener("focus", doSmth);

// function doSmth(e: UIEvent) {
//   const val = e.target as HTMLInputElement;
//   console.log(e, val.value);
// }

import { priceChart } from './calculatorChart';
import { getConsumptionInLiter, getCostCarResult, getDistanceInKm, getCarPriceInEuro } from './calculatorDomUtils';
import { calcCar } from './calculatorLogic';

function startCalculator() {
    getConsumptionInLiter.value = "3";
    getDistanceInKm.value = "10";
    getCarPriceInEuro.value = "1";
    getCostCarResult.innerHTML = "not set";
    getConsumptionInLiter.addEventListener('input', calcCar);
    getDistanceInKm.addEventListener('input', calcCar);
    getCarPriceInEuro.addEventListener('input', calcCar);

    priceChart.update();
}

startCalculator();