var NC = require('../src/services/nc')
var config = require('config')
var global = config.get('global')
var expec = require('chai').expect
describe('JDCloud.CallStyle', function () {
  var nc = new NC({
    credentials: {
      accessKeyId: global.accessKeyId,
      secretAccessKey: global.secretAccessKey
    }
  })
  it('use Promise style', function () {
    return nc.describeContainers(
      {
      },
      'cn-north-1'
    )
  })
  it('use callback style', function (done) {
    nc.describeContainers({}, 'cn-north-1', function (err, data) {
      if (err) {
        done(err)
      } else {
        done()
      }
    })
  })
})
