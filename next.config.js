var path = require("path");

const isProd = process.env.NODE_ENV === "production";
const dir = path.resolve(__dirname).split("/").at(-1);

module.exports = {
  basePath: isProd ? `/${dir}` : "",
};
