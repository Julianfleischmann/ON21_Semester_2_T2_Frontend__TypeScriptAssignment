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
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderColor: [
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)'
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