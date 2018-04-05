var day = document.querySelector("#day")
var gonight = document.querySelector("#night")
var h1C
	h1C = document.querySelector("#h1Change")

day.onclick = function(){
	h1C.innerHTML = "Сейчас ночь"
 	document.body.className = "night";
 	document.onmousemove = function pony(){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://vignette.wikia.nocookie.net/flutterbutter/images/6/62/Twilight_Sparkle_Pixel_Dance.gif/revision/latest?cb=20140516115830" id="pony">');
	var pony = document.getElementById('pony');
	pony.style.position = 'fixed';

	document.onmousemove = function(event){
		pony.style.left = event.clientX +10+'px';
		pony.style.top = event.clientY +10+'px';
	}

}
}
gonight.onclick = function(){
	h1C.innerHTML = "Сейчас День"
	
 	document.body.className = "day";
}
police.onclick = function(){	
 	document.body.className = "what";
 	
}