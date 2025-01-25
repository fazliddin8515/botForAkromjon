import { describe, expect, it, vi } from "vitest";
import { getEnv } from "./env.js";
import { GetEnvError } from "./error.js";

vi.stubGlobal("process", {
  env: {
    BOT_TOKEN: "this_is_fake_bot_token"
  }
});

describe("getEnv()", () => {
  it("should return an env value if it exists in the environment", () => {
    expect(getEnv("BOT_TOKEN")).toBe("this_is_fake_bot_token");
  });

  it("should throw GetEnvError if the env is not specified in the environment", () => {
    const getEnvFn = () => getEnv("NOT_SET");
    console.log(process.env["BOT_TOKEN"]);
    expect(getEnvFn).toThrow(GetEnvError);
  });
});
