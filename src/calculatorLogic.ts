import { getConsumptionInLiter, getDistanceInKm, getCheckTwoTimes, getCarPriceInEuro, getPriceOpnv, getCostCarResult } from './calculatorDomUtils';


export function calcCar() {
    const comsumptionInLiter = +getConsumptionInLiter.value;
    const distanceInKm = +getDistanceInKm.value;
    const priceInEuro = +getCarPriceInEuro.value;
    // const priceOpnv = +getPriceOpnv.value;

    // Verbrauch/100 * KilometerDistaz * preisEuro
    getCostCarResult.innerHTML = (comsumptionInLiter/100 * distanceInKm * priceInEuro).toString();

}

