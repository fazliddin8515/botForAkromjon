import { Bot, Context, LazySessionFlavor, lazySession } from "grammy";
import { BOT_TOKEN } from "./constants";
import { CallbackQueries } from "./handler/callbackQueries";
import { commands } from "./handler/command";
import { regCallbakQueries, regCommands } from "./util/handler";

export type SessionData = {
  post?: string;
};

export type MyContext = Context & LazySessionFlavor<SessionData>;

export const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(lazySession({ initial: (): SessionData => ({}) }));
// bot.use(conversations());

// regConversations(bot, convs);
regCallbakQueries(bot, CallbackQueries);
regCommands(bot, commands);
