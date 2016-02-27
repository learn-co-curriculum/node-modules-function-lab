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

//
// test('node version', function (t) {
//   t.plan(2)
//   child = cp.exec('node main 9F422554 59093A04-90BF-4CCC-A110-04C6CB126AF6',
//   function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout)
//     console.log('stderr: ' + stderr)
//     t.equal(stderr, '')
//     if (error !== null) {
//       console.log('exec error: ' + error)
//     }
//     stdout = stdout.replace('\n','')
//     t.equal(stdout, '2d69d9d7ddd280a0357a69e87e9cf3c6728f6e77')
//   })
// })
//
//
// test('node version', function (t) {
//   t.plan(2)
//   child = cp.exec('node main DB3BA7BC 5DC259EF-B109-410D-9D4E-2478D41FA0C8',
//   function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout)
//     console.log('stderr: ' + stderr)
//     t.equal(stderr, '')
//     if (error !== null) {
//       console.log('exec error: ' + error)
//     }
//     stdout = stdout.replace('\n','')
//     t.equal(stdout, '1a90184102a779acff5c7c75ec7c5a84a8dbc440')
//   })
// })
