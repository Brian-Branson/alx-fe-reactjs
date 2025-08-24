module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  transform: { "^.+\\.[tj]sx?$": "babel-jest" },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
