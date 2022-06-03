import player from "./modules/play-audio/player.js";

player.playlist([
  'https://65381g.ha.azioncdn.net/5/b/6/6/joaogomescantor-meu-cafofo-746c2fe7.mp3',
  'https://65381g.ha.azioncdn.net/8/a/8/f/osbaroesdapisadinha-baroes-da-pisadinha-galera-do-interior-dfbc6061.mp3'
])

const playButton = document.getElementById('btnPlay')
player.playButton(playButton, res => {
  playButton.innerHTML = res.pause ? 'play_circle_outline' : 'pause_circle_outline'
})

const nextButton = document.getElementById('btnNext')
player.nextButton(nextButton, item => {
  console.log(item);
})

const prevButton = document.getElementById('btnPrev')
player.prevButton(prevButton, item => {
  console.log(item);
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