const camelCase = require('lodash.camelcase')
const mapKeys = require('lodash.mapkeys')

function camelize (o) {
  return mapkeys(o, (_, k) => camelCase(k))
}

module.exports = camelize
