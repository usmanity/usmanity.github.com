// count.js
// get counts of things like last.fm scrobbles
var a;
var track;
var spotify;
var itunes;
var amazon;
usm = {
	count: function(url, id) {
		$.ajax({
		    url: url,
		    success: function(data){
	    	  switch (id) {
	    	  	case "#nowPlaying":
				      if (data.recenttracks.track[0]['@attr']) {
								track = data.recenttracks.track[0].name + " " + data.recenttracks.track[0].artist['#text'];
                song = '"' + data.recenttracks.track[0].name + '" by ' +
											"<a href='http://www.amazon.com/gp/search?ie=UTF8&camp=1789&creative=9325&index=music&linkCode=ur2&tag=usmanitycom0f-20&linkId=EB2WTXJOXLNBYR26&keywords=" +
											data.recenttracks.track[0].artist['#text'] + "'>" + data.recenttracks.track[0].artist['#text'];
                $(id)[0].innerHTML = 'Now listening to ' + song;
								console.info("Now playing: " + track);

								var url = 'https://api.spotify.com/v1/search?limit=1&type=track&query=' + track;
								$.get(url, function(data){
										spotifyResponse = data;
										var trackId = spotifyResponse.tracks.items[0].uri;
										spotify = $("<a href='" + trackId +"' class='open-in-spotify'>Spotify</a>");
										console.log(trackId);
										$(".links").append(spotify);
								});
								$(id).append('<div class="links"></div>');
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
setInterval(usm.init, 100000);
