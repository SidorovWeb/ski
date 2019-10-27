let critical = require('critical').stream;
let log = require('fancy-log');

module.exports = function () {
	$.gulp.task('html-inline-critical', function () {
		return $.gulp.src('./build/**/*.html', {
				base: './build/'
			})
			.pipe(
				critical({
					base: './build/',
					inline: true,
					css: [
						'./build/static/css/styles.min.css'
					],
					dimensions: [{
						height: 900,
						width: 1300
					}],
					minify: true,
					timeout: 120000,
					// styleTarget: './dev/critical/critical',
					// ignore: ['@font-face']
				})
			)
			.on('error', function (err) {
				gutil.log(gutil.colors.red(err.message));
			})
			.pipe($.gulp.dest('./dev/critical'));
	});
};