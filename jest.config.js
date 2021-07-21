module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/node_modules',
    '<rootDir>/.vscode'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/lib/components/$1',
    '^@/tokens/(.*)$': '<rootDir>/lib/tokens/$1',
    '^@/hooks/(.*)$': '<rootDir>/lib/hooks/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1'
  }
}
