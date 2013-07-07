module.exports = function(grunt) {

    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            'developement_js': {
                src: [
                    'www/assets/components/angular/angular.min.js',
                    'www/assets/components/angular-i18n/angular-locale_fr-fr.js',
                    'www/assets/components/angular-resource/angular-resource.min.js',
                    'www/assets/components/angular-ui-bootstrap-bower/ui-bootstrap.min.js',
                    'www/assets/components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
                    'www/assets/js/*.js'
                ],
                dest: 'www/assets/build/project.js'
            },
            'developement_css': {
                src: [
                    'www/assets/components/components-bootstrap/css/bootstrap.min.css',
                    'www/assets/css/*.css'
                ],
                dest: 'www/assets/build/project.css'
            }
        },
        watch: {
            'observe': {
                files: [
                    'www/assets/js/*.js',
                    'www/assets/css/*.css',
                    'www/**/*.html',
                    'www/**/*.json'
                ],
                tasks: ['default'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //tasks
    grunt.registerTask('default', ['development']);

    grunt.registerTask('development', 'Development Build', function() {
        grunt.task.run(
            'concat:developement_js',
            'concat:developement_css'
        );
    });

};