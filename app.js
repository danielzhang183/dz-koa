const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/')
})