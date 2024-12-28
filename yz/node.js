const express = require('express');
const app = express();
const path = require('path');

// 假设文件存在于 public 文件夹中
const filePath = path.join(__dirname, 'files', 'example-file.pdf');

// 提供下载文件的路由
app.get('/download-file', (req, res) => {
  const password = req.query.password; // 从查询字符串获取密码
  
  // 假设正确密码为 "123456"
  if (password === '123456') {
    // 密码正确，提供文件下载
    res.download(filePath);
  } else {
    // 密码错误，返回 403 错误
    res.status(403).send('密码错误');
  }
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
