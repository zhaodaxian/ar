// 读取系统中的文件
var fs = require('fs');
// http用来实现一个静态服务器文件
var http = require('http');

// 创建一个http服务器
http.createServer((req, res) => {
    // 然后使用fs根据访问的链接，来提供给访问者对应的文件
    fs.readFile(__dirname + req.url, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8888)
//监听8888端口
