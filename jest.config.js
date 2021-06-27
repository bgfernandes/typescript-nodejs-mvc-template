module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './test/globalSetup.ts',
  setupFilesAfterEnv: ['./test/setup.ts']
};
