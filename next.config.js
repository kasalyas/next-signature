var path = require("path");

const dir = path.resolve(__dirname).split("/").at(-1);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? `/${dir}` : "",
};
