
/* CLASS PLAYER */

const Player = function (dataPlay) {

/* Atributos Class */

	this.track=[];
	this.loop = 0;
	this.stop = false;

/* end Atributos Class */

/* Construct Class */

	this._construct = (data) => {
		for(x in data){
			if(window.document.getElementById(data[x])){
				this[x] = window.document.getElementById(data[x]);
			}else{
				this[x] = false;
			}
		}
	} // end this._construct()
	this._construct(dataPlay);

/* end Construct Class */

/* Methods Class */ 

	this.setTrack = (data, track) => {
		for(x in data){
			this.track.push(data[x]);
		}
		if(track>0){
			this.trackAtual = track;
			this.setDisplay(this.track[this.trackAtual].src);
		}else{
			this.trackAtual = 0;
			this.setDisplay(this.track[this.trackAtual].src);
		}
		this.main();
	} // end this.setTrack()
	this.setDisplay = (srcDefault) => {
		this.audio = new Audio(srcDefault);
		this.display.appendChild(this.audio);
		let sliderShow = window.document.createElement('div');
		sliderShow.setAttribute('id','sliderShow');
		this.display.appendChild(sliderShow);
		this.sliderShow = window.document.getElementById('sliderShow');
		// elements
		this.track.name = window.document.createElement('h1');
		this.track.name.innerText = this.track[this.trackAtual].name;
		this.track.author = window.document.createElement('h5');
		this.track.author.innerText = this.track[this.trackAtual].author;
		this.track.desc = window.document.createElement('p');
		this.track.desc.innerHTML = this.track[this.trackAtual].desc;

		this.track.legend = window.document.createElement('div');
		this.track.legend.appendChild(this.track.name);				
		this.track.legend.appendChild(this.track.author);				
		this.track.legend.appendChild(this.track.desc);				

		this.sliderShow.style.background = `url('`+this.track[this.trackAtual].img+`') no-repeat center center / cover`;
		this.sliderShow.appendChild(this.track.legend);
	} // end this.setDisplay()
	this.setPlayer = () => {
		this.audio.setAttribute('src', this.track[this.trackAtual].src);
		this.track.name.innerText  = this.track[this.trackAtual].name;
		this.track.author.innerText = this.track[this.trackAtual].author;
		this.track.desc.innerHTML  = this.track[this.trackAtual].desc;
		this.sliderShow.style.background = 'url("'+this.track[this.trackAtual].img+'") no-repeat center center / cover';
	} // end this.setPlayer()
	this.playPause = () => {
		if(this.audio.paused && !this.stop){
			this.btnPlayPause.classList.toggle('btn_on');
			this.btnPlayPause.innerText = 'pause';
			this.audio.play();
		}else{
			if(!this.stop){
				this.btnPlayPause.classList.toggle('btn_on');
				this.btnPlayPause.innerText = 'play_arrow';
				this.audio.pause();
			}
		}
	} // end this.playPause()
	this.next = () => {
		if(this.trackAtual < this.track.length-1){
			if(this.audio.paused){
				this.trackAtual++;
				this.setPlayer();
			}else{
				this.trackAtual++;
				this.setPlayer();
				this.audio.play();
			}
		}else{
			if(this.audio.paused){
				this.trackAtual=0;
				this.setPlayer();
			}else{
				this.trackAtual=0;
				this.setPlayer();
				this.audio.play();
			}
		}
	} // end this.next()
	this.prev = () => {
		if(this.trackAtual > 0){
			if(this.audio.paused){
				this.trackAtual--;
				this.setPlayer();
			}else{
				this.trackAtual--;
				this.setPlayer();
				this.audio.play();
			}
		}
	} // end this.prev()
	this.endTrack = () => {
		if(this.audio.paused){
			this.trackAtual = this.track.length-1;
			this.setPlayer();
		}else{
			this.trackAtual = this.track.length-1;
			this.setPlayer();
			this.audio.play();
		}
	} // end this.endTrack()
	this.setLoop = () => {
		switch (this.loop) {
			case 0:
				this.btnLoop.innerText = 'autorenew';
				break;
			case 1:
				this.btnLoop.classList.toggle('btn_on');
				this.btnLoop.innerText = 'loop';
				this.audio.setAttribute('loop','');
				break;
			case 2:
				this.btnLoop.classList.toggle('btn_on');
				this.btnLoop.innerText = 'all_inclusive';
				this.audio.removeAttribute('loop');
				break;
				//cached//autorenew//all_inclusive//loop
		}
	} // end this.setLoop()
	this.loopCall = () => {
		if(this.loop < 2){
			this.loop++;
			this.setLoop();
		}else{
			this.loop = 0;
			this.setLoop();
		}
	} // end this.loopCall()
	this.setMuted = () => {
		this.audio.muted = !this.audio.muted;
		this.btnMuted.innerText = this.audio.muted ? 'volume_off' : 'volume_up' ;
	} // end this.setMuted()
	this.setVolume = (value) => {
		this.audio.volume = value / this.displayVolume.max;
		this.audio.muted = false;
		this.btnMuted.innerText = this.audio.volume == 0 ? 'volume_down' : 'volume_up' ;
	} // end this.setVolume()
	this.playConfig = () => {
		if(this.loop == 0 && this.trackAtual < this.track.length-1){
			this.next();
			this.audio.play();
		}else if(this.loop == 0 && this.trackAtual == this.track.length-1){
			this.btnPlayPause.classList.toggle('btn_on');
			this.btnPlayPause.innerText = 'play_arrow';
		}else if (this.loop == 2){
			this.next();
			this.audio.play();
		}
	} // end this.playConfig()
	this.setTimeLine = (timtLine) => {
		this.audio.currentTime = timtLine;
	} // end setTimeLine()
	this.setTime = (duration) => {
		let minutes = Math.floor(duration / 60);
		let seconds = Math.floor(duration % 60);
		minutes = '0' + minutes;
		seconds = '0' + seconds;
		return minutes.slice(-2) +":"+ seconds.slice(-2);
	} // end setTime()
	this.setStop = () => {
		this.btnStop.classList.toggle('btn_on');
		this.stop = !this.stop;
		if(!this.audio.paused){
			this.audio.pause();
			this.setTimeLine(0);
			this.setTime(0);
			this.displayTimeLine.value=0;
			this.btnPlayPause.classList.toggle('btn_on');
			this.btnPlayPause.innerText = 'play_arrow';
		}
	} // end setStop()
	this.menu = () => {
		this.sliderShow.classList.toggle('sliderShow_on');
	} // end this.menu()
/* end Methods Class */

/* Main Script */

	// Auto Events Script
		this.main = () => {
			this.displayVolume.value = this.displayVolume.max;
			this.audio.onloadeddata = () => {
				this.audio.onended = () => this.playConfig();
				this.displayTimeAll.innerText = this.setTime(this.audio.duration);
				this.displayTimeDown.innerText = this.setTime(this.audio.duration);
				this.displayTimeUp.innerText = this.setTime(0);
				this.displayTimeLine.value = 0;
				this.displayTimeLine.max = this.audio.duration;
			}
			this.audio.ontimeupdate = () => {
				this.displayTimeUp.innerText = this.setTime(this.audio.currentTime);
				this.displayTimeDown.innerText = this.setTime(this.audio.duration-this.audio.currentTime);
				this.displayTimeLine.value = this.audio.currentTime;
			} 
		}
	// end Auto Events Script

	// Events Script
	
		this.btnPlayPause.onclick = () => this.playPause();
		this.btnNext.onclick = () => this.next();
		this.btnPrev.onclick = () => this.prev();
		this.btnPrev.ondblclick = () => this.endTrack();
		this.btnLoop.onclick = () => this.loopCall();
		this.btnMuted.onclick = () => this.setMuted();
		this.displayVolume.oninput = () => this.setVolume(this.displayVolume.value);
		this.displayVolume.onchange = () => this.setVolume(this.displayVolume.value);
		this.displayTimeLine.oninput = () => this.setTimeLine(this.displayTimeLine.value);
		this.displayTimeLine.onchange = () => this.setTimeLine(this.displayTimeLine.value);
		// se não precisar passar parametro
		this.btnStop.onclick = this.setStop;
		this.btnMenu.onclick = this.menu;
	
	// end Events Script

/* end Main Script */

} // end Player()
