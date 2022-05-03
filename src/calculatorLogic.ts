import { updatePriceChart } from './calculatorChart';
import { getConsumptionInLiter, getDistanceInKm, getCarCheckTwoTimes, getCarPriceInEuro, getPriceOpnv, getCostCarResult, getCostOpnvResult } from './calculatorDomUtils';

export function calcCarOpnv() {
    const comsumptionInLiter: number = +getConsumptionInLiter.value; // parseInt() the Variable via +Operator;
    let distanceInKm: number = +getDistanceInKm.value;
    const priceInEuro: number = +getCarPriceInEuro.value;
    const carCheckTwoTimes: boolean = getCarCheckTwoTimes.checked;

    const priceOpnv: number = +getPriceOpnv.value;
    
    if (carCheckTwoTimes == true) {
        distanceInKm = distanceInKm*2;
    }

    // Calculate Verbrauch/100 * KilometerDistaz * preisEuro
    const carResult: number = comsumptionInLiter/100 * distanceInKm * priceInEuro;
    // Set the Cost to string and write to DOM
    getCostCarResult.innerHTML = carResult.toString();
    
    const opnvResult: number = priceOpnv;
    // Set the Cost to string and write to DOM
    getCostOpnvResult.innerHTML = opnvResult.toString();
    
    // Updating the Price Chart
    updatePriceChart(carResult, opnvResult);
}

