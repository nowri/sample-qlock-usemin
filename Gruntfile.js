module.exports = function(grunt) {

	'use strict';


	grunt.initConfig({

		/*
		 * 初期設定
		 * */
		dirs:{
			deploy:'deploy',
			release:'_release',
			src:'src'
		},

		pkg:grunt.file.readJSON('package.json'),

		copy:{
			toRelease:{
				files:[{
					expand:true,
					cwd:'<%= dirs.deploy %>',
					src:['**'],
					dest:'<%= dirs.release %>'
				}],
				dot:true
			}
		},

		clean:{
			allRelease:['<%= dirs.release %>/**']
		},

		watch:{
			deploy:{
				files:['<%= dirs.src %>/**'],
				tasks:['deploy']
			},

			release:{
				files:['<%= dirs.src %>/**'],
				tasks:['release']
			}
		},

		/*
		 * カスタム設定
		 * */
		useminPrepare:{
			html:'<%= dirs.deploy %>/index.html',
			options:{
				root:'<%= dirs.deploy %>/',
				dest:'<%= dirs.release %>/'
			}
		},
		usemin:{
			html:'<%= dirs.release %>/index.html'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.registerTask('deploy', []);
	grunt.registerTask('release', ['clean:allRelease', 'copy:toRelease', 'useminPrepare', 'concat:generated', 'uglify:generated', 'usemin']);
	grunt.registerTask('default', ['release']);

};
