# Using Function Module

## Objectives

1. Write non-npm module with a functional inheritance pattern (module.exports = function(){})
1. Import your module from another file
1. Invoke a method from the module

## Introduction

In this lab, you'll master how to create, export and import a function module, i.e., a dynamic module.

## Instructions

1. Create a file `module.js` with `module.exports = function(options){}`
2. Copy method from the snippet below into `module.js` and export the it
3. Create a file `main.js` 
4. Import your module in `main.js` with `require()`
5. In `main.js`, invoke the method from the module with these parameters `process.argv[2]` and `process.argv[3]`
6. Keep `main.js` and `module.js` in the same folder
6. Run `$ npm test` to verify


The method which you need to place in a module:

```js
function(password, salt) {
  var crypto = require('crypto')
  var shasum = crypto.createHmac('sha1', salt)
  shasum.update(password)
  var d = shasum.digest('hex')
  return d
}
```

### Extra Info


* [Crypto official documentation](https://nodejs.org/docs/v0.6.18/api/crypto.html#crypto_crypto)
* [Encryption and password hashing with Node.js](https://masteringmean.com/lessons/46-Encryption-and-password-hashing-with-Nodejs)
* [bcrypt module](https://github.com/ncb000gt/node.bcrypt.js)