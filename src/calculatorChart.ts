import Chart, { ChartDataset } from "chart.js/auto";
import { getChart } from "./calculatorDomUtils";

export const priceChart = new Chart (getChart, {
        type: "bar",
        data: {
            labels: ["Kosten Auto", "Kosten ÖPNV"],
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
    priceChart.data.datasets.forEach((element: ChartDataset) => { // Todo: Any prüfen
        element.data = [];
    });
}

export function updatePriceChart (carResult: number, opnvResult: number) {
    resetChart();
    priceChart.data.datasets.forEach((element: ChartDataset) => { // Interface von Chart.js siehe: https://www.chartjs.org/docs/latest/api/#chartdataset
        element.data.push(carResult, opnvResult);
    });
    priceChart.update();
}