module.exports = {
  schemas: {
    backend: {
      endpoint: 'http://localhost:4444' // if not defined the schema will be downloaded from Apollo Engine
    }
  },
  queries: [
    // optional if you only have one schema
    {
      schema: 'backend', // reference the previously defined schema
      includes: ['**/*.tsx', '**/*.ts'], // load queries from .tsx files
      excludes: ['node_modules/**'] // don't include any matching files from node_modules
    }
  ]
};
