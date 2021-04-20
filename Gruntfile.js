module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      dev: {
        NODE_ENV: 'development',
      },
      stage: {
        NODE_ENV: 'staging',
      },
      prod: {
        NODE_ENV: 'production',
      },
    },
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          './public/css/style.css': './src/sass/style.scss',
        },
      },
    },
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true,
        },
      },
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
      },
    },
    nodemon: {
      dev: {
        script: './server.js',
      },
    },
  })

  grunt.loadNpmTasks('grunt-env')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-nodemon')
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['env:prod', 'sass'])
  grunt.registerTask('dev', ['env:dev', 'sass', 'concurrent:target'])
  grunt.registerTask('stage', ['env:stage', 'sass', 'concurrent:target'])
  grunt.registerTask('prod', ['env:prod', 'sass', 'concurrent:target'])
}
