{spawn, exec} = require 'child_process'
fs = require 'fs'

task "build", "Build the JS2EE source", ->
  rsync = spawn 'rsync', ['-av', '--exclude', '*.litcoffee', 'src/', 'dist']
  rsync.stdout.on 'data', (data) -> console.log data.toString().trim()
  rsync.stderr.on 'data', (data) -> console.error data.toString().trim()

  compiler = spawn 'coffee', ['-o', 'dist', '-c', 'src']
  compiler.stdout.on 'data', (data) -> console.log data.toString().trim()
  compiler.stderr.on 'data', (data) -> console.error data.toString().trim()