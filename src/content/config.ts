import { defineCollection, reference, z } from "astro:content";
import postSchema from "../Schemas/postSchema";
import roleSchema from "../Schemas/roleSchema";
import teamSchema from "../Schemas/teamSchema";


const team = defineCollection({
  type: "data",
  schema:teamSchema,
});

const role = defineCollection({
  type: "data",
  schema:roleSchema,
});

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  team,
  posts,
  role,
};
