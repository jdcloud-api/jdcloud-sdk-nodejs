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
 * original image protection openapi
 * original image protection openapi
 *
 * OpenAPI spec version: v1
 * Contact: 
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader');
var JDCloud = require('../../../lib/core');
var Service = JDCloud.Service;
var serviceId = "ossopenapi"
Service._services[serviceId] = true;

/**
* ossopenapi service.
* @version 0.4.5
*/

JDCloud.OSSOPENAPI= class OSSOPENAPI extends Service {
    constructor(options = {}) {
            options._defaultEndpoint = {};
            options._defaultEndpoint.protocol = options._defaultEndpoint.protocol || 'https';
            options._defaultEndpoint.host = options._defaultEndpoint.host || 'ossopenapi.jdcloud-api.com';
            options.basePath = '/v1'; //默认要设为空""
            super( serviceId , options);
    }

      /**
      *  获取回源配置
      * @param {Object} opts - parameters
      * @param {string} opts.bucketName - Bucket名称 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param bucketBackSourceConfiguration bucketBackSourceConfiguration  
      */

    getBackSourceConfiguration(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  getBackSourceConfiguration');
          }

         opts = opts || {};

          if (opts.bucketName === undefined || opts.bucketName === null) {
               throw new Error('Missing the required parameter \'opts.bucketName\' when calling getBackSourceConfiguration');
          }

          let postBody = null;
          let queryParams = {
          };

          let pathParams = {
               'regionId': regionId,
               'bucketName': opts.bucketName 
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  ossopenapi/0.4.5',
          };
          
          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

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

          let formParams = {};

          let returnType = null;

          this.config.logger(`call getBackSourceConfiguration with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/regions/{regionId}/buckets/{bucketName}/backSource', 'GET', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
            if (callback && typeof callback === 'function') {
              return callback(null, result);
            }
            return result
            }, function (error) {
               if (callback && typeof callback === 'function') {
                 return callback(error);
               }
               return Promise.reject(error)
          });
    }

      /**
      *  添加修改回源配置
      * @param {Object} opts - parameters
      * @param {string} opts.bucketName - Bucket名称 
      * @param {array} [opts.backSourceRules] - 回源配置规则  optional 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

    putBackSourceConfiguration(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  putBackSourceConfiguration');
          }

         opts = opts || {};

          if (opts.bucketName === undefined || opts.bucketName === null) {
               throw new Error('Missing the required parameter \'opts.bucketName\' when calling putBackSourceConfiguration');
          }

         let postBody =   {
          };
           if (opts.backSourceRules !== undefined && opts.backSourceRules !== null) {
               postBody['backSourceRules'] = opts.backSourceRules
           }

          let queryParams = {};

          let pathParams = {
               'regionId': regionId,
               'bucketName': opts.bucketName 
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  ossopenapi/0.4.5',
          };
          
          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

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

          let formParams = {};

          let returnType = null;

          this.config.logger(`call putBackSourceConfiguration with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/regions/{regionId}/buckets/{bucketName}/backSource', 'PUT', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
            if (callback && typeof callback === 'function') {
              return callback(null, result);
            }
            return result
            }, function (error) {
               if (callback && typeof callback === 'function') {
                 return callback(error);
               }
               return Promise.reject(error)
          });
    }

      /**
      *  删除回源配置
      * @param {Object} opts - parameters
      * @param {string} opts.bucketName - Bucket名称 
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      */

    deleteBackSourceConfiguration(opts, regionId = this.config.regionId, callback){
         if (typeof regionId === 'function') {
           callback = regionId
           regionId = this.config.regionId
         }

          if (regionId === undefined || regionId === null) {
               throw new Error('Missing the required parameter \'regionId\' when calling  deleteBackSourceConfiguration');
          }

         opts = opts || {};

          if (opts.bucketName === undefined || opts.bucketName === null) {
               throw new Error('Missing the required parameter \'opts.bucketName\' when calling deleteBackSourceConfiguration');
          }

          let postBody = null;
          let queryParams = {
          };

          let pathParams = {
               'regionId': regionId,
               'bucketName': opts.bucketName 
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  ossopenapi/0.4.5',
          };
          
          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

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

          let formParams = {};

          let returnType = null;

          this.config.logger(`call deleteBackSourceConfiguration with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/regions/{regionId}/buckets/{bucketName}/backSource', 'DELETE', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
            if (callback && typeof callback === 'function') {
              return callback(null, result);
            }
            return result
            }, function (error) {
               if (callback && typeof callback === 'function') {
                 return callback(error);
               }
               return Promise.reject(error)
          });
    }

};
module.exports = JDCloud.OSSOPENAPI
