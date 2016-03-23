// count.js
// get counts of things like last.fm scrobbles
var a;
var track;
var spotify;
var itunes;
var amazon;
orca = {
	count: function(url, id) {
		$.ajax({
		    url: url,
		    success: function(data){
	    	  switch (id) {
	    	  	case "#nowPlaying":
				      if (data.recenttracks.track[0]['@attr']) {
								track = data.recenttracks.track[0].name + " " + data.recenttracks.track[0].artist['#text'];
								songName = data.recenttracks.track[0].name;
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
              }
							break;
				    case "#lastfm":
							if (data.recenttracks.track[0]['@attr']) {
								song = '"' + data.recenttracks.track[0].name + '" by ' + data.recenttracks.track[0].artist['#text'];
						    count = orca.addComma(data.user.playcount);
						    $(id)[0].innerHTML = count + '<span class="type"> songs scrobbled</span>';
								document.title = song + ' - ' + count + " plays";
							}
					    break;
		    }
			}
		});
	},
	init: function() {
		apps = $('.app');
		orca.render(apps);
	},
        addComma: function addCommas(nStr)
	{
	    nStr += '';
	    var x = nStr.split('.');
	    var x1 = x[0];
	    var x2 = x.length > 1 ? '.' + x[1] : '';
	    var rgx = /(\d+)(\d{3})/;
	    while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	    }
	    return x1 + x2;
	},
	render: function(apps) {
		for (var i = 0; i < apps.length; i++){
			var url = $(apps[i]).data("url");
			var id = "#" + apps[i].id;
			orca.count(url, id);
		}
		$(".spinner").hide();
	}
}
$(document).ready(orca.init);
setInterval(orca.init, 10000);
