# Using Function Module

## Objectives

1. Write non-npm module with a functional inheritance pattern (module.exports = function(){})
1. Import your module from another file
1. Invoke a method from the module

## Introduction

Companies got hacked every day. As an app developer, you always need to assume your app and data will be compromise. For this reason, you must use encryption so the attacker will get only encrypted data, not plain passwords or personal information of your customers. This will give you some time to mitigate the damage.

Obviously, the encryption code needs to be a module so other teams and developers can use it. Additionally, your script must run as a stand alone CLI program.

The way to store passwords is to hash them with a salt (random string). Then discard passwords and only store the hashed passwords and salts. When the user comes back, you take the salt from the database, hash the plain password provided by the user to compare it against your hashed password. Boom. You got yourself some protection (not 100% though) from attackers.

In this lab, you'll master how to create, export and import a function module, i.e., a dynamic module.

## Instructions

1. Create a file `module.js` with `module.exports = function(options){}`
1. Copy method from the snippet below into `module.js` and export the it
1. Create a file `main.js`
1. Import your module in `main.js` with `require()`
1. Add logic to check if the `main.js` a module or a CLI command with `module === require.main` (true if it's a CLI command).
1. Implement CLI program and module

### CLI Mode (CLI Program)

1. Check that `module === require.main` is true.
1. In `main.js`, invoke the method from the `module.js` module with these CLI parameters `process.argv[2]` and `process.argv[3]` (Refresh CLI arguments by visiting the corresponding lessons)
1. Print the result of the function with `console.log()` for the CLI command
1. Print error messages if one of the CLI arguments are missing
1. Keep `main.js` and `module.js` in the same folder
1. Run `node main PASSWORD SALT`

### Module Mode

1. In `main.js`, check that `module === require.main` is false.
1. In `main.js`, export the function from `module.js`

### Verify

1. Run `npm test` to verify

`module === require.main` is true if the module is not imported by other Node files and false if it's imported by other files.

The method which you need to place in `module.js` uses core `crypto` library (no need to install it with npm, it's part of the Node platform). It takes salt and password and hashes them with SHA1 algorithm. It's an expressions which returns the hash:


```js
function(password, salt) {
  var crypto = require('crypto')
  var shasum = crypto.createHmac('sha1', salt)
  shasum.update(password)
  var d = shasum.digest('hex')
  return d
}
```

You can read the official documentation provided in Resources.

### Resources

* [Crypto official documentation](https://nodejs.org/docs/v0.6.18/api/crypto.html#crypto_crypto)
* [Encryption and password hashing with Node.js](https://masteringmean.com/lessons/46-Encryption-and-password-hashing-with-Nodejs)
* [bcrypt module](https://github.com/ncb000gt/node.bcrypt.js)