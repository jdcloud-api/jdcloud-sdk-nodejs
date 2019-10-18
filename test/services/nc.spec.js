var NC = require('../../src/services/nativecontainer')
var config = require('config')
var global = config.get('global')
describe('JDCloud.NC', function () {
    var nc = new NATIVECONTAINER({
        credentials: {
            accessKeyId: global.accessKeyId,
            secretAccessKey: global.secretAccessKey
        },
        endpoint: {
            host: 'nativecontainer.internal.cn-north-1.jdcloud-api.com', //指定非默认Endpoint
            protocol: 'http' //设置使用HTTP而不是HTTPS，vpc专用域名不支持HTTPS
        },
        'x-extra-header': { //指定额外header
            "x-jdcloud-security-token" : "xxx", //要调用开启了MFA操作保护的接口需要传递
            "x-jdcloud-content-sha256" : "xxx", //body过大，希望用此value替代对body进行哈希的过程
            "MyOwn" : "xxx"
        },
        version: {
            nativecontainer: 'v1'
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
