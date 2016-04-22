function vectorClass(x, y, z) {
  this.x = x
  this.y = y
  this.z = z
}

function vectorTypedArray(x, y, z) {
  return new Float64Array([x, y, z])
}

function vectorTypedArray2(x, y, z) {
  var vector = new Float64Array([x, y, z])
  vector.x = vector[0]
  vector.y = vector[1]
  vector.z = vector[2]
  return vector
}

function vectorArray(x, y, z) {
  return [x, y, z]
}

function vectorObject(x, y, z) {
  return { x: x, y: y, z: z }
}
