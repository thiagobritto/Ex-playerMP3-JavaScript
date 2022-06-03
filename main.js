import player from "./modules/play-audio/player.js";
import playlist from "./playlist.js"

const list = playlist.map(res => res.audio)

function setup(index) {
  capa.src = playlist[index].image
  artista.innerHTML = playlist[index].artist
  musica.innerHTML = playlist[index].music
}

setup(0)

/**
 * player mp3
 */

player.playlist(list)

const playButton = document.getElementById('btnPlay')
player.playButton(playButton, res => {
  playButton.innerHTML = res.pause ? 'play_circle_outline' : 'pause_circle_outline'
  setup(res.track)
})

const nextButton = document.getElementById('btnNext')
player.nextButton(nextButton, res => {
  setup(res.track)
})

const prevButton = document.getElementById('btnPrev')
player.prevButton(prevButton, res => {
  setup(res.track)
})

const displayDurationTime = document.getElementById('displayDuration')
player.displayDurationTime(display => {
  displayDurationTime.innerHTML = display()
})

const displayCurrentTime = document.getElementById('displayCurrent')
player.displayCurrentTime(display => {
  displayCurrentTime.innerHTML = display()
})

const progressBar = document.getElementById('timeline')
player.progressBar(progressBar)

const volumeBar = document.getElementById('volume')
player.volumeBar(volumeBar)