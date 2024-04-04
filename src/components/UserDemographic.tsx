import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StackChart from "@/charts/StackChart";
import DoughnutChart from "@/charts/DoughnutChart";

const UserDemographic = () => {
  return (
    <div>
      <Card>
        <CardHeader className="py-8 px-6">
          <CardTitle>User Demographics</CardTitle>
          <CardDescription className="capitalize">
            Charts showcasing users are segregated on the basis of continent and
            device type
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Card>
            <CardHeader className="py-8 px-6">
              <CardTitle>Usage By Continent</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto max-w-5xl">
              <StackChart />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="py-8 px-6">
              <CardTitle>Usage By Device</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto max-w-2xl">
              <DoughnutChart />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDemographic;
