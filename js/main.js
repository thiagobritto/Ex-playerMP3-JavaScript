
/* New Obj Player */

var play = new Player({
	display: 'playMp3',
	btnPlayPause: "play-pause",
	btnStop: "stop",
	btnPrev: "prev",
	btnNext: "next",
	btnMuted: "muted",
	btnLoop: "loop",
	displayVolume: "volume",
	displayTimeUp: "timeUp",
	displayTimeDown: "timeDown",
	displayTimeAll: "timeAll",
	displayTimeLine: "timeline",
	btnMenu: "menu"
});

/* Setting Tracks */

play.setTrack([
	{
		name: 'Linkin Park',
		author: 'Final Masquerade',
		img: 'https://via.placeholder.com/600x200/888888/FFFFFF/?text=reference+image',
		src: './source/audio_demo/init_final_masquerade.mp3',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum labore laudantium sed doloremque placeat ea nisi, officia consequuntur, illum aut suscipit repellat voluptatum error! Asperiores corrupti architecto recusandae atque. <br> <a href="#"><button class="btn-button">linck do album</button></a>'
	},
	{
		name: 'Linkin Park',
		author: 'New Divide',
		img: 'https://via.placeholder.com/600x300/888888/FFFFFF/?text=reference+image',
		src: './source/audio_demo/init_new_divide.mp3',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum labore laudantium sed doloremque placeat ea nisi, officia consequuntur, illum aut suscipit repellat voluptatum error! Asperiores corrupti architecto recusandae atque.'	
	},
	{
		name: 'Linkin Park',
		author: 'Crawling',
		img: 'https://via.placeholder.com/600x300/888888/FFFFFF/?text=reference+image',
		src: './source/audio_demo/init_crawling.mp3',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum labore laudantium sed doloremque placeat ea nisi, officia consequuntur, illum aut suscipit repellat voluptatum error! Asperiores corrupti architecto recusandae atque.'
	},
	{
		name: 'AC DC',
		author: 'Highway to Hell',
		img: 'https://via.placeholder.com/600x300/888888/FFFFFF/?text=reference+image',
		src: './source/audio_demo/init_highway_to_hell.mp3',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum labore laudantium sed doloremque placeat ea nisi, officia consequuntur, illum aut suscipit repellat voluptatum error! Asperiores corrupti architecto recusandae atque.'
	},
	{
		name: 'AC DC',
		author: 'Rock N Roll Train',
		img: 'https://via.placeholder.com/600x300/888888/FFFFFF/?text=reference+image',
		src: './source/audio_demo/init_rock_n_roll_train.mp3',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum labore laudantium sed doloremque placeat ea nisi, officia consequuntur, illum aut suscipit repellat voluptatum error! Asperiores corrupti architecto recusandae atque.'
	},
	{
		name: 'AC DC',
		author: 'Back in Black',
		img: 'https://via.placeholder.com/600x300/888888/FFFFFF/?text=reference+image',
		src: './source/audio_demo/init_back_in_black.mp3',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum labore laudantium sed doloremque placeat ea nisi, officia consequuntur, illum aut suscipit repellat voluptatum error! Asperiores corrupti architecto recusandae atque.'	
	}
]);
