/*
 * Copyright 2018-2025 JDCLOUD.COM
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
 * 用户管理接口
 * 用户管理接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../lib/node_loader')
var JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'iam'
Service._services[serviceId] = true

/**
 * iam service.
 * @version 0.1.0
 */

JDCloud.IAM = class IAM extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'iam.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
         *  创建策略
         * @param {Object} opts - parameters
         * @param {createPermissionInfo} opts.createPermissionInfo - 权限信息
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  createPermission (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createPermission"
      )
    }

    opts = opts || {}

    if (
      opts.createPermissionInfo === undefined ||
      opts.createPermissionInfo === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.createPermissionInfo' when calling createPermission"
      )
    }

    let postBody = {}
    if (
      opts.createPermissionInfo !== undefined &&
      opts.createPermissionInfo !== null
    ) {
      postBody['createPermissionInfo'] = opts.createPermissionInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createPermission with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/permission',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询策略详情
         * @param {Object} opts - parameters
         * @param {integer} opts.permissionId - 权限id
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param permission permission  权限信息
      */

  describePermissionDetail (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describePermissionDetail"
      )
    }

    opts = opts || {}

    if (opts.permissionId === undefined || opts.permissionId === null) {
      throw new Error(
        "Missing the required parameter 'opts.permissionId' when calling describePermissionDetail"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      permissionId: opts.permissionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describePermissionDetail with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/permission/{permissionId}',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  修改策略
         * @param {Object} opts - parameters
         * @param {integer} opts.permissionId - 权限id
         * @param {updatePermissionInfo} opts.updatePermissionInfo - 权限信息
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  updatePermission (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  updatePermission"
      )
    }

    opts = opts || {}

    if (opts.permissionId === undefined || opts.permissionId === null) {
      throw new Error(
        "Missing the required parameter 'opts.permissionId' when calling updatePermission"
      )
    }
    if (
      opts.updatePermissionInfo === undefined ||
      opts.updatePermissionInfo === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.updatePermissionInfo' when calling updatePermission"
      )
    }

    let postBody = {}
    if (
      opts.updatePermissionInfo !== undefined &&
      opts.updatePermissionInfo !== null
    ) {
      postBody['updatePermissionInfo'] = opts.updatePermissionInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      permissionId: opts.permissionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call updatePermission with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/permission/{permissionId}',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询策略列表
         * @param {Object} opts - parameters
         * @param {integer} opts.pageNumber - 页码
         * @param {integer} opts.pageSize - 每页显示数目
         * @param {string} [opts.keyword] - 关键字  optional
         * @param {integer} opts.queryType - 权限类型,0-全部，1-系统权限，2-自定义权限
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param integer total  总数
         * @param permission permissions
      */

  describePermissions (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describePermissions"
      )
    }

    opts = opts || {}

    if (opts.pageNumber === undefined || opts.pageNumber === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageNumber' when calling describePermissions"
      )
    }
    if (opts.pageSize === undefined || opts.pageSize === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageSize' when calling describePermissions"
      )
    }
    if (opts.queryType === undefined || opts.queryType === null) {
      throw new Error(
        "Missing the required parameter 'opts.queryType' when calling describePermissions"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      queryParams['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    if (opts.keyword !== undefined && opts.keyword !== null) {
      queryParams['keyword'] = opts.keyword
    }
    if (opts.queryType !== undefined && opts.queryType !== null) {
      queryParams['queryType'] = opts.queryType
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describePermissions with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/permissions',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询子用户策略列表
         * @param {Object} opts - parameters
         * @param {string} opts.subUser - 子用户用户名
         * @param {integer} opts.pageNumber - 页码
         * @param {integer} opts.pageSize - 每页显示数目
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param integer total  总数
         * @param permission permissions
      */

  describeSubUserPermissions (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeSubUserPermissions"
      )
    }

    opts = opts || {}

    if (opts.subUser === undefined || opts.subUser === null) {
      throw new Error(
        "Missing the required parameter 'opts.subUser' when calling describeSubUserPermissions"
      )
    }
    if (opts.pageNumber === undefined || opts.pageNumber === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageNumber' when calling describeSubUserPermissions"
      )
    }
    if (opts.pageSize === undefined || opts.pageSize === null) {
      throw new Error(
        "Missing the required parameter 'opts.pageSize' when calling describeSubUserPermissions"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      queryParams['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }

    let pathParams = {
      regionId: regionId,
      subUser: opts.subUser
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeSubUserPermissions with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/subUser/{subUser}/permisssions',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  为子用户绑定策略
         * @param {Object} opts - parameters
         * @param {string} opts.subUser - 子用户用户名
         * @param {addPermissionsInfo} opts.addPermissionsInfo - 权限信息
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  addPermissionsToSubUser (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  addPermissionsToSubUser"
      )
    }

    opts = opts || {}

    if (opts.subUser === undefined || opts.subUser === null) {
      throw new Error(
        "Missing the required parameter 'opts.subUser' when calling addPermissionsToSubUser"
      )
    }
    if (
      opts.addPermissionsInfo === undefined ||
      opts.addPermissionsInfo === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.addPermissionsInfo' when calling addPermissionsToSubUser"
      )
    }

    let postBody = {}
    if (
      opts.addPermissionsInfo !== undefined &&
      opts.addPermissionsInfo !== null
    ) {
      postBody['addPermissionsInfo'] = opts.addPermissionsInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      subUser: opts.subUser
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call addPermissionsToSubUser with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/subUser/{subUser}/permisssions',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  为子用户解绑策略
         * @param {Object} opts - parameters
         * @param {integer} opts.permissionId - 权限id
         * @param {string} opts.subUser - 子用户用户名
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  removePermissionOfSubUser (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  removePermissionOfSubUser"
      )
    }

    opts = opts || {}

    if (opts.permissionId === undefined || opts.permissionId === null) {
      throw new Error(
        "Missing the required parameter 'opts.permissionId' when calling removePermissionOfSubUser"
      )
    }
    if (opts.subUser === undefined || opts.subUser === null) {
      throw new Error(
        "Missing the required parameter 'opts.subUser' when calling removePermissionOfSubUser"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      permissionId: opts.permissionId,
      subUser: opts.subUser
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call removePermissionOfSubUser with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/subUser/{subUser}/permissions/{permissionId}',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  创建子账号
         * @param {Object} opts - parameters
         * @param {createSubUserInfo} opts.createSubUserInfo - 子账号信息
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  createSubuser (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createSubuser"
      )
    }

    opts = opts || {}

    if (
      opts.createSubUserInfo === undefined ||
      opts.createSubUserInfo === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.createSubUserInfo' when calling createSubuser"
      )
    }

    let postBody = {}
    if (
      opts.createSubUserInfo !== undefined &&
      opts.createSubUserInfo !== null
    ) {
      postBody['createSubUserInfo'] = opts.createSubUserInfo
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createSubuser with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/subUser',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询AccessKey列表
         * @param {Object} opts - parameters
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param userAccessKey userAccessKeys
      */

  describeUserAccessKeys (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeUserAccessKeys"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeUserAccessKeys with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userAccessKeys',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  创建AccessKey
         * @param {Object} opts - parameters
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  createUserAccessKey (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createUserAccessKey"
      )
    }

    opts = opts || {}

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createUserAccessKey with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userAccessKey',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  启用AccessKey
         * @param {Object} opts - parameters
         * @param {string} opts.accessKey - accessKey
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  enabledUserAccessKey (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  enabledUserAccessKey"
      )
    }

    opts = opts || {}

    if (opts.accessKey === undefined || opts.accessKey === null) {
      throw new Error(
        "Missing the required parameter 'opts.accessKey' when calling enabledUserAccessKey"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      accessKey: opts.accessKey
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call enabledUserAccessKey with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userAccessKey/{accessKey}:enabled',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  禁用AccessKey
         * @param {Object} opts - parameters
         * @param {string} opts.accessKey - accessKey
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  disabledUserAccessKey (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  disabledUserAccessKey"
      )
    }

    opts = opts || {}

    if (opts.accessKey === undefined || opts.accessKey === null) {
      throw new Error(
        "Missing the required parameter 'opts.accessKey' when calling disabledUserAccessKey"
      )
    }

    let postBody = {}

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      accessKey: opts.accessKey
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call disabledUserAccessKey with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userAccessKey/{accessKey}:disabled',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  删除AccessKey
         * @param {Object} opts - parameters
         * @param {string} opts.accessKey - accessKey
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  deleteUserAccessKey (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteUserAccessKey"
      )
    }

    opts = opts || {}

    if (opts.accessKey === undefined || opts.accessKey === null) {
      throw new Error(
        "Missing the required parameter 'opts.accessKey' when calling deleteUserAccessKey"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      accessKey: opts.accessKey
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iam/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteUserAccessKey with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/userAccessKey/{accessKey}',
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
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = JDCloud.IAM
