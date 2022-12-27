const path = require("path");

const alias = {
  "@Components": path.resolve(__dirname, "src/components/index.ts"),
  "@Layout": path.resolve(__dirname, "src/layout/index.ts"),
};

module.exports = {
  webpack: {
    alias,
  },
};
