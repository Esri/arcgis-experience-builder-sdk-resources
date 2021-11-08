module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: Object.assign({}, require('./tsconfig.json').compilerOptions, {
        module: 'commonjs'
      }),
      isolatedModules: true
    },
    // the default config is for AGOL app
    jimuConfig: {
      isBuilder: false,
      isSite: false,
      isInBuilder: false,
      isOutOfExb: false,
      rootPath: '/',
      appFolderName: '',
      baseUrl: '/',
      useStructuralUrl: true,
      isInPortal: false,
      mountPath: '/',
      hostEnv: 'prod',
      isDevEdition: false,
      arcgisJsApiUrl: '',
      buildNumber: '',
      exbVersion: '1.5.0'
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.js$": "./jest-systemjs-transformer.js"
  },
  transformIgnorePatterns: [
    'node_modules/(?!@esri\/arcgis-rest-types|arcgis-charts-spec/)'
  ],
  testURL: "http://localhost",
  testRegex: "\\.(test|spec)\\.(tsx?)$",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/woodpecker/",
    "<rootDir>/dist/",
    "<rootDir>/dist-tests/",
    "<rootDir>/dist-doc/",
    "<rootDir>/dist-report/",
    "<rootDir>/tests/testing-library-examples",
    "<rootDir>/__mocks__/",
    "<rootDir>/experience/",
    "<rootDir>/for-release/",
    "<rootDir>/pwa/",
    "<rootDir>/scripts/",
    "<rootDir>/test-loader/",
    "<rootDir>/tsconfig/",
    "<rootDir>/types/",
    "<rootDir>/webpack/"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  moduleNameMapper: {
    "^react$": "<rootDir>/dist/jimu-core/react.js",
    "^react-dom$": "<rootDir>/dist/jimu-core/react-dom.js",
    "^react-dom/server$": "<rootDir>/dist/jimu-core/react-dom/server.js",
    "^jimu-core$": "<rootDir>/dist/jimu-core/index.js",
    '^jimu-theme$': '<rootDir>/dist/jimu-theme/index.js',
    "^jimu-ui$": "<rootDir>/dist/jimu-ui/index.js",
    "^jimu-for-builder$": "<rootDir>/dist/jimu-for-builder/index.js",
    "^jimu-arcgis$": "<rootDir>/dist/jimu-arcgis/index.js",
    "^jimu-for-test$": "<rootDir>/jimu-for-test/index.tsx",

    "^jimu-ui/lib/icons/(.*)\\.svg": "<rootDir>/__mocks__/icon-mock.js",
    '^jimu-icons/svg/(filled|outlined)/(.*)\\.svg': '<rootDir>/__mocks__/icon-mock.js',

    "^jimu-core/(.*)": "<rootDir>/dist/jimu-core/$1",
    '^jimu-theme/(.*)': '<rootDir>/dist/jimu-theme/$1',
    "^jimu-ui/(.*)": "<rootDir>/dist/jimu-ui/$1",
    "^jimu-for-builder/(.*)": "<rootDir>/dist/jimu-for-builder/$1",
    "^jimu-arcgis/(.*)": "<rootDir>/dist/jimu-arcgis/$1",
    "^jimu-layouts/(.*)": "<rootDir>/dist/jimu-layouts/$1",
    "^builder/(.*)": "<rootDir>/dist/builder/$1",
    "^site/(.*)": "<rootDir>/dist/site/$1",

    "^esri.*": "<rootDir>/__mocks__/esri-package-mock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/style-mock.js",
    "themes/(.*)\\variables.json": "<rootDir>/__mocks__/theme-mock.js",
    "^arcgis-charts$": "<rootDir>/dist/arcgis-charts/arcgis-charts.js"
  },
  collectCoverage: false,
  silent: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/woodpecker/**",
    "!**/dist*/**",
    "!**/arcgis-js-api/**",
    "!**/translations/**",
    "!tests/**",
    "!widgets/arcgis/**"
  ],
  coverageDirectory: "<rootDir>/dist-report/tests-coverage",
  coverageReporters: ["json", "html", "cobertura"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "dist-report",
        outputName: "ut-report.xml"
      }
    ]
  ],
  setupFiles: [
    './jimu-for-test/setup-jest.js'
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ]
}
