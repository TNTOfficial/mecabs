export interface BlogClient {
  id: string;
  title: string;
  content: string;
  description: string;
  imagePath: string;
  createdAt: Date;
  updatedAt?: Date;
}
