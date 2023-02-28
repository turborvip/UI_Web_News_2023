import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
    },
  },
};

const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];

export const data = {
  labels,
  datasets: [
    {
      label: "View of today",
      data: [1000, 1200, 100, 2000, 500, 600, 200, 100, 1000, 0, 0, 0],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#fdbccf",
    },
  ],
};

export function ViewsOfHourly() {
  return <Line options={options} data={data} />;
}
