import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Phone, Mail, Calendar } from "lucide-react";
import { Lead } from "../types";
import { RoleGuard } from "@/features/auth/guard/role-guard";

interface LeadsTableProps {
  leads: Lead[];
}
export const LeadsTable: React.FC<LeadsTableProps> = ({ leads }) => {
  return (
    <RoleGuard allowedRoles={["ADMIN"]}>
      <Card className="w-full">
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-[1.4rem]">Customer Leads</CardTitle>
          <CardDescription>
            Manage and track all customer leads and their associated bookings
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="py-2 px-8">Contact Info</TableHead>
                <TableHead className="py-2 px-8 ps-0">Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="py-3 px-8">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-green-500" />
                        <span>{lead.phoneNumber}</span>
                      </div>
                      {lead.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-5 w-5 text-red-500" />
                          <span>{lead.email}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {format(new Date(lead.createdAt), "MMM d, yyyy")}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </RoleGuard>
  );
};
