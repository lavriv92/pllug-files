module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      combine: {
        files: {
          './public/build/css/common.css': [
            './public/libs/icomoon/style.css',
            './public/css/base.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['cssmin']);
};
