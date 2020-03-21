const colors = require('colors/safe');

const logger = (requestData) => {
  console.log(`${colors.cyan(requestData.method)} : ${colors.bgBlack('http://')}${colors.bgBlack(requestData.host)}${colors.bgBlack(requestData.path)}`)
}

module.exports = {
  logger
}