// analytics.js
var browser = function(){
  if (navigator.userAgent.toString().toLowerCase().indexOf('chrome') > 0) {
    return "Chrome";
  } else if (navigator.userAgent.toString().toLowerCase().indexOf('explorer') > 0) {
    return "Internet_Explorer";
  } else if (navigator.userAgent.toString().toLowerCase().indexOf('firefox') > 0) {
    return "Firefox";
  } else {
    return "Other browser"
  }
}
var user = "";
if ($.cookie("ob_user")){
  user = $.cookie("ob_user");
} else {
  $.cookie("ob_user", browser() + "__" + Math.random());
  user = $.cookie("ob_user");
}
