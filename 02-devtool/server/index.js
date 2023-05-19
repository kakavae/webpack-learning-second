/* 启动一个本地服务器 */
const http = require('http')

const app = http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.end('hello node')
  }
})

app.listen(4001, 'localhost', () => {
  console.log('http://localhost:4001')
})