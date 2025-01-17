export class GetEnvError extends Error {
  constructor(name: string) {
    super(`${name} is not specified in the environment variables.`);
  }
}
