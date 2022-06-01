
import Player from '../Player/index.js'

const Controls = {}

/* PUBLIC Propeties */
Controls.op = {}
Controls.el = {}


const playlist = []
let onOff = false
let replay = false
let shuffle = false
let trackNow = 0

/* PUBLIC Methods */
Controls.track = function(track)
{
    Player.setTrack(track)
}

Controls.playlist = function(list = [])
{
    if(list.length && typeof list === 'object'){
        if(list[trackNow]['track']){
            playlist.push(...list)
            Controls.track(playlist[trackNow]['track'])
        }
    }
}

Controls.playPause = function(endpoint, options = {})
{
    Controls.el['playPause'] = document.querySelector(endpoint)
    Controls.op['playPause'] = options

    Controls.el['playPause'].onclick = () => 
    {
        if(Player.paused){
            Player.play()
            onOff = true
        } else {
            Player.pause()
            onOff = false
        }
        setPlayPauseButton()
    }
}

Controls.displayTitle = function(endpoint, options = {})
{
    Controls.el['displayTitle'] = document.querySelector(endpoint)
    Controls.op['displayTitle'] = options
}

Controls.displayCover = function(endpoint, options = {})
{
    Controls.el['displayCover'] = document.querySelector(endpoint)
    Controls.op['displayCover'] = options
}

Controls.displaySinger = function(endpoint, options = {})
{
    Controls.el['displaySinger'] = document.querySelector(endpoint)
    Controls.op['displaySinger'] = options
}

Controls.displayCurrentTime = function(endpoint, options = {})
{
    Controls.el['displayCurrentTime'] = document.querySelector(endpoint)
    Controls.op['displayCurrentTime'] = options
}

Controls.displayDurationTime = function(endpoint, options = {})
{
    Controls.el['displayDurationTime'] = document.querySelector(endpoint)
    Controls.op['displayDurationTime'] = options
}

Controls.volumeUp = function(endpoint, options = {})
{
    Controls.el['volumeUp'] = document.querySelector(endpoint)
    Controls.op['volumeUp'] = options

    Controls.el['volumeUp'].onclick = () => {
        const step = 10;

        if(Player.volume < 100){
            if(Player.volume + step >= 100){
                setVolume(100);
            } else {
                setVolume(Player.volume + step);
            }
        }
    }
}

Controls.volumeDown = function(endpoint, options = {})
{
    Controls.el['volumeDown'] = document.querySelector(endpoint)
    Controls.op['volumeDown'] = options

    Controls.el['volumeDown'].onclick = () => {
        const step = 10;

        if(Player.volume > 0){
            if(Player.volume > 0 && Player.volume < step){
                setVolume(0);
            } else {
                setVolume(Player.volume - step);
            }
        }

    }
}

Controls.volumeChange = function(endpoint, options = {})
{
    Controls.el['volumeChange'] = document.querySelector(endpoint)
    Controls.op['volumeChange'] = options
    Controls.el['volumeChange'].max = 100
    Controls.el['volumeChange'].value = Player.volume

    Controls.el['volumeChange'].oninput = volumeChange
    Controls.el['volumeChange'].onchange = volumeChange
    
    function volumeChange({target}) {
        setVolume(target.value);
    }
}

Controls.volumeDisplay = function(endpoint, options = {})
{
    Controls.el['volumeDisplay'] = document.querySelector(endpoint)
    Controls.op['volumeDisplay'] = options
    Controls.el['volumeDisplay'].innerHTML = Player.volume
}

Controls.timeline = function(endpoint, options = {})
{
    Controls.el['timeline'] = document.querySelector(endpoint)
    Controls.op['timeline'] = options
    Controls.el['timeline']['max'] = 100
    Controls.el['timeline']['value']  = 0

    Controls.el['timeline'].oninput = timeline
    Controls.el['timeline'].onchange = timeline
    
    function timeline({target}) {
        Player.setCurrentTime(target.value);
        setTimelineProgressBar({timeline: target.value})
    }
    return { progressBar: Controls.timelineProgressBar };
}

Controls.timelineProgressBar = function(endpoint, options = {})
{
    Controls.el['timelineProgressBar'] = document.querySelector(endpoint)
    Controls.op['timelineProgressBar'] = options
}

Controls.next = function(endpoint, options = {})
{
    Controls.el['next'] = document.querySelector(endpoint)
    Controls.op['next'] = options

    Controls.el['next'].onclick = () => next()
}

Controls.prev = function(endpoint, options = {})
{
    Controls.el['prev'] = document.querySelector(endpoint)
    Controls.op['prev'] = options

    Controls.el['prev'].onclick = () => prev()
}

Controls.replay = function(endpoint, options = {})
{
    Controls.el['replay'] = document.querySelector(endpoint)
    Controls.op['replay'] = options
    Controls.el['replay'].onclick = () => {
        
        replay = !replay
        
        const { on, off } = Controls.op['replay'];

        if(replay){
            Player.loop().on()
            if(on && off)
                Controls.el['replay'].innerHTML = on;
        } else {
            Player.loop().off()
            if(on && off)
                Controls.el['replay'].innerHTML = off;
        }

        Controls.op['shuffle']['call'](Controls.el['replay'], replay)
    }
}

