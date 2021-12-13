// jest.config.js
export default {
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.cjs',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  moduleNameMapper: {
    "^\\$lib(.*)$": "<rootDir>/src/lib/$1",
    "^\\$app(.*)$": "<rootDir>/.svelte-kit/dev/runtime/app/$1"
  },
};
