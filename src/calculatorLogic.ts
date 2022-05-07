import { updatePriceChart } from './calculatorChart';
import { getCarConsumptionInLiter, getCarDistanceInKm, getCarCheckTwoTimes, getCarPriceLiterInEuro, getOpnvPrice, getCarCostResult, getOpnvCostResult, getOpnvDiscount, getOpnvDiscountWarning, getResultInformation } from './calculatorDomUtils';

export function calcCarOpnv() {
    // Car Variables
    const carComsumptionInLiter: number = +getCarConsumptionInLiter.value; // parseInt() the Variable via +Operator;
    let carDistanceInKm: number = +getCarDistanceInKm.value;
    const carPriceInEuro: number = +getCarPriceLiterInEuro.value;
    const carCheckTwoTimes: boolean = getCarCheckTwoTimes.checked;

    /**
     * ÖPNV-Variable parsed as Number
     */
    let opnvPrice: number = +getOpnvPrice.value;
    /**
     * ÖPNV-Discount parsed as Number
     */
    const opnvDiscount: number = +getOpnvDiscount.value;

    /*************
     * Car logic *
    **************/

    // Way back will be calculated, when checkbox is checked
    if (carCheckTwoTimes == true) {
        carDistanceInKm = carDistanceInKm * 2;
    }

    // Calculate Verbrauch/100 * KilometerDistaz * preisEuro
    const carResult: number = carComsumptionInLiter / 100 * carDistanceInKm * carPriceInEuro;

    // Set the Cost, Reound it, parse to string and write to DOM
    getCarCostResult.innerHTML = carResult.toFixed(2).toString() + "€";


    /**************
     * ÖPNV logic *
     **************/
    
    // Wenn der Rabatt > 0 dann rechne (100-X) * P / 100
    // Prüft auch, ob der Wert in der richtigen Range liegt.

    // Check the Values between 0 and 100
    if (opnvDiscount > 100 || opnvDiscount < 0) {        
        getOpnvDiscountWarning.classList.replace('display-none', 'display-block');
        // getOpnvDiscount.value = "0";
    } else {
        getOpnvDiscountWarning.classList.replace('display-block', 'display-none');
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

