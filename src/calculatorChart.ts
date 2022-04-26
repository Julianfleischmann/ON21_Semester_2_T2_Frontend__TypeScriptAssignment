import Chart from "chart.js/auto";
import { getChart } from "./calculatorDomUtils";

export const priceChart = new Chart (getChart, {
        type: "bar",
        data: {
            labels: ["Kosten Auto", "Kosten ÖPNV"], // todo: Variable?
            datasets: [{
                label: 'Vergleich der Kosten',
                data: [], // todo: replace fakedata
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

export function resetChart() {
    priceChart.data.datasets.forEach((element: any) => {
        element.data = [];
    });
}

export function updatePriceChart (carResult?: number, opnvResult?: number) {
    resetChart();
    priceChart.data.datasets.forEach((element: any) => { // Type any überdenken!
        element.data.push(carResult, opnvResult);
    });
    priceChart.update();
}