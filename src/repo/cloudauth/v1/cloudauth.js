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
 * 统计概览接口
 * 实名认证-统计概览接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'cloudauth'
Service._services[serviceId] = true

/**
 * cloudauth service.
 * @version 1.0.4
 */

class CLOUDAUTH extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'cloudauth.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  个人实名认证
      * @param {Object} opts - parameters
      * @param {personalSpec} opts.personalSpec
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  personalAuth (opts, callback) {
    opts = opts || {}

    if (opts.personalSpec === undefined || opts.personalSpec === null) {
      throw new Error(
        "Missing the required parameter 'opts.personalSpec' when calling personalAuth"
      )
    }

    let postBody = {}
    if (opts.personalSpec !== undefined && opts.personalSpec !== null) {
      postBody['personalSpec'] = opts.personalSpec
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call personalAuth with params:\npathParams:${JSON.stringify(
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
      '/personal',
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
      *  对公银行账户打款(随机小额)
      * @param {Object} opts - parameters
      * @param {accountInfo} opts.accountInfo
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  companyTransfer (opts, callback) {
    opts = opts || {}

    if (opts.accountInfo === undefined || opts.accountInfo === null) {
      throw new Error(
        "Missing the required parameter 'opts.accountInfo' when calling companyTransfer"
      )
    }

    let postBody = {}
    if (opts.accountInfo !== undefined && opts.accountInfo !== null) {
      postBody['accountInfo'] = opts.accountInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call companyTransfer with params:\npathParams:${JSON.stringify(
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
      '/company:transfer',
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
      *  对公打款查询
      * @param {Object} opts - parameters
      * @param {checkInfo} opts.checkInfo
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  checkCompanyTransfer (opts, callback) {
    opts = opts || {}

    if (opts.checkInfo === undefined || opts.checkInfo === null) {
      throw new Error(
        "Missing the required parameter 'opts.checkInfo' when calling checkCompanyTransfer"
      )
    }

    let postBody = {}
    if (opts.checkInfo !== undefined && opts.checkInfo !== null) {
      postBody['checkInfo'] = opts.checkInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call checkCompanyTransfer with params:\npathParams:${JSON.stringify(
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
      '/company:check',
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
      *  企业基础信息核验
      * @param {Object} opts - parameters
      * @param {companyInfo} opts.companyInfo
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  checkCompanyInfo (opts, callback) {
    opts = opts || {}

    if (opts.companyInfo === undefined || opts.companyInfo === null) {
      throw new Error(
        "Missing the required parameter 'opts.companyInfo' when calling checkCompanyInfo"
      )
    }

    let postBody = {}
    if (opts.companyInfo !== undefined && opts.companyInfo !== null) {
      postBody['companyInfo'] = opts.companyInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call checkCompanyInfo with params:\npathParams:${JSON.stringify(
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
      '/company:info',
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
      *  法人信息校验
      * @param {Object} opts - parameters
      * @param {legalPersonSpec} opts.legalPersonSpec
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  checkLegalPerson (opts, callback) {
    opts = opts || {}

    if (opts.legalPersonSpec === undefined || opts.legalPersonSpec === null) {
      throw new Error(
        "Missing the required parameter 'opts.legalPersonSpec' when calling checkLegalPerson"
      )
    }

    let postBody = {}
    if (opts.legalPersonSpec !== undefined && opts.legalPersonSpec !== null) {
      postBody['legalPersonSpec'] = opts.legalPersonSpec
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call checkLegalPerson with params:\npathParams:${JSON.stringify(
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
      '/company:legalPerson',
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
      *  代理人信息核验
      * @param {Object} opts - parameters
      * @param {agentSpec} opts.agentSpec
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  checkAgent (opts, callback) {
    opts = opts || {}

    if (opts.agentSpec === undefined || opts.agentSpec === null) {
      throw new Error(
        "Missing the required parameter 'opts.agentSpec' when calling checkAgent"
      )
    }

    let postBody = {}
    if (opts.agentSpec !== undefined && opts.agentSpec !== null) {
      postBody['agentSpec'] = opts.agentSpec
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call checkAgent with params:\npathParams:${JSON.stringify(
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
      '/company:agent',
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
      *  企业所有信息核验
      * @param {Object} opts - parameters
      * @param {legalPersonAndAgentSpec} opts.legalPersonAndAgentSpec
      * @param {string} callback - callback
      @return {Object} result
      * @param authInfo authInfo
      */

  checkLegalPersonAndAgent (opts, callback) {
    opts = opts || {}

    if (
      opts.legalPersonAndAgentSpec === undefined ||
      opts.legalPersonAndAgentSpec === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.legalPersonAndAgentSpec' when calling checkLegalPersonAndAgent"
      )
    }

    let postBody = {}
    if (
      opts.legalPersonAndAgentSpec !== undefined &&
      opts.legalPersonAndAgentSpec !== null
    ) {
      postBody['legalPersonAndAgentSpec'] = opts.legalPersonAndAgentSpec
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call checkLegalPersonAndAgent with params:\npathParams:${JSON.stringify(
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
      '/company:legalPersonAndAgent',
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
      *  查询省份下城市编码
      * @param {Object} opts - parameters
      * @param {string} opts.provinceCode - 省份代码
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success  认证结果true 成功, false 失败
      * @param boolean hasException  是否有异常 true 有异常, false 无异常
      * @param string code  认证结果状态码
      * @param string message  认证结果
      * @param string detail  字符串形式的查询结果，内容为json
      */

  queryCityList (opts, callback) {
    opts = opts || {}

    if (opts.provinceCode === undefined || opts.provinceCode === null) {
      throw new Error(
        "Missing the required parameter 'opts.provinceCode' when calling queryCityList"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.provinceCode !== undefined && opts.provinceCode !== null) {
      queryParams['provinceCode'] = opts.provinceCode
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call queryCityList with params:\npathParams:${JSON.stringify(
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
      '/query:cityList',
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
      *  查询所有省份列表
      * @param {Object} opts - parameters
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success  认证结果true 成功, false 失败
      * @param boolean hasException  是否有异常 true 有异常, false 无异常
      * @param string code  认证结果状态码
      * @param string message  认证结果
      * @param string detail  字符串形式的查询结果，内容为json
      */

  queryProvinceList (opts, callback) {
    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call queryProvinceList with params:\npathParams:${JSON.stringify(
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
      '/query:provinceList',
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
      *  查询所有支持的银行
      * @param {Object} opts - parameters
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success  认证结果true 成功, false 失败
      * @param boolean hasException  是否有异常 true 有异常, false 无异常
      * @param string code  认证结果状态码
      * @param string message  认证结果
      * @param string detail  字符串形式的查询结果，内容为json
      */

  queryBankList (opts, callback) {
    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call queryBankList with params:\npathParams:${JSON.stringify(
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
      '/query:bankList',
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
      *  查询城市下银行分行列表
      * @param {Object} opts - parameters
      * @param {string} opts.bankCode - 银行代码
      * @param {string} opts.cityCode - 城市代码
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean success  认证结果true 成功, false 失败
      * @param boolean hasException  是否有异常 true 有异常, false 无异常
      * @param string code  认证结果状态码
      * @param string message  认证结果
      * @param string detail  字符串形式的查询结果，内容为json
      */

  queryBankBranchList (opts, callback) {
    opts = opts || {}

    if (opts.bankCode === undefined || opts.bankCode === null) {
      throw new Error(
        "Missing the required parameter 'opts.bankCode' when calling queryBankBranchList"
      )
    }
    if (opts.cityCode === undefined || opts.cityCode === null) {
      throw new Error(
        "Missing the required parameter 'opts.cityCode' when calling queryBankBranchList"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.bankCode !== undefined && opts.bankCode !== null) {
      queryParams['bankCode'] = opts.bankCode
    }
    if (opts.cityCode !== undefined && opts.cityCode !== null) {
      queryParams['cityCode'] = opts.cityCode
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call queryBankBranchList with params:\npathParams:${JSON.stringify(
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
      '/query:bankBranchList',
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
      *  查询服务开通状态
      * @param {Object} opts - parameters
      * @param {string} callback - callback
      @return {Object} result
      * @param string pin  用户pin
      * @param integer status  当前服务状态(0 未开通 1 开通中 2 正常  3 停服 )
      * @param string applyTime  申请开通服务时间
      */

  describeApplyStatus (opts, callback) {
    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cloudauth/1.0.4'
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
      `call describeApplyStatus with params:\npathParams:${JSON.stringify(
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
      '/manage:applyStatus',
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
module.exports = CLOUDAUTH
