module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
  },
};
