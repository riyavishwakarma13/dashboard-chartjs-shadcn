import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "% of Usage",
        data: [28.97, 58.69, 12.34],
        backgroundColor: [
          "rgba(54, 162, 235)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
