export const timer = (hours, mins, secs) => {
  setInterval(() => {
    document.getElementById('seconds').innerText = secs < 10 ? '0' + secs : secs
    document.getElementById('minutes').innerText = mins < 10 ? '0' + mins : mins
    document.getElementById('hours').innerText =
      hours < 10 ? '0' + hours : hours
    secs--
    if (secs === 0) {
      if (mins === 0) {
        mins = 59
        secs = 59
        hours--
      } else {
        secs = 59
        mins--
      }
    }
  }, 1000)
}
