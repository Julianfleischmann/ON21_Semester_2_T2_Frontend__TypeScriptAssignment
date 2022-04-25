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

import { getConsumptionInLiter, getCostCarResult, getDistanceInKm, getCarPriceInEuro, getPriceOpnv, getCostOpnvResult, getCarCheckTwoTimes } from './calculatorDomUtils';
import { calcCarOpnv } from './calculatorLogic';

function startCalculator() {

    // adding standard values
    // input fields
    getConsumptionInLiter.value = "3";
    getDistanceInKm.value = "10";
    getCarPriceInEuro.value = "2";
    getPriceOpnv.value = "5";
    // results
    getCostCarResult.innerHTML = "not set";
    getCostOpnvResult.innerHTML = "not set";

    // Adding event listener
    // car
    getConsumptionInLiter.addEventListener('input', calcCarOpnv);
    getDistanceInKm.addEventListener('input', calcCarOpnv);
    getCarPriceInEuro.addEventListener('input', calcCarOpnv);
    getCarCheckTwoTimes.addEventListener('input', calcCarOpnv);
    // ÖPNV
    getPriceOpnv.addEventListener('input', calcCarOpnv);
}

startCalculator();