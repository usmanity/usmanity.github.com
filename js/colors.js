var getHexes = function(){
  var d = new Date();
  var month = (d.getMonth() + 1).toString();
  var day = function(){ if (d.getDate() < 10) { return '0' + d.getDate() } return d.getDate().toString() };
  var year = (d.getFullYear() - 2000).toString();
  var dailyHex = month + day() + year;
  return dailyHex;
}

$(document).ready(function(){
  var color = '#' + getHexes();
  $('body, a, #content #intro, ol li a').css({
    'color': color
  });
});
