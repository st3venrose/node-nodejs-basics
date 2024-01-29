import crypto from "crypto";
import fs from "fs";
import stream from "stream";
import path from "path";

const calculateHash = async () => {
  const filename = path.normalize(
    "./src/hash/files/fileToCalculateHashFor.txt"
  );
  const fileStream = fs.createReadStream(filename);

  const hash = crypto.createHash("sha256");

  fileStream.pipe(hash);

  fileStream.on("end", () =>
    console.log(`${filename} hash: ${hash.digest("hex")}`)
  );

  fileStream.on("error", (error) =>
    console.error(`Error calculating hash: ${error.message}`)
  );
};

await calculateHash();
