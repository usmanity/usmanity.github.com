// count.js
// get counts of things like last.fm scrobbles

u = {
	count: function(url, id) {
		var data = '';
		$.ajax({
		    url: url,
		    success: function(data){
		      count = data.person.photos.count["_content"];
		      $(id)[0].innerHTML = count;
		    }
		})
	},
}