import {z} from 'zod';

export const UserSchema = z.object({
  user_id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  username: z.string().min(1, 'Username is required'),
  birth_date: z.date(),
  place_of_birth: z.string(),
  profession: z.string(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  created_at: z.date(),
});

export type CreateUser = z.infer<typeof UserSchema>;

export const user = {
    UserSchema,
};