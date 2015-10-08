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
								// $(id).append('<div class="links"></div>');
								usm.showRank();
              }
							break;
				    case "#lastfm":
					    count = usm.addComma(data.user.playcount);
					    $(id)[0].innerHTML = count + '<span class="type"> songs scrobbled</span>';
							document.title = count + " plays";
					    break;
		    }
			}
		});
	},
	init: function() {
		apps = $('.app');
		usm.render(apps);
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
			usm.count(url, id);
		}
		$(".spinner").hide();
	},
	showRank: function(){
		var top500, rank;
		var el = $(".now-playing");

		$.ajax({
		  url:"https://www.kimonolabs.com/api/c06r53dy?apikey=Nh7rKXZcHCVAiEVYvYN8Y0Ba1uBtLgB3",
		  crossDomain: true,
		  dataType: "jsonp",
		  success: function (response) {
		    top500 = response;
				_.each(top500.results.collection1, function(song){
					if (song.track.text.toLowerCase() === songName.toLowerCase()){
						rank = song.rank;
					}
				});

				if (rank){
					console.log("This song is #" + rank + " out of my top 500.");
					el.append("<div>This song is #" + rank + " out of my top 500.</div>");
				}
		  },
		  error: function (xhr, status) {
		    console.log("error found" + status);
		  }
		});


	}
}
$(document).ready(usm.init);
setInterval(usm.init, 10000);
