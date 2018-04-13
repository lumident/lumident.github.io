var day = document.querySelector(".day")
var gonight = document.querySelector(".night")
var h1C
	h1C = document.querySelector(".h1Change")
gonight.setAttribute("disabled","false");

day.onclick = function(){
	h1C.innerHTML = "Сейчас ночь"
 	document.body.className = "night";
	day.setAttribute("disabled","false");
	gonight.removeAttribute("disabled");

}
gonight.onclick = function(){
	h1C.innerHTML = "Сейчас День"	
 	document.body.className = "day";
 	gonight.setAttribute("disabled","true");
 	day.removeAttribute("disabled");
 	
}

document.onmousemove = function pony(){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://vignette.wikia.nocookie.net/flutterbutter/images/6/62/Twilight_Sparkle_Pixel_Dance.gif/revision/latest?cb=20140516115830" id="pony">');
	var pony = document.getElementById('pony');
	pony.style.position = 'fixed';

	document.onmousemove = function(event){
		pony.style.left = event.clientX +10+'px';
		pony.style.top = event.clientY +10+'px';
	}

}

Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();
 

switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

document.write("<br>"+ "<br>"+ "Сегодня "+Day+" "+fMonth+" "+Year+" года");



// function nya(){
// 	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="http://i0.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif" id="nya">');
// 	var nya = document.getElementById('nya');
// 	nya.style.position = 'fixed';

// 	document.onmousemove = function(event){
// 		nya.style.left = event.clientX +10+'px';
// 		nya.style.top = event.clientY +10+'px';
// 	}

// }


var nyaCat = document.querySelector(".nyaCat");

nyaCat.onclick = function()  {
	goCat()
	var audio = new Audio(); 
  	audio.src = 'http://www.fuxoft.cz/tmp/dl/mp3/ringtones/NyanCat.mp3'; // Указываем путь к звуку "клика"
 	audio.autoplay = true;
 	nya()

}


function goCat(){
		var posX = 100, posY = 100, px = 0, py = 0, an = false;
var nyan = $('.nyan');
var rainbow = null;
var altura = 800;
var largura = parseInt($('body').width());
var tamanhoTela = parseInt(largura/9);
var pilha = [];
$(".nyan").css({ display: "block" });
$("#pony").css({ display: "none" });
$(".nyaCat").css({ display: "none" });
$(".loader-inner").css({ display: "none" });
$(".reload").css({ display: "block"});

function getRandomInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

$(document).on('mousemove', function( event ) {
  posX = event.pageX;
  posY = event.pageY;
})

for(var i = 0; i < tamanhoTela; i++)
{
  var rain = $('<div class="rainbow"/>').css('left', i*9+'px');
  $('body').append(rain);
}
rainbow = $('.rainbow');

function criarEstrela()
{
    var rand = getRandomInt(3, 14);
  var tempoDeVida = getRandomInt(5,10);
    var star = $('<div class="star"/>').css({
      width:rand+'px',
      height:rand+'px',
      left: largura-10+'px', 
      top: Math.floor((Math.random()*altura)+1), 
      '-webkit-transition': 'all '+tempoDeVida+'s linear',
      '-webkit-transform': 'translate(0px, 0px)'
    });
    $('body').append(star);
    
    window.setTimeout(function(){
      star.css({
        '-webkit-transform': 'translate(-'+largura+'px, 0px)'
      });
    }, getRandomInt(5,10)*10);  

  window.setTimeout(function(){star.remove();}, tempoDeVida*1000);
}

function moveNyan()
{
    var tamX = nyan.width()/2,
      tamY = nyan.height()/2;
    px += (posX - px - tamX) / 50;
    py += (posY - py - tamY) / 50;
 
    nyan.css({
      left: px + 'px',
      top: py + 'px'
    });
}
function peidaArcoIris()
{
  var qnt = Math.floor(nyan.position().left/9)+2;

  if(pilha.length >= qnt) pilha.pop();
  
  pilha.unshift(py);
  
  rainbow.hide();
  for(var i = 0; i < qnt; i++)
  {
    var am = (i%2);
    if(an) am = (i%2) ? 0 : 1 ;
    
    rainbow.eq(qnt-i).css({top: pilha[i]+am}).show();
  }
}

window.setInterval(function(){
  moveNyan();
  peidaArcoIris();
}, 10);

window.setInterval(function(){ criarEstrela(); }, 300);

window.setInterval(function(){ an = !an; }, 500);

var frame = 0;
window.setInterval(function(){   
  nyan.css({'background-position': 34*frame+'px'});
  frame++;
}, 100);
};

var reload = document.querySelector(".reload");
reload.onclick = function(){
	window.location.reload(true);
}
