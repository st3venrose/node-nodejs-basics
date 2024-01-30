process.env.RSS_name1 = "value1";
process.env.RSS_name2 = "value2";

const parseEnv = () => {
  const envVars = Object.keys(process.env)
    .filter((envKey) => envKey.startsWith("RSS_"))
    .map((envKey) => `${envKey}=${process.env[envKey]}; `)
    .reduce((accumulator, currentValue) => accumulator + currentValue, "").trim();
  console.log(envVars);
};

parseEnv();
