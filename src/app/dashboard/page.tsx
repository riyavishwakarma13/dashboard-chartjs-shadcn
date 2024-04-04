"use client";
import React, { useContext, useEffect, useState } from "react";
import LineChart from "@/charts/LineChart";
import PieChart from "@/charts/PieChart";
import Navbar from "@/components/Navbar";
import UserDemographic from "@/components/UserDemographic";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="container mx-auto space-y-5 px-4 py-8">
        <LineChart />
        <PieChart />
        <UserDemographic />
      </main>
    </div>
  );
};

export default Dashboard;
