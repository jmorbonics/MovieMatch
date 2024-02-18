import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user_data: defineTable({
    username: v.string(),
    favorites: v.array(v.id("movies")),
    groupID: v.optional(v.id("group_data")),
  }),
  group_data: defineTable({
    groupname: v.string(),
    members: v.array(v.id("user_data")),
  }),
});