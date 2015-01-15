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

// segment.io snippet
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.0.1";
analytics.load("ad6mnfWuUbA6dkUZtSMhEQSFSQM0Cr2Q");
analytics.page()
}}();
