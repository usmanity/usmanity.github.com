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
window.outbound=window.outbound||[];window.outbound.methods=["identify","track","registerApnsToken","registerGcmToken","disableApnsToken","disableGcmToken"];window.outbound.factory=function(t){return function(){var o=Array.prototype.slice.call(arguments);o.unshift(t);window.outbound.push(o);return window.outbound}};for(var i=0;i<window.outbound.methods.length;i++){var key=window.outbound.methods[i];window.outbound[key]=window.outbound.factory(key)}if(!document.getElementById("outbound-js")){var script=document.createElement("script");script.type="text/javascript";script.id="outbound-js";script.async=true;script.src="//cdn.outbound.io/pub-7d8f3bb0e6613fd9bce6646bae622a6f.full.js";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first)}
window.outbound.identify(user, {email: 'muhammad+testing@usmanity.com'});
