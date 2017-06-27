module.exports = function chebyshev(a, b) {
  var farthest = 0
  var dimensions = Math.max(a.length, b.length)
  for (var i = 0; i < dimensions; i++) {
    var distance = Math.abs((b[i] || 0) - (a[i] || 0))
    if (distance > farthest) {
      farthest = distance
    }
  }
  return farthest
}
