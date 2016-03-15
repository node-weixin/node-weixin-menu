'use strict';
/* eslint camelcase: [2, {properties: "never"}] */

var assert = require('assert');
var nodeWeixinMenu = require('../lib/index');

var app = {
  id: process.env.APP_ID,
  secret: process.env.APP_SECRET,
  token: process.env.APP_TOKEN
};
var config = require('node-weixin-config');
config.app.init(app);

describe('node-weixin-menu node module', function () {
  it('should be able to create menu', function (done) {
    var menu = {
      button: [{
        type: 'view',
        name: '我要下单',
        url: 'http://www.soso.com/'
      }, {
        name: '菜单',
        sub_button: [{
          type: 'view',
          name: '搜索',
          url: 'http://www.soso.com/'
        }, {
          type: 'view',
          name: '视频',
          url: 'http://v.qq.com/'
        }, {
          type: 'click',
          name: '赞一下我们',
          key: 'V1001_GOOD'
        }]
      }]
    };
    nodeWeixinMenu.create(app, menu, function (error, data) {
      assert.equal(true, !error);
      assert.equal(true, data.errcode === 0);
      assert.equal(true, data.errmsg === 'ok');
      done();
    });
  });

  it('should be able to get the menu', function (done) {
    nodeWeixinMenu.get(app, function (error, data) {
      assert.equal(true, !error);
      assert.equal(true, typeof data.menu === 'object');
      assert.equal(true, typeof data.menu.button === 'object');
      done();
    });
  });

  it('should be able to get custom menu', function (done) {
    nodeWeixinMenu.customize(app, function (error, data) {
      assert.equal(true, !error);
      assert.equal(true, data.is_menu_open === 1);
      assert.equal(true, typeof data.selfmenu_info === 'object');
      assert.equal(true, typeof data.selfmenu_info.button === 'object');
      done();
    });
  });

  it('should be able to remove the menu', function (done) {
    nodeWeixinMenu.remove(app, function (error, data) {
      assert.equal(true, !error);
      assert.equal(true, data.errcode === 0);
      assert.equal(true, data.errmsg === 'ok');
      done();
    });
  });

  it('should be able to create menu', function (done) {
    var menu = {
      button: [{
        type: 'view',
        name: '我要下单',
        url: 'http://www.soso.com/'
      }, {
        name: '菜单',
        sub_button: [{
          type: 'view',
          name: '搜索',
          url: 'http://www.soso.com/'
        }, {
          type: 'view',
          name: '视频',
          url: 'http://v.qq.com/'
        }, {
          type: 'click',
          name: '赞一下我们',
          key: 'V1001_GOOD'
        }]
      }]
    };
    nodeWeixinMenu.create(app, menu, function (error, data) {
      assert.equal(true, !error);
      assert.equal(true, data.errcode === 0);
      assert.equal(true, data.errmsg === 'ok');
      done();
    });
  });
});
