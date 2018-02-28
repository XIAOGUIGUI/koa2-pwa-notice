const ip = require('ip')
const bodyParser = require('koa-bodyparser')
const log = require('./log')
const httpError = require('./http-error')
const miSend = require('./mi-send')
module.exports = app => {
  app.use(httpError())
  app.use(log({
    env: app.env,
    projectName: 'koa2-pwa-notice',
    appLogLevel: 'debug',
    dir: 'logs',
    serverIp: ip.address()
  }))
  app.use(bodyParser())
  app.use(miSend())
}