module.exports = function (grunt) {

    var fs = require("fs");

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './dist/js/main.js',
                dest: './dist/js/main.js'
            }
        },
        transport: {
            options: {
                paths: [""],
                alias: '<%= pkg.spm.alias %>',
                debug: true
            },
            js: {
                files: [
                    {
                        expand: true,
                        cwd: "./app/js",
                        src: '**',
                        filter: 'isFile',
                        dest: './dist/temp/js'
                    }
                ]

            }
        },
        concat: {
            foo: {
                options: {
                    include: 'relative'
                },
                files: [
                    {
                        src: ['./dist/temp/js/*debug.js'],
                        dest: './dist/js/main-debug.js'
                    },
                    {
                        src: ['./dist/temp/js/*.js'],
                        dest: './dist/js/main.js',
                        filter: function (filepath) {
                            return filepath.indexOf("debug") == -1;
                        }
                    }
                ]

            }
        }

    });

    grunt.registerTask("init", "初始化dist目录", function () {
        if (grunt.file.exists("./dist")) {
            grunt.file.delete("./dist");
            grunt.file.mkdir("./dist/temp/js");
            grunt.file.mkdir("./dist/js");
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['init', 'transport', "concat", "uglify"]);

};