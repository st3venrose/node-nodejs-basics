const parseArgs = () => {
  const argsObject = {};

  const userArgs = process.argv.slice(2);
  userArgs.forEach(function (val, index, array) {
    if (array[index].startsWith("--")) {
      argsObject[array[index]] = array[index + 1];
    }
  });

  const argsString = Object.keys(argsObject)
    .reduce(
      (accumulator, currentValue) =>
        `${accumulator.trim()} ${currentValue.replace("--", "")} is ${
          argsObject[currentValue]
        }, `,
      ""
    )
    .trim()
    .slice(0, -1);

  console.log(argsString);
};

parseArgs();
