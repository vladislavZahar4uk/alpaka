const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

function generateHtmlPlugins(templateDir) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
	return templateFiles.map(item => {
		const parts = item.split(".");
		const name = parts[0];
		const extension = parts[1];
		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
			inject: false
		});
	});
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
	entry: {
		//Common styles of indexed pages
		'main': path.resolve(__dirname, './src/scss/main/style.scss'),

		//Common styles of internal pages
		'internal': path.resolve(__dirname, './src/scss/internal/style.scss'), 

		//Common script of all pages
		'common': path.resolve(__dirname, './src/js/common.js'),

		//Scripts for individual pages
		'pages/index': path.resolve(__dirname, './src/js/pages/index.js'),
		'pages/categories': path.resolve(__dirname, './src/js/pages/categories.js'),
		'pages/product-cart': path.resolve(__dirname, './src/js/pages/product-cart.js'),

		//Common script of internal pages
		'user-area': path.resolve(__dirname, './src/js/user-area.js'),

	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "./js/[name].js"
	},
	devtool: "source-map",
	mode: "production",
	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
				extractComments: true
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				include: path.resolve(__dirname, "src/scss"),
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {}
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							url: false
						}
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							sourceMap: true,
							plugins: () => [
								require("cssnano")({
									preset: [
										"default",
										{
											discardComments: {
												removeAll: true
											}
										}
									]
								})
							]
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.html$/,
				include: path.resolve(__dirname, "src/html/includes"),
				use: ["raw-loader"]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/[name].css",
			chunkFilename: "./css/[name].css"
		}),
		new CopyWebpackPlugin([
			{
				from: "./src/fonts",
				to: "./fonts"
			},
			{
				from: "./src/favicon",
				to: "./favicon"
			},
			{
				from: "./src/img",
				to: "./img"
			}
		])
	].concat(htmlPlugins)
};

module.exports = (env, argv) => {
	if (argv.mode === "production") {
		config.plugins.push(new CleanWebpackPlugin());
	}
	return config;
};
