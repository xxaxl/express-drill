const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log(req.params)
    res.send('get我响应你了')
})
app.get('/getUsers/:page?/:pageUser?',(req,res)=>{
    console.log(req.params)
    res.send('get路由')
})
app.post('/getUsers/:id?',(req,res)=>{
    console.log(req.params)
    res.send('post路由')
})
app.listen(5000,(err)=>{
    if(err) console.log('失败')
    else console.log('成功')
})