"use client";

import { useState, useEffect } from "react";
import { DashboardResponse } from "../types";
import { getDashboardData } from "@/actions/dashboard/get-dashboard-data";

export const useDashboardData = () => {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getDashboardData();
      setData(response);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch dashboard data"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
