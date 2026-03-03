import { z } from "zod";

export const VisitorSchema = z.object({
  visitor_id: z.string().optional(),
  token: z.string(),
  created_at: z.date(),
  expired_at: z.date(),
});

export type CreateVisitor = z.infer<typeof VisitorSchema>;

export const visitor = {
    VisitorSchema,
};