import { getEnv } from "./util/env.js";

export const { BOT_TOKEN = getEnv("BOT_TOKEN") } = process.env;
