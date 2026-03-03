import { z } from 'zod';

export const postSchema = z.object({
  post_id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
});