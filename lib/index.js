'use strict';
var request = require('node-weixin-request');
var util = require('node-weixin-util');
var auth = require('node-weixin-auth');

var baseUrl = 'https://api.weixin.qq.com/cgi-bin/menu/';
var customUrl = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';

module.exports = {
  _send: function (settings, app, url, data, cb) {
    auth.determine(settings, app, function () {
      settings.get(app.id, 'auth', function (authData) {
        var newUrl = url + util.toParam({
          /* eslint camelcase: [2, {properties: "never"}] */
          access_token: authData.accessToken
        });
        request.json(newUrl, data, cb);
      });
    });
  },
  create: function (settings, app, data, cb) {
    this._send(settings, app, baseUrl + 'create?', data, cb);
  },
  remove: function (settings, app, cb) {
    this._send(settings, app, baseUrl + 'delete?', null, cb);
  },
  get: function (settings, app, cb) {
    this._send(settings, app, baseUrl + 'get?', null, cb);
  },

  customize: function (settings, app, cb) {
    this._send(settings, app, customUrl + '?', null, cb);
  }
};
