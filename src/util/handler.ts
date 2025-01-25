import { Bot } from "grammy";
import { MyContext } from "../bot.js";
import { MyCallbackQuery } from "../handler/callbackQueries.js";
import { Command } from "../handler/command.js";
import { isAuthenticated } from "./auth.js";

export const regCommands = (bot: Bot<MyContext>, commands: Command[]) => {
  commands.forEach((command) =>
    bot.command(command.command, async (ctx) => {
      if (command.authRequired && !(await isAuthenticated(ctx))) {
        return await ctx.reply(
          "Sizda bu komandadan foydalanishga ruxsat yo'q."
        );
      }

      await command.handler(ctx);
    })
  );
};

// export const regConversations = (
//   bot: Bot<MyContext>,
//   conversations: MyConversation[]
// ) => {
//   conversations.forEach((conversation) =>
//     bot.use(createConversation(conversation.builder, conversation.name))
//   );
// };

export const regCallbakQueries = (
  bot: Bot<MyContext>,
  callbackQueries: MyCallbackQuery[]
) => {
  callbackQueries.forEach((callbackQuery) =>
    bot.callbackQuery(callbackQuery.trigger, callbackQuery.callback)
  );
};
