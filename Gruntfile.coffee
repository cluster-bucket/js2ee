module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffee:
      compile:
        files: [
          expand: true
          cwd: 'src/'
          src: '**/*.litcoffee'
          dest: 'dev/'
          ext: '.js'
        ]
        options:
          bare: false

    requirejs:
      compile:
        options:
          keepBuildDir: true
          appDir: 'src'
          baseUrl: './'
          dir: 'dev'
          optimize: 'none'
          optimizeCss: 'none'
          fileExclusionRegExp: /^\.|\.litcoffee$/
          preserveLicenseComments: true
          modules: [
            name: 'bootstrap'
            include: [
              'views/index'
            ]
          ]

    connect:
      server:
        options:
          base: 'dev'
          keepalive: true

  # Load tasks
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-requirejs'

  # Custom tasks
  grunt.registerTask 'server', ['coffee', 'requirejs', 'connect:server']
  grunt.registerTask 'default', ['coffee', 'requirejs']
