import path from "path";
import { build } from "esbuild";
import TSConfig from "./tsconfig.json" with { type: "json" };


function createBuildSettings(options) {
	if (TSConfig.files.length > 1) {
		throw new Error("Only one entry point is supported");
	}
	let entries = [TSConfig.files[0].replace("../", "./")];
	let output  = path.join(TSConfig.compilerOptions.outDir.replace("../", "./"), "index.js");
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

