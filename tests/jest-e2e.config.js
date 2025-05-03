module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '../',
  testRegex: 'e2e.spec.ts',
  setupFilesAfterEnv: ['./tests/setup.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testTimeout: 30000,
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: './coverage/e2e',
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts', // Target source files relative to root
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/__tests__/**', // Exclude unit test directories
    '!<rootDir>/src/**/*.spec.ts', // Exclude unit test files (if using .spec.ts)
    '!<rootDir>/src/**/*.test.ts', // Exclude unit test files (if using .test.ts)
    '!<rootDir>/src/**/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};