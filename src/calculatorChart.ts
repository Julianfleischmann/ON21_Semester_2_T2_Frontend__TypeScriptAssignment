import Chart from "chart.js/auto";
import { getChart } from "./calculatorDomUtils";

export const priceChart = new Chart (getChart, {
        type: "bar",
        data: {
            labels: ["Kosten Auto", "Kosten ÖPNV"], // todo: Variable?
            datasets: [{
                label: 'Vergleich der Kosten',
                data: [20, 30], // todo: replace fakedata
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
// export const priceChart = new Chart(
//     getChart, chartConfig
// )