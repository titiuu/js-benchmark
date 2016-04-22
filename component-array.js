var array1 = []
var array2 = []

var SIZE = 10000

for (var i = 0; i < SIZE; i++) {
  var vec1 = new Float32Array(3)
  vec1[0] = 1
  vec1[1] = 2
  vec1[2] = 3
  array1.push({
    id: i,
    vec: vec1
  })
  
  var vec2 = new Float32Array(4)
  vec2[0] = i
  vec2[1] = 1
  vec2[2] = 2
  vec2[3] = 3
  array2.push(vec2)
}

function test1() {
  console.log('Testing array of object.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array1[i].vec[0] /= 2
    array1[i].vec[1] /= 2
    array1[i].vec[2] /= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test2() {
  console.log('Testing array of typed arrays.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array2[i].vec[0] /= 2
    array2[i].vec[1] /= 2
    array2[i].vec[2] /= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

test1()
test2()