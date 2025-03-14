import { z } from "zod";

// Validation des objets avec Zod
export const StorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  age: z.number().min(1).max(12),
  theme: z.enum(["Pirates", "Espace", "Dinosaures", "Magie", "Chevaliers"]),
  text: z.string(),
  imageUrl: z.string().url(),
  audioUrl: z.string().url(),
});

export type Story = z.infer<typeof StorySchema>;
