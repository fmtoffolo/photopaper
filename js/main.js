var PhotoPaper = function(config){

	var config = config || {},
		photoContainer,
		image,
		caption,
		pxCenter,
		pxLeft,
		pxRight, 
		profile, 
		text,
		imageUrl = config.url || 'img/fondo2.jpg',
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
		image.addEventListener('load', function(){
			console.log(image.width);
			pxCenter = -(image.width/2) + (screen.width/2);
			pxLeft = -(image.width) + (screen.width);
			pxRight = 0;
			console.log(pxLeft);
		});

		//Set listener for device orientation.
		window.addEventListener('deviceorientation', handleMotion, true);

	} 

	var handleMotion = function(data){
		var orientation = {x : data.gamma + 90, y : data.beta - 90, z : data.alpha};

		if (orientation.x > 100) {
			caption.classList.add('fadeOut');
			image.classList.remove('moveRight', 'center');
			image.style.webkitTransform = 'translateX('+pxLeft+'px)';


		}else if(orientation.x < 80) {
			caption.classList.add('fadeOut');

			image.style.webkitTransform = 'translateX('+pxRight+'px)';


		}else{
			caption.classList.remove('fadeOut');

			image.style.webkitTransform = 'translateX('+pxCenter+'px)';


		};
	}

	render();

};

var photo = new PhotoPaper();
