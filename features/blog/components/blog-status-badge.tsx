import React from "react";
import { BlogStatus } from "../types";
import { Badge } from "@/components/ui/badge";
interface BlogStatusBadgeProps {
  status: BlogStatus;
}
const statusColors = {
  [BlogStatus.ACTIVE]: "bg-green-500",
  [BlogStatus.INACTIVE]: "bg-red-500",
  [BlogStatus.DRAFT]: "bg-yellow-500",
};
export const BlogStatusBadge: React.FC<BlogStatusBadgeProps> = ({ status }) => {
  return (
    <Badge className={`${statusColors[status]} text-white`}>{status}</Badge>
  );
};
