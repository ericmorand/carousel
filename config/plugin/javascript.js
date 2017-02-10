module.exports = {
  transform: [
    ['stringify', {
      appliesTo: {
        includeExtensions: ['html']
      }
    }]
  ],
  plugin: [
    ['tsify', {
      'project': {
        'compilerOptions': {
          'target': 'es5'
        }
      }
    }]
  ]
};