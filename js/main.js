(function(){

var photo = document.getElementsByClassName('picture')[0],
	caption = document.getElementsByClassName('caption')[0],
	text = document.getElementById('text'),
	photoList = ['fondo.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg'];

//Set listener for device orientation.
window.addEventListener('deviceorientation', handleMotion, true);

photo.src = 'img/' + photoList[Math.floor(Math.random()*photoList.length)]; 

function handleMotion(data){
	var orientation = {x : data.gamma + 90, y : data.beta - 90, z : data.alpha};

	if (orientation.x > 100) {
		caption.classList.add('fadeOut');
		photo.classList.remove('moveRight', 'center');
		photo.classList.add('moveLeft');
		text.innerHTML = photo.classList;
		console.log(photo.classList);
	}else if(orientation.x < 80) {
		caption.classList.add('fadeOut');
		photo.classList.remove('moveLeft', 'center');
		photo.classList.add('moveRight');
		text.innerHTML = photo.classList;
		console.log(photo.classList);
	}else{
		caption.classList.remove('fadeOut');
		photo.classList.remove('moveRight', 'moveLeft');
		photo.classList.add('center');
		text.innerHTML = photo.classList;
		console.log(photo.classList);
	};
}

})();