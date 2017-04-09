module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: [
					'scss/**/*.{scss,sass}'
				],
				tasks: ['sass:dist']
			},
			livereload: {
				files: [
					'*.html',
					'js/**/*.{js,json}',
					'css/*.css',
					'img/**/*.{png,jpg,jpeg,gif,webp,svg}'
				],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'css/homepage.css' : 'scss/homepage.scss',
					'css/favorites.css' : 'scss/favorites.scss'
				}
			}
		}
	});
	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
