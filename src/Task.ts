import { AppWorker } from "./AppWorker";
import crypto from "crypto";

export type Status =
  | "in queue"
  | "removed"
  | "completed"
  | "in progress"
  | "failed";

export class Task {
  private status: Status;
  data: string;

  constructor(data: string) {
    this.data = crypto.createHash("sha256").update(data).digest("hex");
    this.status = "in queue";
  }

  remove() {
    this.status = "removed";
  }

  completeTask(worker: AppWorker): Status {
    this.status = "in progress";
    const result = worker.doTask(this);
    this.status = result;

    return this.status;
  }
}
