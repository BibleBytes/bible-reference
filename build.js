import path from "node:path";
import { build } from "esbuild";
import TSConfig from "./tsconfig.json" with { type: "json" };


function createBuildSettings(options) {
	if (TSConfig.files.length > 1) {
		throw new Error("Only one entry point is supported");
	}
	const entries = [TSConfig.files[0]];
	const output  = path.join(TSConfig.compilerOptions.outDir, "index.js");
	return {
		entryPoints: entries,
		outfile: output,
		bundle: true,
		plugins: [],
		...options
	};
}


await build(createBuildSettings({
	minify: true
}));

