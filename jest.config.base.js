export default {
  moduleNameMapper: {
    "^@package1/(.*)$": "<rootDir>/../package1/src/$1",
    "^@package2/(.*)$": "<rootDir>/../package2/src/$1",
    "^@package3/(.*)$": "<rootDir>/../package3/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest"],
    "^.+\\.tsx?$": ["ts-jest", {
      "tsconfig": "tsconfig.json"
    }],
  },
  testEnvironment: "node",
};
