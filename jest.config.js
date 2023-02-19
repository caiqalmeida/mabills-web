export default {
	testPathIgnorePatterns: ["<rootDir>/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	},
	injectGlobals: true,
	testEnvironment: "jsdom",
};
