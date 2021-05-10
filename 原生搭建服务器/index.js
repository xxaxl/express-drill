// 引入http模块
const http = require('http')
// 用来将查询字符串转为对象
const queryString = require('querystring')
// 创建服务器对象
const server = http.createServer((req,res)=>{
    // 获取到传递过来的查询字符串
    const str = req.url
    // 将获取到的查询字符串用?切割为数组
    const arr = str.split('?')
    // 将数组中的下标为1的元素转为对象
    const re = queryString.parse(arr[1])
    console.log(re)
    // 解决响应中文乱码问题
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('我响应你了')
})
// 开启服务器
server.listen(5000,(err)=>{
    if(err) console.log('失败')
    else console.log('成功')
})