var PhotoPaper = function(config){

	var photoContainer,
		image,
		caption, 
		profile, 
		text,
		imageUrl = config.url || 'img/fondo3.jpg',
		captionText = config.text || 'PhotoPaper demo',
		profilePic = config.profilePic || 'img/profile.jpg';

	

	var render = function(){
		photoContainer = document.createElement('div');
		image = document.createElement('img');
		caption = document.createElement('div');
		profile = document.createElement('img');
		text = document.createElement('p');

		document.body.appendChild(photoContainer).setAttribute('id', 'photoContainer');
		photoContainer.appendChild(image).classList.add('picture');
		photoContainer.appendChild(caption).classList.add('caption');
		caption.appendChild(profile).classList.add('profile');
		caption.appendChild(text);

		image.src = imageUrl;
		profile.src = profilePic;
		text.innerHTML = captionText;

		//Set listener for device orientation.
		window.addEventListener('deviceorientation', handleMotion, true);

	} 

	var handleMotion = function(data){
		var orientation = {x : data.gamma + 90, y : data.beta - 90, z : data.alpha};

		if (orientation.x > 100) {
			caption.classList.add('fadeOut');
			image.classList.remove('moveRight', 'center');
			image.classList.add('moveLeft');
			// text.innerHTML = image.classList;

		}else if(orientation.x < 80) {
			caption.classList.add('fadeOut');
			image.classList.remove('moveLeft', 'center');
			image.classList.add('moveRight');
			// text.innerHTML = image.classList;

		}else{
			caption.classList.remove('fadeOut');
			image.classList.remove('moveRight', 'moveLeft');
			image.classList.add('center');
			// text.innerHTML = image.classList;

		};
	}

	render();

};

var photo = new PhotoPaper({});
