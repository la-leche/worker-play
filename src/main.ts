import Piscina from "piscina";
import { Task } from "./Task";

export const piscina = new Piscina({
  filename: "./src/tsTranspiler.js",
  maxThreads: 2,
});

const runTasks = async () => {
  await Promise.all([
    console.log(await piscina.run(new Task("bbcd"), { name: "doTask" })),
  ]);
};

runTasks();
