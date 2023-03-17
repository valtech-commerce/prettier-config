//--------------------------------------------------------
//-- Calculate configurations
//--------------------------------------------------------
const path = require("node:path");
const { fsSync } = require("@valtech-commerce/fs");
const sortJson = require("sort-json");

const root = path.join(__dirname, "..", "..");
const packageConfig = fsSync.readJson(path.join(root, "package.json"));

Object.entries(packageConfig.exports)
	.filter(([name]) => name !== ".")
	.forEach(async ([name, file]) => {
		const id = String(name.slice(2)).split("/").join("-");

		const rawConfig = require(path.join(root, ...file.split("/")));

		const config = sortJson(rawConfig, { depth: 100 });

		fsSync.writeJson(path.join(root, "test", "feature", "fixtures", "config", `${id}.json`), config, { space: 2 });
	});
