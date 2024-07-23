import {  z } from "astro:content";

const roleSchema =  z.object({
  name: z.string().max(12, { message: "Role name must be 12 characters or less." }),
  description: z.string().max(165, { message: "Role description must be 165 characters or less." }),
  
});

export default roleSchema;