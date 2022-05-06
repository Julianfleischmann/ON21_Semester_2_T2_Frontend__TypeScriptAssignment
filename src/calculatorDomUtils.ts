// Start Variables for Car

/**
 * Car variable
 * input field – consumption
 */
export const getConsumptionInLiter = document.getElementById('consumptionInLiter') as HTMLInputElement;
/**
 * Car variable
 * input field – distance
 */
export const getDistanceInKm = document.getElementById('distanceInKm') as HTMLInputElement;
/**
 * Car variables
 * input field – boolean for way back
 */
export const getCarCheckTwoTimes = document.getElementById('checkTwoTimes') as HTMLInputElement;
/**
 * Car variable
 * input field – price
 */
export const getCarPriceInEuro = document.getElementById('priceInEuro') as HTMLInputElement;
/**
 * Car variable
 * result output – output the result into DOM
 */
export const getCostCarResult = document.getElementById('costCarResult') as HTMLElement;


// Start Variables for ÖPNV

/**
 * ÖPNV variables
 * input fields
 */
export const getPriceOpnv = document.getElementById('priceOpnv') as HTMLInputElement;
/**
 * ÖPNV variables
 * result output
 */
export const getCostOpnvResult = document.getElementById('costOpnvResult') as HTMLElement;


// Start Canvas Element

/** 
 * Get ID with chart Canvas for Chart variables – output the result into DOM
 */
export const getChart = document.getElementById('priceChart') as HTMLCanvasElement;