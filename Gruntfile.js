module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        }
      }
  },
  watch: {
  source: {
  file: ['sass/**/*.scss', 'views/**/*.jade'],
  tasks: ['sass'],
  options: {
	  livereload: true
  }
  }
  }
});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};