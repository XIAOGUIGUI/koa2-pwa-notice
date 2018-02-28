const userService = require('../service/user')
const notifyService = require('../service/notify')
exports.controllerConfig = {
  __name__: ''
}
exports.index = async(ctx, next) => {
  ctx.response.body = `<h1>index page</h1>`
}
exports.index.__name__ = ''
exports.notifyUsers = async(ctx, next) => {
  let users = await userService.findAllUser().catch(err => {
    ctx.log.error(err.message);
    ctx.throw(500, '服务器内部错误')
  })
  await notifyService.gitUpdata(users).catch(err => {
    console.log(err)
    ctx.log.error(err);
    ctx.throw(500, '发送失败')
  })
  ctx.response.body = {
    code: 0,
    msg: '发送成功'
  }
}
exports.notifyUsers.__method__ = 'post'
exports.notifyUsers.__name__ = 'github/notifyUpdata'
