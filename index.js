const Koa = require('koa')
const Router = require('koa-router')

const connection = require('./models').sequelize

const app = new Koa()
const router = new Router()

const index = ctx => 
  connection
    .authenticate()
    .then(() => (ctx.body = 'Node.JS do Zero ao Deploy: conectado com sucesso'))
    .catch(error => {
      ctx.status = 500
      ctx.body = `Node.JS do zero ao deploy: erro ${error.message}`
    })

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}!`
}

router.get('/', index)
router.get('/hello', hello)
router.get('/hello/:name', hello)

app.use(router.routes())

const port = process.env.PORT || 3000

app.listen(port)
  .on('listening', () => console.log(`Listening on port ${port}`))
