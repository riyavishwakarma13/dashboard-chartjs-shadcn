import { useState, useEffect } from "react";
import { DashboardData } from "../../types";

const useData = () => {
  const [data, setData] = useState<DashboardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("../../data.json"); // Adjust path if needed
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const entry = (await response.json()) as DashboardData[];

        setData(entry);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useData;
