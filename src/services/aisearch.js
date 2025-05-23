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
 * webSearch接口
 * webSearch接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

const JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'aisearch'
Service._services[serviceId] = true

/**
 * aisearch service.
 */

JDCloud.AISEARCH = class AISEARCH {
  constructor (config = {}) {
    this.init(config)
    return new this.service(config)
  }
  init (config) {
    let serviceName = 'aisearch'
    let version = config.version || JDCloud.config.version
    let versionFlag = 'v1'
    if (version && version[serviceName]) {
      versionFlag = version[serviceName]
    }
    try {
      this.service = require(`../repo/${serviceName}/${versionFlag}/${serviceName}`)
    } catch (e) {
      throw new Error(
        `The version '${versionFlag}' of API ${serviceName} is undefined!`
      )
    }
  }
}

module.exports = JDCloud.AISEARCH
