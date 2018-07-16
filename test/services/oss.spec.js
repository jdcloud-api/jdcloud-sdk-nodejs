var OSS = require('../../src/services/oss')
var config = require('config')
var global = config.get('global')
var expect = require('chai').expect

describe('JDCloud.OSS', function () {

    var oss = new OSS({
        credentials: {
            accessKeyId: global.accessKeyId,
            secretAccessKey: global.secretAccessKey
        },
        version: {
            oss: 'v1'
        },
        basePath : '/v1', //默认要设为空""
    })

    describe('listBucket', function () {
        it('should be able to get bucket list', function () {
            return oss.listBuckets({
            },'cn-east-1')
                .then(function (data) {
                    console.log(data)
                })
        })
    })

    describe('putBucket', function () {
        it('should be able to put bucket', function () {
            return oss.putBucket({
                bucketname : "apitest"
            },'cn-east-1')
                .then(function (data) {
                    console.log(data)
                })
        })
    })

    describe('headBucket', function () {
        it('should be able to get head', function () {
            return oss.headBucket({
                bucketname : "apitest"
            },'cn-east-1')
                .then(function (data) {
                    console.log(data)
                })
        })
    })

    describe('deleteBucket', function () {
        it('should be able to get head', function () {
            return oss.deleteBucket({
                bucketname : "apitest"
            },'cn-east-1')
                .then(function (data) {
                    console.log(data)
                })
        })
    })
})
