const { join } = require("node:path")
const { rimrafSync } = require("rimraf")

rimrafSync(join(process.cwd(), "dist"))
