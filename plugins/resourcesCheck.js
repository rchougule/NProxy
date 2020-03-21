const imageExists = (path) => {
  return path.match(/\.png|\.jpg/) !== null;
}

const cssExists = (path) => {
  return path.match(/.css/) !== null;
}

module.exports = {
  cssExists,
  imageExists
}