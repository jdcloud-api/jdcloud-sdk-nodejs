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
 * 用户管理
 * 用户管理接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'userpool'
Service._services[serviceId] = true

/**
 * userpool service.
 * @version 0.1.0
 */

JDCloud.USERPOOL = class USERPOOL extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'userpool.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  批量查询Pool用户信息
      * @param {Object} opts - parameters
      * @param {string} opts.poolName - PoolName
      * @param {string} [opts.userNames] - 用户信息(userName)  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param poolUserResVo poolUsers
      */

  adminGetUsers (opts, callback) {
    opts = opts || {}

    if (opts.poolName === undefined || opts.poolName === null) {
      throw new Error(
        "Missing the required parameter 'opts.poolName' when calling adminGetUsers"
      )
    }

    let postBody = null
    let queryParams = {}
    Object.assign(
      queryParams,
      this.buildArrayParam(opts.userNames, 'userNames')
    )

    let pathParams = {
      regionId: 'jdcloud',
      poolName: opts.poolName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  userpool/0.1.0'
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
      `call adminGetUsers with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/poolName/{poolName}/user',
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
      *  创建Mine craft用户
      * @param {Object} opts - parameters
      * @param {string} opts.poolName - PoolName
      * @param {array} opts.poolUsers - Pool用户信息列表
      * @param {string} callback - callback
      @return {Object} result
      * @param failedMsg failedList
      * @param poolUserResVo users
      */

  adminCreateUser (opts, callback) {
    opts = opts || {}

    if (opts.poolName === undefined || opts.poolName === null) {
      throw new Error(
        "Missing the required parameter 'opts.poolName' when calling adminCreateUser"
      )
    }
    if (opts.poolUsers === undefined || opts.poolUsers === null) {
      throw new Error(
        "Missing the required parameter 'opts.poolUsers' when calling adminCreateUser"
      )
    }

    let postBody = {}
    if (opts.poolUsers !== undefined && opts.poolUsers !== null) {
      postBody['poolUsers'] = opts.poolUsers
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      poolName: opts.poolName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  userpool/0.1.0'
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
      `call adminCreateUser with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/poolName/{poolName}/user',
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
      *  批量查询Pool用户信息
      * @param {Object} opts - parameters
      * @param {string} opts.poolName - PoolName
      * @param {integer} [opts.currentPage] - 页号(起始页1)  optional
      * @param {integer} [opts.pageSize] - 页大小(最大100,默认10)  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param pageInfo pageInfo
      * @param poolUserResVo poolUsers
      */

  listUsers (opts, callback) {
    opts = opts || {}

    if (opts.poolName === undefined || opts.poolName === null) {
      throw new Error(
        "Missing the required parameter 'opts.poolName' when calling listUsers"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.currentPage !== undefined && opts.currentPage !== null) {
      queryParams['currentPage'] = opts.currentPage
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }

    let pathParams = {
      regionId: 'jdcloud',
      poolName: opts.poolName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  userpool/0.1.0'
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
      `call listUsers with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/poolName/{poolName}/user:list',
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
      *  管理员批量设置Pool用户密码
      * @param {Object} opts - parameters
      * @param {string} opts.poolName - PoolName
      * @param {array} opts.userPasswords - Pool用户名和密码
      * @param {string} callback - callback
      @return {Object} result
      */

  adminSetUsersPassword (opts, callback) {
    opts = opts || {}

    if (opts.poolName === undefined || opts.poolName === null) {
      throw new Error(
        "Missing the required parameter 'opts.poolName' when calling adminSetUsersPassword"
      )
    }
    if (opts.userPasswords === undefined || opts.userPasswords === null) {
      throw new Error(
        "Missing the required parameter 'opts.userPasswords' when calling adminSetUsersPassword"
      )
    }

    let postBody = {}
    if (opts.userPasswords !== undefined && opts.userPasswords !== null) {
      postBody['userPasswords'] = opts.userPasswords
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      poolName: opts.poolName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  userpool/0.1.0'
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
      `call adminSetUsersPassword with params:\npathParams:${JSON.stringify(
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

    let request = this.makeRequest(
      '/poolName/{poolName}/user:adminSetUsersPassword',
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
module.exports = JDCloud.USERPOOL
