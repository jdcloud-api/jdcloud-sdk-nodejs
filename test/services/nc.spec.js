var NC = require('../../src/services/nc')
var config = require('config')
var global = config.get('global')
describe('JDCloud.NC', function () {
    var nc = new NC({
        credentials: {
            accessKeyId: global.accessKeyId,
            secretAccessKey: global.secretAccessKey
        },
        version: {
            nc: 'v1'
        }
    })
    // var nc = new NC();
    describe('describeContainers', function () {
        it('should be able to get nc list', function () {
            return nc.describeContainers({
                filters: [
                    {name: 'containerId', values: ['c-rxjwzysxu', 'c-73woiy7iz']}
                ],
            }, 'cn-north-1')
        })
    })
})
