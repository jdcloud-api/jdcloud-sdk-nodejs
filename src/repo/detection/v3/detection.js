/*
 * Copyright 2018 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Task related APIs
 * 云拔测-任务相关接口
 *
 * OpenAPI spec version: v3
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'detection'
Service._services[serviceId] = true

/**
 * detection service.
 * @version 3.0.0
 */

class DETECTION extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'detection.jdcloud-api.com'
    options.basePath = '/v3' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  查询任务列表
      * @param {Object} opts - parameters
      * @param {integer} [opts.taskId] - 任务Id  optional
      * @param {string} [opts.taskName] - 任务名称 模糊匹配  optional
      * @param {string} [opts.taskUrl] - 任务地址 模糊匹配  optional
      * @param {integer} [opts.taskType] - 任务类型 1、协议 2、网络  optional
      * @param {integer} [opts.protocolType] - 协议类型 1、TCP 2、UDP 3、SMTP 4、HTTP_HTTPS 5、FTP  optional
      * @param {integer} [opts.taskClassify] - 任务类别 1、定时拨测 2、即时拨测 默认定时拨测  optional
      * @param {integer} [opts.taskGroupId] - 任务组ID  optional
      * @param {integer} opts.pageIndex - 当前页码 需大于等于1
      * @param {integer} opts.pageSize - 每页大小 取值范围1到100
      * @param {integer} [opts.status] - 任务状态 0开启 1禁用  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param string message
      * @param integer total
      * @param task data
      */

  queryTasks (opts, callback) {
    opts = opts || {}

    if (opts.pageIndex === undefined || opts.pageIndex === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageIndex' when calling queryTasks"
      )
    }
    if (opts.pageSize === undefined || opts.pageSize === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageSize' when calling queryTasks"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.taskId !== undefined && opts.taskId !== null) {
      queryParams['taskId'] = opts.taskId
    }
    if (opts.taskName !== undefined && opts.taskName !== null) {
      queryParams['taskName'] = opts.taskName
    }
    if (opts.taskUrl !== undefined && opts.taskUrl !== null) {
      queryParams['taskUrl'] = opts.taskUrl
    }
    if (opts.taskType !== undefined && opts.taskType !== null) {
      queryParams['taskType'] = opts.taskType
    }
    if (opts.protocolType !== undefined && opts.protocolType !== null) {
      queryParams['protocolType'] = opts.protocolType
    }
    if (opts.taskClassify !== undefined && opts.taskClassify !== null) {
      queryParams['taskClassify'] = opts.taskClassify
    }
    if (opts.taskGroupId !== undefined && opts.taskGroupId !== null) {
      queryParams['taskGroupId'] = opts.taskGroupId
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      queryParams['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    if (opts.status !== undefined && opts.status !== null) {
      queryParams['status'] = opts.status
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  detection/3.0.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call queryTasks with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/tasks',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询网络类型任务拨测结果
      * @param {Object} opts - parameters
      * @param {integer} opts.taskId - 任务Id
      * @param {integer} opts.startTime - 开始时间 时间戳 需小于当前时间
      * @param {integer} opts.endTime - 结束时间 时间戳 需大于开始时间
      * @param {integer} opts.pageIndex - 当前页码 需大于等于1
      * @param {integer} opts.pageSize - 每页大小 取值范围1到500
      * @param {integer} [opts.status] - 结果状态 0成功 1失败  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param string message
      * @param integer total
      * @param net data
      */

  queryNetworkMonitorResults (opts, callback) {
    opts = opts || {}

    if (opts.taskId === undefined || opts.taskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskId' when calling queryNetworkMonitorResults"
      )
    }
    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling queryNetworkMonitorResults"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling queryNetworkMonitorResults"
      )
    }
    if (opts.pageIndex === undefined || opts.pageIndex === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageIndex' when calling queryNetworkMonitorResults"
      )
    }
    if (opts.pageSize === undefined || opts.pageSize === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageSize' when calling queryNetworkMonitorResults"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.taskId !== undefined && opts.taskId !== null) {
      queryParams['taskId'] = opts.taskId
    }
    if (opts.startTime !== undefined && opts.startTime !== null) {
      queryParams['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      queryParams['endTime'] = opts.endTime
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      queryParams['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    if (opts.status !== undefined && opts.status !== null) {
      queryParams['status'] = opts.status
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  detection/3.0.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call queryNetworkMonitorResults with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/netMonitorResult',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询协议类型任务拨测结果
      * @param {Object} opts - parameters
      * @param {integer} opts.taskId - 任务Id
      * @param {integer} opts.startTime - 开始时间 时间戳 需小于当前时间
      * @param {integer} opts.endTime - 结束时间 时间戳 需大于开始时间
      * @param {integer} opts.pageIndex - 当前页码 需大于等于1
      * @param {integer} opts.pageSize - 每页大小 取值范围1到500
      * @param {integer} [opts.status] - 结果状态 0成功 1失败  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param string message
      * @param integer total
      * @param protocol data
      */

  queryProtocolMonitorResults (opts, callback) {
    opts = opts || {}

    if (opts.taskId === undefined || opts.taskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskId' when calling queryProtocolMonitorResults"
      )
    }
    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling queryProtocolMonitorResults"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling queryProtocolMonitorResults"
      )
    }
    if (opts.pageIndex === undefined || opts.pageIndex === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageIndex' when calling queryProtocolMonitorResults"
      )
    }
    if (opts.pageSize === undefined || opts.pageSize === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageSize' when calling queryProtocolMonitorResults"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.taskId !== undefined && opts.taskId !== null) {
      queryParams['taskId'] = opts.taskId
    }
    if (opts.startTime !== undefined && opts.startTime !== null) {
      queryParams['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      queryParams['endTime'] = opts.endTime
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      queryParams['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    if (opts.status !== undefined && opts.status !== null) {
      queryParams['status'] = opts.status
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  detection/3.0.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call queryProtocolMonitorResults with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/protocolMonitorResult',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询协议类型任务平均指标数据
      * @param {Object} opts - parameters
      * @param {integer} opts.taskId - 任务Id
      * @param {integer} opts.startTime - 开始时间 时间戳 需小于当前时间
      * @param {integer} opts.endTime - 结束时间 时间戳 需大于开始时间
      * @param {integer} [opts.duration] - 数据点间隔时间(分钟)，可选5/10/15/30/60/120/180/240/300/480/720，默认为任务调度周期，需大于任务调度周期  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param string message
      * @param protocolMetric data
      */

  queryProtocolAvgMetrics (opts, callback) {
    opts = opts || {}

    if (opts.taskId === undefined || opts.taskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskId' when calling queryProtocolAvgMetrics"
      )
    }
    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling queryProtocolAvgMetrics"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling queryProtocolAvgMetrics"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.taskId !== undefined && opts.taskId !== null) {
      queryParams['taskId'] = opts.taskId
    }
    if (opts.startTime !== undefined && opts.startTime !== null) {
      queryParams['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      queryParams['endTime'] = opts.endTime
    }
    if (opts.duration !== undefined && opts.duration !== null) {
      queryParams['duration'] = opts.duration
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  detection/3.0.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call queryProtocolAvgMetrics with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/protocolAvgMetrics',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询网络类型任务平均值指标数据
      * @param {Object} opts - parameters
      * @param {integer} opts.taskId - 任务Id
      * @param {integer} opts.startTime - 开始时间 时间戳 需小于当前时间
      * @param {integer} opts.endTime - 结束时间 时间戳 需大于开始时间
      * @param {integer} [opts.duration] - 数据点间隔时间(分钟)，可选5/10/15/30/60/120/180/240/300/480/720，默认为任务调度周期，需大于任务调度周期  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param string message
      * @param netMetric data
      */

  queryNetworkAvgMetrics (opts, callback) {
    opts = opts || {}

    if (opts.taskId === undefined || opts.taskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskId' when calling queryNetworkAvgMetrics"
      )
    }
    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling queryNetworkAvgMetrics"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling queryNetworkAvgMetrics"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.taskId !== undefined && opts.taskId !== null) {
      queryParams['taskId'] = opts.taskId
    }
    if (opts.startTime !== undefined && opts.startTime !== null) {
      queryParams['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      queryParams['endTime'] = opts.endTime
    }
    if (opts.duration !== undefined && opts.duration !== null) {
      queryParams['duration'] = opts.duration
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  detection/3.0.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call queryNetworkAvgMetrics with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/netAvgMetrics',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询任务成功率指标数据
      * @param {Object} opts - parameters
      * @param {integer} opts.taskId - 任务Id
      * @param {integer} opts.startTime - 开始时间 时间戳 需小于当前时间
      * @param {integer} opts.endTime - 结束时间 时间戳 需大于开始时间
      * @param {integer} [opts.duration] - 数据点间隔时间(分钟)，可选5/10/15/30/60/120/180/240/300/480/720，默认为任务调度周期，需大于任务调度周期  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param string message
      * @param successRateMetric data
      */

  querySuccessRateMetric (opts, callback) {
    opts = opts || {}

    if (opts.taskId === undefined || opts.taskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.taskId' when calling querySuccessRateMetric"
      )
    }
    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling querySuccessRateMetric"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling querySuccessRateMetric"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.taskId !== undefined && opts.taskId !== null) {
      queryParams['taskId'] = opts.taskId
    }
    if (opts.startTime !== undefined && opts.startTime !== null) {
      queryParams['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      queryParams['endTime'] = opts.endTime
    }
    if (opts.duration !== undefined && opts.duration !== null) {
      queryParams['duration'] = opts.duration
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  detection/3.0.0'
    }

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }

      if (Array.isArray(opts['x-extra-header']['content-type'])) {
        contentTypes = opts['x-extra-header']['content-type']
      } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
        contentTypes = opts['x-extra-header']['content-type'].split(',')
      }

      if (Array.isArray(opts['x-extra-header']['accept'])) {
        accepts = opts['x-extra-header']['accept']
      } else if (typeof opts['x-extra-header']['accept'] === 'string') {
        accepts = opts['x-extra-header']['accept'].split(',')
      }
    }

    let formParams = {}

    let returnType = null

    this.config.logger(
      `call querySuccessRateMetric with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = super.makeRequest(
      '/successRateMetric',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback && typeof callback === 'function') {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback && typeof callback === 'function') {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = DETECTION
