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
  ArcElement,
} from "chart.js";
import useData from "@/hooks/useData";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

const PieChart = () => {
  const chartData = {
    labels: ["Home", "Products", "Blog", "About", "Contact", "Help"],
    datasets: [
      {
        label: "Visitors",
        data: [900, 750, 600, 500, 350, 250],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        pointRadius: 5,
      },
    ],
  };
  return <Pie data={chartData} />;
};

export default PieChart;
