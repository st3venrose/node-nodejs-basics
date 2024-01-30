import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const runWorker = async (workerFile, message) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerFile);

      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });

      worker.postMessage(message);
    });
  };

  const n = 10;
  const numWorkers = os.cpus().length;

  const workerResults = await Promise.all(
    Array.from({ length: numWorkers }, (_, i) =>
      runWorker(new URL("worker.js", import.meta.url), 10 + i)
    )
  );

  const result = workerResults
    .reduce(
      (accumulator, currentValue, currentIndex) =>
        `${accumulator.trim()} Worker ${currentIndex}: ${currentValue}, `,
      ""
    )
    .trim()
    .slice(0, -1);

  console.log(result);
};

await performCalculations();
