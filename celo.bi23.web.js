
var http = require('http');
var util = require('util');
var fs = require('fs');
var data = fs.readFileSync('celo.bi23.html', 'utf8');

http.createServer(function (request, response) {
    try {
      //
      const { headers, method, url } = request;
      let body = [];
      request.on('error', (err) => {
        console.error(err);
      }).on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.
      });
      // 发送 HTTP 头部
      // HTTP 状态值: 200 : OK
      // 内容类型: text/html
      response.writeHead(200, {'Content-Type': 'text/html'});
      // 发送响应数据
      response.end(data + '\n');
      //
      var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress || (request.connection.socket ? request.connection.socket.remoteAddress : null);
      console.log(util.format('========%s==========\n%s\n%s\n==================\n',new Date().Format("yyyy-MM-dd hh:mm:ss"),ip,JSON.stringify(request.headers)));
    } catch(e) {
        console.log('Error:', e.stack);
    }
}).listen(80);

/**
 * 扩展Date的Format函数
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @param {[type]} fmt [description]
 */
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
