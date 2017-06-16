const camelCase = require('lodash.camelcase')
const mapKeys = require('lodash.mapkeys')

function camelize (o) {
  if (typeof o === 'string') {
    return camelCase(o)
  } else {
    return mapKeys(o, (_, k) => camelCase(k))
  }
}

module.exports = camelize
