var array1 = []
var array2 = []
var array3 = []
var array4 = []
var array5 = []
var SIZE = 1000000

function setup() {
  for (var i = 0; i < SIZE; i++) {
    array1.push(new vectorClass(1, 2, 3))
    array2.push(vectorTypedArray(1, 2, 3))
    array3.push(vectorArray(1, 2, 3))
    array4.push(vectorObject(1, 2, 3))
    array5.push(vectorTypedArray2(1, 2, 3))
  }
}

function test1() {
  console.log('Testing class based vectors.')
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    sum_x = array1[i].x
    sum_y = array1[i].y
    sum_z = array1[i].z
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test2() {
  console.log('Testing TypedArray based vectors.')
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    sum_x = array2[i][0]
    sum_y = array2[i][1]
    sum_z = array2[i][2]
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test3() {
  console.log('Testing array based vectors.')
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    sum_x = array3[i][0]
    sum_y = array3[i][1]
    sum_z = array3[i][2]
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test4() {
  console.log('Testing object based vectors.')
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    sum_x = array4[i].x
    sum_y = array4[i].y
    sum_z = array4[i].z
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test5() {
  console.log('Testing TypedArray based vectors with helpers.')
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    sum_x = array5[i].x
    sum_y = array5[i].y
    sum_z = array5[i].z
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
