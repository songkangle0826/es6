# eggframe



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org




### 安装框架
npm install egg-init -g
### 创建项目
egg-init eggframe --type simple
### 启动项目
npm run dev
### 连接数据库
    ### 安装mongoose
    npm install egg-mongoose --save
    ### 启用插件



// 处理跨域
# 下载 egg-cors 包
npm i egg-cors --save

步骤二：
# 在plugin.js中设置开启cors
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

步骤三：
# 在config.{env}.js中配置，注意配置覆盖的问题
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: '*'
};

config.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'

