//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { getCarConsumptionInLiter, getCarCostResult, getCarDistanceInKm, getCarPriceLiterInEuro, getPriceOpnv, getCostOpnvResult, getCarCheckTwoTimes } from './calculatorDomUtils';
import { calcCarOpnv } from './calculatorLogic';

function startCalculator() {

    // adding standard values
    // input fields
    getCarConsumptionInLiter.value = "3";
    getCarDistanceInKm.value = "10";
    getCarPriceLiterInEuro.value = "2";
    getPriceOpnv.value = "5";
    // results
    getCarCostResult.innerHTML = "not set";
    getCostOpnvResult.innerHTML = "not set";

    // Adding event listener
    // car
    getCarConsumptionInLiter.addEventListener('input', calcCarOpnv);
    getCarDistanceInKm.addEventListener('input', calcCarOpnv);
    getCarPriceLiterInEuro.addEventListener('input', calcCarOpnv);
    getCarCheckTwoTimes.addEventListener('input', calcCarOpnv);
    // ÖPNV
    getPriceOpnv.addEventListener('input', calcCarOpnv);
}

startCalculator();