import fs, { promises as fsPromises } from "fs";
import path from "path";

const remove = async () => {
  const sourceFile = path.normalize("files/fileToRemove.txt");

  if (!fs.existsSync(sourceFile)) {
    throw Error("FS operation failed");
  }

  try {
    await fsPromises.unlink(sourceFile);
  } catch (err) {
    console.log(err);
  }
};

await remove();
