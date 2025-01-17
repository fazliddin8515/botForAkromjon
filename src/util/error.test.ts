import { describe, expect, it } from "vitest";
import { GetEnvError } from "./error";

describe("GetEnvError", () => {
  it("should return an Error instance", () => {
    const error = new GetEnvError("SECRET");

    expect(error).toBeInstanceOf(Error);
  });

  it("should return an error with provided message", () => {
    const error = new GetEnvError("SECRET");

    expect(error.message).toMatch(/SECRET/);
  });
});
