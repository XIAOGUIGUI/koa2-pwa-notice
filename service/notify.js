
const gcm = require('node-gcm')
const _ = require('lodash')
const config = require('../config')
module.exports = {
  gitUpdata: async(users) => {
    let user_ids = _.map(users, 'user_id')
    let sender = new gcm.Sender(config.fcm);
    // Prepare a message to be sent
    let message = new gcm.Message({
        notification: {
          title: "Hello, World",
          icon: "ic_launcher",
          body: "Click to see the latest commit"
        }
    })
    return sender.send(message, { registrationTokens: user_ids })
  }
}