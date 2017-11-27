const path = require('path');

module.exports = {
	source: path.join(__dirname, 'src'),
	sourcePath: '/js/',
	sourcePathCSS: '/css/',
	sourcePathTemplate: '/hbs/',
	sourcePathName: 'entry.js',
	build: path.join(__dirname, 'prod'),
	buildPath: '/js/',
	buildPathName: 'app.js'
};
