//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

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