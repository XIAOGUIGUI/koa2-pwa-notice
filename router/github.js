const router = require('koa-router')()
const GithubController = require('../controller/github')
module.exports = (app) => {
  router.get( '/', GithubController.index ) 
  router.get('/home', GithubController.home)
  router.get('/home/:id/:name', GithubController.homeParams)
  router.get('/user', GithubController.login)
  router.post('/user/register', GithubController.register)
  
  app.use(router.routes())
    .use(router.allowedMethods())
}