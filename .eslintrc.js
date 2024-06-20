module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    sourceType: 'module',
  },
  ignorePatterns: ['*.js', '**/*.js'],
  plugins: ['import', 'react-hooks', 'unused-imports', 'deprecation'],
};
