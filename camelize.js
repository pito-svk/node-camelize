const camelCase = require('lodash.camelcase')
const mapKeys = require('lodash.mapkeys')

function customCamelCase (s) {
  if (s.charAt(0) === '-') {
    return s.charAt(0) + camelCase(s.substring(1))
  } else {
    return camelCase(s)
  }
}

function camelize (o) {
  if (typeof o === 'string') {
    return customCamelCase(o)
  } else if (Array.isArray(o)) {
    return o.map(k => camelize(k))
  } else {
    return mapKeys(o, (_, k) => customCamelCase(k))
  }
}

module.exports = camelize
