/**
 * Created by eweng on 11/3/2014.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            css: {
                options: {livereload: true},
                files: ['css/**.css']
            },
            script: {
                options: {livereload: true},
                files: ['**.js']
            },
            html: {
                options: {livereload: true},
                files: ['**.html']
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },

            scripts: {
                options: {
                    destPrefix: 'js/vendor'
                },

                files: {
                    '/jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
                    '/bootstrap/bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
                    '/angular/angular.min.js': 'angular/angular.min.js',
                    '/angular/angular.js': 'angular/angular.js',
                    '/underscore/underscore-min.js': 'underscore/underscore-min.js'
                }
            },
            css: {
                options: {
                    destPrefix: 'css/vendor'
                },
                files: {
                    '/bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.css',
                    '/bootstrap/bootstrap-theme.min.css': 'bootstrap/dist/css/bootstrap-theme.css'
                }
            },

            fonts: {
                options: {
                    destPrefix: 'fonts'
                },
                files: {
                    '/bootstrap': 'bootstrap/dist/fonts'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['bowercopy']);
};
