import fs, { promises as fsPromises } from "fs";
import path from "path";

const list = async () => {
  const filesFolderPath = path.normalize("files");

  if (!fs.existsSync(filesFolderPath)) {
    throw Error("FS operation failed");
  }

  try {
    const files = await fsPromises.readdir(filesFolderPath);
    console.log("Files: ", files);
  } catch (err) {
    console.log(err);
  }
};

await list();
