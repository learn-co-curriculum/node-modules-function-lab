module.exports = function(password, salt) {
  var crypto = require('crypto')
  var shasum = crypto.createHmac('sha1', salt)
  shasum.update(password)
  var d = shasum.digest('hex')
  return d
}
