import { PrismaClient } from "@prisma/client";
import { CallbackQueryMiddleware } from "grammy";
import { bot, MyContext } from "../bot";

const prisma = new PrismaClient();

type CallbackQueryFn = CallbackQueryMiddleware<MyContext>;

export type MyCallbackQuery = {
  trigger: string;
  callback: CallbackQueryFn;
};

const sentPostCallback: CallbackQueryFn = async (ctx) => {
  const session = await ctx.session;
  const post = session.post;

  if (post) {
    const users = await prisma.user.findMany();
    users.forEach(async (user) => {
      await bot.api.sendMessage(`${user.id}`, post, {
        parse_mode: "MarkdownV2"
      });
    });
  }

  await ctx.reply("post jo'natildi");
  await ctx.deleteMessage();
};

const cancelPostCallback: CallbackQueryFn = async (ctx) => {
  await ctx.reply("post bekor qilindi");
  await ctx.deleteMessage();
};

export const sentPostCallbackQuery: MyCallbackQuery = {
  trigger: "sentPost",
  callback: sentPostCallback
};

export const cancelPostCallbackQuery: MyCallbackQuery = {
  trigger: "cancelPost",
  callback: cancelPostCallback
};

export const CallbackQueries: MyCallbackQuery[] = [
  sentPostCallbackQuery,
  cancelPostCallbackQuery
];
