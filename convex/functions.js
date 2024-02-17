import { query, mutation } from "./_generated/server";
import { v } from "convex/values"

async function getUser(ctx, username) {
    return ctx.db.query("user_data").filter((q) => q.eq(q.field("username"), username)).first();
}

export const getUserData = query({
  args: {
    username: v.string(),
  },

  handler: async (ctx, args) => {
    return await getUser(ctx, args.username);
  },
});


export const setUserData = mutation({
  args: {
    username: v.string(),
    testVal: v.number(),
  },

  handler: async (ctx, args) => {
    let user = await getUser(ctx, args.username);
    if (user === null) {
      await ctx.db.insert("user_data", args);
    } else {
      await ctx.db.patch(user._id, args);
    }
  }
});
