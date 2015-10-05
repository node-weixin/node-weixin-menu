#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Menu Operations for weixin

微信菜单API和命令行工具

微信菜单API是([node-weixin-api](!https://github.com/node-weixin/node-weixin-api) 或者 [node-weixin-express](!https://github.com/node-weixin/node-weixin-express))的一个子项目。
它提供
1.菜单API共计4个(create, get, customize, remove)
2.命令行工具(wxmenu)

注:
[node-weixin-express](!https://github.com/node-weixin/node-weixin-express)是基于node-weixin-*的服务器端参考实现。
[node-weixin-api](!https://github.com/node-weixin/node-weixin-api)是基于node-weixin-*的API接口SDK。

它们都是由下列子项目组合而成:

1.[node-weixin-config](!https://github.com/node-weixin/node-weixin-config)
2.[node-weixin-auth](!https://github.com/node-weixin/node-weixin-auth)
3.[node-weixin-util](!https://github.com/node-weixin/node-weixin-util)
4.[node-weixin-request](!https://github.com/node-weixin/node-weixin-request)
5.[node-weixin-oauth](!https://github.com/node-weixin/node-weixin-oauth)
6.[node-weixin-pay](!https://github.com/node-weixin/node-weixin-pay)
7.[node-weixin-jssdk](!https://github.com/node-weixin/node-weixin-jssdk)
7.[node-weixin-menu](!https://github.com/node-weixin/node-weixin-menu)

交流QQ群: 39287176

## Install

```sh
$ npm install --save node-weixin-menu
```


## Usage

```js
var nodeWeixinMenu = require('node-weixin-menu');

nodeWeixinMenu('Rainbow');
```

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

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/node-weixin-menu.svg
[npm-url]: https://npmjs.org/package/node-weixin-menu
[travis-image]: https://travis-ci.org/node-weixin/node-weixin-menu.svg?branch=master
[travis-url]: https://travis-ci.org/node-weixin/node-weixin-menu
[daviddm-image]: https://david-dm.org/node-weixin/node-weixin-menu.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/node-weixin/node-weixin-menu
