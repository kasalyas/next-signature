const isProd = process.env.NODE_ENV === "production";

console.log(`what is production: ${isProd}`);

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "./" : "",
};
