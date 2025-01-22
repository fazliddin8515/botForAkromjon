import { Bot } from "grammy";
import { BOT_TOKEN } from "./constants";
import { commands } from "./handler/command";
import { regCommands } from "./util/command";

export const bot = new Bot(BOT_TOKEN);

regCommands(bot, commands);
