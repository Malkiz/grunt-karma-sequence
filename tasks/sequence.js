module.exports = function(grunt) {
	grunt.registerMultiTask('karma-sequence', 'run karma with multiple browsers sequentially', function(){
		var _this = this;
		var browsers = _this.data.browsers;

		if (typeof browsers == 'object' && browsers.length > 0) {
			browsers.forEach(function (browser) {
				var clonedData = clone(_this.data);
				clonedData.browsers = [browser];
				clonedData.singleRun = true;

				var taskName = 'karma';
				var name = _this.target + '-sequence-' + browser;
				grunt.config(taskName + '.' + name, clonedData);
				grunt.task.run(taskName + ':' + name);
			});
		}
	});

	function clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}
}