// Start Variables for Car

/**
 * Car variable
 * input field – consumption
 */
export const getCarConsumptionInLiter = document.getElementById('carConsumptionInLiter') as HTMLInputElement;
/**
 * Car variable
 * input field – distance
 */
export const getCarDistanceInKm = document.getElementById('carDistanceInKm') as HTMLInputElement;
/**
 * Car variables
 * input field – boolean for way back
 */
export const getCarCheckTwoTimes = document.getElementById('carCheckTwoTimes') as HTMLInputElement;
/**
 * Car variable
 * input field – price
 */
export const getCarPriceLiterInEuro = document.getElementById('carPriceLiterInEuro') as HTMLInputElement;
/**
 * Car variable
 * result output – output the result into DOM
 */
export const getCarCostResult = document.getElementById('carCostResult') as HTMLElement;


// Start Variables for ÖPNV

/**
 * ÖPNV variables
 * input fields
 */
export const getPriceOpnv = document.getElementById('opnvPrice') as HTMLInputElement;
/**
 * ÖPNV variables
 * result output
 */
export const getCostOpnvResult = document.getElementById('opnvCostResult') as HTMLElement;


// Start Canvas Element

/** 
 * Get ID with chart Canvas for Chart variables – output the result into DOM
 */
export const getChart = document.getElementById('priceChart') as HTMLCanvasElement;