// Start Variables for Car

import exp from "constants";

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
 * get the warning paragraph
 */
export const getOpnvDiscountWarning = document.getElementById('opnvDiscountWarning') as HTMLElement;
/**
 * ÖPNV variables
 * input the ÖPNV price as number
 */
export const getOpnvPrice = document.getElementById('opnvPrice') as HTMLInputElement;
/**
 * ÖPNV variables
 * input field for discounts
 */
export const getOpnvDiscount = document.getElementById('opnvDiscount') as HTMLInputElement;
/**
 * ÖPNV variables
 * result output
 */
export const getOpnvCostResult = document.getElementById('opnvCostResult') as HTMLElement;


// Start result information
/**
 * Result
 * get the element what is cheaper?
 */
export const getResultInformation = document.getElementById('resultInformation') as HTMLElement;

// Start Canvas Element

/** 
 * Get ID with chart Canvas for Chart variables – output the result into DOM
 */
export const getChart = document.getElementById('priceChart') as HTMLCanvasElement;