module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['csv.spec.ts'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    plugins: [
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
      require('karma-sourcemap-loader'),
      require('karma-webpack')
    ],
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: false,
  })
}
