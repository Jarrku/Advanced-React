module.exports = {
  client: {
    service: {
      name: 'backend',
      url: 'http://localhost:4444'
    },
    includes: ['**/*.tsx', '**/*.ts'], // load queries from .tsx files
    excludes: ['node_modules/**'] // don't include any matching files from node_modules
  }
};
