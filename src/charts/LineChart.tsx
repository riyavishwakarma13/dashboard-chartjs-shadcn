"use client";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Label } from "@/components/ui/label";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

interface TrafficData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    pointRadius: number;
  }[];
}

type Timeframe = "daily" | "weekly" | "monthly";

const LineChart = () => {
  const [chartData, setChartData] = useState<TrafficData>({
    labels: [],
    datasets: [],
  });
  const [timeframe, setTimeframe] = useState<Timeframe>("daily");

  const option = {
    responsive: true,
  };

  const sampleData = {
    daily: {
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
          data: [100, 120, 850, 150, 980, 130, 156],
          backgroundColor: "rgba(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 1)",
          pointRadius: 5,
        },
        {
          label: "Unique Visitors",
          data: [75, 90, 320, 85, 520, 98, 69],
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 5,
        },
        {
          label: "Page Views",
          data: [750, 420, 300, 410, 340, 470, 520],
          backgroundColor: "rgb(53, 162, 235)",
          borderColor: "rgb(53, 162, 235)",
          pointRadius: 5,
        },
      ],
    },
    weekly: {
      labels: [
        "Week of Mar 17, 2024",
        "Week of Mar 24, 2024",
        "Week of Mar 31, 2024",
        "Week of Apr 7, 2024", // Assuming the current week starts on Apr 7
      ],
      datasets: [
        {
          label: "Total Visitors",
          data: [500, 998, 620, 780], // Aggregated weekly totals
          backgroundColor: "rgba(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 1)",
          pointRadius: 5,
        },
        {
          label: "Unique Visitors",
          data: [354, 500, 420, 510], // Aggregated weekly totals
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 5,
        },
        {
          label: "Page Views",
          data: [3500, 1104, 2800, 4200], // Aggregated weekly totals
          backgroundColor: "rgb(53, 162, 235)",
          borderColor: "rgb(53, 162, 235)",
          pointRadius: 5,
        },
      ],
    },
    monthly: {
      labels: ["March 2024"],
      datasets: [
        {
          label: "Total Visitors",
          data: [4969], // Replace with the sum of daily total visitors for March
          backgroundColor: "rgba(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 1)",
          pointRadius: 5,
        },
        {
          label: "Unique Visitors",
          data: [4455], // Replace with the sum of daily unique visitors for March
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 5,
        },
        {
          label: "Page Views",
          data: [7000], // Replace with the sum of daily page views for March
          backgroundColor: "rgb(53, 162, 235)",
          borderColor: "rgb(53, 162, 235)",
          pointRadius: 5,
        },
      ],
    },
  };

  useEffect(() => {
    setChartData(sampleData[timeframe]); // Use your actual data fetching logic here
  }, [timeframe]);

  const handleTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeframe(e.target.value as Timeframe);
  };

  return (
    <Card>
      <div className="flex flex-wrap justify-between items-center py-5 px-4 gap-2">
        <CardHeader>
          <CardTitle>Website Traffic Overview</CardTitle>
        </CardHeader>
        <div className="space-x-3">
          <Label className="text-lg">Filter by:</Label>
          <select
            value={timeframe}
            className="border border-gray-200 px-4 py-2 rounded-lg"
            onChange={handleTimeframeChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <CardContent>
        <Line data={chartData} options={option} />
      </CardContent>
    </Card>
  );
};

export default LineChart;
