$(function(){
  $.ajax({
    url: 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=94549edc5a4a57eb27e08e164d359b6c&photoset_id=72157630981136960&extras=url_m&format=json&nojsoncallback=1&api_sig=f6bd4d006fb891a184509a7b102c3571',
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