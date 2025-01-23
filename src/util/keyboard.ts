import { InlineKeyboard } from "grammy";

export const yesNoKeyboard = new InlineKeyboard()
  .text("Ha", "sentPost")
  .text("Yo'q", "cancelPost");
