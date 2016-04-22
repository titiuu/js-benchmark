var SIZE = 1000000
var array1 = []
var array2 = []
var array3 = new Float32Array(SIZE*3)
var array4 = []


for (var i = 0; i < SIZE; i++) {
  array1.push([1, 2, 3])
  array2.push(vectorTypedArray(1, 2, 3))
  array3[i] = 1
  array3[i+1] = 2
  array3[i+2] = 3
  array4.push(1)
  array4.push(2)
  array4.push(3)
}


function test1() {
  console.log('Testing array of arrays.')
  var array1_clone = array1.slice(0, array1.length)
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    array1[i][0] = array1_clone[i][0]
    array1[i][1] = array1_clone[i][1]
    array1[i][2] = array1_clone[i][2]
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test2() {
  console.log('Testing array of TypedArrays.')
  var array2_clone = array2.slice(0, array2.length)
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    array1[i][0] = array2_clone[i][0]
    array1[i][1] = array2_clone[i][1]
    array1[i][2] = array2_clone[i][2]
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test3() {
  console.log('Testing long TypedArray.')
  var array3_clone = array3.slice(0, array3.length)
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    array3[i] = array3_clone[i]
    array3[i+1] = array3_clone[i+1]
    array3[i+2] = array3_clone[i+2]
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test4() {
  console.log('Testing long Array.')
  var array4_clone = array4.slice(0, array4.length)
  var start = performance.now()

  var sum_x = 0
  var sum_y = 0
  var sum_z = 0
  for (var i = 0; i < SIZE; i++) {
    array4[i] = array4_clone[i]
    array4[i+1] = array4_clone[i+1]
    array4[i+2] = array4_clone[i+2]
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

test1()
test2()
test3()
test4()
