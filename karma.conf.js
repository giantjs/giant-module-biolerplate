/*jshint strict:false */
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],

        // list of files / patterns to load in the browser
        files: [
            // required by PhantomJS
            "node_modules/phantomjs-function-bind-polyfill/index.js",

            // TODO: Remove unused dependencies.
            "node_modules/giant-assertion/lib/giant-assertion.js",
            "node_modules/giant-oop/lib/giant-oop.js",
            "config/giant-oop-test.config.js",
            "node_modules/giant-utils/lib/giant-utils.js",
            "node_modules/giant-data/lib/giant-data.js",
            "node_modules/giant-table/lib/giant-table.js",
            "node_modules/giant-event/lib/giant-event.js",
            "node_modules/giant-templating/lib/giant-templating.js",
            "node_modules/giant-entity/lib/giant-entity.js",
            "node_modules/giant-routing/lib/giant-routing.js",
            "node_modules/giant-i18n/lib/giant-i18n.js",
            "node_modules/jquery/dist/jquery.js",
            "node_modules/giant-transport/lib/giant-transport.js",
            "node_modules/giant-widget/lib/giant-widget.js",
            "node_modules/giant-common-widgets/lib/giant-common-widgets.js",
            "node_modules/giant-asset/lib/giant-asset.js",

            // TODO: Place additional module dependencies here.
            // ...

            'src/namespace.js',
            'src/**/*.def.js',
            'src/**/*.test.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
