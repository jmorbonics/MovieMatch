import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user_data: defineTable({
    username: v.string(),
    favorites: v.array(v.id("movies")),
  }),

  movies: defineTable({
    title: v.string(),
    description: v.string(),
    genres: v.array( v.string() ),
  }),

  group_data: defineTable({
    groupname: v.string(),
    memberField: v.array(v.any()),
  }),
});