"use strict";

const gulp   = require("gulp");
const dotenv = require("dotenv");

dotenv.load();

require("./auto/gulp/sass")(gulp);
require("./auto/gulp/js")(gulp);
require("./auto/gulp/html")(gulp);
require("./auto/gulp/watch")(gulp);

gulp.task("default", ["sass", "js", "html"]);
gulp.task("release", ["sass:release", "js:release", "html:release"]);
