import { Bot, Context } from "grammy";
import { BOT_TOKEN } from "./constants";

export const bot = new Bot(BOT_TOKEN);

bot.on("message:text", async (ctx: Context) => {
  if (ctx.message?.text) {
    await ctx.reply(ctx.message.text);
  }
});
