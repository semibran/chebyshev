var abs = Math.abs
var max = Math.max

module.exports = function chebyshev(a, b) {
  return max(abs(b.x - a.x), abs(b.y - a.y))
}
