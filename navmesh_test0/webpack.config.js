const path = require( "path" );

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		main: "./src/index.ts",
	},
	output: {
		path: path.resolve( __dirname, "./build/js" ),
		filename: "index.js",
	},
	resolve: {
		extensions: [ ".ts", ".tsx", ".js" ],
		fallback: {
			fs: false,
			browser: false,
		},
	},
	module: {
		rules: [ {
			test: /\.ts$/,
			loader: "ts-loader",
		} ]
	},
	/*
	externals: [
		{ "babylonjs-materials": "Materials" },
		{ "babylonjs-loaders": "Loaders" },
		{ "babylonjs-post-process": "PostProcess" },
		{ "babylonjs-gui": "GUI" },
		{ "meshwriter": "MeshWriter" },
	],
	*/
};


