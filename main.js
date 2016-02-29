var hash = require('./module.js')
if (module === require.main) {
  if (!process.argv[2] || !process.argv[3]) return console.error('Please provide plain password and salt as CLI arguments')
  console.log(hash(process.argv[2], process.argv[3]))
} else {
  module.exports = hash
}
