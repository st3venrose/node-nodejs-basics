import fs, { promises as fsPromises } from "fs";
import path from "path";

const rename = async () => {
  const sourceFile = path.normalize("./src/fs/files/wrongFilename.txt");
  const destFile = path.normalize("./src/fs/files/properFilename.md");

  if (fs.existsSync(destFile)) {
    throw Error("FS operation failed");
  }

  try {
    await fsPromises.rename(sourceFile, destFile);
  } catch (err) {
    console.log(err);
  }
};

await rename();
