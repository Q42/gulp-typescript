'use strict';
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var ts = require('typestring');

module.exports = function (name) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-typescript', 'Streaming not supported'));
			return cb();
		}

		try {
			file.contents = new Buffer(ts.compile(file.contents.toString()));
			file.path = gutil.replaceExtension(file.path, '.js');
		} catch (errorList) {
			errorList.forEach(function(err) {

			this.emit('error', new gutil.PluginError('gulp-typescript', {
					message: err.text(),
					fileName: file.path,
					lineNumber: err.line()
				}));
			}.bind(this));
		}

		this.push(file);
		cb();
	});
};
