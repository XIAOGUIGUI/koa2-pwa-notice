const Koa = require('koa')
const mongoose = require('mongoose')
const app = new Koa()
const config = require('./config')
const middleware = require('./middleware')
middleware(app)
mongoose.Promise = Promise;
// connect mongodb
mongoose.connect(config.mongodb.url, config.mongodbSecret);
mongoose.connection.on('error', console.error);
app.listen(3001, () => {
  console.log('server is running at http://localhost:3001')
})