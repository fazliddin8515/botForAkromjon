import { bot } from "./bot.js";

const bootstrap = () => {
  bot.start({
    onStart: () => console.log("bot has been started...")
  });
};

bootstrap();
