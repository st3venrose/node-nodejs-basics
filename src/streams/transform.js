import path from "path";
import fs from "fs";
import { Transform } from "stream";

class ReverseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().split("").reverse().join(""));
    callback();
  }
}

const transform = async () => {
  const filename = path.normalize("./src/streams/files/fileToWrite.txt");
  const reverseStream = new ReverseTransform();

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
