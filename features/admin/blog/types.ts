import * as z from "zod";

export enum BlogStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DRAFT = "DRAFT",
}

export const BlogFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must of be at least 3 characters")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(300, "Description must be less than 300 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  status: z.nativeEnum(BlogStatus).default(BlogStatus.ACTIVE),
  image: z.any().optional(),
});

export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  status: string;
  imagePath: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface BlogFormResponse {
  blogs: Blog[];
  success?: boolean;
  error?: string;
}

export type BlogFormType = z.infer<typeof BlogFormSchema>;
export type BlogFormResponseType = BlogFormResponse;
