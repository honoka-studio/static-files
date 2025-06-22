if(window.honokaBrowserUtils == null) {
  window.honokaBrowserUtils = {}
}

window.honokaBrowserUtils.basic = {
  sleep: timeMillis => new Promise(resolve => setTimeout(resolve, timeMillis))
};
