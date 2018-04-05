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
