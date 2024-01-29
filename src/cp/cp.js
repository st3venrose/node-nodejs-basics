import { spawn } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const script = path.normalize("src/cp/files/script.js");
  const child = spawn(process.execPath, [script, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });

  child.on("error", (error) =>
    console.error(`Child process error: ${error.message}`)
  );
  child.on("exit", (code) =>
    console.log(`Child process exited with code ${code}`)
  );
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
