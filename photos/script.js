$(function(){
  $.ajax({
    url: 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=9b82d57f984c408557a3003c019b8496&photoset_id=72157630981136960&extras=url_m&format=json&nojsoncallback=1&auth_token=72157630981167452-004623d512f08658&api_sig=fa81ccf0139568a62c8256f4ec9a60e5',
    success: function(data) {
      var photos = data.photoset.photo;
      console.log(photos)
      $.each(photos, function(i, v){
        $('.rs-slider').append('<li><img src="' + v.url_m + '"></li>')
      })
      $('.rs-slider').refineSlide({
        transition : 'fade',
        controls : ('arrows')
      });
    }
  })
})