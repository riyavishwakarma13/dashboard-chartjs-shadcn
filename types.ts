export interface User {
  username: string;
  password: string;
}

export type DashboardData = {
  websiteTrafficOverview: {
    timePeriod: string;
    totalVisitors: number;
    uniqueVisitors: number;
    pageViews: number;
  };
  trafficData: { day: number; visitors: number }[];
  topPerformingPages: { page: string; visits: number }[];
  userDemographics: {
    location: { [location: string]: number }; // Key is a string representing region, value is number representing percentage
    deviceType: { device: string; usage: number }[];
  };
};
