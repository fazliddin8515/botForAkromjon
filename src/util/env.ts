export const getEnv = (name: string) => {
  const env = process.env[name];

  if (!env) {
    throw new Error(`${name} is not set in the environment variables.`);
  }

  return env;
};
