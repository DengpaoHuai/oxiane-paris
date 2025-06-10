import z from "zod";

export const movieSchema = z.object({
  title: z.string().min(2, "Trop court"),
  description: z.string().min(1),
  rating: z.coerce.number().min(1).max(5),
});

export type Movie = z.infer<typeof movieSchema>;
