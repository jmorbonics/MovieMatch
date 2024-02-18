import { query, mutation, internalMutation } from "./_generated/server";
import { v } from "convex/values"

export const searchUsername = query({
  args: {
    username: v.string()
  },

  handler: async (ctx, args) => {
    return await ctx.db.query("user_data").filter((q) => q.eq(q.field("username"), args.username)).first();
  }
});

export const getUserData = query({
  args: {
    id: v.id("user_data"),
  },

  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getUserDataList = query({
  args: {
    list: v.array(v.id("user_data")),
  },

  handler: async (ctx, args) => {
    let res = []
    for (let id of args.list) {
      res.push(await ctx.db.get(id));
    }
    return res;
  },
});


export const createUser = mutation({
  args: {
    username: v.string(),
  },

  handler: async (ctx, args) => {
      await ctx.db.insert("user_data", {username: args.username, favorites: []});
  }
});

export const getGroups = query(async (ctx) => {
  return await ctx.db.query("group_data").collect();
});

export const isValidGroupID = query({
  args: {
    id: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.query("group_data").filter((q) => q.eq(q.field("_id"), args.id)).first() !== null;
  }
});

export const addToGroup = mutation({
  args: {
    userID: v.id("user_data"),
    groupID: v.id("group_data"),
  },

  handler: async (ctx, args) => {
    const group = await ctx.db.get(args.groupID);
    await ctx.db.patch(args.userID, {groupID: args.groupID});
    await ctx.db.patch(args.groupID, {members: group.members.concat(args.userID)});
  }
});

export const createGroup = mutation({
  args: {
    userID: v.id("user_data"),
    groupname: v.string(),
  },

  handler: async (ctx, args) => {
    const groupID = await ctx.db.insert("group_data", {groupname: args.groupname, members: [args.userID]});
    await ctx.db.patch(args.userID, {groupID: groupID});
  }
});

export const getGroupData = query({
  args: {
    groupID: v.optional(v.id("group_data")),
  },
  handler: async (ctx, args) => {
    return args.groupID === undefined ? null : await ctx.db.get(args.groupID);
  }
});
