if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}
$(document).ready(function(){ 
    $('ul').slideDown('slow');
});

$('#sf').live('click',function(){
  $('#map').css('display','block');
  $('#main_content').css('height','720px');
  $('#good_music').css('margin-top', '512px');
  $('#shadows').css('background-color', 'black');
});
