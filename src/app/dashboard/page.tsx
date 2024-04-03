"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  // Check if user is logged in (implement session management here)
  // const isLoggedIn = cons /* Your logic to check for a valid user session */;

  // if (!isLoggedIn) {
  //   router.push('/login'); // Redirect to login if not logged in
  //   return null;
  // }

  return (
    <div>
      {" "}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Analytics Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
