import { z } from "zod";

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
export const StoryCollectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  previewImageSrc: z.string().optional(),
  descriptionMarkdown: z.string().optional(),
  footerMarkdown: z.string().optional(),
  stories: z.array(StorySchema),
});

// Full response
export const StoryCollectionsResponseSchema = z.object({
  collections: z.array(StoryCollectionSchema),
});

export type Paragraph = z.infer<typeof ParagraphSchema>;
export type Story = z.infer<typeof StorySchema>;
export type StoryCollection = z.infer<typeof StoryCollectionSchema>;
export type StoryCollectionsResponse = z.infer<
  typeof StoryCollectionsResponseSchema
>;
