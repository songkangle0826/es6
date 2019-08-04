/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
      /**
       * built-in config
       * @type {Egg.EggAppConfig}
     * **/
    const config = exports = {};
    
        // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1564206603865_1696';
    
    // add your middleware config here
    config.middleware = [];
    
        // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
      
    // 配置mongoose mongoose是node里面操作mongodb数据库的一个模块
    // 它可以以对象的像是操作数据库
    config.mongoose = {
        client:{
            url: 'mongodb://127.0.0.1/eggframe',
            options: {},  // 一定要配置这个参数
        }
    };
  
    // csrf 跨站请求伪造
    config.security ={
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['*']
    }
    
    
    
    
    config.cors = {
        credentials: true,   // 接受和返回cookie,和前端一起配合使用
        // origin: '*',
        // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
    
    return {
        ...config,
        ...userConfig,
    };
};
