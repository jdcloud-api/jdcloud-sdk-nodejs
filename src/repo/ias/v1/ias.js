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
 * JDCLOUD IAS Services API
 * 京东云联合登陆Api
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'ias'
Service._services[serviceId] = true

/**
 * ias service.
 * @version 0.2.0
 */

JDCloud.IAS = class IAS extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'ias.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  创建app
      * @param {Object} opts - parameters
      * @param {string} [opts.clientName] - 应用名  optional
      * @param {string} [opts.tokenEndpointAuthMethod] - tokenEndpointAuthMethod  optional
      * @param {string} [opts.grantTypes] - grantTypes  optional
      * @param {string} [opts.redirectUris] - redirectUris  optional
      * @param {string} [opts.clientUri] - clientUri  optional
      * @param {string} [opts.logoUri] - logoUri  optional
      * @param {string} [opts.tosUri] - tosUri  optional
      * @param {string} [opts.policyUri] - policyUri  optional
      * @param {string} [opts.scope] - scope  optional
      * @param {string} [opts.jwksUri] - jwksUri  optional
      * @param {string} [opts.jwks] - jwks  optional
      * @param {string} [opts.contacts] - contacts  optional
      * @param {string} [opts.extension] - extension  optional
      * @param {integer} [opts.accessTokenValiditySeconds] - accessTokenValiditySeconds  optional
      * @param {integer} [opts.refreshTokenValiditySeconds] - refreshTokenValiditySeconds  optional
      * @param {boolean} [opts.multiTenant] - multiTenant  optional
      * @param {string} [opts.secret] - secret  optional
      * @param {string} [opts.userType] - userType  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param string clientId  应用
      * @param string clientName  应用名
      * @param string tokenEndpointAuthMethod  tokenEndpointAuthMethod
      * @param string grantTypes  grantTypes
      * @param string responseTypes  responseTypes
      * @param string redirectUris  redirectUris
      * @param string clientUri  clientUri
      * @param string logoUri  logoUri
      * @param string tosUri  tosUri
      * @param string policyUri  policyUri
      * @param string scope  scope
      * @param string jwksUri  jwksUri
      * @param string jwks  jwks
      * @param string contacts  contacts
      * @param string extension  extension
      * @param integer accessTokenValiditySeconds  accessTokenValiditySeconds
      * @param integer refreshTokenValiditySeconds  refreshTokenValiditySeconds
      * @param boolean multiTenant  multiTenant
      * @param integer secretUpdateTime  secretUpdateTime
      * @param integer updateTime  updateTime
      * @param integer createTime  createTime
      * @param string account  account
      * @param string userType  userType
      */

  createApp (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createApp"
      )
    }

    opts = opts || {}

    let postBody = {}
    if (opts.clientName !== undefined && opts.clientName !== null) {
      postBody['clientName'] = opts.clientName
    }
    if (
      opts.tokenEndpointAuthMethod !== undefined &&
      opts.tokenEndpointAuthMethod !== null
    ) {
      postBody['tokenEndpointAuthMethod'] = opts.tokenEndpointAuthMethod
    }
    if (opts.grantTypes !== undefined && opts.grantTypes !== null) {
      postBody['grantTypes'] = opts.grantTypes
    }
    if (opts.redirectUris !== undefined && opts.redirectUris !== null) {
      postBody['redirectUris'] = opts.redirectUris
    }
    if (opts.clientUri !== undefined && opts.clientUri !== null) {
      postBody['clientUri'] = opts.clientUri
    }
    if (opts.logoUri !== undefined && opts.logoUri !== null) {
      postBody['logoUri'] = opts.logoUri
    }
    if (opts.tosUri !== undefined && opts.tosUri !== null) {
      postBody['tosUri'] = opts.tosUri
    }
    if (opts.policyUri !== undefined && opts.policyUri !== null) {
      postBody['policyUri'] = opts.policyUri
    }
    if (opts.scope !== undefined && opts.scope !== null) {
      postBody['scope'] = opts.scope
    }
    if (opts.jwksUri !== undefined && opts.jwksUri !== null) {
      postBody['jwksUri'] = opts.jwksUri
    }
    if (opts.jwks !== undefined && opts.jwks !== null) {
      postBody['jwks'] = opts.jwks
    }
    if (opts.contacts !== undefined && opts.contacts !== null) {
      postBody['contacts'] = opts.contacts
    }
    if (opts.extension !== undefined && opts.extension !== null) {
      postBody['extension'] = opts.extension
    }
    if (
      opts.accessTokenValiditySeconds !== undefined &&
      opts.accessTokenValiditySeconds !== null
    ) {
      postBody['accessTokenValiditySeconds'] = opts.accessTokenValiditySeconds
    }
    if (
      opts.refreshTokenValiditySeconds !== undefined &&
      opts.refreshTokenValiditySeconds !== null
    ) {
      postBody['refreshTokenValiditySeconds'] = opts.refreshTokenValiditySeconds
    }
    if (opts.multiTenant !== undefined && opts.multiTenant !== null) {
      postBody['multiTenant'] = opts.multiTenant
    }
    if (opts.secret !== undefined && opts.secret !== null) {
      postBody['secret'] = opts.secret
    }
    if (opts.userType !== undefined && opts.userType !== null) {
      postBody['userType'] = opts.userType
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  ias/0.2.0'
    }

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createApp with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/app',
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
        if (callback) {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  获取应用
      * @param {Object} opts - parameters
      * @param {string} opts.clientId
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param string clientId  应用
      * @param string clientName  应用名
      * @param string tokenEndpointAuthMethod  tokenEndpointAuthMethod
      * @param string grantTypes  grantTypes
      * @param string responseTypes  responseTypes
      * @param string redirectUris  redirectUris
      * @param string clientUri  clientUri
      * @param string logoUri  logoUri
      * @param string tosUri  tosUri
      * @param string policyUri  policyUri
      * @param string scope  scope
      * @param string jwksUri  jwksUri
      * @param string jwks  jwks
      * @param string contacts  contacts
      * @param string extension  extension
      * @param integer accessTokenValiditySeconds  accessTokenValiditySeconds
      * @param integer refreshTokenValiditySeconds  refreshTokenValiditySeconds
      * @param boolean multiTenant  multiTenant
      * @param integer secretUpdateTime  secretUpdateTime
      * @param integer updateTime  updateTime
      * @param integer createTime  createTime
      * @param string account  account
      * @param string userType  userType
      */

  getApp (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getApp"
      )
    }

    opts = opts || {}

    if (opts.clientId === undefined || opts.clientId === null) {
      throw new Error(
        "Missing the required parameter 'opts.clientId' when calling getApp"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      clientId: opts.clientId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  ias/0.2.0'
    }

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call getApp with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/app/{clientId}',
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
        if (callback) {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  更新app
      * @param {Object} opts - parameters
      * @param {string} opts.clientId
      * @param {string} [opts.clientName] - 应用名  optional
      * @param {string} [opts.tokenEndpointAuthMethod] - tokenEndpointAuthMethod  optional
      * @param {string} [opts.grantTypes] - grantTypes  optional
      * @param {string} [opts.redirectUris] - redirectUris  optional
      * @param {string} [opts.clientUri] - clientUri  optional
      * @param {string} [opts.logoUri] - logoUri  optional
      * @param {string} [opts.tosUri] - tosUri  optional
      * @param {string} [opts.policyUri] - policyUri  optional
      * @param {string} [opts.scope] - scope  optional
      * @param {string} [opts.jwksUri] - jwksUri  optional
      * @param {string} [opts.jwks] - jwks  optional
      * @param {string} [opts.contacts] - contacts  optional
      * @param {string} [opts.extension] - extension  optional
      * @param {integer} [opts.accessTokenValiditySeconds] - accessTokenValiditySeconds  optional
      * @param {integer} [opts.refreshTokenValiditySeconds] - refreshTokenValiditySeconds  optional
      * @param {boolean} [opts.multiTenant] - multiTenant  optional
      * @param {string} [opts.secret] - secret  optional
      * @param {string} [opts.userType] - userType  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param string clientId  应用ID
      * @param string clientName  应用名
      * @param string tokenEndpointAuthMethod  tokenEndpointAuthMethod
      * @param string grantTypes  grantTypes
      * @param string responseTypes  responseTypes
      * @param string redirectUris  redirectUris
      * @param string clientUri  clientUri
      * @param string logoUri  logoUri
      * @param string tosUri  tosUri
      * @param string policyUri  policyUri
      * @param string scope  scope
      * @param string jwksUri  jwksUri
      * @param string jwks  jwks
      * @param string contacts  contacts
      * @param string extension  extension
      * @param integer accessTokenValiditySeconds  accessTokenValiditySeconds
      * @param integer refreshTokenValiditySeconds  refreshTokenValiditySeconds
      * @param boolean multiTenant  multiTenant
      * @param integer secretUpdateTime  secretUpdateTime
      * @param integer updateTime  updateTime
      * @param integer createTime  createTime
      * @param string account  account
      * @param string userType  userType
      */

  updateApp (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  updateApp"
      )
    }

    opts = opts || {}

    if (opts.clientId === undefined || opts.clientId === null) {
      throw new Error(
        "Missing the required parameter 'opts.clientId' when calling updateApp"
      )
    }

    let postBody = {}
    if (opts.clientName !== undefined && opts.clientName !== null) {
      postBody['clientName'] = opts.clientName
    }
    if (
      opts.tokenEndpointAuthMethod !== undefined &&
      opts.tokenEndpointAuthMethod !== null
    ) {
      postBody['tokenEndpointAuthMethod'] = opts.tokenEndpointAuthMethod
    }
    if (opts.grantTypes !== undefined && opts.grantTypes !== null) {
      postBody['grantTypes'] = opts.grantTypes
    }
    if (opts.redirectUris !== undefined && opts.redirectUris !== null) {
      postBody['redirectUris'] = opts.redirectUris
    }
    if (opts.clientUri !== undefined && opts.clientUri !== null) {
      postBody['clientUri'] = opts.clientUri
    }
    if (opts.logoUri !== undefined && opts.logoUri !== null) {
      postBody['logoUri'] = opts.logoUri
    }
    if (opts.tosUri !== undefined && opts.tosUri !== null) {
      postBody['tosUri'] = opts.tosUri
    }
    if (opts.policyUri !== undefined && opts.policyUri !== null) {
      postBody['policyUri'] = opts.policyUri
    }
    if (opts.scope !== undefined && opts.scope !== null) {
      postBody['scope'] = opts.scope
    }
    if (opts.jwksUri !== undefined && opts.jwksUri !== null) {
      postBody['jwksUri'] = opts.jwksUri
    }
    if (opts.jwks !== undefined && opts.jwks !== null) {
      postBody['jwks'] = opts.jwks
    }
    if (opts.contacts !== undefined && opts.contacts !== null) {
      postBody['contacts'] = opts.contacts
    }
    if (opts.extension !== undefined && opts.extension !== null) {
      postBody['extension'] = opts.extension
    }
    if (
      opts.accessTokenValiditySeconds !== undefined &&
      opts.accessTokenValiditySeconds !== null
    ) {
      postBody['accessTokenValiditySeconds'] = opts.accessTokenValiditySeconds
    }
    if (
      opts.refreshTokenValiditySeconds !== undefined &&
      opts.refreshTokenValiditySeconds !== null
    ) {
      postBody['refreshTokenValiditySeconds'] = opts.refreshTokenValiditySeconds
    }
    if (opts.multiTenant !== undefined && opts.multiTenant !== null) {
      postBody['multiTenant'] = opts.multiTenant
    }
    if (opts.secret !== undefined && opts.secret !== null) {
      postBody['secret'] = opts.secret
    }
    if (opts.userType !== undefined && opts.userType !== null) {
      postBody['userType'] = opts.userType
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      clientId: opts.clientId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  ias/0.2.0'
    }

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call updateApp with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/app/{clientId}',
      'PUT',
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
        if (callback) {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除应用
      * @param {Object} opts - parameters
      * @param {string} opts.clientId
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param integer count  删除结果[1:删除成功,0:删除失败]
      */

  deleteApp (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteApp"
      )
    }

    opts = opts || {}

    if (opts.clientId === undefined || opts.clientId === null) {
      throw new Error(
        "Missing the required parameter 'opts.clientId' when calling deleteApp"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      clientId: opts.clientId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  ias/0.2.0'
    }

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteApp with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/app/{clientId}',
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
        if (callback) {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  获取主账号下所有应用
      * @param {Object} opts - parameters
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param applicationRes apps
      */

  getApps (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getApps"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  ias/0.2.0'
    }

    // 扩展自定义头
    if (opts['x-extra-header']) {
      for (let extraHeader in opts['x-extra-header']) {
        headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
      }
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call getApps with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/apps',
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
        if (callback) {
          return callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          return callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = JDCloud.IAS
