const userService = require('../service/user')
exports.login = async(ctx, next) => {
  ctx.response.body =
    `
    <form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
      <br/>
      <input name="password" type="text" placeholder="请输入密码：123456"/>
      <br/> 
      <button>GoGoGo</button>
    </form>
  `
}
exports.login.__name__ = ''
// 用户注册
exports.register = async(ctx, next) => {
  let { name, password } = ctx.request.body
  let data = await userService.register(name, password)
  ctx.response.body = data
}
exports.register.__method__ = 'post'

exports.subscribe = async(ctx, next) => {
  let { id } = ctx.request.body
  let data = await userService.createNewUser(id).catch(err => {
    ctx.log.error(err.message);
    ctx.response.body = {
      code: 1,
      msg: err.message
    }
  })
  ctx.response.body = {
    code: 0,
    msg: ''
  }
}
exports.subscribe.__method__ = 'post'
exports.unsubscribe = async(ctx, next) => {
  let { id } = ctx.request.body
  let data = await userService.deleteOneUser(id).catch(err => {
    ctx.log.error(err.message);
    ctx.response.body = {
      code: 1,
      msg: err.message
    }
  })
  ctx.response.body = {
    code: 0,
    msg: ''
  }
}
exports.unsubscribe.__method__ = 'post'