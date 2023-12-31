// AppWorker.ts

import { Status, Task } from "./Task";
import crypto from "crypto";
import { patterns } from "./patterns";

export class AppWorker {
  add({ a, b }: { a: number; b: number }) {
    console.log("afd");
    return a + b;
  }

  multiply({ a, b }: { a: number; b: number }) {
    return a * b;
  }

  doTask(task: Task): Status {
    let key = 0;

    while (key < patterns.length) {
      const result = crypto
        .createHash("sha256")
        .update(patterns[key])
        .digest("hex");

      if (result === task.data) {
        return "completed";
      }

      key++;
    }
    return "failed";
  }
}
