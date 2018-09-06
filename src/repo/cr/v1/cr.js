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
 * 配额
 * 容器镜像仓库相关接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader')
var JDCloud = require('../../../lib/core')
var Service = JDCloud.Service
var serviceId = 'cr'
Service._services[serviceId] = true

/**
 * cr service.
 * @version 0.1.0
 */

JDCloud.CR = class CR extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'openapi.cr.jdcloud.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  &lt;p&gt;申请12小时有效期的令牌。 使用&lt;code&gt;docker&lt;/code&gt; CLI push和pull镜像。&lt;/p&gt;
&lt;p&gt;&lt;code&gt;authorizationToken&lt;/code&gt;为每个registry返回一个base64编码的字符串，解码后&lt;code&gt;docker login&lt;/code&gt;命令
可完成指定registry的鉴权。JCR CLI提供&lt;code&gt;jcr get-login&lt;/code&gt;进行认证处理。&lt;/p&gt;

      * @param {Object} opts - parameters
      * @param {string} opts.registryName - 注册表名称
      * @param {integer} [opts.expiredAfterHours] - issue新token的过期时间, 可选参数为新生成令牌的过期时间，最大值为24小时，最小值为1小时，为空则默认为12小时过期时间。
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param authorizationData authorizationData
      */

  getAuthorizationToken (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getAuthorizationToken"
      )
    }

    opts = opts || {}

    if (opts.registryName === undefined || opts.registryName === null) {
      throw new Error(
        "Missing the required parameter 'opts.registryName' when calling getAuthorizationToken"
      )
    }

    let postBody = {}
    if (
      opts.expiredAfterHours !== undefined &&
      opts.expiredAfterHours !== null
    ) {
      postBody['expiredAfterHours'] = opts.expiredAfterHours
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      registryName: opts.registryName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cr/0.1.0'
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
      `call getAuthorizationToken with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/registries/{registryName}:getAuthorizationToken',
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
      *  返回指定repository中images的元数据，包括image size, image tags和creation date。

      * @param {Object} opts - parameters
      * @param {integer} [opts.pageNumber] - 页码；默认为1  optional
      * @param {integer} [opts.pageSize] - 分页大小；默认为20；取值范围[10, 100]  optional
      * @param {filter} [opts.filters] - registryName - 镜像仓储名称
repositoryName - 镜像库名称
imageDigest - 镜像哈希值
imageTag - 镜像标签
tagStatus - 打标TAGGED或没打标UNTAGGED
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param imageDetail imageDetails
      * @param number totalCount
      */

  describeImages (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeImages"
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
    Object.assign(queryParams, this.buildFilterParam(opts.filters, 'filters'))

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cr/0.1.0'
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
      `call describeImages with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/images',
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
      *  查询配额
      * @param {Object} opts - parameters
      * @param {filter} [opts.filters] - resourceTypes - 资源类型，暂时只支持 [registry, repository]，支持同时查询两种配额。
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param quota quotas
      */

  describeQuotas (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeQuotas"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    Object.assign(queryParams, this.buildFilterParam(opts.filters, 'filters'))

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cr/0.1.0'
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
      `call describeQuotas with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/quotas',
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
      *  通过参数创建注册表。

      * @param {Object} opts - parameters
      * @param {string} [opts.registryName] - 用户定义的registry名称。&lt;br&gt; DNS兼容registry名称规则如下：
 &lt;br&gt; 不可为空，且不能超过32字符 &lt;br&gt; 以小写字母开始和结尾，支持使用小写字母、数字、中划线(-)
  optional
      * @param {string} [opts.description] - 注册表描述，&lt;a href&#x3D;&quot;https://www.jdcloud.com/help/detail/3870/isCatalog/1&quot;&gt;参考公共参数规范&lt;/a&gt;。
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param registry registry
      */

  createRegistry (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createRegistry"
      )
    }

    opts = opts || {}

    let postBody = {}
    if (opts.registryName !== undefined && opts.registryName !== null) {
      postBody['registryName'] = opts.registryName
    }
    if (opts.description !== undefined && opts.description !== null) {
      postBody['description'] = opts.description
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cr/0.1.0'
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
      `call createRegistry with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/registries',
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
      *  通过参数创建镜像仓库。
仓库名称可以分解为多个路径名，每个名称必须至少包含一个小写字母数字，考虑URL规范。
支持包含段划线或者下划线进行分割，但不允许点&#39;.&#39;，多个路径名之间通过(&quot;/&quot;)连接，总长度不超过256个字符，当前只支持二级目录。

      * @param {Object} opts - parameters
      * @param {string} opts.registryName - 注册表名称
      * @param {string} [opts.repositoryName] - 镜像仓库名称。
可以专有模式如默认命名空间nginx-web-app；或者和命名空间一起将多个仓库聚集在一起如 project-a/nginx-web-app。
  optional
      * @param {string} [opts.description] - 注册表描述，&lt;a href&#x3D;&quot;https://www.jdcloud.com/help/detail/3870/isCatalog/1&quot;&gt;参考公共参数规范&lt;/a&gt;。
  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param repositoryShort repository
      */

  createRepository (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createRepository"
      )
    }

    opts = opts || {}

    if (opts.registryName === undefined || opts.registryName === null) {
      throw new Error(
        "Missing the required parameter 'opts.registryName' when calling createRepository"
      )
    }

    let postBody = {}
    if (opts.repositoryName !== undefined && opts.repositoryName !== null) {
      postBody['repositoryName'] = opts.repositoryName
    }
    if (opts.description !== undefined && opts.description !== null) {
      postBody['description'] = opts.description
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      registryName: opts.registryName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  cr/0.1.0'
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
      `call createRepository with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/registries/{registryName}/repositories',
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
}
module.exports = JDCloud.CR
