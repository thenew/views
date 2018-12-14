module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'css/index.css': '_styl/index.styl'
        }
      }
    },
    autoprefixer:{
      options: {
        map: true,
        browsers: ['last 2 versions']
      },
      dist:{
        expand: true,
        flatten: true,
        cwd: 'css/',
        src: ['*.css'],
        dest: 'css/'
      }
    },
    watch: {
      css: {
        files: '_styl/**/*.styl',
        tasks: ['styles']
      }
    }

  });

  grunt.registerTask('styles', ['stylus', 'autoprefixer']);
}

