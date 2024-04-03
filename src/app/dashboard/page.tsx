"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LineChart from "@/charts/LineChart";
import PieChart from "@/charts/PieChart";

const Dashboard = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Analytics Dashboard</h1>
        <PieChart />
        {/* <LineChart /> */}
      </div>
    </div>
  );
};

export default Dashboard;
