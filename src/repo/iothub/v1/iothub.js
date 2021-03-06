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
 * RuleEngineAPI
 * 规则引擎API
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'iothub'
Service._services[serviceId] = true

/**
 * iothub service.
 * @version 0.6.6
 */

JDCloud.IOTHUB = class IOTHUB extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'iothub.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  删除设备
      * @param {Object} opts - parameters
      * @param {string} [opts.deviceId] - 设备Id  optional
      * @param {string} [opts.instanceId] - hub实例instanceId  optional
      * @param {string} callback - callback
      @return {Object} result
      */

  deleteDevice (opts, callback) {
    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.deviceId !== undefined && opts.deviceId !== null) {
      queryParams['deviceId'] = opts.deviceId
    }
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      queryParams['instanceId'] = opts.instanceId
    }

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call deleteDevice with params:\npathParams:${JSON.stringify(
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
      '/device',
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
      *  查询设备在线信息
      * @param {Object} opts - parameters
      * @param {array} [opts.deviceIds] - 设备Id集合  optional
      * @param {string} callback - callback
      @return {Object} result
      * @param onlineInfo onlineInfos
      */

  queryDeviceOnlineInfos (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.deviceIds !== undefined && opts.deviceIds !== null) {
      postBody['deviceIds'] = opts.deviceIds
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call queryDeviceOnlineInfos with params:\npathParams:${JSON.stringify(
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
      '/device:queryOnlineInfos',
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
      *  激活一个设备，包括Edge、Dragon和普通设备

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId - Device 唯一标识
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  deviceActivate (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling deviceActivate"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call deviceActivate with params:\npathParams:${JSON.stringify(
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
      '/device/{deviceId}/activate',
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
      *  客户用该接口可以批量登记设备

      * @param {Object} opts - parameters
      * @param {string} [opts.instanceId]   optional
      * @param {deviceEnrollVO} [opts.device]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  devicesEnroll (opts, callback) {
    opts = opts || {}

    let postBody = {}
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      postBody['instanceId'] = opts.instanceId
    }
    if (opts.device !== undefined && opts.device !== null) {
      postBody['device'] = opts.device
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud'
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call devicesEnroll with params:\npathParams:${JSON.stringify(
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
      '/device',
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
      *  客户用该接口可以查询设备命令列表

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId - Device 唯一标识
      * @param {string} callback - callback
      @return {Object} result
      * @param string commands
      */

  queryDeviceCommands (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling queryDeviceCommands"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call queryDeviceCommands with params:\npathParams:${JSON.stringify(
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
      '/device/{deviceId}/command',
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
      *  客户用该接口可以对设备下发命令

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId - Device 唯一标识
      * @param {deviceCommandVO} [opts.commands]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  deviceCommand (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling deviceCommand"
      )
    }

    let postBody = {}
    if (opts.commands !== undefined && opts.commands !== null) {
      postBody['commands'] = opts.commands
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call deviceCommand with params:\npathParams:${JSON.stringify(
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
      '/device/{deviceId}/command',
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
      *  客户用该接口可以查询设备预期状态

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId - Device 唯一标识
      * @param {string} callback - callback
      @return {Object} result
      * @param string state
      */

  queryDeviceStates (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling queryDeviceStates"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call queryDeviceStates with params:\npathParams:${JSON.stringify(
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
      '/device/{deviceId}/state',
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
      *  客户用该接口可以修改设备预期状态

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId - Device 唯一标识
      * @param {string} [opts.states]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  deviceState (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling deviceState"
      )
    }

    let postBody = {}
    if (opts.states !== undefined && opts.states !== null) {
      postBody['states'] = opts.states
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call deviceState with params:\npathParams:${JSON.stringify(
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
      '/device/{deviceId}/state',
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
      *  验证DeviceId是否可用

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId - Device 唯一标识
      * @param {string} callback - callback
      @return {Object} result
      */

  checkDeviceId (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling checkDeviceId"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call checkDeviceId with params:\npathParams:${JSON.stringify(
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
      '/device/{deviceId}:check',
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
      *  客户用该接口可以登记模块

      * @param {Object} opts - parameters
      * @param {string} opts.moduleName - moduleName 唯一标识
      * @param {string} [opts.instanceId]   optional
      * @param {string} [opts.modelName]   optional
      * @param {string} [opts.parentDeviceName]   optional
      * @param {string} [opts.name]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  moduleEnrollment (opts, callback) {
    opts = opts || {}

    if (opts.moduleName === undefined || opts.moduleName === null) {
      throw new Error(
        "Missing the required parameter 'opts.moduleName' when calling moduleEnrollment"
      )
    }

    let postBody = {}
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      postBody['instanceId'] = opts.instanceId
    }
    if (opts.modelName !== undefined && opts.modelName !== null) {
      postBody['modelName'] = opts.modelName
    }
    if (opts.parentDeviceName !== undefined && opts.parentDeviceName !== null) {
      postBody['parentDeviceName'] = opts.parentDeviceName
    }
    if (opts.name !== undefined && opts.name !== null) {
      postBody['name'] = opts.name
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      moduleName: opts.moduleName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call moduleEnrollment with params:\npathParams:${JSON.stringify(
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
      '/module/{moduleName}/enroll',
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
      *  客户用该接口可以修改模块预期状态

      * @param {Object} opts - parameters
      * @param {string} opts.moduleName - moduleName 唯一标识
      * @param {string} [opts.states]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  moduleState (opts, callback) {
    opts = opts || {}

    if (opts.moduleName === undefined || opts.moduleName === null) {
      throw new Error(
        "Missing the required parameter 'opts.moduleName' when calling moduleState"
      )
    }

    let postBody = {}
    if (opts.states !== undefined && opts.states !== null) {
      postBody['states'] = opts.states
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      moduleName: opts.moduleName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call moduleState with params:\npathParams:${JSON.stringify(
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
      '/module/{moduleName}/state',
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
      *  获取下载物模型的外链地址

      * @param {Object} opts - parameters
      * @param {string} opts.deviceId
      * @param {string} [opts.instanceId]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string privateUrl
      */

  getOMPrivateURL (opts, callback) {
    opts = opts || {}

    if (opts.deviceId === undefined || opts.deviceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.deviceId' when calling getOMPrivateURL"
      )
    }

    let postBody = {}
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      postBody['instanceId'] = opts.instanceId
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      deviceId: opts.deviceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call getOMPrivateURL with params:\npathParams:${JSON.stringify(
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
      '/om/{deviceId}/privateurl',
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
      *  物模型通过文件上传注册接口

      * @param {Object} opts - parameters
      * @param {string} opts.fileName - 物模型文件名称
      * @param {string} opts.instanceId - 待上传物模型的IoT Hub实例编号
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  omEnrollbyFile (opts, callback) {
    opts = opts || {}

    if (opts.fileName === undefined || opts.fileName === null) {
      throw new Error(
        "Missing the required parameter 'opts.fileName' when calling omEnrollbyFile"
      )
    }
    if (opts.instanceId === undefined || opts.instanceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceId' when calling omEnrollbyFile"
      )
    }

    let postBody = {}
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      postBody['instanceId'] = opts.instanceId
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      fileName: opts.fileName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call omEnrollbyFile with params:\npathParams:${JSON.stringify(
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
      '/file/{fileName}/om',
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
      *  物模型注册接口

      * @param {Object} opts - parameters
      * @param {string} opts.omName - 物模型唯一标识
      * @param {string} [opts.instanceId]   optional
      * @param {string} [opts.payload]   optional
      * @param {string} callback - callback
      @return {Object} result
      * @param string data
      */

  omEnroll (opts, callback) {
    opts = opts || {}

    if (opts.omName === undefined || opts.omName === null) {
      throw new Error(
        "Missing the required parameter 'opts.omName' when calling omEnroll"
      )
    }

    let postBody = {}
    if (opts.instanceId !== undefined && opts.instanceId !== null) {
      postBody['instanceId'] = opts.instanceId
    }
    if (opts.payload !== undefined && opts.payload !== null) {
      postBody['payload'] = opts.payload
    }

    let queryParams = {}

    let pathParams = {
      regionId: 'jdcloud',
      omName: opts.omName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  iothub/0.6.6'
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
      `call omEnroll with params:\npathParams:${JSON.stringify(
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
      '/om/{omName}',
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
module.exports = JDCloud.IOTHUB
