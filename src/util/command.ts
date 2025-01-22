import { Bot } from "grammy";
import { Command } from "../handler/command";

export const regCommands = (bot: Bot, commands: Command[]) => {
  commands.forEach((command) => bot.command(command.command, command.handler));
};
