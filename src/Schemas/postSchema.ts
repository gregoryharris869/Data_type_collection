import { reference, z } from "astro:content";

const postSchema =  z.object({
  title: z.string().max(65, { message: "Must be 65 characters or less" }),
  tags: z.array(z.string()),
  pubDate: z.string(),
  isDraft: z.boolean(),
  canonicalURL: z.string().url().optional(),
  author:reference("team"),
});

export default postSchema;