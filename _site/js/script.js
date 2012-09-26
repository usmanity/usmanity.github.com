

(function($){

  var GetUsername = Backbone.View.extend({

    el: $("#userInfo"),

    events: {
      'click .button' : 'getStats',
      'submit' : 'getStats',
      'keypress #username' : 'lowerUsername'
    },

    initialize: function() {
      _.bindAll(this, 'render');
      this.render();
    },

    render: function(){
      $("#js-user").removeClass("hide");
    },

    lowerUsername: function() {
      $("#username").val($("#username").val().toLowerCase());
    },

    getStats: function(){
      // validate and process form here...
      var username = $("#username").val();
      var dataString = 'user='+username;
      $('body').addClass('tracks');

      $(".btn").button('loading');
      $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&api_key=b25b959554ed76058ac220b7b2e0a026&format=json&",
        data: dataString,
        dataType: "jsonp",
        success: function(data) {
          $("#userInfo").fadeOut(1500);
          $("#user-stats").fadeIn(2500);
          console.log(data.topartists.artist);
          $.each(data.topartists.artist, function(rank, artist) {
            if (rank < 10) {
              $("#artists").append("<li>" + artist.name + "</li>");
              console.log(rank + ": "+ artist.name)
            }
          });
        }
      });

      $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?format=json&method=user.getinfo&api_key=641ea11bb6f5ba6f6013588f4a4dc927&",
        data: dataString,
        dataType: "jsonp",
        success: function(data) {
          $("#top-artists").removeClass('hide');
          $(".info").fadeIn().removeClass('hide');

          $("#playcount").text(data.user.playcount).fadeIn();
          $("#user-name").text(data.user.realname).fadeIn();
          $("#user-url").text(data.user.name).attr('href', data.user.url);
          $("#user-avatar").attr('src', data.user.image[3]["#text"]);

          console.log(data)
        }
      });

      $.ajax({
        type: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&api_key=b25b959554ed76058ac220b7b2e0a026&format=json&",
        data: dataString,
        dataType: "jsonp",
        success: function(data) {
          console.log('here are the tracks');
          j = data;
          if ( null == j.recenttracks.track[0]["@attr"] ) {
            $(".status").html('Most recent track: ')
            $(".track").html(j.recenttracks.track[0].name);
            $(".artist").html(j.recenttracks.track[0].artist.name);
          } else {
            $(".status").html('Now playing: ')
            $(".track").html('"' + j.recenttracks.track[0].name + '" ');
            $(".artist").html(j.recenttracks.track[0].artist.name);
          }
        }
      });

      // refresh if playcounts have changed, no UI changes if no update
     var refreshId = setInterval(function() {
       $.ajax({
         type: "GET",
         url: "http://ws.audioscrobbler.com/2.0/?format=json&method=user.getinfo&api_key=641ea11bb6f5ba6f6013588f4a4dc927&",
         data: dataString,
         dataType: "jsonp",
         success: function(data) {

           var updatedCount = data.user.playcount;
           var currentCount = $("#playcount").text();
           console.log("Current count: " + currentCount);
           console.log("Updated count: " + updatedCount);

           if (updatedCount != currentCount ) {
             $("#playcount").text(updatedCount).fadeIn();
             currentCount = "";
             $("#playcount").addClass("yellow").removeClass("fade-yellow");
             setTimeout(function() {
               $("#playcount").addClass("fade-yellow").removeClass("yellow");
             }, 1000);
           }
         }
       });
     }, 45000);
      return false;
    }
  });
  var putUserInput = new GetUsername();
})(jQuery);
