"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { IpTrackResponse } from "../types";
import { RoleGuard } from "@/features/auth/guard/role-guard";

interface TrackedIpListProps {
  data?: IpTrackResponse;
}
export const TrackedIpList: React.FC<TrackedIpListProps> = ({ data }) => {
  return (
    <RoleGuard allowedRoles={["ADMIN"]}>
      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.todayVisitors}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Today&apos;s Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data?.totalVisitors}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Visit Count</TableHead>
                  <TableHead>First Visit</TableHead>
                  <TableHead>Last Visit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.visits.map((visit) => (
                  <TableRow key={visit.id}>
                    <TableCell>{visit.ip}</TableCell>
                    <TableCell>{visit.visitCount}</TableCell>
                    <TableCell>{format(visit.createdAt, "PPp")}</TableCell>
                    <TableCell>{format(visit.updatedAt, "PPp")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </RoleGuard>
  );
};
