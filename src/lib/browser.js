require('babel-polyfill')

var hehehe = new Promise(function (resolve, reject) {})
var bbbbb = 'jfksaldj'.startsWith('/')
console.log(hehehe)
console.log(bbbbb)
require('./browser_loader')
var JC = require('./core')
require('../services/all')
module.exports = JC
