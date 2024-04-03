"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LineChart from "@/charts/LineChart";

const Dashboard = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Analytics Dashboard</h1>
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
