var MONITOR = require('../../src/services/monitor')
var config = require('config')
var global = config.get('global')
var expect = require('chai').expect

describe('JDCloud.MONITOR', function () {
    var monitor = new MONITOR({
        credentials: {
            accessKeyId: global.accessKeyId,
            secretAccessKey: global.secretAccessKey
        },
        version: {
            monitor: 'v1'
        },
        regionId: 'cn-north-1'
    })

    it('describeMetrics', function () {
        return monitor.describeMetrics({
            serviceCode: 'vm',
        })
            .then(function (data) {
                console.log(data)
            })
    })


    it('describeMetricData', function () {
        return monitor.describeMetricData({
            serviceCode: 'vm',
            resourceId: 'i-p1jskbki8',
            metric: 'cpu_util',
            timeInterval: '1h'
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('createAlarm', function () {
        return monitor.createAlarm({
            createAlarmSpec: {
                serviceCode: 'vm',
                resourceIds: ['i-p1jskbki8'],
                metric: 'cpu_util',
                period: 2,
                calculation: 'max',
                operation: '==',
                threshold: 100.0,
                times: 1
            },
            clientToken: 'dsf4safd6hjsfssdf567jaf'
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('updateAlarm', function () {
        return monitor.updateAlarm({
            alarmId: '265945',
            serviceCode: 'vm',
            resourceIds: ['i-p1jskbki8'],
            metric: 'cpu_util',
            period: 2,
            calculation: 'max',
            operation: '==',
            threshold: 99.0,
            times: 1
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('disableAlarm', function () {
        return monitor.disableAlarm({
            alarmId: '265945',
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('enableAlarm', function () {
        return monitor.enableAlarm({
            alarmId: '265945',
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('describeAlarmsByID', function () {
        return monitor.describeAlarmsByID({
            alarmId: '265945',
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('describeAlarms', function () {
        return monitor.describeAlarms({
            pageNumber: 1,
            pageSize: 50
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

    it('deleteAlarms', function () {
        return monitor.deleteAlarms({
            ids: '265945',
        }, 'cn-north-1')
            .then(function (data) {
                console.log(data)
            })
    })

})
