import { describe, expect, test } from "@jest/globals";
import { piscina } from "../src/main";
import { Task } from "../src/Task";

describe("runTasks module", () => {
  test("should complete bbcd", async () => {
    await Promise.all([
      expect(await piscina.run(new Task("bbcd"), { name: "doTask" })).toBe(
        "completed"
      ),
    ]);
  });
  test("should complete a", async () => {
    await Promise.all([
      expect(await piscina.run(new Task("a"), { name: "doTask" })).toBe(
        "completed"
      ),
    ]);
  });
});
