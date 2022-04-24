import { updatePriceChart } from './calculatorChart';
import { getConsumptionInLiter, getDistanceInKm, getCheckTwoTimes, getCarPriceInEuro, getPriceOpnv, getCostCarResult } from './calculatorDomUtils';

export function calcCarOpnv() {
    const comsumptionInLiter = +getConsumptionInLiter.value;
    const distanceInKm = +getDistanceInKm.value;
    const priceInEuro = +getCarPriceInEuro.value;
    const priceOpnv = +getPriceOpnv.value;

    // Calculate Verbrauch/100 * KilometerDistaz * preisEuro
    const carResult: number = comsumptionInLiter/100 * distanceInKm * priceInEuro;
    // Set the Cost to string and write to DOM
    getCostCarResult.innerHTML = carResult.toString();
    
    const opnvResult: number = priceOpnv;
    
    // Updating the Price Chart
    updatePriceChart(carResult, opnvResult);
}

