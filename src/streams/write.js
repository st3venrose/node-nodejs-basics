import path from "path";
import fs from "fs";
import { finished } from "stream/promises";

const write = async () => {
  const filename = path.normalize("./src/streams/files/fileToWrite.txt");
  const fileStream = fs.createWriteStream(filename);

  process.stdin.pipe(fileStream);
  await finished(fileStream);
};

await write();
