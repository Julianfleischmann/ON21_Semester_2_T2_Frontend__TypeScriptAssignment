import Chart from "chart.js/auto";
import { getChart } from "./calculatorDomUtils";

export const priceChart = new Chart (getChart, {
        type: "bar",
        data: {
            labels: [],
            datasets: [{
                label: 'My Data',
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