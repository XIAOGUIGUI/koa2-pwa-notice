const User = require('../models/user');
module.exports = {
  createNewUser: async(id) => {
    let user = new User()
    user.user_id = id
    return user.save()
  },
  deleteOneUser: async(id) => {
    return User.remove({user_id: id})
  },
  findAllUser: async() => {
    return User.find({})
  },
  register: async(name, pwd) => {
    let data
    if (name == 'ikcamp' && pwd == '123456') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data
  }
}