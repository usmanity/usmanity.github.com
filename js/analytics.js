(function(f, a, t, h, o, m){
	a[h]=a[h]||function(){
		(a[h].q=a[h].q||[]).push(arguments)
	};
	o=f.createElement('script'),
	m=f.getElementsByTagName('script')[0];
	o.async=1; o.src=t; o.id='fathom-script';
	m.parentNode.insertBefore(o,m)
})(document, window, '//stats.usman.xyz/tracker.js', 'fathom');
fathom('set', 'siteId', 'EMRHO');
fathom('trackPageview');

console.log("Notes about analytics: all tracking is done by Fathom which means no user info is tracked past 'did someone show up on my site?'")
