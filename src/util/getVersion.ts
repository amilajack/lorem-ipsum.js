import fs from "fs";

/**
 * @returns  The package version.
 */
const getVersion = (): string => {
  const pkg = JSON.parse(fs.readFileSync(`${__dirname}/../../package.json`, "utf8"));
  return pkg.version;
};

export default getVersion;
