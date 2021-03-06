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
 * JDCLOUD remote quota API
 * API JDCLOUD remote quota API
 *
 * OpenAPI spec version: v2
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'quota'
Service._services[serviceId] = true

/**
 * quota service.
 * @version 0.0.2
 */

class QUOTA extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'quota.jdcloud-api.com'
    options.basePath = '/v2' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  校验配额
      * @param {Object} opts - parameters
      * @param {string} [opts.pin] - 用户pin  optional
      * @param {integer} [opts.siteType] - 站点类型  optional
      * @param {string} [opts.appCode] - 业务线  optional
      * @param {string} [opts.serviceCode] - 资源产品线  optional
      * @param {string} [opts.region] - 地域  optional
      * @param {string} [opts.parentResourceId] - 父层资源id（针对有两层结构的服务）  optional
      * @param {string} [opts.uid] - 业务唯一键  optional
      * @param {integer} [opts.quotaAmount] - 配额数量  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param integer code
      * @param string message
      * @param verifyQuotaResVo data
      * @param string requestId
      */

  verifyUserQuota (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  verifyUserQuota"
      )
    }

    opts = opts || {}

    let postBody = {}
    if (opts.pin !== undefined && opts.pin !== null) {
      postBody['pin'] = opts.pin
    }
    if (opts.siteType !== undefined && opts.siteType !== null) {
      postBody['siteType'] = opts.siteType
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
    if (opts.parentResourceId !== undefined && opts.parentResourceId !== null) {
      postBody['parentResourceId'] = opts.parentResourceId
    }
    if (opts.uid !== undefined && opts.uid !== null) {
      postBody['uid'] = opts.uid
    }
    if (opts.quotaAmount !== undefined && opts.quotaAmount !== null) {
      postBody['quotaAmount'] = opts.quotaAmount
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  quota/0.0.2'
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
      `call verifyUserQuota with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userQuota:verify',
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
      *  校验配额
      * @param {Object} opts - parameters
      * @param {string} [opts.pin] - 用户pin  optional
      * @param {integer} [opts.siteType] - 站点类型  optional
      * @param {string} [opts.appCode] - 业务线  optional
      * @param {string} [opts.serviceCode] - 资源产品线  optional
      * @param {string} [opts.region] - 地域  optional
      * @param {string} [opts.parentResourceId] - 父层资源id（针对有两层结构的服务）  optional
      * @param {string} [opts.uid] - 业务唯一键  optional
      * @param {integer} [opts.quotaAmount] - 配额数量  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success
      * @param integer code
      * @param string message
      * @param userQuotaResVo data
      * @param string requestId
      */

  getUserQuotaDetail (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getUserQuotaDetail"
      )
    }

    opts = opts || {}

    let postBody = {}
    if (opts.pin !== undefined && opts.pin !== null) {
      postBody['pin'] = opts.pin
    }
    if (opts.siteType !== undefined && opts.siteType !== null) {
      postBody['siteType'] = opts.siteType
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
    if (opts.parentResourceId !== undefined && opts.parentResourceId !== null) {
      postBody['parentResourceId'] = opts.parentResourceId
    }
    if (opts.uid !== undefined && opts.uid !== null) {
      postBody['uid'] = opts.uid
    }
    if (opts.quotaAmount !== undefined && opts.quotaAmount !== null) {
      postBody['quotaAmount'] = opts.quotaAmount
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  quota/0.0.2'
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
      `call getUserQuotaDetail with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userQuota:getDetail',
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
module.exports = QUOTA
