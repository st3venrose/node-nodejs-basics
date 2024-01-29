import fs, { promises as fsPromises } from "fs";
import path from "path";

const copy = async () => {
  const destDirectory = path.normalize("files_copy");
  const sourceDirectory = path.normalize("files");

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
