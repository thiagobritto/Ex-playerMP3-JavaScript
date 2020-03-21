# Player Mp3 Custom 

<br><br>

## O Player

_Construído em: HTML CSS JavaScript_, o Player Mp3 Custom é totalmente customizável, livre para novas implementações, e melhorias de software. Basicamente o usuário vai importar para o arquivo `player.js` ao seu HTML, juntamente com as fonts, e o CSS do `materializecss.com` para dar um pouco mais de estilo, mais se CSS for a sua praia o MATERIALIZE-CSS pode ser ignorado. 

<br><br>


![Player Mp3 Custom - imagem de demonstração](https://github.com/thiagobritto/player-mp3-custom/blob/master/img.jpg?raw=true)

<br><br>

### Exemplo

```html
<!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!--Compiled and minified CSS-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<!--Player Mp3 Custom-->
<script type="text/javascript" src="js/package/player.js"></script>        
```
<br><br>

## Configurando

No seu script você vai instanciar um novo objeto `Player`, que precisa de alguns parâmetros obrigatórios para funcionar. Embora não precise de todos os recursos em seu sistema, todos os parâmetros do objeto `Player` têm que serem informados porém não necessariamente eles precisem existir no seu codigo HTML. Esse parametros são os __IDs dos Controllers__, ou seja, a interface (botões).

<br>

### Exemplo

```javascript
var play = new Player({
    display: 'playMp3',
    btnPlayPause: "play-pause",
    btnStop: "stop",
    btnPrev: "prev",
    btnNext: "next",
    btnMuted: "muted",
    btnLoop: "loop",
    displayVolume: "volume",
    displayTimeUp: "timeUp",
    displayTimeDown: "timeDown",
    displayTimeAll: "timeAll",
    displayTimeLine: "timeline",
    btnMenu: "menu"
});
```
<br><br>

Após ser configurado os controladores do Player, ainda no seu script, vamos configurar as faixas de áudio, chamando ```play.setTrack([obj], int)``` passando como primeiro parâmetro um array de objetos com as informações do áudio, e como segundo parâmetro podemos passar a faixa inicial, por default é ```0``` a primeira mesmo.

<br><br>

### Exemplo

```javascript
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
```
<br><br>

#### Pronto!
Tudo configurado vamos apenas implementar a interface, mesmo estando nos arquivos acima estou deixando a minha implementação de exemplo.

<hr>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!--My CSS-->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    
    <!-- Title -->
    <title>PLayer - Mp3</title>

</head>
<body>
    
    <div class="container">
        <div class="row">
			<!--Controllers Player Mp3--> 
            <div id="playMp3">
                <div class="player">
                    <div id="play-pause" class="material-icons">
                        play_arrow
                    </div>
                    <div id="stop" class="material-icons">
                        stop
                    </div>
                    <div>
                        <span id="timeUp">00:00</span>
                        /
                        <span id="timeAll">00:00</span>
                    </div>
                    <div class='input-play-range'>
                        <input id="timeline" type="range" name="timtline" min="0" max="0" step="1">
                    </div>
                    <div id="prev" class="material-icons">
                        fast_rewind
                    </div>
                    <div id="next" class="material-icons">
                        fast_forward
                    </div>
                    <div id="muted" class="material-icons">
                        volume_up
                    </div>    
                    <div class='input-play-range'>
                        <input id="volume" type="range" name="volume" min="0" max="100" step="1">
                    </div class='input-range'>
                    <div id="loop" class="material-icons">
                        autorenew
                    </div>
                    <div id="menu" class="material-icons">
                        more_vert
                    </div>   
                </div>
            </div>
			<!--end Controllers Player Mp3-->
        </div>
    </div>

    <!--Player Mp3 Custom-->
    <script type="text/javascript" src="js/package/player.js"></script>        
    
    <!--My Script-->        
    <script type="text/javascript" src="js/main.js"></script> 

</body>
</html>
```
