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
 * Quota
 * 配额的相关接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'flowlog'
Service._services[serviceId] = true

/**
 * flowlog service.
 * @version 1.1.0
 */

class FLOWLOG extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'flowlog.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  本接口用于查询流日志资源列表
      * @param {Object} opts - parameters
      * @param {integer} [opts.pageNumber] - 页码, 默认为1, 取值范围：[1,∞), 页码超过总页数时, 显示最后一页  optional
      * @param {integer} [opts.pageSize] - 分页大小，默认为20，取值范围：[10,100]  optional
      * @param {filter} [opts.filters] -  flowLogStatus - 流日志状态，支持单个
  flowLogType - 流日志类型，支持单个
  flowLogIds - 流日志ID，支持多个
  flowLogNames - 流日志名称，模糊查询支持单个，精确查询支持多个
  storageId - 流日志的存储服务ID，支持单个
  collectResourceIds - 流日志的采集资源ID列表，支持多个
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param flowLog flowLogs
      * @param number totalCount  总数量
      */

  describeFlowLogs (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeFlowLogs"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      queryParams['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    Object.assign(queryParams, super.buildFilterParam(opts.filters, 'filters'))

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call describeFlowLogs with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs',
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
      *  本接口用于创建流日志资源
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogName - 流日志名称，只允许输入中文、数字、大小写字母、英文下划线“_”及中划线“-”，不允许为空且不超过32字符
      * @param {string} [opts.description] - 描述,允许输入UTF-8编码下的全部字符，不超过256字符  optional
      * @param {string} opts.flowLogType - 流日志类型
PORT：采集资源可为云主机、弹性网卡

      * @param {array} [opts.collectResources] - 采集资源列表  optional
      * @param {string} [opts.collectTrafficType] - 采集流量类型
ALL：记录指定资源的全部流量
ACCEPT：记录指定资源被安全组、网络ACL均接受的流量
REJECT：记录指定资源被安全组或网络ACL拒绝的流量
  optional
      * @param {integer} [opts.collectInterval] - 流日志采集时间间隔。单位：分钟。取值：1、5、10  optional
      * @param {string} [opts.storageType] - 流日志的存储服务类型，支持存储到日志服务，日志服务取值：LOG  optional
      * @param {string} opts.storageRegionId - 流日志的存储服务所在地域，如日志服务所属地域，如cn-north-1
      * @param {string} opts.storageId - 流日志的存储服务ID
若storageType &#x3D; LOG时，值取日志主题ID，如logtopic-xxxx
当flowLogType &#x3D; PORT时，值需取 templateUID &#x3D; eniflowlogs 的日志主题ID

      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param string flowLogId  流日志ID
      */

  createFlowLog (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createFlowLog"
      )
    }

    opts = opts || {}

    if (opts.flowLogName === undefined || opts.flowLogName === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogName' when calling createFlowLog"
      )
    }
    if (opts.flowLogType === undefined || opts.flowLogType === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogType' when calling createFlowLog"
      )
    }
    if (opts.storageRegionId === undefined || opts.storageRegionId === null) {
      throw new Error(
        "Missing the required parameter 'opts.storageRegionId' when calling createFlowLog"
      )
    }
    if (opts.storageId === undefined || opts.storageId === null) {
      throw new Error(
        "Missing the required parameter 'opts.storageId' when calling createFlowLog"
      )
    }

    let postBody = {}
    if (opts.flowLogName !== undefined && opts.flowLogName !== null) {
      postBody['flowLogName'] = opts.flowLogName
    }
    if (opts.description !== undefined && opts.description !== null) {
      postBody['description'] = opts.description
    }
    if (opts.flowLogType !== undefined && opts.flowLogType !== null) {
      postBody['flowLogType'] = opts.flowLogType
    }
    if (opts.collectResources !== undefined && opts.collectResources !== null) {
      postBody['collectResources'] = opts.collectResources
    }
    if (
      opts.collectTrafficType !== undefined &&
      opts.collectTrafficType !== null
    ) {
      postBody['collectTrafficType'] = opts.collectTrafficType
    }
    if (opts.collectInterval !== undefined && opts.collectInterval !== null) {
      postBody['collectInterval'] = opts.collectInterval
    }
    if (opts.storageType !== undefined && opts.storageType !== null) {
      postBody['storageType'] = opts.storageType
    }
    if (opts.storageRegionId !== undefined && opts.storageRegionId !== null) {
      postBody['storageRegionId'] = opts.storageRegionId
    }
    if (opts.storageId !== undefined && opts.storageId !== null) {
      postBody['storageId'] = opts.storageId
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call createFlowLog with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs',
      'POST',
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
      *  本接口用于查询流日志资源详情
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param flowLog flowLog  流日志信息
      */

  describeFlowLog (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeFlowLog"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling describeFlowLog"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call describeFlowLog with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}',
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
      *  本接口用于修改流日志资源，包括流日志的名称、描述、采集时间间隔
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {string} [opts.flowLogName] - 流日志名称，只允许输入中文、数字、大小写字母、英文下划线“_”及中划线“-”，不允许为空且不超过32字符  optional
      * @param {string} [opts.description] - 描述,允许输入UTF-8编码下的全部字符，不超过256字符  optional
      * @param {integer} [opts.collectInterval] - 流日志采集时间间隔。单位：分钟。取值：1、5、10  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  modifyFlowLog (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  modifyFlowLog"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling modifyFlowLog"
      )
    }

    let postBody = {}
    if (opts.flowLogName !== undefined && opts.flowLogName !== null) {
      postBody['flowLogName'] = opts.flowLogName
    }
    if (opts.description !== undefined && opts.description !== null) {
      postBody['description'] = opts.description
    }
    if (opts.collectInterval !== undefined && opts.collectInterval !== null) {
      postBody['collectInterval'] = opts.collectInterval
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call modifyFlowLog with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}',
      'PATCH',
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
      *  本接口用于删除流日志，删除前请先停止流日志（stopFlowlog）
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  deleteFlowLog (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteFlowLog"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling deleteFlowLog"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call deleteFlowLog with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}',
      'DELETE',
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
      *  本接口用于启动采集流日志
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  startFlowLog (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  startFlowLog"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling startFlowLog"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call startFlowLog with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}:startFlowLog',
      'POST',
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
      *  本接口用于停止采集流日志
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  stopFlowLog (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  stopFlowLog"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling stopFlowLog"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call stopFlowLog with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}:stopFlowLog',
      'POST',
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
      *  本接口用于添加需要采集流日志的资源
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {array} [opts.collectResources] - 采集资源列表  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  addCollectResources (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  addCollectResources"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling addCollectResources"
      )
    }

    let postBody = {}
    if (opts.collectResources !== undefined && opts.collectResources !== null) {
      postBody['collectResources'] = opts.collectResources
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call addCollectResources with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}:addCollectResources',
      'POST',
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
      *  本接口用于移除流日志的采集资源
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {array} [opts.collectResourceIds] - 采集资源ID列表  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

  removeCollectResources (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  removeCollectResources"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling removeCollectResources"
      )
    }

    let postBody = {}
    if (
      opts.collectResourceIds !== undefined &&
      opts.collectResourceIds !== null
    ) {
      postBody['collectResourceIds'] = opts.collectResourceIds
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call removeCollectResources with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}:removeCollectResources',
      'POST',
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
      *  本接口用于查询流日志采集的资源列表
      * @param {Object} opts - parameters
      * @param {string} opts.flowLogId - 流日志ID
      * @param {integer} [opts.pageNumber] - 页码, 默认为1, 取值范围：[1,∞), 页码超过总页数时, 显示最后一页  optional
      * @param {integer} [opts.pageSize] - 分页大小，默认为20，取值范围：[10,100]  optional
      * @param {array} [opts.filters] - collectResourceType：采集的资源类型，支持单个
