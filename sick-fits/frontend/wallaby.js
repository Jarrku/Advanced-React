module.exports = function(wallaby) {
  return {
    files: [
      "lib/**/*.ts?(x)",
      "!lib/**/*.spec.ts?(x)",
      "components/**/*.ts?(x)",
      "!components/**/*.spec.ts?(x)",
      "pages/**/*.ts?(x)",
      "!pages/**/*.spec.ts?(x)"
    ],

    tests: ["lib/**/*.spec.ts?(x)", "components/**/*.spec.ts?(x)", "pages/**/*.spec.ts?(x)"],

    testFramework: "jest",
    debug: true,

    env: {
      type: "node",
      runner: "node"
    },
    compilers: {
      "**/*.ts?(x)": wallaby.compilers.babel({
          babel: require("@babel/core")
      })
  },
  };
};
