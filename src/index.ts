//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { getCarConsumptionInLiter, getCarDistanceInKm, getCarPriceLiterInEuro, getOpnvPrice, getCarCheckTwoTimes, getOpnvDiscount } from './calculatorDomUtils';
import { calcCarOpnv } from './calculatorLogic';

function startCalculator() {

    /**************************
     * adding standard values *
     **************************/
    // input fields
    /**
     * set consumption dafault
     */
    getCarConsumptionInLiter.value = "3";
    /**
     * set distance default
     */
    getCarDistanceInKm.value = "10";
    /**
     * set price in liter default
     */
    getCarPriceLiterInEuro.value = "2";
    /**
     * set OPNV price default
     */
    getOpnvPrice.value = "5";
    /**
     * set OPNV discount default
     */
    getOpnvDiscount.value = "0";

    /*************************
     * Adding event listener *
     *************************/ 
    // CAR
    /**
     * input listener for car Field consumption
     */
    getCarConsumptionInLiter.addEventListener('input', calcCarOpnv);
    /**
     * input listener for car Field km
     */
    getCarDistanceInKm.addEventListener('input', calcCarOpnv);
    /**
     * input listener for car Field price in EURO
     */
    getCarPriceLiterInEuro.addEventListener('input', calcCarOpnv);
    /**
     * input listener for car Field check two times
     */
    getCarCheckTwoTimes.addEventListener('input', calcCarOpnv);

    // ÖPNV
    /**
     * input listener for ÖONV Field price
     */
    getOpnvPrice.addEventListener('input', calcCarOpnv);
    /**
     * input listener for ÖPNV Field discount
     */
    getOpnvDiscount.addEventListener('input', calcCarOpnv);
}

/**
 * starting the calculator
 */
startCalculator();