collectResourceIds： 流日志采集的资源ID，支持多个
vpcId：采集资源所属私有网络（VPC）的ID，支持单个
subnetId：采集资源所属子网的ID，支持单个
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param collectResource collectResources
      * @param number totalCount  总数量
      */

  describeCollectResources (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeCollectResources"
      )
    }

    opts = opts || {}

    if (opts.flowLogId === undefined || opts.flowLogId === null) {
      throw new Error(
        "Missing the required parameter 'opts.flowLogId' when calling describeCollectResources"
      )
    }

    let postBody = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      postBody['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      postBody['pageSize'] = opts.pageSize
    }
    if (opts.filters !== undefined && opts.filters !== null) {
      postBody['filters'] = opts.filters
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      flowLogId: opts.flowLogId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call describeCollectResources with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/flowLogs/{flowLogId}:describeCollectResources',
      'POST',
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
      *  查询配额信息
      * @param {Object} opts - parameters
      * @param {string} opts.type - 资源类型，取值范围：flowLog、flowLogResource
      * @param {string} [opts.parentResourceId] - type为flowLog不设置,
flowLogResource设置为flowLogId
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param quota quota
      */

  describeQuota (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeQuota"
      )
    }

    opts = opts || {}

    if (opts.type === undefined || opts.type === null) {
      throw new Error(
        "Missing the required parameter 'opts.type' when calling describeQuota"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.type !== undefined && opts.type !== null) {
      queryParams['type'] = opts.type
    }
    if (opts.parentResourceId !== undefined && opts.parentResourceId !== null) {
      queryParams['parentResourceId'] = opts.parentResourceId
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  flowlog/1.1.0'
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
      `call describeQuota with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/quotas/',
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
module.exports = FLOWLOG
