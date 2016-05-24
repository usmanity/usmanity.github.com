$(function(){
  console.log('page loaded');
  $('section').click(function(){
    window.location = $(this).data('link');
  })
});
