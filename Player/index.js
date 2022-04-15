const Player = {};


const $_sound = new Audio;

/* PUBLIC Propeties */
Player.volume = $_sound.volume * 100;
Player.paused = true;
Player.tracker = 0;

/* PUBLIC Methods */
Player.play = function() 
{
    if(Player.paused) $_sound.play();
}

Player.pause = function() 
{
    if(!Player.paused) $_sound.pause();
}

Player.setTrack = function(track)
{
    $_sound.src = track;
}

Player.setCurrentTime = function(value) 
{
    $_sound.currentTime = value * $_sound.duration / 100;
}

Player.setVolume = function(value) 
{
    $_sound.volume = (value / 100);
    Player.volume = Math.floor($_sound.volume * 100);
}

Player.loop = function()
{
    return ({
        on() {
            $_sound.loop = true
        },
        off() {
            $_sound.loop = false
        } 
    });
}

Player.speed = function(speed)
{
    if(speed > 0 && speed <= 2)
        $_sound.playbackRate = speed;
}

Player.update = function(callback)
{
    $_sound.ontimeupdate = () => {
        Player.paused = $_sound.paused;
        
        callback({
            currentTime: $_sound.currentTime,
            duration: $_sound.duration
        });
    }
}

Player.loaded = function(callback)
{
    $_sound.onloadeddata = () => {
        Player.paused = $_sound.paused;
        callback({
            currentTime: $_sound.currentTime,
            duration: $_sound.duration
        });
    }
}

Player.ended = function(callback)
{
    $_sound.onended = () => {
        Player.paused = $_sound.paused;
        callback({
            paused: Player.paused
        });
    }
}

export default Player;