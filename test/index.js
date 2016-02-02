var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(2)
  child = cp.exec('node main 9F422554 59093A04-90BF-4CCC-A110-04C6CB126AF6',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, '2d69d9d7ddd280a0357a69e87e9cf3c6728f6e77')
  })
})


test('node version', function (t) {
  t.plan(2)
  child = cp.exec('node main DB3BA7BC 5DC259EF-B109-410D-9D4E-2478D41FA0C8',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, '1a90184102a779acff5c7c75ec7c5a84a8dbc440')
  })
})
