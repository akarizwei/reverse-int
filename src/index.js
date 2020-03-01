module.exports = function reverse (n) {
  return n.toString().split('').filter(num => num.match(/\d+/g)).reverse().join('')
}
