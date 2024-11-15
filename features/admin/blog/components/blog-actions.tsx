"use client";

import { Button } from "@/components/ui/button";
import { Blog, BlogStatus } from "../types";
import { Edit, Eye, EyeOff, MoreVertical, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteBlog } from "@/actions/blog/delete-blog";
import { toggleBlogStatus } from "@/actions/blog/toggle-blog-status";
import { useRouter } from "next/navigation";

interface BlogActionsProps {
  blog: Blog;
  onEdit: () => void;
  onDelete: () => void;
  refetch?: () => void;
}

export const BlogActions = ({
  blog,
  onEdit,
  onDelete,
  refetch,
}: BlogActionsProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const router = useRouter();
  const getNextStatus = (currentStatus: BlogStatus): BlogStatus => {
    switch (currentStatus) {
      case BlogStatus.ACTIVE:
        return BlogStatus.INACTIVE;
      case BlogStatus.INACTIVE:
        return BlogStatus.DRAFT;
      case BlogStatus.DRAFT:
        return BlogStatus.ACTIVE;
      default:
        return BlogStatus.DRAFT;
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteBlog(blog.id);
      setShowDeleteDialog(false);
      onDelete();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleToggleStatus = async () => {
    const newStatus = getNextStatus(blog.status as BlogStatus);

    setIsUpdatingStatus(true);

    const result = await toggleBlogStatus(blog.id, newStatus);
    setIsUpdatingStatus(false);

    if (result.success) {
      toast.success(`Blog post is now ${newStatus.toLowerCase()}`);
      refetch?.();
      router.refresh(); // Re-fetch updated data if needed
    } else {
      toast.error("Failed to update blog status");
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={handleToggleStatus}
            disabled={isUpdatingStatus}
            className="py-2 cursor-pointer"
          >
            {blog.status === BlogStatus.ACTIVE ? (
              <>
                <EyeOff className="mr-2 h-4 w-4" /> Set to Inactive
              </>
            ) : blog.status === BlogStatus.INACTIVE ? (
              <>
                <Eye className="mr-2 h-4 w-4" /> Set to Draft
              </>
            ) : (
              <>
                <Eye className="mr-2 h-4 w-4" /> Set to Active
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem className="py-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={onEdit}
              className="hover:bg-gray-100 px-0 gap-2 w-full justify-start"
            >
              <Edit className="h-4 w-4" />
              <p>Edit</p>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowDeleteDialog(true)}
              className="hover:bg-red-50 px-0 w-full justify-start gap-2"
            >
                <Trash className="h-4 w-4 text-red-500" />
                <p className="text-black">Delete</p>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Blog Post</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete &quot;{blog.title}&quot;? This
            action cannot be undone.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
              disabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
