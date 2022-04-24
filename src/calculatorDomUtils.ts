export const getConsumptionInLiter = document.getElementById('consumptionInLiter') as HTMLInputElement;
export const getDistanceInKm = document.getElementById('distanceInKm') as HTMLInputElement;
export const getCheckTwoTimes = document.getElementById('checkTwoTimes') as HTMLInputElement;
export const getPriceInEuro = document.getElementById('priceInEuro') as HTMLInputElement;
export const getPriceOpnv = document.getElementById('priceOpnv') as HTMLInputElement;
export const getCostCar = document.getElementById('costCar');

export function updateCostCar() {
    getCostCar!.innerHTML = "hallo";
}