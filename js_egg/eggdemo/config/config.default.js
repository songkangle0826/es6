exports.keys = 'skl';  // 用来加密cookie的防止修改cookie
exports.middleware = [
    'time',
    'ua',
];
exports.time = {
    prefix: '本次请求一共花了'
}
exports.ua = {
    uas: [/Chrome/,/Firefox/]
}

exports.view = {
    // 默认的渲染引擎
    defaultViewEngine: 'ejs',
    // 设置针对什么类型的文件用什么模板引擎来渲染
    mapping:{
        // 如果渲染的是.ejs的模板文件的话,用ejs模板引擎来进行渲染
        '.ejs': 'ejs',
    }
}


exports.news = {
    url: 'https://news.baidu.com/'
}