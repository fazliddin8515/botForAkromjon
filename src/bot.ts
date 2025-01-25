import { Bot, Context, LazySessionFlavor, lazySession } from "grammy";
import { BOT_TOKEN } from "./constants.js";
import { CallbackQueries } from "./handler/callbackQueries.js";
import { commands } from "./handler/command.js";
import { regCallbakQueries, regCommands } from "./util/handler.js";

export type SessionData = {
  post?: string;
};

export type MyContext = Context & LazySessionFlavor<SessionData>;

export const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(lazySession({ initial: (): SessionData => ({}) }));

regCallbakQueries(bot, CallbackQueries);
regCommands(bot, commands);
