import Sound from '../index.js'
import playlist from './playlist.js'

Sound.playlist(playlist)

Sound.playPause('#play', {
    play: 'play_circle_filled',
    pause: 'pause_circle_filled'
})

Sound.displayTitle('#title')
Sound.displayCover('#cover')
Sound.displaySinger('#singer')

Sound.displayCurrentTime('#time', {
    separator: ':',
    antprecede: true
})

Sound.displayDurationTime('#fulltime', {
    separator: ':',
    antprecede: true
})

Sound.volumeUp('#volume-up')
Sound.volumeDown('#volume-down')
//Sound.volumeDisplay('#vdis')
Sound.volumeChange('#volume')

Sound.timeline('#timeline')//.progressBar('#progress-bar')

Sound.next('#next')
Sound.prev('#prev')

Sound.replay('#replay', {
    call: callButtons
})

Sound.shuffle('#shuffle', {
    call: callButtons
})

function callButtons(el, res)
{
    if(res){
        el.style.color = 'cyan';
    } else {
        el.style.color = '#f3f3f3';
    }
}