var SIZE = 10000000
var array1 = new Array(SIZE)
var array2 = new Float64Array(SIZE)


function setup() {
  for (var i = 0; i < SIZE; i++) {
    array1[i] = i
    array2[i] = i
  }
}

function test1() {
  console.log('Testing regular array.')
  var start = performance.now()

  var sum = 0
  for (var i = 0; i < SIZE; i++) {
    sum += array1[i]
    array1[i] = sum
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test2() {
  console.log('Testing TypedArray.')
  var start = performance.now()

  var sum = 0
  for (var i = 0; i < SIZE; i++) {
    sum += array1[i]
    array1[i] = sum
  }
  var time = performance.now() - start
  console.log('Duration:', time)
  console.log(' ')
}

setup()
test1()
test2()
