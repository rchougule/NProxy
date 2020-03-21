const blockResources = (options, ...resources) => {
  return resources.some((resource) => resource(options.path));
}

module.exports = {
  blockResources
}