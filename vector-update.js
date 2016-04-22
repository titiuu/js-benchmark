var array1 = []
var array2 = []
var array3 = []
var array4 = []
var array5 = []
var SIZE = 1000000

function setup() {
  for (var i = 0; i < SIZE; i++) {
    array1.push(new vectorClass(i, i+2, i+3))
    array2.push(vectorTypedArray(i, i+2, i+3))
    array3.push(vectorArray(i, i+2, i+3))
    array4.push(vectorObject(i, i+2, i+3))
    array5.push(vectorTypedArray2(i, i+2, i+3))
  }
}

function test1() {
  console.log('Testing class based vectors.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array1[i].x *= 2
    array1[i].y *= 2
    array1[i].z *= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test2() {
  console.log('Testing TypedArray based vectors.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array2[i][0] *= 2
    array2[i][1] *= 2
    array2[i][2] *= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test3() {
  console.log('Testing array based vectors.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array3[i][0] *= 2
    array3[i][1] *= 2
    array3[i][2] *= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test4() {
  console.log('Testing object based vectors.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array4[i].x *= 2
    array4[i].y *= 2
    array4[i].z *= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test5() {
  console.log('Testing TypedArray based vectors with helpers.')
  var start = performance.now()

  for (var i = 0; i < SIZE; i++) {
    array5[i].x *= 2
    array5[i].y *= 2
    array5[i].z *= 2
  }

  var time = performance.now() - start
  console.log('Duration:', time)
  console.log(' ')
}

setup()
test1()
test2()
test3()
test4()
test5()
