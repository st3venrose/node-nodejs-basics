import fs from "fs";
import { createGunzip } from "zlib";
import { finished } from "stream/promises";
import path from "path";

const decompress = async () => {
  const readStream = fs.createReadStream(
    path.normalize("./src/zip/files/archive.gz")
  );
  const writeStream = fs.createWriteStream(
    path.normalize("./src/zip/files/fileToCompress.txt")
  );

  const gunzipStream = createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  await finished(writeStream);
};

await decompress();
