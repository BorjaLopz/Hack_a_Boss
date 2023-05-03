function twoDigitsTime(time) {
  return ("0" + time).slice(-2);
}

function getFullPath(req) {
  // console.log(`${req.protocol}://${req.header("host")}${req.originalUrl}`); //Debug
  return `${req.protocol}://${req.header("host")}${req.originalUrl}`;
}

module.exports = { twoDigitsTime, getFullPath };
