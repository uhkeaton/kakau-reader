import { viteCollectionsUrl } from "./env";
import {
  StoryCollectionsResponseSchema,
  type StoryCollectionsResponse,
} from "./types.story";

export async function fetchStoryCollections(): Promise<StoryCollectionsResponse> {
  const res = await fetch(viteCollectionsUrl); // your endpoint
  const data = await res.json();

  const parsed = StoryCollectionsResponseSchema.safeParse(data);
  if (!parsed.success) {
    console.log(
      "Invalid data from API: " + JSON.stringify(parsed.error.format()),
    );
  }
  return data;
}
