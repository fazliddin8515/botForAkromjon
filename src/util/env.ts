import { GetEnvError } from "./error.js";

export const getEnv = (name: string) => {
  const env = process.env[name];

  if (!env) {
    throw new GetEnvError(name);
  }

  return env;
};
