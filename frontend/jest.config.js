export default {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Setup file for Jest
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use Babel to transform JavaScript files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!.*\\.mjs$)", // Don't ignore ES modules in node_modules
  ],
};
