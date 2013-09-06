'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['dev/js/*.js'],
        dest: 'demo/js/<%= pkg.name %>.js'
      },
    },
    less: {
      development: {
        files: {
          "dev/css/<%= pkg.name %>.css": "dev/css/*.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "demo/css/<%= pkg.name %>.min.css": "dev/css/*.less"
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'demo/js/<%= pkg.name %>.min.js'
      },
    },
    qunit: {
      all: ['dev/test/**/*.html']
    },
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'dev/js/.jshintrc'
        },
        src: ['dev/js/*.js']
      },
      test: {
        options: {
          jshintrc: 'dev/test/.jshintrc'
        },
        src: ['dev/test/*.js']
      },
    },
    smoosher : {
        dev : {
            files : {
                'demo/pastable.html' : ['dev/<%= pkg.name %>.html']
            }
        },
        demo : {
            files: {
                'demo/pastable.min.html' : ['demo/<%= pkg.name %>.html']
            }
        }
    },
    template: {
      dev: {
        src: 'dev/<%= pkg.name %>.hb',
        dest: 'dev/<%= pkg.name %>.html',
        variables: (function() {
            var package_name = grunt.file.readJSON('package.json').name;
            var object = grunt.file.readJSON('dev/data/' + package_name + '.json');
            object.css = 'css/' + package_name + '.css';
            object.js = 'js/' + package_name + '.js';
            return object;
        })()
      },
      dist: {
        src: 'dev/<%= pkg.name %>.hb',
        dest: 'demo/<%= pkg.name %>.html',
        variables: (function() {
            var package_name = grunt.file.readJSON('package.json').name;
            var object = grunt.file.readJSON('dev/data/' + package_name + '.json');
            object.css = 'css/' + package_name + '.min.css';
            object.js = 'js/' + package_name + '.min.js';
            return object;
        })()
      }
    },
    gss_pull: {
        base: {
            files: {
                'dev/data/<%= pkg.name %>.json' : ['0AswaDV9q95oZdE4wVHFZYXlic0tHaU5QNWRqYzUxU0E']
            }
        }
    },
    connect: {
        server: {
            options: {
                port: 9001,
                base: 'dev',
                middleware: function(connect, options) {
                    var less = require('less-middleware');
                    var hbs = require('hbs');
                    var fs = require('fs');
                    var package_name = require(options.base + '/../package.json').name;
                    return [
                        less({ src: options.base }),
                        function(req, res, next) {
                            //render (and write) handlebars templates
                            if (!req.url.match('html') || req.method !== 'GET') {
                                return next();
                            } else {
                                var hb_file = (options.base + req.url).replace(/\.html$/, '.hb');
                                if (!fs.existsSync(hb_file)) { return next(); }

                                var files = fs.readdirSync(options.base);
                                files.forEach(function(file){
                                    if (file.match('hb')) {
                                        var partial_template = fs.readFileSync(options.base + '/' + file, 'utf8');
                                        hbs.registerPartial(file.replace(/\.hb/, ''), partial_template);
                                        if (file === package_name + '.hb') {
                                            hbs.registerPartial('index', partial_template);
                                        }
                                    }
                                });

                                var json_file = (options.base + '/data/' + package_name + '.json');
                                var template = fs.readFileSync(hb_file, 'utf-8');
                                var json = require(json_file);
                                // ugh okay so our serving is always gonna be in the dev env
                                json.css = '/css/' + package_name + '.css';
                                json.js = '/js/' + package_name + '.js';

                                var compiled = hbs.compile(template);
                                fs.writeFileSync(options.base + req.url, compiled(json), 'utf-8', function(err) {
                                    next(err);
                                });
                                next();
                            }
                        },
                        connect.static(options.base),
                        connect.directory(options.base)
                    ];
                }
            }
        }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-templater');
  grunt.loadNpmTasks('grunt-html-smoosher');
  grunt.loadNpmTasks('grunt-gss-pull');

  // Default task.
  grunt.registerTask('default', ['gss_pull', 'jshint', 'connect', 'qunit', 'template', 'concat', 'uglify', 'less', 'smoosher']);
  grunt.registerTask('min', ['concat', 'uglify']);
  grunt.registerTask('test', ['connect', 'qunit']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('css', ['less']);
  grunt.registerTask('hb', ['template']);
  grunt.registerTask('pull', ['gss_pull']);
  grunt.registerTask('fab', ['gss_pull', 'template', 'concat', 'uglify', 'less', 'smoosher']);
  grunt.registerTask('serve', ['connect', 'watch']);

};
