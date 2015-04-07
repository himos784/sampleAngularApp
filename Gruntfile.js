module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            controllers:{
                src : 'app/controllers/*.js',
                dest: 'app/merge/controllers.js'
            },
            factories:{
                src : 'app/factories/*.js',
                dest: 'app/merge/factories.js'
            },
            services:{
                src : 'app/services/*.js',
                dest: 'app/merge/services.js'
            },
            merge:{
                src : [
                    'app/merge/controllers.js',
                    'app/merge/factories.js',
                    'app/merge/services.js'
                ],
                dest: 'app/spa.js'
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            angular: {
                options: {
                    destPrefix: 'js/angular2'
                },
                files: {
                    'angular.min.js': 'angular/angular.min.js',
                    'angular-route.min.js': 'angular-route/angular-route.min.js',
                    'angular-ui-bootstrap.min.js': 'angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
                    'angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
                }
            },
        },
        uglify:{
            options: {
                compress: true,
                mangle: true,
                sourceMap: true,
                sourceMapIncludeSources: true,
            },
            target: {
                files: {
                    'app/spa.min.js': [ 'app/spa.js' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', ['bowercopy','concat','uglify']);

};