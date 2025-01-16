import { bot } from "./bot";

const bootstrap = () => {
  bot.start({
    onStart: () => console.log("bot has been started...")
  });
};

bootstrap();
