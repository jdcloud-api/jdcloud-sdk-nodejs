var JDCloud = require('../src/lib/jc')
var config = require('config')
var global = config.get('global')
var expect = require('chai').expect

describe('JDCloud.Config', function () {
  describe('constructor', function () {
    it('should be able to bass in a Config object as parameter', function () {
      var config = new JDCloud.Config({
        apiVersions: '1',
        vm: {
          apiVersions: '2'
        }
      })
      var copyConfig = new JDCloud.Config(config)
      expect(copyConfig).not.to.equal(config)
      expect(config.apiVersions).to.equal('1')
      expect(copyConfig.apiVersions).to.equal('1')
    })
    it('should be able to pass credential values directly', function () {
      var config = new JDCloud.Config({
        accessKeyId: 'akid',
        secretAccessKey: 'secret'
      })
      expect(config.credentials.accessKeyId).to.equal('akid')
      expect(config.credentials.secretAccessKey).to.equal('secret')
    })

    it('should use right config value', function () {
      var NC = require('../src/services/nc')
      var nc = new NC()
      expect(nc.config.endpoint.host).to.not.be.empty

      var config = new JDCloud.Config({
        endpoint: {
          host: 'globalHost.com'
        }
      })
      JDCloud.config.update(config)
      var ncUseGlobal = new NC()
      expect(ncUseGlobal.config.endpoint.host).to.equal('globalHost.com')

      config = new JDCloud.Config({
        endpoint: {
          host: 'globalHost.com'
        },
        nc: {
          endpoint: {
            host: 'globalNCHost.com'
          }
        }
      })
      JDCloud.config.update(config)
      var ncUseGlobalNCConfig = new NC()
      expect(ncUseGlobalNCConfig.config.endpoint.host).to.equal(
        'globalNCHost.com'
      )

      var ncUseSelf = new NC({
        endpoint: {
          host: 'ncSelfHost.com'
        }
      })
      expect(ncUseSelf.config.endpoint.host).to.equal('ncSelfHost.com')
    })
  })
  describe('usage', function () {
    it('should use default regionId', function () {
      JDCloud.config = new JDCloud.Config()
      var nc = new JDCloud.NC({
        regionId: 'cn-north-1',
        credentials: {
          accessKeyId: global.accessKeyId,
          secretAccessKey: global.secretAccessKey
        },
        logger: function (str, level = 'INFO') {
          if (level === 'INFO') {
            console.log(str)
          }
        }
      })
      return nc.describeContainers()
    })
  })
})
