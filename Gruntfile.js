module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'html/static/js/app/**/*.js']
        },

        connect: {
            html: {
                options: {
                    base: 'html',
                    hostname: '*',
                    port: 8000
                }
            }
        },

        watch: {
            livereload: {
                files: [
                    'html/static/js/**/*.js',
                    'html/**/*.html'
                ],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['<%= jshint.all %>'],
                tasks: ['jshint']
            }
        },

        requirejs: {
            options: {
                baseUrl: 'html/static/js',
                mainConfigFile: 'html/static/js/main.js',
                optimize: 'uglify2',
                normalizeDirDefines: 'skip',
                skipDirOptimize: true,
                onBuildRead: function (moduleName, path, contents) {
                    // return contents.replace(/baseUrl[\s]{0,}?:[\s]{0,}?'static\/js'/, "baseUrl: 'static/js_build'");
                    return contents;
                }
            },

            centralized: {
                options: {
                    name: 'libs/almond',
                    deps: [
                        'main',
                        'views/dashboard',
                        'views/settings'
                    ],
                    insertRequire: ['main'],
                    out: 'html/static/js/production.js',
                    wrap: true,
                    preserveLicenseComments: false
                }
            },

            shared: {
                options: {
                    dir: 'html/static/js_build',
                    modules: [
                        {
                            name: 'main',
                            include: ['jquery', 'views/base'],
                            insertRequire: ['main']
                        },

                        {
                            name: 'views/dashboard',
                            exclude: ['main']
                        }
                    ]
                }
            }
        },

        compare_size: {

            files: [
                "html/static/js/production.js"
            ],

            options: {
                // Location of stored size data
                cache: ".sizecache.json",

                // Compressor label-function pairs
                compress: {
                    gz: function( fileContents ) {
                        return require("gzip-js").zip( fileContents, {} ).length;
                    }
                }
            }
        }

    });

    // load tasks
    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('jsmin', ['requirejs:centralized']);
};