Controls.shuffle = function(endpoint, options = {})
{
    Controls.el['shuffle'] = document.querySelector(endpoint)
    Controls.op['shuffle'] = options
    Controls.el['shuffle'].onclick = () => {
        
        shuffle = !shuffle

        const { on, off } = Controls.op['shuffle'];

        if(shuffle){
            if(on && off)
                Controls.el['shuffle'].innerHTML = on;
        } else {
            if(on && off)
                Controls.el['shuffle'].innerHTML = off;
        }

        Controls.op['shuffle']['call'](Controls.el['shuffle'], shuffle)
    }
}

Controls.getControls = function()
{
    return {
        elements: Controls.el,
        options: Controls.op
    } 
}


/* PRIVATE Methods */
function timeFormat(time, separator = ':', antprecede = true)
{
    let minutes = Math.floor(time / 60);
    let secunds = Math.floor(time % 60);
    
    if(minutes < 10 && antprecede) minutes = `0${minutes}`;
    if(secunds < 10) secunds = `0${secunds}`;

    return minutes + separator + secunds;
}

function setPlayPauseButton()
{
    if(Controls.op['playPause']){
        if(onOff){
            if(Controls.op['playPause'].pause){
                Controls.el['playPause'].innerHTML = 
                Controls.op['playPause'].pause;
            }  
        } else {
            if(Controls.op['playPause'].play) {
                Controls.el['playPause'].innerHTML = 
                Controls.op['playPause'].play;
            } 
        }
    }

}

function setDisplayTitle()
{
    if(Controls.el['displayTitle'] && playlist[trackNow]['title'])
        Controls.el['displayTitle'].innerHTML = playlist[trackNow]['title'];
}

function setDisplayCover()
{
    if(Controls.el['displayCover'] && playlist[trackNow]['cover'])
        Controls.el['displayCover'].src = playlist[trackNow]['cover'];
}

function setDisplaySinger()
{
    if(Controls.el['displaySinger'] && playlist[trackNow]['singer'])
        Controls.el['displaySinger'].innerHTML = playlist[trackNow]['singer'];
}

function setDisplayCurrentTime(currentTime)
{
    if(Controls.el['displayCurrentTime']){
        
        const {separator, antprecede} = Controls.op['displayCurrentTime'];
        
        Controls.el['displayCurrentTime'].innerHTML = timeFormat(
            currentTime, 
            separator, 
            antprecede
        );
    }
}

function setDisplayDurationTime(duration)
{
    if(Controls.el['displayDurationTime']){
        
        const {separator, antprecede} = Controls.op['displayDurationTime'];
        
        Controls.el['displayDurationTime'].innerHTML = timeFormat(
            duration, 
            separator, 
            antprecede
        );
    }
}

function setVolume(value)
{
    Player.setVolume(value)
    if(Controls.el['volumeChange']) 
        Controls.el['volumeChange'].value = value;

    if(Controls.el['volumeDisplay'])
        Controls.el['volumeDisplay'].innerHTML = value;
} 

function setTimeline(currentTime, duration)
{
    if(Controls.el['timeline'])
        Controls.el['timeline'].value = currentTime * 100 / duration;
}

function setTimelineProgressBar({currentTime, duration, timeline})
{
    if(Controls.el['timelineProgressBar']){
        if(timeline){
            Controls.el['timelineProgressBar'].style.width = `${timeline}%`;
        } else {
            Controls.el['timelineProgressBar'].style.width = `${currentTime * 100 / duration}%`;
        }
    }
}

function next()
{
        
    if (trackNow < playlist.length - 1) {
        trackNow++;
        Controls.track(playlist[trackNow]['track']);    
    }
}

function prev()
{
    if (trackNow > 0) {
        trackNow--;
        Controls.track(playlist[trackNow]['track']);
    }
}

function randomInterval(a, b)
{
    let res = Math.ceil(Math.random() * b);
    if (res < a) res = randomInterval(a, b);
    return res;
}


/* Call Events */
Player.update(({currentTime, duration}) => {

    setTimelineProgressBar({currentTime, duration})
    setDisplayCurrentTime(currentTime);
    setTimeline(currentTime, duration);

})

Player.loaded(({currentTime, duration}) => {
    
    setDisplayDurationTime(duration);
    setTimeline(currentTime, duration);
    setDisplayTitle();
    setDisplayCover();
    setDisplaySinger();

    if(onOff){
        Player.play()
    }
    
})

Player.ended(()=>{
    
    if(trackNow === playlist.length-1) {
        onOff = false
        setPlayPauseButton() 
    } else if(shuffle) {
        trackNow = randomInterval(1, playlist.length) -1;
        Controls.track(playlist[trackNow]['track']);
    } else {
        next()
    }
})

export default Controls