var VM = require('../../src/services/vm')
var config = require('config')
var global = config.get('global')
var expect = require('chai').expect

describe('JDCloud.VM', function () {
    var vm = new VM({
        credentials: {
            accessKeyId: global.accessKeyId,
            secretAccessKey: global.secretAccessKey
        },
        regionId: 'cn-north-1',
        version: {
            vm: 'v1'
        }
    })
    it('describeInstances', function () {
        console.log("========DescribeInstances=======");
        return vm.describeInstances({
            filters: [{ name: "name" , values:[ "i-6za0ovr24v",
                "i-rj5ve7jegu",
                "i-rj5ve7jegu1",
                "i-rj5ve7jegu2",
                "i-rj5ve7jegu3",
                "i-rj5ve7jegu4",
                "i-rj5ve7jegdu"] ,operator: "eq"}]
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })
    describe('should create and delete a instance', function () {
        var instanceId = null
        it('createInstances', function () {
            return vm
                .createInstances({
                    instanceSpec: {
                        instanceType: 'g.s1.micro',
                        az: 'cn-north-1a',
                        imageId: '9d44a0f-88c1-451a-8971-f1f769073b6c',
                        name: 'node-sdk-test',
                        elasticIp: { bandwidthMbps: 2, provider: 'BGP' },
                        primaryNetworkInterface: {
                            networkInterface: {
                                subnetId: 'subnet-3dm3k30gh',
                                az: 'cn-north-1a'
                            }
                        },
                        systemDisk: { diskCategory: 'local' },
                        description: 'sdk'
                    },
                    maxCount: 1
                }, 'cn-north-1')
                .then(function (data) {

                    // instanceIds = data.data.instanceIds
                    // return expec(instanceIds[0]).to.not.be.empty
                })
        })
        it('deleteInstance', function () {
            if (instanceId) {
                return vm.deleteInstance({
                    instanceId: instanceId
                })
            } else {
                this.skip()
            }
        })
    })
})
