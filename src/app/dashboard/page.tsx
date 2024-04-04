"use client";
import React, { useContext } from "react";
import LineChart from "@/charts/LineChart";
import PieChart from "@/charts/PieChart";
import Navbar from "@/components/Navbar";
import UserDemographic from "@/components/UserDemographic";
import { useRouter } from "next/navigation";
import AuthContext from "@/lib/context";

const Dashboard = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    router.push("/");
    return null;
  }
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
