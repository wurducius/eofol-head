import { join } from "node:path"
import { rimrafSync } from "rimraf"

rimrafSync(join(process.cwd(), "dist"))
