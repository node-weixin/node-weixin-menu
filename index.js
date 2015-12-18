'use strict';
var request = require("node-weixin-request");
var util = require("node-weixin-util");
var auth = require('node-weixin-auth');
var settings = require('node-weixin-settings');

var baseUrl = 'https://api.weixin.qq.com/cgi-bin/menu/';
var customUrl = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';

module.exports = {
  create: function (app, data, cb) {
    auth.determine(app, function() {
      var authData = settings.get(app.id, 'auth');
      var url = baseUrl + 'create' + '?' + util.toParam({
          access_token: authData.accessToken
        });
      request.json(url, data, cb);
    });
  },
  remove: function(app, cb) {
    auth.determine(app, function() {
      var authData = settings.get(app.id, 'auth');
      var url = baseUrl + 'delete' + '?' + util.toParam({
          access_token: authData.accessToken
        });
      request.json(url, null, cb);
    });
  },
  get: function(app, cb) {
    auth.determine(app, function() {
      var authData = settings.get(app.id, 'auth');
      var url = baseUrl + 'get' + '?' + util.toParam({
          access_token: authData.accessToken
        });
      request.json(url, null, cb);
    });
  },

  customize: function(app, cb) {
    auth.determine(app, function() {
      var authData = settings.get(app.id, 'auth');
      var url = customUrl + '?' + util.toParam({
          access_token: authData.accessToken
        });
      request.json(url, null, cb);
    });
  }
};
