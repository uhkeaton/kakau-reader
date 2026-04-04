import { z } from "zod";
import { viteCollectionsUrl } from "./env";

// Paragraph
export const ParagraphSchema = z.object({
  text: z.string(),
});

// Story
export const StorySchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.string().optional(),
  authors: z.string().optional(),
  synopsis: z.string().optional(),
  paragraphs: z.array(ParagraphSchema),
});

// Collection
export const CollectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  stories: z.array(StorySchema),
});

// Full response
export const CollectionsResponseSchema = z.object({
  collections: z.array(CollectionSchema),
});

export type Paragraph = z.infer<typeof ParagraphSchema>;
export type Story = z.infer<typeof StorySchema>;
export type Collection = z.infer<typeof CollectionSchema>;
export type CollectionsResponse = z.infer<typeof CollectionsResponseSchema>;

export async function fetchCollections(): Promise<CollectionsResponse> {
  const res = await fetch(viteCollectionsUrl); // your endpoint
  const data = await res.json();

  const parsed = CollectionsResponseSchema.safeParse(data);
  if (!parsed.success) {
    console.log(
      "Invalid data from API: " + JSON.stringify(parsed.error.format()),
    );
  }
  return data;
}
