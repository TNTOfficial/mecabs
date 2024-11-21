"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IpTrackResponse } from "../types";
import { RoleGuard } from "@/features/admin/auth/guard/role-guard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import { columns } from "./columns";

interface TrackedIpListProps {
  data?: IpTrackResponse;
}

export const TrackedIpList: React.FC<TrackedIpListProps> = ({ data }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: data?.visits ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <RoleGuard allowedRoles={["ADMIN"]}>
      <div className="space-y-5">
        <div className="gap-4 flex justify-center items-stretch flex-wrap">
          <Card className="p-10 iptrackcards basis-[200px] flex justify-between items-center overflow-hidden grow shrink bg-blue-700 relative z-0 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-35">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[1.8rem] font-bold text-white">
                Total Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-[2.5rem] text-white font-bold">
                {data?.totalVisitors}
              </h3>
            </CardContent>
          </Card>

          <Card className="p-10 iptrackcards basis-[200px] flex justify-between items-center overflow-hidden grow shrink bg-gray-700 relative z-0 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1] before:bg-no-repeat before:bg-center before:bg-cover before:opacity-35 before:rotate-180">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[1.8rem] font-bold text-white">
                Today&apos;s Visitors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-[2.5rem] text-white font-bold">
                {data?.todayVisitors}
              </h3>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="p-5">
            <CardTitle>Recent Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-4">
              <Input
                placeholder="Filter IP addresses..."
                value={
                  (table.getColumn("ip")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("ip")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </RoleGuard>
  );
};

export default TrackedIpList;
