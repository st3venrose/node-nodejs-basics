import fs, { promises as fsPromises } from "fs";
import path from "path";

const create = async () => {
  const filePath = path.normalize("./src/fs/filesfresh.txt");

  if (fs.existsSync(filePath)) {
    throw Error("FS operation failed");
  }

  try {
    const content = "I am fresh and young";

    await fsPromises.writeFile("./files/fresh.txt", content);
  } catch (err) {
    console.log(err);
  }
};

await create();
