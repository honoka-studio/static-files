if(window.honokaBrowserUtils == null) {
  window.honokaBrowserUtils = {}
}

window.honokaBrowserUtils.basic = {
  sleep: timeMillis => new Promise(resolve => setTimeout(resolve, timeMillis)),
  setAndClearInterval(block, interval, times) {
    let count = 0
    let task = setInterval(() => {
      try {
        block()
      } catch(e) {
        console.error(e)
      }
      count++
      if(count >= times) clearInterval(task)
    }, interval)
  }
};
