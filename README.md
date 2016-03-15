# node-weixin-menu [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Menu apis for weixin

微信菜单API和命令行工具

微信菜单API是([node-weixin-api](https://github.com/node-weixin/node-weixin-api) 或者 [node-weixin-express](https://github.com/node-weixin/node-weixin-express))的一个子项目。
它提供:

1. 菜单API共计4个(create, get, customize, remove)
2. 命令行工具(wxmenu)

 交流QQ群: 39287176

注:

 [node-weixin-express](https://github.com/node-weixin/node-weixin-express)是基于node-weixin-*的服务器端参考实现。

 [node-weixin-api](https://github.com/node-weixin/node-weixin-api)是基于node-weixin-*的API接口SDK。

 它们都是由下列子项目组合而成:

 1. [node-weixin-config](https://github.com/node-weixin/node-weixin-config)
    用于微信配置信息的校验

 2. [node-weixin-auth](https://github.com/node-weixin/node-weixin-auth)
    用于与微信服务器握手检验

 3. [node-weixin-util](https://github.com/node-weixin/node-weixin-util)
    一些常用的微信请求，加密，解密，检验的功能与处理

 4. [node-weixin-request](https://github.com/node-weixin/node-weixin-request)
    微信的各类服务的HTTP请求的抽象集合

 5. [node-weixin-oauth](https://github.com/node-weixin/node-weixin-oauth)
    微信OAuth相关的操作

 6. [node-weixin-pay](https://github.com/node-weixin/node-weixin-pay)
    微信支付的服务器接口

 7. [node-weixin-jssdk](https://github.com/node-weixin/node-weixin-jssdk)
    微信JSSDK相关的服务器接口

 8. [node-weixin-menu](https://github.com/node-weixin/node-weixin-menu)
    微信菜单相关的操作与命令

## 安装

```sh
$ npm install --save node-weixin-menu
```


## 使用方法


### 在node代码中使用

```js
var nodeWeixinMenu = require('node-weixin-menu');

var app = {
  id: process.env.APP_ID,
  secret: process.env.APP_SECRET,
  token: process.env.APP_TOKEN
};

var auth = require("node-weixin-auth");
var config = require("node-weixin-config");
config.app.init(app);


  var menu = {
      "button": [
        {
          "type": "view",
          "name": "我要下单",
          "url": "http://www.soso.com/"
        },
        {
          "name": "菜单",
          "sub_button": [
            {
              "type": "view",
              "name": "搜索",
              "url": "http://www.soso.com/"
            },
            {
              "type": "view",
              "name": "视频",
              "url": "http://v.qq.com/"
            },
            {
              "type": "click",
              "name": "赞一下我们",
              "key": "V1001_GOOD"
            }
          ]
        }
      ]
    };

nodeWeixinMenu.create(app, menu, function (error, data) {
  //error === true
  //data.errcode === 0
  //data.errmsg === 'ok'
});

nodeWeixinMenu.get(app, function (error, data) {
  //error === true
  //typeof data.menu
  //typeof data.menu.button
});

nodeWeixinMenu.customize(app, function (error, data) {
  //error === true
  //data.is_menu_open === 1
  //data.selfmenu_info
  //data.selfmenu_info.button
});

nodeWeixinMenu.remove(app, function (error, data) {
  //error === true
  //data.errcode
  //data.errmsg
});

```


### 在node命令行里使用

```sh
$ npm install --global node-weixin-menu

$ wxmenu --help

$#获取菜单
$ wxmenu get --id WX_ID --secret WX_SECRET --token WX_TOKEN    
$#获取自定义菜单
$ wxmenu customize --id WX_ID --secret WX_SECRET --token WX_TOKEN
$#删除菜单
$ wxmenu remove --id WX_ID --secret WX_SECRET --token WX_TOKEN
$#创建菜单
$ wxmenu create --id WX_ID --secret WX_SECRET --token WX_TOKEN --menu menu.json
```
注：使用时需要将WX_ID, WX_SECRET, WX_TOKEN,替换成你自己的真实参数

## License

Apache-2.0 © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/node-weixin-menu.svg
[npm-url]: https://npmjs.org/package/node-weixin-menu
[travis-image]: https://travis-ci.org/node-weixin/node-weixin-menu.svg?branch=master
[travis-url]: https://travis-ci.org/node-weixin/node-weixin-menu
[daviddm-image]: https://david-dm.org/node-weixin/node-weixin-menu.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/node-weixin/node-weixin-menu
[coveralls-image]: https://coveralls.io/repos/node-weixin/node-weixin-menu/badge.svg
[coveralls-url]: https://coveralls.io/r/node-weixin/node-weixin-menu
