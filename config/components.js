const merge = require('merge');

module.exports = {
  componentRoot: 'src/components',
  componentManifest: 'component.json',
  plugins: {
    javascript: {
      module: require('stromboli-plugin-javascript'),
      entry: 'demo.ts',
      output: 'demo.js',
      config: merge.recursive(require('./plugin/javascript'), {
        debug: true
      })
    },
    twig: {
      module: require('stromboli-plugin-twig'),
      entry: 'demo.twig',
      config: merge.recursive(require('./plugin/twig'))
    },
    sass: {
      module: require('stromboli-plugin-sass'),
      config: merge.recursive(require('./plugin/sass'), {
        sourceMap: true,
        sourceComments: true,
        sourceMapEmbed: true
      }),
      entry: 'demo.scss',
      output: 'demo.css'
    }
  },
  browserSync: {
    port: 3002,
    open: false,
    notify: false,
    server: 'www',
    logLevel: 'silent'
  },
  chokidar: {
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 100
    }
  }
};