

module.exports = {
	//入口
	entry: __dirname + '/app/index.js',
	//出口
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	//打包后的调试(浏览器内的错误提示更加方便)
	devtool: 'eval-source-map',
	//本地服务，需要单独安装webpack-dev-server
	devServer: {
		contentBase: './dist',
		port: '8081', 
		historyApiFallback: true, //
		inline: true //当源文件更新时，实时刷新
	},
	//环境 开发环境/线上环境
	mode: 'development',
	module: {
		rules: [
			{
				test: /.\js$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: '/node_modules/'
			}
		]
	},
	//插件
	plugins: [

	]
}