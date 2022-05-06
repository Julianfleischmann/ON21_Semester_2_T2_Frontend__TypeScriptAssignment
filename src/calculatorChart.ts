import Chart from "chart.js/auto";
import { getChart } from "./calculatorDomUtils";

export const priceChart = new Chart (getChart, {
        type: "bar",
        data: {
            labels: ["Kosten Auto", "Kosten ÖPNV"], // todo: Variable?
            datasets: [{
                label: 'Vergleich der Kosten',
                data: [],
                backgroundColor: [
                    '#3a9691',
                    '#1e3932'
                ],
                borderColor: [
                    '#3a9691',
                    '#1e3932'
                ],
                borderWidth: 1
            }]
        }
    }
)

// Setzt das Chart, den Array zurück (sonst würden die Werte immer addiert werden)
export function resetChart() {
    priceChart.data.datasets.forEach((element: any) => { // Todo: Any prüfen
        element.data = [];
    });
}

export function updatePriceChart (carResult: number, opnvResult: number) {
    resetChart();
    priceChart.data.datasets.forEach((element: any) => { // Todo: Any prüfen
        element.data.push(carResult, opnvResult);
    });
    priceChart.update();
}



// aktuell nicht in Benutzung
// interface datasetElement {
//     label: string,
//     data: Array<number>,
//     // backgroundColor: Array<Color>, // https://www.chartjs.org/docs/latest/api/#color
//     // borderColor: Array<Color>, // https://www.chartjs.org/docs/latest/api/#color
//     // borderWidth: number | { top?: number, right?: number, bottom?: number, left?: number }; // https://www.chartjs.org/docs/latest/api/interfaces/BarOptions.html#borderwidth
// }
