import { getConsumptionInLiter, getDistanceInKm, getCheckTwoTimes, getPriceInEuro, getPriceOpnv, getCostCarResult } from './calculatorDomUtils';


export function calcCar() {
    const comsumptionInLiter = +getConsumptionInLiter.value;
    const distanceInKm = +getDistanceInKm.value;
    const priceInEuro = +getPriceInEuro.value;
    const priceOpnv = +getPriceOpnv.value;

    getCostCarResult.innerHTML = (comsumptionInLiter + distanceInKm + priceInEuro + priceOpnv).toString();

}

