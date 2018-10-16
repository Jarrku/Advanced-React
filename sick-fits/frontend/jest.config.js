module.exports = {
  //  "setupTestFrameworkScriptFile": "<rootDir>/jest.setup.js",
  "testPathIgnorePatterns": [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/"
  ],
  "transform": {
    "\\.(gql|graphql)$": "jest-transform-graphql",
    ".*": "babel-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}