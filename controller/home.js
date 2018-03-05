exports.index = async(ctx, next) => {
  console.log(ctx.request.query)
  console.log(ctx.request.querystring)
  ctx.response.body = '<h1>HOME page</h1>'
}
exports.index.__name__ = ''
exports.homeParams = async(ctx, next) => {
  console.log(ctx.params)
  ctx.response.body = `<h1>HOME page /${ctx.params.id}/${ctx.params.name}</h1>`
}
exports.homeParams.__name__ = ''
exports.homeParams.__regular__ = '/:id/:name'
