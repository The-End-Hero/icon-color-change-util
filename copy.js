const fs = require('fs-extra');
fs.copySync('./dist/index.js', './docs/index.js');
