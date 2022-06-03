import Mp3 from ".//Mp3.js";

const player = {

  playlist(list) {
    this.mp3 = new Mp3(list)
    this.mp3.autoPlay = !this.mp3.autoPlay
  },

  playButton(btn, call) {
    btn.onclick = () => this.mp3.play(call) 
    this.mp3.ended(call)
  },

  nextButton(btn, call) {
    btn.onclick = () => this.mp3.next(call)
  },

  prevButton(btn, call) {
    btn.onclick = () => this.mp3.prev(call)
  },

  displayDurationTime(call) {
    this.mp3.loaded(res => {
      if (call)
        call((sep, pre) => formatDisplay(res.duration, sep, pre))
    })
  },

  displayCurrentTime(call) {
    this.mp3.update(res => {
      if (this._progressBar)
        this._progressBar.value = res.currentTimePerc
        const parent = this._progressBar.parentNode
        parent.style.setProperty('--progress', res.currentTimePerc + '%')
        
      if (call)
        call((sep, pre) => formatDisplay(res.currentTime, sep, pre))
    })
  },

  progressBar(bar) {
    this._progressBar = bar
    this._progressBar.max = 100
    this._progressBar.oninput = ({ target }) => {
      this.mp3.change = target.value
    }
  },

  volumeBar(bar) {
    bar.max = 100
    bar.parentNode.style.setProperty('--progress', '100%')
    bar.oninput = () => {
      this.mp3.volume = bar.value
      bar.parentNode.style.setProperty('--progress', bar.value + '%')
    }
  }

}

function formatDisplay(time, sep = ':', prec = '0') {
  let minutes = Math.floor(time / 60);
  let secunds = Math.floor(time % 60);

  if (minutes < 10) minutes = prec + minutes;
  if (secunds < 10) secunds = prec + secunds;

  return minutes + sep + secunds;
}

export default player
