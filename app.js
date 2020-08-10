const express = require('express')
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const Ding = new Vue({
    template: '<div><h1>helo world</h1> <div>第一个renderer</div></div>'
})
const app = express()
app.get('/', (req, res) => {
    // res.send('用GET请求访问了3000端口')
    renderer.renderToString(Ding, (err, html) => {

        if (err) {
            return res.statusMessage(500).end('运行错误')
        }
        res.send(`<!DOCTYPE html>
        <html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <title> Vue2.0 ssr渲染页面</title>
            </head>
            <body>
            ${html}
            </body>
        </html>`)
    })
})
app.listen(8080, err => {
    console.log('端口开启')
})