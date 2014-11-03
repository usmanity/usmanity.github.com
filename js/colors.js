var getDailyHex = function(){
  var d = new Date();
  var month = (d.getMonth() + 1).toString();
  var day = function(){ if (d.getDate() < 10) { return '0' + d.getDate() } return d.getDate().toString() };
  var year = (d.getFullYear() - 2000).toString();
  var dailyHex = month + day() + year;
  return dailyHex;
}

var getSecondsHex = function(){
  var d = new Date();
  var hours = function(){ if (d.getHours() < 10) { return '0' + d.getHours() } return d.getHours().toString() };
  var minutes = function(){ if (d.getMinutes() < 10) { return '0' + d.getMinutes() } return d.getMinutes().toString() };
  var seconds = function(){ if (d.getSeconds() < 10) { return '0' + d.getSeconds() } return d.getSeconds().toString() };
  return hours() + minutes() + seconds();
}

var updateColors = function(){
  var color = '#' + getSecondsHex();
  $('body, a, #content #intro, ol li a').css({
    'color': color
  });
}

$(document).ready(function(){
  window.setInterval(updateColors, 1000);
});
