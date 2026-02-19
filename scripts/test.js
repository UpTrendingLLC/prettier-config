#!/usr/bin/env node
"use strict";

const prettier = require("prettier");
const config = require("../lib/index.js");

async function run() {
	let passed = 0;
	let failed = 0;

	function assert(condition, message) {
		if (condition) {
			console.log(`  ✓ ${message}`);
			passed++;
		} else {
			console.error(`  ✗ ${message}`);
			failed++;
		}
	}

	// 1. Config shape
	console.log("\nConfig shape:");
	assert(typeof config === "object" && config !== null, "config is an object");
	assert(config.useTabs === true, "useTabs is true");
	assert(config.printWidth === 120, "printWidth is 120");
	assert(Array.isArray(config.plugins), "plugins is an array");

	// 2. Format a JS snippet
	console.log("\nJS formatting:");
	const jsResult = await prettier.format(
		'const x = {a:1,b:2};\nconst fn = (x) => x+1;\n',
		{ ...config, filepath: "test.js" }
	);
	assert(typeof jsResult === "string" && jsResult.length > 0, "formats JS without error");
	assert(!jsResult.includes("  "), "uses tabs, not spaces (no double-space indent)");

	// 3. Format a PHP snippet
	console.log("\nPHP formatting:");
	const phpResult = await prettier.format(
		'<?php\nfunction hello($name){return "Hello ".$name;}\n',
		{ ...config, filepath: "test.php" }
	);
	assert(typeof phpResult === "string" && phpResult.length > 0, "formats PHP without error");

	// 4. Check passes on already-formatted JS
	console.log("\nPrettier check:");
	const alreadyFormatted = await prettier.format(jsResult, {
		...config,
		filepath: "test.js",
	});
	assert(alreadyFormatted === jsResult, "re-formatting is idempotent");

	console.log(`\n${passed} passed, ${failed} failed\n`);
	if (failed > 0) process.exit(1);
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
