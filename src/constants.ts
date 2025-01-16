import { getEnv } from "./util/env";

export const { BOT_TOKEN = getEnv("BOT_TOKEN") } = process.env;
