module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            target: {
                src: [
                    'index.html'
                ],
                cwd: '',
                dependencies: true,
                devDependencies: true,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },
        htmlhint: {
            angular_files: {
                options: {
                    //https://github.com/yaniswang/HTMLHint/wiki/Rules
                    'tag-pair': true
                },
                src: ['app/modules/*/*/tpl/*.html', 'app/modules/*/*/*/tpl/*.html']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            uses_defaults: ['js/*.js']
        },
        less: {
            development: {
                files: {
                    "dist/css/main.css": "less/main.less"
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'app/css/main.min.css': ['dist/css/*.css']
                }
            }
        },
        jscs: {
            src: "js/**/*.js",
            options: {
                config: ".jscsrc",
                //"preset": "crockford",
                requireCurlyBraces: [
                    "if",
                    "else",
                    "while",
                    "for"
                ]
            }
        },
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            },
            //jscs: {
            //  files: ['app/modules/**/*.js'],
            //    task: ['jscs']
            //},
            //cssmin: {
            //    files: ['app/css/*.css'],
            //    tasks: ['cssmin']
            //},
            //scripts: {
            //    files: ['app/metronic/*.js'],
            //    tasks: ['jshint']
            //},
            //html: {
            //    files: ['app/modules/*/*/tpl/*.html', 'app/modules/*/*/*/tpl/*.html'],
            //    tasks: ['htmlhint']
            //}
        },
		connect: {
            dist: {
                options: {
                    port: 1339,
                    hostname: 'localhost',
                    keepalive: true
                }
            }
        }
    });

    // Npm tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks("grunt-jscs");

    // My tasks
    grunt.registerTask('hints', ['jshint', 'htmlhint']);
    grunt.registerTask('less-css', ['less', 'cssmin']);
    grunt.registerTask('default', ['connect']);
};