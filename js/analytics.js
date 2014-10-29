// analytics.js

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41779774-1', 'usmanity.com'); ga('send', 'pageview');

window.outbound=window.outbound||[];window.outbound.methods=["identify","track","registerApnsToken","registerGcmToken","disableApnsToken","disableGcmToken"];window.outbound.factory=function(t){return function(){var o=Array.prototype.slice.call(arguments);o.unshift(t);window.outbound.push(o);return window.outbound}};for(var i=0;i<window.outbound.methods.length;i++){var key=window.outbound.methods[i];window.outbound[key]=window.outbound.factory(key)}if(!document.getElementById("outbound-js")){var script=document.createElement("script");script.type="text/javascript";script.id="outbound-js";script.async=true;script.src="//cdn.outbound.io/pub-7d8f3bb0e6613fd9bce6646bae622a6f.js";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first)}
