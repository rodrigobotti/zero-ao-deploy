const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const index = ctx => {
  ctx.body = 'Node.JS do Zero ao Deploy'
}

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}!`
}

router.get('/', index)
router.get('/hello', hello)
router.get('/hello/:name', hello)

app.use(router.routes())

const port = process.env.PORT

app.listen(port)
  .on('listening', () => console.log(`Listening on port ${port}`))
