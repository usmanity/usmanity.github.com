var KEYS = {
	auth: '32cf047b0ab949cd7774f44be913d817',
	secret: 'bc39a0efb6c5fbd1'
}
var currentPhoto = {};
var resultPhotos = {};

function jsonFlickrApi (response) {
	if (response.photos) {
		resultPhotos = _.shuffle(response.photos.photo);
		displayPhotos();
	}
	if (response.sizes) {
		renderPhoto(response.sizes.size[response.sizes.size.length - 2])
	}
}

function renderPhoto(photo) {
	$('img').attr('src', photo.source)
}

function startGettingPhotos () {
		$.ajax({
		  dataType: "jsonp",
		  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=" + KEYS.auth + "&safe_search=1&license=2%2C3%2C4%2C5%2C6%2C9&text=moon&sort=relevance&per_page=100"
		});
}

function getPhoto (id) {
	$.ajax({
	  dataType: "jsonp",
	  url: "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&api_key=" + KEYS.auth + "&photo_id=" + id,
		success: function(response) {
			console.log(response);
		}
	});
}

function displayPhotos() {
	var photo = resultPhotos.pop();
	getPhoto(photo.id);
}

$(document).ready(function(){
	startGettingPhotos();
	$('img').click(displayPhotos);
	$.event.special.swipe.handleSwipe(displayPhotos);
});
