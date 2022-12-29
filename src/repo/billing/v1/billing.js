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
 * 停删规则
 * 停删规则
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'billing'
Service._services[serviceId] = true

/**
 * billing service.
 * @version 1.1.4
 */

class BILLING extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'billing.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  查询账单资源汇总数据
      * @param {Object} opts - parameters
      * @param {string} opts.startTime - 账期开始时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} opts.endTime - 账期结束时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} [opts.appCode] - 产品线代码  optional
      * @param {string} [opts.serviceCode] - 产品代码  optional
      * @param {array} [opts.resourceIds] - 资源单id列表,最多支持传入500个  optional
      * @param {array} [opts.tags] - 标签,JSON格式:[{&quot;k1&quot;:&quot;v1&quot;},{&quot;k1&quot;:&quot;v2&quot;},{&quot;k2&quot;:&quot;&quot;}]
示例:
选择的标签为, 部门:广告部、部门:物流部、项目
则传值为:[{&quot;部门&quot;:&quot;广告部&quot;},{&quot;部门&quot;:&quot;物流部&quot;},{&quot;项目&quot;:&quot;&quot;}]
  optional
      * @param {integer} [opts.pageIndex] - pageIndex 分页,默认从1开始  optional
      * @param {integer} [opts.pageSize] - pageSize 每页查询数据条数,最多支持1000条  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination
      * @param billSummary result
      */

  queryBillSummary (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  queryBillSummary"
      )
    }

    opts = opts || {}

    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling queryBillSummary"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling queryBillSummary"
      )
    }

    let postBody = {}
    if (opts.startTime !== undefined && opts.startTime !== null) {
      postBody['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      postBody['endTime'] = opts.endTime
    }
    if (opts.appCode !== undefined && opts.appCode !== null) {
      postBody['appCode'] = opts.appCode
    }
    if (opts.serviceCode !== undefined && opts.serviceCode !== null) {
      postBody['serviceCode'] = opts.serviceCode
    }
    if (opts.resourceIds !== undefined && opts.resourceIds !== null) {
      postBody['resourceIds'] = opts.resourceIds
    }
    if (opts.tags !== undefined && opts.tags !== null) {
      postBody['tags'] = opts.tags
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      postBody['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      postBody['pageSize'] = opts.pageSize
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  billing/1.1.4'
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
      `call queryBillSummary with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/billSummary:list',
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
      *  查询账单明细数据
      * @param {Object} opts - parameters
      * @param {string} opts.startTime - 账期开始时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} opts.endTime - 账期结束时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} [opts.appCode] - 产品线代码  optional
      * @param {string} [opts.serviceCode] - 产品代码  optional
      * @param {integer} [opts.billingType] - 计费类型 1、按配置 2、按用量 3、包年包月 4、按次  optional
      * @param {array} [opts.resourceIds] - 资源单id列表,最多支持传入500个  optional
      * @param {array} [opts.tags] - 标签,JSON格式:[{&quot;k1&quot;:&quot;v1&quot;},{&quot;k1&quot;:&quot;v2&quot;},{&quot;k2&quot;:&quot;&quot;}]
示例:
选择的标签为, 部门:广告部、部门:物流部、项目
则传值为:[{&quot;部门&quot;:&quot;广告部&quot;},{&quot;部门&quot;:&quot;物流部&quot;},{&quot;项目&quot;:&quot;&quot;}]
  optional
      * @param {integer} [opts.pageIndex] - pageIndex 分页,默认从1开始  optional
      * @param {integer} [opts.pageSize] - pageSize 每页查询数据条数,最多支持1000条  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination
      * @param billSummary result
      */

  queryBillDetail (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  queryBillDetail"
      )
    }

    opts = opts || {}

    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling queryBillDetail"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling queryBillDetail"
      )
    }

    let postBody = {}
    if (opts.startTime !== undefined && opts.startTime !== null) {
      postBody['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      postBody['endTime'] = opts.endTime
    }
    if (opts.appCode !== undefined && opts.appCode !== null) {
      postBody['appCode'] = opts.appCode
    }
    if (opts.serviceCode !== undefined && opts.serviceCode !== null) {
      postBody['serviceCode'] = opts.serviceCode
    }
    if (opts.billingType !== undefined && opts.billingType !== null) {
      postBody['billingType'] = opts.billingType
    }
    if (opts.resourceIds !== undefined && opts.resourceIds !== null) {
      postBody['resourceIds'] = opts.resourceIds
    }
    if (opts.tags !== undefined && opts.tags !== null) {
      postBody['tags'] = opts.tags
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      postBody['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      postBody['pageSize'] = opts.pageSize
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  billing/1.1.4'
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
      `call queryBillDetail with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/billDetail:list',
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
      *  查询账单资源汇总数据V2版本
      * @param {Object} opts - parameters
      * @param {string} opts.startTime - 账期开始时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} opts.endTime - 账期结束时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} [opts.appCode] - 产品线代码  optional
      * @param {string} [opts.serviceCode] - 产品代码  optional
      * @param {array} [opts.resourceIds] - 资源单id列表,最多支持传入500个  optional
      * @param {array} [opts.tags] - 标签,JSON格式:[{&quot;k1&quot;:&quot;v1&quot;},{&quot;k1&quot;:&quot;v2&quot;},{&quot;k2&quot;:&quot;&quot;}]
示例:
选择的标签为, 部门:广告部、部门:物流部、项目
则传值为:[{&quot;部门&quot;:&quot;广告部&quot;},{&quot;部门&quot;:&quot;物流部&quot;},{&quot;项目&quot;:&quot;&quot;}]
  optional
      * @param {integer} [opts.pageIndex] - pageIndex 分页,默认从1开始  optional
      * @param {integer} [opts.pageSize] - pageSize 每页查询数据条数,最多支持1000条  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination
      * @param billSummaryV2 result
      */

  describeBillSummarys (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeBillSummarys"
      )
    }

    opts = opts || {}

    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling describeBillSummarys"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling describeBillSummarys"
      )
    }

    let postBody = {}
    if (opts.startTime !== undefined && opts.startTime !== null) {
      postBody['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      postBody['endTime'] = opts.endTime
    }
    if (opts.appCode !== undefined && opts.appCode !== null) {
      postBody['appCode'] = opts.appCode
    }
    if (opts.serviceCode !== undefined && opts.serviceCode !== null) {
      postBody['serviceCode'] = opts.serviceCode
    }
    if (opts.resourceIds !== undefined && opts.resourceIds !== null) {
      postBody['resourceIds'] = opts.resourceIds
    }
    if (opts.tags !== undefined && opts.tags !== null) {
      postBody['tags'] = opts.tags
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      postBody['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      postBody['pageSize'] = opts.pageSize
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  billing/1.1.4'
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
      `call describeBillSummarys with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/describeBillSummarys',
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
      *  查询账单明细数据V2版本
      * @param {Object} opts - parameters
      * @param {string} opts.startTime - 账期开始时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} opts.endTime - 账期结束时间,不支持跨月查询。格式:yyyy-MM-dd HH:mm:ss
      * @param {string} [opts.appCode] - 产品线代码  optional
      * @param {string} [opts.serviceCode] - 产品代码  optional
      * @param {integer} [opts.billingType] - 计费类型 1、按配置 2、按用量 3、包年包月 4、按次  optional
      * @param {array} [opts.resourceIds] - 资源单id列表,最多支持传入500个  optional
      * @param {array} [opts.tags] - 标签,JSON格式:[{&quot;k1&quot;:&quot;v1&quot;},{&quot;k1&quot;:&quot;v2&quot;},{&quot;k2&quot;:&quot;&quot;}]
示例:
选择的标签为, 部门:广告部、部门:物流部、项目
则传值为:[{&quot;部门&quot;:&quot;广告部&quot;},{&quot;部门&quot;:&quot;物流部&quot;},{&quot;项目&quot;:&quot;&quot;}]
  optional
      * @param {integer} [opts.pageIndex] - pageIndex 分页,默认从1开始  optional
      * @param {integer} [opts.pageSize] - pageSize 每页查询数据条数,最多支持1000条  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination
      * @param billSummaryV2 result
      */

  describeBillDetails (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeBillDetails"
      )
    }

    opts = opts || {}

    if (opts.startTime === undefined || opts.startTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.startTime' when calling describeBillDetails"
      )
    }
    if (opts.endTime === undefined || opts.endTime === null) {
      throw new Error(
        "Missing the required parameter 'opts.endTime' when calling describeBillDetails"
      )
    }

    let postBody = {}
    if (opts.startTime !== undefined && opts.startTime !== null) {
      postBody['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      postBody['endTime'] = opts.endTime
    }
    if (opts.appCode !== undefined && opts.appCode !== null) {
      postBody['appCode'] = opts.appCode
    }
    if (opts.serviceCode !== undefined && opts.serviceCode !== null) {
      postBody['serviceCode'] = opts.serviceCode
    }
    if (opts.billingType !== undefined && opts.billingType !== null) {
      postBody['billingType'] = opts.billingType
    }
    if (opts.resourceIds !== undefined && opts.resourceIds !== null) {
      postBody['resourceIds'] = opts.resourceIds
    }
    if (opts.tags !== undefined && opts.tags !== null) {
      postBody['tags'] = opts.tags
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      postBody['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      postBody['pageSize'] = opts.pageSize
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  billing/1.1.4'
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
      `call describeBillDetails with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/describeBillDetails',
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
      *  查询计费项账单月汇总数据
      * @param {Object} opts - parameters
      * @param {integer} opts.billDate - 账期时间,不支持跨月查询。格式:yyyyMM
      * @param {string} [opts.appCode] - 产品线代码  optional
      * @param {string} [opts.serviceCode] - 产品代码  optional
      * @param {string} [opts.region] - 地域编码，如：cn-north-1  optional
      * @param {string} [opts.resourceId] - 资源单id  optional
      * @param {integer} [opts.pageIndex] - pageIndex 分页,默认从1开始  optional
      * @param {integer} [opts.pageSize] - pageSize 每页查询数据条数,最多支持1000条  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination
      * @param formulaBillSummary result
      */

  describeFormulaSummaryList (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeFormulaSummaryList"
      )
    }

    opts = opts || {}

    if (opts.billDate === undefined || opts.billDate === null) {
      throw new Error(
        "Missing the required parameter 'opts.billDate' when calling describeFormulaSummaryList"
      )
    }

    let postBody = {}
    if (opts.billDate !== undefined && opts.billDate !== null) {
      postBody['billDate'] = opts.billDate
    }
    if (opts.appCode !== undefined && opts.appCode !== null) {
      postBody['appCode'] = opts.appCode
    }
    if (opts.serviceCode !== undefined && opts.serviceCode !== null) {
      postBody['serviceCode'] = opts.serviceCode
    }
    if (opts.region !== undefined && opts.region !== null) {
      postBody['region'] = opts.region
    }
    if (opts.resourceId !== undefined && opts.resourceId !== null) {
      postBody['resourceId'] = opts.resourceId
    }
    if (opts.pageIndex !== undefined && opts.pageIndex !== null) {
      postBody['pageIndex'] = opts.pageIndex
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      postBody['pageSize'] = opts.pageSize
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  billing/1.1.4'
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
      `call describeFormulaSummaryList with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/describeFormulaSummaryList',
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
      *  查询计费价格信息
      * @param {Object} opts - parameters
      * @param {integer} opts.cmd - 操作类型 1:新购 2:续费 3:变配
      * @param {array} [opts.orderList] - 计算价格的订单  optional
      * @param {string} [opts.operateTime] - 操作时间(格式为：yyyy-MM-dd HH:mm:ss)  optional
      * @param {string} [opts.promotionInfo] - 1:折扣（不需要传） 2:免费活动3:付费活动 4:推荐码 5:会员价 [{&quot;promotionType&quot;:1,&quot;activityCode&quot;:123},{&quot;promotionType&quot;:2,&quot;activityCode&quot;:}]  optional
      * @param {integer} [opts.clientType] - 客户端：1.PC端；2.移动端；  optional
      * @param {integer} opts.packageCount - 批量购买时数量
      * @param {integer} [opts.processType] - 临时升配时必传，3-临时升配  optional
      * @param {integer} [opts.renewMode] - 续费方式 0：正常续费  1：续费至统一到期日，续费时必传  optional
      * @param {integer} [opts.unifyExpireDay] - 续费统一到期日(1-28)，续费时必传  optional
      * @param {integer} [opts.totalPriceRule] - 计算总价规则 1：计算预付费资源总价（计费类型为包年包月、按次） ；不传计算所有资源总价  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param number totalPrice  原价（6位）
      * @param number totalPriceScale4  原价(6位，兼容之前4位保留字段)
      * @param number discountedTotalPrice  应付金额（2位）
      * @param number totalDiscount  折扣金额（6位）
      * @param number afterFavorableTotalPrice  折扣后金额(6位)
      * @param number eraseTotalPrice  抹零金额（6位）
      * @param orderPriceDetail list
      * @param number totalOriginalPrice  订单原价 包年时 一年原价为12个月价格，totalPrice为10个月价格（6位）
      * @param string favorableInfos  参与优惠的明细
      * @param string remark  备注
      * @param number totalUnitPrice  各订单单价总和（6位）
      * @param number refundTotalPrice  退款总金额
      * @param number cashRefundTotalPrice  现金退款总金额
      * @param number balanceRefundTotalPrice  余额退款总金额
      * @param number couponRefundTotalPrice  代金券退款总金额
      */

  calculateTotalPrice (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  calculateTotalPrice"
      )
    }

    opts = opts || {}

    if (opts.cmd === undefined || opts.cmd === null) {
      throw new Error(
        "Missing the required parameter 'opts.cmd' when calling calculateTotalPrice"
      )
    }
    if (opts.packageCount === undefined || opts.packageCount === null) {
      throw new Error(
        "Missing the required parameter 'opts.packageCount' when calling calculateTotalPrice"
      )
    }

    let postBody = {}
    if (opts.cmd !== undefined && opts.cmd !== null) {
      postBody['cmd'] = opts.cmd
    }
    if (opts.orderList !== undefined && opts.orderList !== null) {
      postBody['orderList'] = opts.orderList
    }
    if (opts.operateTime !== undefined && opts.operateTime !== null) {
      postBody['operateTime'] = opts.operateTime
    }
    if (opts.promotionInfo !== undefined && opts.promotionInfo !== null) {
      postBody['promotionInfo'] = opts.promotionInfo
    }
    if (opts.clientType !== undefined && opts.clientType !== null) {
      postBody['clientType'] = opts.clientType
    }
    if (opts.packageCount !== undefined && opts.packageCount !== null) {
      postBody['packageCount'] = opts.packageCount
    }
    if (opts.processType !== undefined && opts.processType !== null) {
      postBody['processType'] = opts.processType
    }
    if (opts.renewMode !== undefined && opts.renewMode !== null) {
      postBody['renewMode'] = opts.renewMode
    }
    if (opts.unifyExpireDay !== undefined && opts.unifyExpireDay !== null) {
      postBody['unifyExpireDay'] = opts.unifyExpireDay
    }
    if (opts.totalPriceRule !== undefined && opts.totalPriceRule !== null) {
      postBody['totalPriceRule'] = opts.totalPriceRule
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  billing/1.1.4'
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
      `call calculateTotalPrice with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/calculateTotalPrice',
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
}
module.exports = BILLING
