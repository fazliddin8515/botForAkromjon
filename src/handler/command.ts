import { PrismaClient } from "@prisma/client";
import { CommandMiddleware, Context } from "grammy";

const prisma = new PrismaClient();

type CommandHandler = CommandMiddleware<Context>;

export type Command = {
  command: string;
  description: string;
  handler: CommandHandler;
};

const startHandler: CommandHandler = async (ctx) => {
  const from = ctx.from!;
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

const startCommand: Command = {
  command: "start",
  description: "start command",
  handler: startHandler
};

export const commands = [startCommand];
