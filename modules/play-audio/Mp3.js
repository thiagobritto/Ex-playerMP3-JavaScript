
const privated = Symbol('private')

class Mp3 {

  constructor(playlist) {
    this[privated] = {
      audio: new Audio(),
      playlist: typeof playlist == 'string' ? [playlist] : playlist
    }
    this.playStart = 0
    this.playEnd = this[privated].playlist.length - 1
    this.playSrc = this[privated].playlist[this.playStart]
    this.status = this[privated].audio.paused
    this._autoPlay = false
    this.loaded()
    this.ended()
  }

  play(call) {
    if (this.status) {
      this[privated].audio.play()
    } else {
      this[privated].audio.pause()
    }
    this.status = this[privated].audio.paused
    if (call) call({
      pause: this.status,
      track: this.playStart
    })
  }

  next(call) {
    if (this.playStart < this.playEnd)
      this.playSrc = this[privated].playlist[++this.playStart];
    if (call) call({
      pause: this.status,
      track: this.playStart
    })
  }

  prev(call) {
    if (this.playStart > 0)
      this.playSrc = this[privated].playlist[--this.playStart];
    if (call) call({
      pause: this.status,
      track: this.playStart
    })
  }

  loaded(call) {
    this[privated].audio.onloadeddata = () => {
      const { duration } = this[privated].audio
      if (!this.status)
        this[privated].audio.play()
      if (call)
        call({
          duration
        })
    }
  }

  ended(call) {
    this[privated].audio.onended = () => {
      if (this.playStart == this.playEnd || !this.autoPlay) {
        this.status = this[privated].audio.paused
        if (call) {
          call({
            pause: this.status,
            track: this.playStart
          })
        }
        return false
      }
      if (this.autoPlay) this.next()
      if (call) call({
        track: this.playStart
      })
    }
  }

  update(call) {
    this[privated].audio.ontimeupdate = () => {
      const { currentTime, duration } = this[privated].audio
      if (call)
        call({
          currentTime,
          currentTimePerc: currentTime * 100 / duration,
        })
    }
  }

  set playSrc(src) {
    this[privated].audio.src = src
  }

  set autoPlay(value) {
    if (typeof value == 'boolean')
      this._autoPlay = value
  }

  get autoPlay() {
    return this._autoPlay
  }

  set change(value) {
    if (isFinite(value)) {
      const { duration } = this[privated].audio
      this[privated].audio.currentTime = duration * value / 100
    }
  }

  get change() {
    return this[privated].audio.currentTime
  }

  set volume(value) {
    if (isFinite(value))
      this[privated].audio.volume = value / 100
  }

  get volume() {
    return this[privated].audio.volume
  }

}

export default Mp3