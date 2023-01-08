module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest', 'prettier'],
  plugins: ['prettier', 'simple-import-sort', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/jsx-newline': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeClosing: 'never',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: ['key'],
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        // See https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
