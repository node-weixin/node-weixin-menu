'use strict';
var request = require("node-weixin-request");
var util = require("node-weixin-util");

var baseUrl = 'https://api.weixin.qq.com/cgi-bin/menu/';
var customUrl = 'https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info';

module.exports = {
  create: function (app, auth, data, cb) {
    auth.determine(app, function() {
      var url = baseUrl + 'create' + '?' + util.toParam({
          access_token: auth.accessToken
        });
      request.json(url, data, cb);
    });
  },
  remove: function(app, auth, cb) {
    auth.determine(app, function() {
      var url = baseUrl + 'delete' + '?' + util.toParam({
          access_token: auth.accessToken
        });
      request.json(url, null, cb);
    });
  },
  get: function(app, auth, cb) {
    auth.determine(app, function() {
      var url = baseUrl + 'get' + '?' + util.toParam({
          access_token: auth.accessToken
        });
      request.json(url, null, cb);
    });
  },

  customize: function(app, auth, cb) {
    auth.determine(app, function() {
      var url = customUrl + '?' + util.toParam({
          access_token: auth.accessToken
        });
      request.json(url, null, cb);
    });
  }
};
