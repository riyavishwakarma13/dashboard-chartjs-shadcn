"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LineChart from "@/charts/LineChart";
import PieChart from "@/charts/PieChart";
import StackChart from "@/charts/StackChart";
import DoughnutChart from "@/charts/DoughnutChart";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* <DoughnutChart />
        <StackChart />
        <PieChart />
        <LineChart /> */}
      </main>
    </div>
  );
};

export default Dashboard;
