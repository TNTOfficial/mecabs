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
      <div className=" space-y-5">
        <div className="gap-4 flex justify-center items-center flex-wrap">
          <Card className="p-10 basis-[200px] flex justify-between items-center overflow-hidden grow shrink bg-blue-500 relative z-0 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1] before:bg-[url(@/public/curvy1.png)] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-35">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[1.8rem] font-bold text-white">
                Total Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-[2.5rem] text-white font-bold">{data?.todayVisitors}</h3>
            </CardContent>
          </Card>

          <Card className="p-10 basis-[200px] flex justify-between items-center overflow-hidden grow shrink bg-green-500 relative z-0 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1] before:bg-[url(@/public/curvy1.png)] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-35 before:rotate-180">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[1.8rem] font-bold text-white">
                Today&apos;s Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-[2.5rem] text-white font-bold">{data?.totalVisitors}</h3>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="p-5">
            <CardTitle>Recent Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="px-6">IP Address</TableHead>
                  <TableHead className="px-6">Visit Count</TableHead>
                  <TableHead className="px-6">First Visit</TableHead>
                  <TableHead className="px-6">Last Visit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.visits.map((visit) => (
                  <TableRow key={visit.id}>
                    <TableCell className="px-6 py-3">{visit.ip}</TableCell>
                    <TableCell className="px-6 py-3">{visit.visitCount}</TableCell>
                    <TableCell className="px-6 py-3">{format(visit.createdAt, "PPp")}</TableCell>
                    <TableCell className="px-6 py-3">{format(visit.updatedAt, "PPp")}</TableCell>
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
