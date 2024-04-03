"use client";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
} from "chart.js";
import useData from "@/hooks/useData";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartData = {
    labels: [
      "2024-03-27",
      "2024-03-28",
      "2024-03-29",
      "2024-03-30",
      "2024-03-31",
      "2024-04-01",
      "2024-04-03",
    ],
    datasets: [
      {
        label: "Total Visitors",
        data: [1000, 1200, 850, 1150, 980, 1320, 1500],
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointRadius: 5,
      },
      {
        label: "Unique Visitors",
        data: [750, 880, 620, 850, 720, 980, 1100],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        pointRadius: 5,
      },
      {
        label: "Page Views",
        data: [7500, 4200, 3000, 4100, 3400, 4700, 5200],
        backgroundColor: "rgb(53, 162, 235)",
        borderColor: "rgb(53, 162, 235)",
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
