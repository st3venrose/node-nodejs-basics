import fs, { promises as fsPromises } from "fs";
import path from "path";

const read = async () => {
  const filePath = path.normalize("files/fileToRead.txt");

  if (!fs.existsSync(filePath)) {
    throw Error("FS operation failed");
  }

  try {
    const fileContent = await fsPromises.readFile(filePath, {
      encoding: "utf8",
    });
    console.log("File content: ", fileContent);
  } catch (err) {
    console.log(err);
  }
};

await read();
