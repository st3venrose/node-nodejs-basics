import fs, { promises as fsPromises } from "fs";
import path from "path";

const copy = async () => {
  const sourceDirectory = path.normalize("./src/fs/files");
  const destDirectory = path.normalize("./src/fs/files_copy");

  if (fs.existsSync(destDirectory)) {
    throw Error("FS operation failed");
  }

  try {
    await fsPromises.cp(sourceDirectory, destDirectory, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};

await copy();
