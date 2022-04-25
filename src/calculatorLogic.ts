import { updatePriceChart } from './calculatorChart';
import { getConsumptionInLiter, getDistanceInKm, getCarCheckTwoTimes, getCarPriceInEuro, getPriceOpnv, getCostCarResult } from './calculatorDomUtils';

export function calcCarOpnv() {
    const comsumptionInLiter = +getConsumptionInLiter.value; // parseInt() the Variable via +Operator;
    const distanceInKm = +getDistanceInKm.value;
    let priceInEuro = +getCarPriceInEuro.value;
    const carCheckTwoTimes = getCarCheckTwoTimes.checked;

    const priceOpnv = +getPriceOpnv.value;
    
    if (carCheckTwoTimes == true) {
        priceInEuro = priceInEuro*2;
    }

    // Calculate Verbrauch/100 * KilometerDistaz * preisEuro
    const carResult: number = comsumptionInLiter/100 * distanceInKm * priceInEuro;
    // Set the Cost to string and write to DOM
    getCostCarResult.innerHTML = carResult.toString();
    
    const opnvResult: number = priceOpnv;
    
    // Updating the Price Chart
    updatePriceChart(carResult, opnvResult);
}

