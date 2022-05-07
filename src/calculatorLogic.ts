import { updatePriceChart } from './calculatorChart';
import { getCarConsumptionInLiter, getCarDistanceInKm, getCarCheckTwoTimes, getCarPriceLiterInEuro, getOpnvPrice, getCarCostResult, getOpnvCostResult, getOpnvDiscount, getOpnvDiscountWarning, getResultInformation, getOpnvCheckTwoTimes } from './calculatorDomUtils';

export function calcCarOpnv() {
    // Car Variables
    /**
     * car Consumption parsed as Number
     */
    const carComsumptionInLiter: number = +getCarConsumptionInLiter.value; // parseInt() the Variable via +Operator;
    /**
     * car distance parsed as Number
     */
    let carDistanceInKm: number = +getCarDistanceInKm.value;
    /**
     * car price liter parsed as Number
     */
    const carPriceLiterInEuro: number = +getCarPriceLiterInEuro.value;
    /**
     * car Consumption parsed as boolean
     */
    const carCheckTwoTimes: boolean = getCarCheckTwoTimes.checked;

    /**
     * ÖPNV-Variable parsed as Number
     */
    let opnvPrice: number = +getOpnvPrice.value;
    /**
     * ÖPNV-Discount parsed as Number
     */
    const opnvDiscount: number = +getOpnvDiscount.value;
    /**
     * get the boolean value of the DOM element getOpnvCheckTwoTimes
     */
    const opnvCheckedTwoTimes: boolean = getOpnvCheckTwoTimes.checked;

    /*************
     * Car logic *
    **************/

    // Way back will be calculated, when checkbox is checked
    if (carCheckTwoTimes) {
        carDistanceInKm = carDistanceInKm * 2;
    }

    // Calculate Verbrauch/100 * KilometerDistaz * preisEuro
    const carResult: number = carComsumptionInLiter / 100 * carDistanceInKm * carPriceLiterInEuro;

    // Set the Cost, Reound it, parse to string and write to DOM
    getCarCostResult.innerHTML = carResult.toFixed(2).toString() + "€";


    /**************
     * ÖPNV logic *
     **************/
    
    // Checks if way back is checked
    if (opnvCheckedTwoTimes) {
        opnvPrice = opnvPrice * 2;
    }


    // Validation Check the Values between 0 and 100
    // Wenn der Rabatt > 0 dann rechne (100-X) * P / 100
    if (opnvDiscount > 100 || opnvDiscount < 0) {        
        getOpnvDiscountWarning.classList.replace('display-none', 'display-inline-block');
    } else {
        getOpnvDiscountWarning.classList.replace('display-inline-block', 'display-none');
        opnvPrice = (100 - opnvDiscount) * opnvPrice / 100;
    }

    // Setting up a variable and assign the Price to it
    const opnvResult: number = opnvPrice;

    // Set the Cost, Reound it, parse to string and write to DOM
    getOpnvCostResult.innerHTML = opnvResult.toFixed(2).toString() + "€";


    /****************
     * finish logic *
     ****************/

    // Calculate the difference
    const difference: number = Math.abs(opnvResult - carResult);

    // Updating the result Information
    if (opnvResult > carResult) {
        // Auto günstiger
        getResultInformation.innerHTML = `Das <strong>Auto</strong> ist ${difference.toFixed(2)}€ günstiger!`;
    } else if (opnvResult < carResult) {
        // ÖPNV günstiger
        getResultInformation.innerHTML = `Der <strong>ÖPNV</strong> ist ${difference.toFixed(2)}€ günstiger!`;
    } else {
        // Beide gleich teuer
        getResultInformation.innerHTML = "Beide sind gleich günstig!";
    }

    // Updating the Price Chart
    updatePriceChart(carResult, opnvResult);
}

