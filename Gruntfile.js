module.exports = function(grunt) {
  
	// Project configuration.
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    // Tasks
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'build/css/main.css' : 'sass/**/*.sass'
				}
			}
		},
		jade: {
			compile: {
				files: {
					'build/index.html' : 'jade/**/*.jade'
				}
			}
		}
	});
	     
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	// Default task(s).
	grunt.registerTask('default', ['sass', 'jade']);
};
