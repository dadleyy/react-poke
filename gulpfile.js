"use strict";

const gulp   = require("gulp");
const dotenv = require("dotenv");

dotenv.load();

require("./auto/gulp/sass")(gulp);
require("./auto/gulp/js")(gulp);
require("./auto/gulp/html")(gulp);
require("./auto/gulp/watch")(gulp);
require("./auto/gulp/fonts")(gulp);

gulp.task("default", ["sass", "js", "html", "fonts"]);
gulp.task("release", ["sass:release", "js:release", "html:release", "fonts"]);
