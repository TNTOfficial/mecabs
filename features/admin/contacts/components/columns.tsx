"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Contact } from "../types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { MoreHorizontal, Check, ArrowUpDown } from "lucide-react";
import { markContactAsViewed } from "@/actions/contact/mark-contact-view";
import { cn } from "@/lib/utils";

// Create a proper React component for the message cell
const MessageCell = ({ message }: { message: string }) => {
  const [hoveredMessage, setHoveredMessage] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "truncate max-w-lg cursor-pointer  text-wrap",
      )}
    >
      {message}
    </div>
  );
};

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "subject",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Subject
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => {
      const message = row.getValue("message") as string;
      return <MessageCell message={message} />;
    },
  },
  {
    accessorKey: "viewed",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const viewed = row.getValue("viewed") as boolean;
      return (
        <Badge variant={viewed ? "default" : "secondary"}>
          {viewed ? "Viewed" : "New"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return format(new Date(row.getValue("createdAt")), "PP");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                markContactAsViewed(contact.id);
              }}
            >
              <Check className="mr-2 h-4 w-4" />
              Mark as viewed
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
