相关说明：
1.构建工具使用webpack打包，入口文件为dev下的index.js，文件都在index.js中import
2.开发环境集成了ES6和Sass
3.使用px2rem进行移动端适配，请在js中初始化根字体大小
4.本地服务器实现热更新，无需刷新
5.分离了jq等大文件，利用缓存加快加载时间
6.html，css，js，图片均会进行压缩
7.图片如需转换base64请在webpack中设置limit

相关命令：
1.npm run dev，开启本地服务器调试，需要在构建时拉取mock，否则无游戏数据
2.npm run build，打包文件，打包完成后可上传dist文件夹到测试机测试

关于mock：
1.mock文件夹下的mockurl文件为进游戏数据，可自行修改
2.mock文件夹下的mockdata文件模拟服务器接口返回数据，可自行修改想要的返回格式及数据
3.需要mock服务器接口时，ajax请求http://localhost:8080/mockdata/[interface]，[interface]为需要模拟的接口，返回jsonp
