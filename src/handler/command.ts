import { PrismaClient } from "@prisma/client";
import { CommandMiddleware } from "grammy";
import { MyContext } from "../bot";
import { yesNoKeyboard } from "../util/keyboard";

const prisma = new PrismaClient();

type CommandHandler = CommandMiddleware<MyContext>;

export type Command = {
  command: string;
  description: string;
  handler: CommandHandler;
};

const startHandler: CommandHandler = async (ctx) => {
  const from = ctx.update.message!.from;
  let user = await prisma.user.findFirst({ where: { id: from.id } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: from.id,
        is_bot: from.is_bot,
        first_name: from.first_name,
        last_name: from.last_name,
        username: from.username,
        language_code: from.language_code
      }
    });
  }

  await ctx.reply(`${user.first_name} is registered`);
};

const postHandler: CommandHandler = async (ctx) => {
  const message = ctx.message!.text;
  const post = message.slice(5);

  if (!post) {
    return await ctx.reply("Post matni mavjud emas.");
  }

  const session = await ctx.session;
  session.post = post.trim();

  await ctx.reply("Postni tasdiqlang.");
  await ctx.reply(post, {
    parse_mode: "MarkdownV2",
    reply_markup: yesNoKeyboard
  });
};

export const startCommand: Command = {
  command: "start",
  description: "start command",
  handler: startHandler
};

export const postCommand: Command = {
  command: "post",
  description: "post command",
  handler: postHandler
};

export const commands = [startCommand, postCommand];
