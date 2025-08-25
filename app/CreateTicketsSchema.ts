// import { z } from '@/node_modules/zod/v4/classic/external.cjs';
import { z } from 'zod';

export const CreateTicketsSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(255),
  description: z.string().min(1, 'Description is required'),
});
