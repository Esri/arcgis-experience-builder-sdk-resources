console.log('Start worker')

self.onmessage = function (e) {
  console.log('worker received message', e.data)
  if (e.data.type === 'start') {
    // simulate a long running task
    setTimeout(() => {
      self.postMessage({
        type: 'done',
      })
    }, 1000)
  }
}