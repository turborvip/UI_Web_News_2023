import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      //   text: "View of daily",
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Webnesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "View of daily",
      backgroundColor: [
        "#b5ddd1",
        "#d7e7a9",
        "#d3c0f9",
        "#f99a9c",
        "#fdbccf",
        "#c45850",
        "#87CEFA",
      ],
      data: [2478, 5267, 734, 9784, 433],
    },
  ],
};

export function ViewOfDaily() {
  return <Bar options={options} data={data} />;
}
