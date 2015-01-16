var remapify = require('remapify');

module.exports = function (grunt) {
    'use strict';

    /**
     * Paths for configuration
     * @type {Object}
     */
    var config = {

        app: 'app/static/js',
        jsBuild: 'build/static/js',
        lessDirectory: 'app/less',
        publicPathCss: 'build/static/css',
        jshint: {
            options: {
                'browser': true,
                'curly': true,
                'eqeqeq': true,
                'eqnull': true,
                'forin': true,
                'immed': true,
                'indent': 4,
                'jquery': true,
                'latedef': true,
                'newcap': true,
                'noarg': true,
                'node': true,
                'nonew': false,
                'quotmark': 'single',
                'strict': true,
                'sub': true,
                'trailing': true,
                'undef': true,
                'predef': [
                    'Buffer',
                    'Exception',
                    'OVRError',
                    'angular',
                    'define',
                    '__DUST__',
                    'module',
                    'alert'
                ]
            },
            all: [
                '<%= app %>/*.js',
                '<%= app %>/**/*.js'
            ]
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true
                }
            },
            dist: {
                files: {
                    '<%= jsBuild %>/app.js': [
                        '<%= app %>/*.js',
                        '<%= app %>/**/*.js'
                    ]
                }
            }
        },

        less: {
            development: {
                options: {
                    sourceMap: true,
                    outputSourceFiles: true,
                    strictMath: true,
                    strictUnits: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= lessDirectory %>',
                        src: [
                            '**/*.less',
                            '!**/_*.less'
                        ],
                        ext: '.css',
                        dest: '<%= publicPathCss %>/'
                    }
                ]
            }
        },

        pkg: grunt.file.readJSON('package.json')
    };

    grunt.initConfig(config);

    grunt.registerTask('build', 'Build Task', function() {

        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-browserify');
        grunt.loadNpmTasks('grunt-contrib-less');

        grunt.task.run([
            'jshint',
            'browserify',
            'less'
        ]);
    });
};
