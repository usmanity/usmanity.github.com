$(function(){
  $.ajax({
    url: 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=94549edc5a4a57eb27e08e164d359b6c&photoset_id=72157630981136960&extras=url_m&format=json&nojsoncallback=1&auth_token=72157630989475668-af0aa4a9f76f9bbe&api_sig=181d5fdb7de3bfca6904bbbdba9f4a11',
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