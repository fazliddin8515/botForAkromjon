import { GetEnvError } from "./error";

export const getEnv = (name: string) => {
  const env = process.env[name];

  if (!env) {
    throw new GetEnvError(name);
  }

  return env;
};
