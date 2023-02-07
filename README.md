# react18-dev-template

模板项目

# 在线文档

## 设计方案

#### &emsp;DataV: [https://datav.aliyun.com/portal](https://datav.aliyun.com/portal "doc")<br>

#### &emsp;设计文档: [https://apexedu.yuque.com/oxinyw/am1hm8/xq0wv7](https://apexedu.yuque.com/oxinyw/am1hm8/xq0wv7 "doc")<br>

#### &emsp;产品规划: [https://apexedu.yuque.com/oxinyw/am1hm8/ce2mdo](https://apexedu.yuque.com/oxinyw/am1hm8/ce2mdo "doc")<br>

# 使用说明

## &emsp; 开发

#### &emsp; &emsp; yarn start

## &emsp; 打包

#### &emsp; &emsp; yarn build

## &emsp; 启动静态资源服务

#### &emsp; &emsp; yarn serve

## &emsp; 部署

#### &emsp; &emsp; yarn build （可能时间较长，请耐心等待）

# 目录介绍

-dist 打包后的文件
-src js 源码，主要在这里开发
-----assets 静态资源 png jpg 等等
-----components 自己定义的组件
-----layouts 布局组件
-----mock mock 模拟数据，后端未提供接口时使用
-----pages 页面组件
-----recoil 全局状态管理
-----services 所有的网络请求 API
-----utils 工具类例如 发送网络请求
-----App.js 顶级组件
-----bootstrap.js 入口中间处理
-----global.less 全局样式
-----index.js 顶级入口
-static 不需要 webpack 转换的静态资源，例如 favicon.ico，注意 你项目中需要用到的图片应该放到 src/assets 中，而不是这里
-template 单页应用的入口 html
-webpack.config.js webpack 配置文件，大部分你需要改动的配置都在这里

# 添加依赖

添加依赖

yarn add antd

添加 dev 依赖

yarn add typescript -D

# 保存不会自动格式化代码？

查看 xxx/.vscode 文件夹是否存在，不存在请找回，或者自己修改 vscode ,打开设置搜索 save，勾选 auto format

# 浏览器中区分生产/开发环境

//它不是全局变量，不能在浏览器 console 中使用，只能在项目的 src/\*.js 中才能获取到

console.info(process.env.NODE_ENV);

# 维护记录(零散记录 不一定准确)

lerna add webpack --dev

lerna add webpack-cli --dev

lerna add webpack-dev-server --dev

lerna add serve --dev

lerna add html-webpack-plugin --dev

lerna add @babel/core --dev

lerna add @babel/preset-react --dev

lerna add babel-loader --dev

lerna add less --dev

lerna add less-loader --dev

lerna add css-loader --dev

lerna add style-loader --dev

lerna add postcss-loader --dev

lerna add cssnano --dev

lerna add eslint --dev

lerna add eslint-plugin-react --dev

lerna add eslint-plugin-react-hooks@latest --dev

lerna add prettier --dev

lerna add eslint-config-prettier --dev

lerna add eslint-plugin-prettier --dev

lerna add eslint-plugin-jsx-a11y --dev

lerna add eslint-config-airbnb --dev

lerna add eslint-plugin-simple-import-sort --dev

lerna add eslint-plugin-import --dev

lerna add eslint-config-react-app --dev

//使用 webpack 的配置 主要解决路径别名的问题(@ -> ./src) . 就不使用这个了 -> lerna add eslint-import-resolver-alias --dev  
lerna add eslint-import-resolver-webpack --dev

lerna add clean-webpack-plugin --dev //清理 dist 文件

lerna add copy-webpack-plugin --dev //复制静态文件 可以把 static 打包到 dist 中去

lerna add cross-env --dev //环境变量 兼容 windows,mac,linux

lerna add terser-webpack-plugin --dev //压缩 js ，webpack 自带插件 但是加额外配置时需要安装，不然会有警告

lerna add webpack-bundle-analyzer --dev //分析依赖大小

lerna add mini-css-extract-plugin --dev //单独打包 css

lerna add css-minimizer-webpack-plugin --dev //压缩 css

lerna add @babel/plugin-transform-regenerator --dev //转换生成器 不用此插件了，手动 import

lerna add react

lerna add react-dom

lerna add react-router-dom

lerna add mockjs

lerna add axios

lerna add react-error-boundaries //报错时界面显示组件堆栈信息 ，可用可不用

lerna add classnames

//引入一个图表 639k 2 个 640k 单独打包 644k 未压缩版本

# designer

lerna add antd packages/designer

lerna add @ant-design/icons packages/designer

lerna add clipboard packages/designer

lerna add html2canvas packages/designer

lerna add immer packages/designer

lerna add lodash-es packages/designer

lerna add monaco-editor packages/designer

lerna add react-color packages/designer

lerna add react-sortablejs packages/designer

lerna add sortablejs packages/designer

lerna add recoil packages/designer

lerna add nanoid packages/designer //生成全局唯一 id

lerna add monaco-editor-webpack-plugin packages/designer --dev
