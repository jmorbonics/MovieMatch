import { query, action, internalMutation, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { api, internal } from "./_generated/api";

export const listMovies = query(
    async (ctx) => {
        return await ctx.db.query("movies").collect();
    }
);
