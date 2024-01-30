import path from "path";
import fs from "fs";
import { finished } from "stream/promises";

const read = async () => {
  const filename = path.normalize("./src/streams/files/fileToRead.txt");
  const fileStream = fs.createReadStream(filename);

  fileStream.pipe(process.stdout);
  await finished(fileStream);
  process.stdout.write("\n");
};

await read();
