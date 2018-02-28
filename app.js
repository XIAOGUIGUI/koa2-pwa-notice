const Koa = require('koa')

const app = new Koa()
const githubRouter = require('./router/github')
const middleware = require('./middleware')
middleware(app)
// 考虑自动加载路由
githubRouter(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})