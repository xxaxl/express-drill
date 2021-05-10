const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log('执行了')
    req.a = 1
    res.a = 2
    next()
})
app.get('/',(req,res)=>{
    console.log(req.query)
    console.log(req.a)
    console.log(res.a)
    res.send('get我响应你了')
})
app.listen(5000,(err)=>{
    if(err) console.log('失败')
    else console.log('成功')
})