module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss',
		  'public/stylesheets/application.css': 'sass/application.scss'
        },
	  options: {
		  sourceMap: true,
		  includePaths: [
		  require('node-bourbon').includePaths,
			'./bower_components/css-calc-mixin',
			'./bower_components/color-scale',
			'./bower_components/type-rhytm-scale'		
		  ]
	  }
	}
  },
  watch: {
  sass: {
  files: ['sass/**/*.scss', 'views/**/*.jade'],
  tasks: ['sass'],
  options: {
	  livereload: true,
  }
  }
  }
});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};