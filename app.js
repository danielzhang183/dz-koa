const Koa = require('koa')
const Router = require('@koa/router')
const static = require('koa-static')

const path = require('path')
const app = new Koa()
const router = new Router()

app.use(
  mount('/public', static(path.join(__dirname, './public')))
)

router.get('/', ctx => {
  ctx.body = 'home page'
})

router.get('/foo', ctx => {
  ctx.body = 'foo page'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
// app.use(ctx => {
//   const path = ctx.path
//   switch (path) {
//     case '/':
//       ctx.body = 'home page'
//       break
//     case '/foo':
//       ctx.body = 'foo page'
//       break
//     default:
//       ctx.body = '404 Not Found.'
//   }
// })

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/')
})