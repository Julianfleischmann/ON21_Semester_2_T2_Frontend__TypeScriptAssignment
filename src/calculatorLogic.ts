import { updatePriceChart } from './calculatorChart';
import { getConsumptionInLiter, getDistanceInKm, getCarCheckTwoTimes, getCarPriceInEuro, getPriceOpnv, getCostCarResult } from './calculatorDomUtils';

export function calcCarOpnv() {
    const comsumptionInLiter = +getConsumptionInLiter.value; // parseInt() the Variable via +Operator;
    let distanceInKm = +getDistanceInKm.value;
    const priceInEuro = +getCarPriceInEuro.value;
    const carCheckTwoTimes = getCarCheckTwoTimes.checked;

    const priceOpnv = +getPriceOpnv.value;
    
    if (carCheckTwoTimes == true) {
        distanceInKm = distanceInKm*2;
    }

    // Calculate Verbrauch/100 * KilometerDistaz * preisEuro
    const carResult: number = comsumptionInLiter/100 * distanceInKm * priceInEuro;
    // Set the Cost to string and write to DOM
    getCostCarResult.innerHTML = carResult.toString();
    
    const opnvResult: number = priceOpnv;
    
    // Updating the Price Chart
    updatePriceChart(carResult, opnvResult);
}

