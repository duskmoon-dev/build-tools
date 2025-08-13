import { writeFile, rm } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { describe, it, expect, afterEach, jest } from "@jest/globals";
import { run } from "../lint.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

describe("lint task", () => {
  const fixtureDir = join(__dirname, "fixtures");
  const filePath = join(fixtureDir, "test.ts");

  afterEach(async () => {
    try {
      await rm(filePath);
    } catch (_e) {
      // ignore if file does not exist
    }
  });

  it("should report linting errors for a file with errors", async () => {
    await writeFile(filePath, "var a = 1;");

    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    await run(filePath, {
      fix: "false",
      tsconfigPath: join(__dirname, "fixtures", "tsconfig.test.json"),
    });

    const output = consoleLogSpy.mock.calls.map((call) => call[0]).join("\n");
    expect(output).toContain("Unexpected var, use let or const instead");

    consoleLogSpy.mockRestore();
  });
});
