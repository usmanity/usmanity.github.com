// count.js
// get counts of things like last.fm scrobbles
var a;
usm = {
	count: function(url, id) {
		$.ajax({
		    url: url,
		    success: function(data){
	    	  switch (id) {
	    	  	case "#nowPlaying":
				      if (data.recenttracks.track[0]['@attr']) {
                song = data.recenttracks.track[0].name + " by " + data.recenttracks.track[0].artist['#text'];
                $(id)[0].innerHTML = "Now listening to " + song;
              }
							break;
				    case "#lastfm":
					    count = data.user.playcount;
					    $(id)[0].innerHTML = count + '<span class="type"> songs scrobbled</span>';
					    break;
		    }
			}
		});
	},
	init: function() {
		apps = $('.app');
		usm.render(apps);
	},
	render: function(apps) {
		for (var i = 0; i < apps.length; i++){
			var url = $(apps[i]).data("url");
			var id = "#" + apps[i].id;
			usm.count(url, id);
		}
		$(".spinner").hide();
	}
}
$(document).ready(usm.init);
setInterval(usm.init, 10000);
