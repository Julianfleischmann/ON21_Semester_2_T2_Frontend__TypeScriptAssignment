//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { getCarConsumptionInLiter, getCarCostResult, getCarDistanceInKm, getCarPriceLiterInEuro, getOpnvPrice, getOpnvCostResult, getCarCheckTwoTimes, getOpnvDiscount } from './calculatorDomUtils';
import { calcCarOpnv } from './calculatorLogic';

function startCalculator() {

    // adding standard values
    // input fields
    getCarConsumptionInLiter.value = "3";
    getCarDistanceInKm.value = "10";
    getCarPriceLiterInEuro.value = "2";
    getOpnvPrice.value = "5";
    getOpnvDiscount.value = "0";
    // results
    getCarCostResult.innerHTML = "nicht berechnet";
    getOpnvCostResult.innerHTML = "nicht berechnet";

    // Adding event listener
    // car
    getCarConsumptionInLiter.addEventListener('input', calcCarOpnv);
    getCarDistanceInKm.addEventListener('input', calcCarOpnv);
    getCarPriceLiterInEuro.addEventListener('input', calcCarOpnv);
    getCarCheckTwoTimes.addEventListener('input', calcCarOpnv);
    // ÖPNV
    getOpnvPrice.addEventListener('input', calcCarOpnv);
    getOpnvDiscount.addEventListener('input', calcCarOpnv);
}

startCalculator();