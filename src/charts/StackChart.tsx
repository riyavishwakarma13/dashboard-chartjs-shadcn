import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackChart = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "North America",
    "Europe",
    "Asia",
    "South America",
    "Africa",
    "Australia",
    "Antarctica",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Visitors",
        data: [1000, 1200, 850, 1150, 980, 1320, 1500],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Unqiue Visitors",
        data: [750, 880, 620, 850, 720, 980, 1100],
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default StackChart;
