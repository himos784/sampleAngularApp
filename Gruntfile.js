module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat:{
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
        bowercopy:{
            options:{
                srcPrefix: 'bower_components'
            },
            angular:{
                options:{
                    destPrefix: 'assets/js/angular'
                },
                files:{
                    'angular.min.js': 'angular/angular.min.js',
                    'angular-route.min.js': 'angular-route/angular-route.min.js',
                    'angular-ui-bootstrap.min.js': 'angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
                    'angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js'
                }
            },
            bootstrap_css:{
                options:{
                    destPrefix: 'assets/css/bootstrap/'
                },
                files:{
                    'css' : 'bootstrap/dist/css/bootstrap.min.css',
                    'fonts' : 'bootstrap/dist/fonts'
                }
            },
            bootstrap_js:{
                options: {
                    destPrefix: 'assets/js/bootstrap'
                },
                files: {
                    'bootstrap.min.js' : 'bootstrap/dist/js/bootstrap.min.js',
                }
            },
            jquery:{
                options:{
                    destPrefix: 'assets/js/jquery/'
                },
                files:{
                    'jquery.min.js' : 'jquery/dist/jquery.min.js'
                }
            }
        },
        uglify:{
            options: {
                compress: true,
                mangle: true,
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            target: {
                files: {
                    'app/spa.min.js': 'app/spa.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', ['bowercopy','concat','uglify']);

};