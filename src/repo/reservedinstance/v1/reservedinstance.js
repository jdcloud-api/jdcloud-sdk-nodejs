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
 * sysConfig APIs
 * 系统参数配置
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'reservedinstance'
Service._services[serviceId] = true

/**
 * reservedinstance service.
 * @version 0.1.2
 */

class RESERVEDINSTANCE extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'reservedinstance.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  查询实例券使用明细列表
      * @param {Object} opts - parameters
      * @param {string} [opts.reservedInstanceType] - 实例券类型  optional
      * @param {string} [opts.reservedInstanceId] - 实例券ID  optional
      * @param {string} [opts.instanceId] - 抵扣实例ID  optional
      * @param {string} [opts.startTime] - 使用开始时间  optional
      * @param {string} [opts.endTime] - 使用结束时间  optional
      * @param {integer} [opts.pageNo] - 页码,默认为1  optional
      * @param {integer} [opts.pageSize] - 分页大小，默认10，最大100  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination
      * @param deductionDetailVo result
      */

  describeDeductionDetails (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeDeductionDetails"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (
      opts.reservedInstanceType !== undefined &&
      opts.reservedInstanceType !== null
    ) {
      queryParams['reservedInstanceType'] = opts.reservedInstanceType
    }
    if (
      opts.reservedInstanceId !== undefined &&
      opts.reservedInstanceId !== null
    ) {
      queryParams['reservedInstanceId'] = opts.reservedInstanceId
    }
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      queryParams['instanceId'] = opts.instanceId
    }
    if (opts.startTime !== undefined && opts.startTime !== null) {
      queryParams['startTime'] = opts.startTime
    }
    if (opts.endTime !== undefined && opts.endTime !== null) {
      queryParams['endTime'] = opts.endTime
    }
    if (opts.pageNo !== undefined && opts.pageNo !== null) {
      queryParams['pageNo'] = opts.pageNo
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  reservedinstance/0.1.2'
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
      `call describeDeductionDetails with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/deductionDetails',
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
      *  查询实例抵扣券列表
      * @param {Object} opts - parameters
      * @param {string} [opts.voucherType] - 实例券类型  optional
      * @param {integer} [opts.status] - 状态(全部:不传 1.生效 2.失效)  optional
      * @param {string} [opts.createTimeBegin] - 创建时间段开始时间  optional
      * @param {string} [opts.createTimeEnd] - 创建时间段结束时间  optional
      * @param {integer} [opts.pageNum] - 当前页序号(默认:1)  optional
      * @param {integer} [opts.pageSize] - 每页结果数量(默认:10)  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param pagination pagination  分页信息
      * @param consoleInstanceVoucherVo data
      */

  describeConsoleInstanceVouchers (
    opts,
    regionId = this.config.regionId,
    callback
  ) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeConsoleInstanceVouchers"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.voucherType !== undefined && opts.voucherType !== null) {
      queryParams['voucherType'] = opts.voucherType
    }
    if (opts.status !== undefined && opts.status !== null) {
      queryParams['status'] = opts.status
    }
    if (opts.createTimeBegin !== undefined && opts.createTimeBegin !== null) {
      queryParams['createTimeBegin'] = opts.createTimeBegin
    }
    if (opts.createTimeEnd !== undefined && opts.createTimeEnd !== null) {
      queryParams['createTimeEnd'] = opts.createTimeEnd
    }
    if (opts.pageNum !== undefined && opts.pageNum !== null) {
      queryParams['pageNum'] = opts.pageNum
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  reservedinstance/0.1.2'
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
      `call describeConsoleInstanceVouchers with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/instanceVoucher:describeConsoleInstanceVouchers',
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
module.exports = RESERVEDINSTANCE
