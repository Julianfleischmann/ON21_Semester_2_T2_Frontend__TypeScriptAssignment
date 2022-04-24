import { updatePriceChart } from './calculatorChart';
import { getConsumptionInLiter, getDistanceInKm, getCheckTwoTimes, getCarPriceInEuro, getPriceOpnv, getCostCarResult } from './calculatorDomUtils';

export let carResult: number;

export function calcCar() {
    const comsumptionInLiter = +getConsumptionInLiter.value;
    const distanceInKm = +getDistanceInKm.value;
    const priceInEuro = +getCarPriceInEuro.value;
    // const priceOpnv = +getPriceOpnv.value;

    // Verbrauch/100 * KilometerDistaz * preisEuro
    getCostCarResult.innerHTML = (comsumptionInLiter/100 * distanceInKm * priceInEuro).toString();

    carResult = comsumptionInLiter/100 * distanceInKm * priceInEuro;
    updatePriceChart(carResult);

    // updatePriceChart((result: number) => {
    //     return 1;
    // }, (resultTwo: number) => {
    //     return 3;
    // })
    console.log("Updated Car");


}

