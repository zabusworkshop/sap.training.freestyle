module.exports = function (grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8899,
                    keepalive: true
                },
                proxies: [{
                    context: "/sap/opu/odata/SAP/",
                    host: "fsdhost.wdf.sap.corp",
                    port: 8000,
                    https: false
                }]
            }
        },

        openui5_connect: {
            server: {
                options: {
                    appresources: 'src',
                    resources: 'C://sapui5-sdk//resources',
                    testresources: 'C://sapui5-sdk//test-resources'
                }
            }
        },

        clean: ['dist/webapp'],

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['webapp/**'],
                    dest: 'dist'
                }]
            }
        },

        openui5_preload: {

            component: {
                options: {
                    resources: {
                        cwd: 'src/webapp',
                        prefix: 'tinyapp'
                    },
                    dest: 'dist/webapp'
                },
                components: 'tinyapp'
            }
        },

        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: 'http://lt5057cip4a:8042',
                },
                auth: {
                    user: 'zabuse',
                    pwd: 'p@ssword2'
                }
            },
            upload_build: {
                options: {
                    ui5: {
                        package: '$TMP',
                        bspcontainer: 'ZABUS_DEPLOY_SA',
                        bspcontainer_text: 'Sample App',
                        transportno: 'P4AK900217'
                    },
                    resources: {
                        cwd: 'dist/webapp',
                        src: '**/*.*'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-openui5');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nwabap-ui5uploader');

    grunt.registerTask('serve', ['openui5_connect']);
    grunt.registerTask('build', ['clean', 'copy', 'openui5_preload']);
    grunt.registerTask('deploy', ['build', 'nwabap_ui5uploader:upload_build']);

};