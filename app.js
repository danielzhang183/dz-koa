const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  const path = ctx.path
  switch (path) {
    case '/':
      ctx.body = 'home page'
      break
    case '/foo':
      ctx.body = 'foo page'
      break
    default:
      ctx.body = '404 Not Found.'
  }
  // ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/')
})