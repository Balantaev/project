module.exports = function (grunt) {
// Grunt configuration
grunt.initConfig({
less: {
	app: {
		files: {
		"css/styles.css": "less/main.less"}
		}
},
watch: {
	styles: {
		files: ["less/**/*.less"],
		tasks: ["less:app"],
		options: {spawn: false}
	}
}
});
// Load plugins
grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-watch");
};