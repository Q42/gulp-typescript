# [gulp](http://gulpjs.com)-typescript [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-typescript.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-typescript)

> Compile TypeScript

*Issues with the output should be reported on the TypeScript [issue tracker](http://typescript.codeplex.com/workitem/list/basic).*


## Install

```
npm install --save-dev gulp-typescript
```


## Example

```js
var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('default', function () {
	gulp.src('app.ts')
		.pipe(typescript())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
