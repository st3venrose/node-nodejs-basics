import fs from "fs";
import { createGzip } from "zlib";
import { finished } from "stream/promises";
import path from "path";

const compress = async () => {
  const readStream = fs.createReadStream(
    path.normalize("./src/zip/files/fileToCompress.txt")
  );
  const writeStream = fs.createWriteStream(
    path.normalize("./src/zip/files/archive.gz")
  );

  const gzipStream = createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  await finished(writeStream);
};

await compress();
