module.exports = {
  mongodb: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/pwa-github'
  },
  mongodbSecret: { //mongodb用户和密码
    user: '',
    pass: ''
  },
  fcm: 'AAAAEP-t2b8:APA91bEa4LHm_G0eboCpyz--W39M60wOI1abbWMysvWMpv6inN9YdHywE-eLNL5CfQbQbOIXRO-fgj9mqj55O3D8DMvAuiXolj3d5lId8n8D_F3tXRvCBMzzBAfxQGzFGmGrMjdrfR3-'
}