// 引入express包
const express = require('express')
const path = require('path')

// 创建应用对象
const app = express()
app.use(express.urlencoded({extended:true}))
// 处理请求
app.get('/',(req,res)=>{
    console.log(req.query)
    // res.send('get我响应你了')
    // res.download('1.jpg')
    // res.download(__dirname + '/1.jpg')
    // res.sendFile(__dirname + '/1.jpg')
    // res.sendFile(path.resolve(__dirname , '../1.jpg'))
    res.sendFile(path.resolve(__dirname , '../../数组去重/数组方法2.html'))
    // res.send('1')
    // res.redirect('http://www.baidu.com')
    // res.set('aaa','123')
    console.log(res.get('X-Powered-By'))
    // res.send('1')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('post响应你了')
})
//开启服务器
app.listen(5000,(err)=>{
    if(err) console.log('失败')
    else console.log('成功')
})