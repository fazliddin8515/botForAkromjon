import { Bot } from "grammy";
import { MyContext } from "../bot";
import { MyCallbackQuery } from "../handler/callbackQueries";
import { Command } from "../handler/command";

export const regCommands = (bot: Bot<MyContext>, commands: Command[]) => {
  commands.forEach((command) => bot.command(command.command, command.handler));
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
