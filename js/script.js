document.onmousemove = function (){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://vignette.wikia.nocookie.net/flutterbutter/images/6/62/Twilight_Sparkle_Pixel_Dance.gif/revision/latest?cb=20140516115830" id="pony">');
	var pony = document.getElementById('pony');
	pony.style.position = 'fixed';

	document.onmousemove = function(event){
		pony.style.left = event.clientX -20+'px';
		pony.style.top = event.clientY -20+'px';
	}

}