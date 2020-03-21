const colors = require('colors/safe');

const logger = (requestData) => {
  console.log(`${colors.cyan(requestData.method)} : ${colors.bgBlack('http://')}${colors.bgBlack(requestData.host)}${colors.bgBlack(requestData.path)} - ${requestData.allowed ? colors.green("ALLOWED") : colors.red("BLOCKED")}`);
}

module.exports = {
  logger
}