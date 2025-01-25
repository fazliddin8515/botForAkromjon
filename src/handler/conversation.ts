import { ConversationFn } from "@grammyjs/conversations";
import { MyContext, SessionData } from "../bot.js";

type ConversationBuilder = ConversationFn<MyContext>;

export type MyConversation = {
  name: string;
  builder: ConversationBuilder;
};

const postBuilder: ConversationBuilder = async (conversation, ctx) => {
  await ctx.reply("Postingizni kiriting: ");
  const post = await conversation.waitFor(":text");
  const session = conversation.session as SessionData;
  session.post = post.message?.text;

  return session.post;
};

export const postConversation: MyConversation = {
  name: "post",
  builder: postBuilder
};

export const conversations: MyConversation[] = [postConversation];
