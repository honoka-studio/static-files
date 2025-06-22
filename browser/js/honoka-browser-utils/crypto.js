if(window.honokaBrowserUtils == null) {
  window.honokaBrowserUtils = {}
}

window.honokaBrowserUtils.crypto = {
  randomUUID: () => {
    let s = []
    let hexDigits = '0123456789abcdef'
    for(let i = 0; i < 36; i++) {
      s[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'
    s[19] = hexDigits.substring((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = '-'
    return s.join('')
  }
}

crypto.randomUUID = window.honokaBrowserUtils.crypto.randomUUID;
