"use client";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  const options = {
    maintainAspectRatio: true,
  };

  return (
    <Card>
      <CardHeader className="py-8 px-6">
        <CardTitle>Top Performing Pages</CardTitle>
        <CardDescription className="capitalize">
          Hover on the pie chart to see the number of visitors
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-2xl mx-auto">
        <Pie data={chartData} options={options} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
