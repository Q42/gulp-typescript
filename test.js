'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var ts = require('./index');

it('should compile Typescript', function (cb) {
	var stream = ts();

	stream.on('data', function (file) {
		assert.equal(file.relative, 'fixture.js');
		assert(/var Foo/.test(file.contents.toString()));
		cb();
	});

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/fixture.ts',
		contents: new Buffer('class Foo { public bar = 2; }')
	}));
});
