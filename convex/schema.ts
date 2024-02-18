import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user_data: defineTable({
    username: v.string(),
    favorites: v.array(v.id("movies")),
  }),
});