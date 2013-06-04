// count.js
// get counts of things like last.fm scrobbles
var a;
usm = {
	count: function(url, id) {
		$.ajax({
		    url: url,
		    success: function(data){
	    	  switch (id) {
	    	  	case "#flickr":
				      count = data.person.photos.count["_content"];
				      $(id)[0].innerHTML = count + '<span class="type"> photos</span>';
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
		apps = $('div[id]');
		for (var i = 0; i < apps.length; i++){
			url = $(apps[i]).data("url");
			id = "#" + apps[i].id;
			usm.count(url, id);
		}
	}
}
$(document).ready(usm.init);
setInterval(usm.init, 5000)