import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Blog, BlogFormSchema, BlogFormType, BlogStatus } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { createBlog } from "@/actions/blog/create-blog";
import { updateBlog } from "@/actions/blog/update-blog";
import { toast } from "sonner";
import dynamic from "next/dynamic";

interface BlogFormProps {
  blog?: Blog;
  onSuccess?: () => void;
  onClose?: () => void;
}

export const BlogForm: React.FC<BlogFormProps> = ({
  blog,
  onClose,
  onSuccess,
}) => {
  const [isPending, setIsPending] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(
    blog?.imagePath || null
  );
  const [isExistingImage, setIsExistingImage] = useState(!!blog?.imagePath);

  const form = useForm<BlogFormType>({
    resolver: zodResolver(BlogFormSchema),
    defaultValues: {
      title: blog?.title || "",
      description: blog?.description || "",
      content: blog?.content || "",
      status: (blog?.status as BlogStatus) || BlogStatus.ACTIVE,
      image: undefined,
    },
  });

  const onSubmit = async (values: BlogFormType) => {
    try {
      setIsPending(true);
      let base64Image: string | null = null;

      // Only process the image if it's a new file upload
      if (values.image instanceof File) {
        base64Image = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(values.image);
        });
      }

      const result = blog
        ? await updateBlog(blog.id, {
            ...values,
            // Keep existing image if no new image was uploaded and the existing image wasn't removed
            image: base64Image || (isExistingImage ? blog.imagePath : null),
          })
        : await createBlog({
            ...values,
            image: base64Image,
          });

      if (result.success) {
        toast.success(
          `Blog post ${blog ? "updated" : "created"} successfully!`
        );
        onSuccess?.();
        onClose?.();
      } else {
        toast.error(
          result.error || `Failed to ${blog ? "update" : "create"} blog post`
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsPending(false);
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    setIsExistingImage(false);
    form.setValue("image", undefined);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter blog title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a short description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(BlogStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>Cover Image</FormLabel>
              {!previewImage ? (
                <FormControl>
                  <div className="border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreviewImage(URL.createObjectURL(file));
                          onChange(file);
                        }
                      }}
                      className="hidden"
                      {...field}
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Click to upload an image
                      </span>
                    </label>
                  </div>
                </FormControl>
              ) : (
                <div className="relative">
                  <div className="relative h-40 w-full">
                    <Image
                      src={previewImage}
                      alt="Preview"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2"
                    onClick={removeImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <div className="relative h-96 border rounded-lg">
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                    className="h-80"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : blog ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BlogForm;
