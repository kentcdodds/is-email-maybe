module.exports = {
  scripts: {
    commit: {
      description: 'This uses commitizen to help us generate well formatted commit messages',
      script: 'git-cz',
    },
    test: {
      default: {
        script: 'cross-env BABEL_ENV=AVA ava',
      },
      watch: {
        description: 'pass the -w flag on to the npm t command so ava will watch stuff',
        script: 'p-s test -w',
      },
    },
    build: {
      default: {
        description: 'Deletes the `dist` directory and runs builds in parallel',
        script: 'rimraf dist && p-s --parallel build.umd,build.umd.min',
      },
      umd: {
        default: {
          description: 'Builds the lib as a UMD build',
          script: 'rollup --config rollup.config.js --output ./dist/index.umd.js',
        },
        min: {
          description: 'Just like build.umd except it specifies a production env to minimaize and optimize for prod',
          script: 'rollup --config rollup.config.js --environment BUILD:production --output ./dist/index.umd.min.js',
        },
      },
    },
    lint: {
      description: 'lint the entire project',
      script: 'eslint .',
    },
    checkCoverage: {
      description: 'We want to keep 100% code coverage on this project because, reasons',
      script: 'nyc check-coverage --statements 100 --branches 100 --functions 100 --lines 100',
    },
    cover: {
      description: 'we use nyc to instrument our code for coverage. Some of the config happens in package.json',
      script: 'nyc npm t',
    },
    reportCoverage: {
      description: 'Report coverage stats to codecov. This should be run after the `cover` script',
      script: 'codecov',
    },
    release: {
      description: 'We automate releases with semantic-release. This should only be run on travis',
      script: 'semantic-release pre && npm publish && semantic-release post',
    },
    validate: {
      description: 'This runs several scripts to make sure things look good before committing or on clean install',
      script: 'p-s -p lint,build,cover && p-s check-coverage',
    },
    addContributor: {
      description: 'When new people contribute to the project, run this',
      script: 'all-contributors add',
    },
    generateContributors: {
      description: 'Update the badge and contributors table',
      script: 'all-contributors generate',
    },
  },
  options: {
    silent: false,
  },
}
