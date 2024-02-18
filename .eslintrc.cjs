module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  'jsx-runtime': {
    plugins: [
      react({
      jsxRuntime: 'classic',
    }),
    ],

    parserOptions: {
      ecmaFeatures: {
        jsx: true
        
      }
    },
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      "react/jsx-runtime" : 0
    }
  }
}


