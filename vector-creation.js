var SIZE = 100000

function test1() {
  console.log('Testing class based vectors.')
  var start = performance.now()

  var array = []
  for (var i = 0; i < SIZE; i++) {
    array.push(new vectorClass(i, i+2, i+3))
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test2() {
  console.log('Testing TypedArray based vectors.')
  var start = performance.now()

  var array = []
  for (var i = 0; i < SIZE; i++) {
    array.push(vectorTypedArray(i, i+2, i+3))
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test3() {
  console.log('Testing array based vectors.')
  var start = performance.now()

  var array = []
  for (var i = 0; i < SIZE; i++) {
    array.push(vectorArray(i, i+2, i+3))
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test4() {
  console.log('Testing object based vectors.')
  var start = performance.now()

  var array = []
  for (var i = 0; i < SIZE; i++) {
    array.push(vectorObject(i, i+2, i+3))
  }

  var time = performance.now() - start
  console.log('Duration:', time)
}

function test5() {
  console.log('Testing TypedArray based vectors with helpers.')
  var start = performance.now()

  var array = []
  for (var i = 0; i < SIZE; i++) {
    array.push(vectorTypedArray2(i, i+2, i+3))
  }

  var time = performance.now() - start
  console.log('Duration:', time)
  console.log(' ')
}

test1()
test2()
test3()
test4()
test5()
