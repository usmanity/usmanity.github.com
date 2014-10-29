// analytics.js

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41779774-1', 'usmanity.com'); ga('send', 'pageview');


var ob = new outbound('7d351997bb370d8f7788d211a8877fd8');
var now = new Date;
var userAttributes = {
  attributes : {
                   "date": now
               }
}
ob.identify("user" + Math.random(), userAttributes);
