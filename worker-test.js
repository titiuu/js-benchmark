
let numThreads = navigator.hardwareConcurrency || 4
let workers = []
for (let i = 0; i < numThreads; i++) {
  let blob = new Blob(['(' + workerFunc.toString() + ')()'], { type: 'text/javascript' })
  let url = URL.createObjectURL(blob)
  workers.push(new Worker(url))
}

let SIZE = 8000
let parallel = true

let arr = new Float32Array(SIZE)

for (let i = 0; i < SIZE; i++) {
  arr[i] = i
}

/*
console.log('Starting..')
let start = performance.now()

let taskLength = (SIZE / numThreads) | 0
let results = []
for (let i = 0; i < numThreads; i++) {
  let taskData = arr.slice(i * taskLength, (i+1) * taskLength)
  results.push(taskData)
}

let output = new Float32Array(SIZE)
for (let i = 0; i < numThreads; i++) {
  for (let j = 0; j < taskLength; j++) {
    output[j + i*taskLength] = results[i][j]
  }
}
console.log('Time:', performance.now() - start)
*/

console.log('Starting..')
let start = performance.now()
var promis = 0

if (parallel) {
  parallelMap(arr, fib, (results) => {
    console.log('Callback:', performance.now() - promis)
    console.log('Total:', performance.now() - start)
  })
} else {
  for (let i = 0; i < SIZE; i++) {
    let a = fib(arr[i])
    arr[i] = arr[i] + 4
  }
  console.log('Total:', performance.now() - start)
}


function fib(num) {
  let fibSize = 10
  let result = [0, 1]
  for(var i=0,j=1,k=0; k<fibSize;i=j,j=x,k++ ){
    x=i+j;
    result.push(x);
  }
  return result
}

function workerFunc() {
  function deserializeFunc(func) {
    let startArgs = func.indexOf('(') + 1;
    let endArgs = func.indexOf(')');
    let startBody = func.indexOf('{') + 1;
    let endBody = func.lastIndexOf('}');
    
    return new Function(func.substring(startArgs, endArgs),
      func.substring(startBody, endBody))
  }

  self.onmessage = (msg) => {
    let start = performance.now()
    let func = deserializeFunc(msg.data.func)
    let data = msg.data.args
    console.log('Deserialize:', performance.now() - start)
    
    if (msg.data.type === 'map') {
      for (let i = 0; i < data.length; i++) {
        let a = func(data[i])
        data[i] = data[i] + 4
      }
    }
    
    console.log('From worker:', performance.now())
    self.postMessage(data, [data.buffer])
    console.log('Worker:', performance.now() - start)
  }
}

function parallelMap(data, func, callback, transfer = true) {
  let start = start1 = performance.now()
  let output = new Float32Array(data.length)
  let results = []
  let taskLength = (data.length / numThreads) | 0
  let remainder = data.length % numThreads
  
  for (let i = 0; i < numThreads; i++) {
    let taskData = data.slice(i * taskLength, (i+1) * taskLength)
    let worker = workers[i]
    let msg = { args: taskData, func: func.toString(), type: 'map' }
    
    console.log('Preparing:', performance.now() - start)
    if (transfer) {
      worker.postMessage(msg, [msg.args.buffer])
    } else {
      worker.postMessage(msg)
    }
    
    worker.onmessage = (msg) => {
      console.log('From worker received:', performance.now())
      let start = performance.now()
      results.push(msg.data)
      if (results.length === numThreads) {
        for (let i = 0; i < numThreads; i++) {
          for (let j = 0; j < taskLength; j++) {
            output[j + i*taskLength] = results[i][j]
          }
        }
        console.log('Postprocessing:', performance.now() - start)
        promis = performance.now()
        callback(output)
      }
    }
    worker.onerror = (err) => {
      results.push(err)
    }
  }
  console.log('ParallelMap:', performance.now() - start1)
  /*
  return Promise.all(promises).then((results) => {
    let start = performance.now()
    for (let i = 0; i < numThreads; i++) {
      for (let j = 0; j < taskLength; j++) {
        output[j + i*taskLength] = results[i][j]
      }
    }
    console.log('Postprocessing:', performance.now() - start)
    return output
  })
  */
}
