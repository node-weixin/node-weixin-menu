'use strict';
var request = require("node-weixin-request");
var util = require("node-weixin-util");
var auth = require('node-weixin-auth');
var settings = require('node-weixin-settings');

var baseUrl = 'https://api.weixin.qq.com/cgi-bin/menu/';
var customUrl = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';

module.exports = {
  _send: function(url, app, data, cb) {
    auth.determine(app, function() {
      settings.get(app.id, 'auth', function(authData) {
        var newUrl = url + util.toParam({
            access_token: authData.accessToken
          });
        request.json(newUrl, data, cb);
      });
    });
  },
  create: function (app, data, cb) {
    this._send(baseUrl + 'create' + '?', app, data, cb);
  },
  remove: function(app, cb) {
    this._send(baseUrl + 'delete' + '?', app, null, cb);
  },
  get: function(app, cb) {
    this._send(baseUrl + 'get' + '?', app, null, cb);
  },

  customize: function(app, cb) {
    this._send(customUrl + '?', app, null, cb);
  }
};
