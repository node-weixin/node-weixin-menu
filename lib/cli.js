// #!/usr/bin/env node
//
// 'use strict';
// var meow = require('meow');
// var nodeWeixinMenu = require('./');
// var config = require('node-weixin-config');
// var path = require('path');
// var fs = require('fs');
// var cli = meow({
//   help: [
//     'Usage',
//     '  wxmenu create --id appid --secret appsecret --token apptoken --menu filename.json',
//     '  wxmenu (get || remove || customize) --id appid --secret appsecret --token apptoken',
//     '',
//     'Example',
//     '  wxmenu create --id "wx111" --secret "wxSecret" --token "wxtoken" --menu filename.json',
//     '  wxmenu get --id "wx111" --secret "wxSecret" --token "wxtoken"'
//   ].join('\n')
// });
//
// config.app.init(cli.flags);
// var app = cli.flags;
//
//
// var command = cli.input[0];
//
// switch (command) {
//   case 'create':
//     var menu = cli.flags.menu;
//     var filename = path.resolve(menu);
//     if (fs.existsSync(filename)) {
//       var json = JSON.parse(String(fs.readFileSync(menu)));
//       nodeWeixinMenu.create(app, json, function (error, data) {
//         if (error) {
//           console.log('Error occur: ' + data);
//         } else {
//           switch (data.errcode) {
//             case 0:
//             case '0':
//               console.info('Successfully created a menu!');
//               console.info(JSON.stringify(data));
//               break;
//             default:
//               console.info('Menu creation failed!');
//               console.info(data.errmsg);
//               break;
//           }
//         }
//       });
//     } else {
//       console.error('File: ' + menu + ' not exists');
//     }
//     break;
//   case 'get':
//   case 'remove':
//   case 'customize':
//     nodeWeixinMenu[command](app, function (error, json) {
//       if (error) {
//         console.log('Error occur: ' + JSON.stringify(json));
//       } else {
//         console.info('Action ' + command + ' succeeded.');
//         console.info(JSON.stringify(json));
//       }
//     });
//     break;
//
// }
