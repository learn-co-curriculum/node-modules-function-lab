var expect = require('chai').expect
var path = require('path')
var cp = require('child_process')

// Same function as in the module.js, nothing to look at here
function hash (password, salt) {
  var crypto = require('crypto')
  var shasum = crypto.createHmac('sha1', salt)
  shasum.update(password)
  var d = shasum.digest('hex')
  return d
}
// Utilities to generate random passwords and salts so students can't hard-code the answers
function randomString() {
  return (Math.random()).toString()
}
function randomStringWithTimestamp(){
  return (Math.random()+ Date.now()).toString()
}

var plainPassword1 = randomString()
var salt1 = randomStringWithTimestamp()
var hash1 = hash(plainPassword1, salt1)

var plainPassword2 = randomString()
var salt2 = randomStringWithTimestamp()
var hash2 = hash(plainPassword2, salt2)

// Module mode
describe('main.js', function () {
  it('must export hash which hashes passwords', function(done){
    var hash = require(path.join(__dirname, '../main'))
    expect(hash(plainPassword1, salt1)).to.equal(hash1)
    expect(hash(plainPassword2, salt2)).to.equal(hash2)
    done()
  })
})


// CLI mode
describe('"node main ' + plainPassword1 + ' ' + salt1 + '" command', function () {
  it('must return hash ' + hash1, function(done){
    passwordAppProcess = cp.spawn('node', ['main', plainPassword1, salt1])
    passwordAppProcess.stdout.on('data', (data) => {
      data = data.toString('utf8').replace('\n','')
      expect(data).to.equal(hash1)
      passwordAppProcess.kill()
      done()
    })
  })
})

describe('"node main ' + plainPassword2 + ' ' + salt2 + '" command', function () {
  it('must return hash ' + hash1, function(done){
    passwordAppProcess = cp.spawn('node', ['main', plainPassword2, salt2])
    passwordAppProcess.stdout.on('data', (data) => {
      data = data.toString('utf8').replace('\n','')
      expect(data).to.equal(hash2)
      passwordAppProcess.kill()
      done()
    })
  })
})
