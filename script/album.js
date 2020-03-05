$(document).ready(function() {
  div = $("#albums");
  id = $("h1").get(0).id;
  $.ajax({
    url : "http://localhost:81/data.php",
    data : {
      action : 'getAllAlbums',
      userId : id
    },
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.ALBUMS.length; i++) {
        //
        div.append("<p id='" + oRep.ALBUMS[i].id + "'>" + oRep.ALBUMS[i].title + "</p>");
      }

      $("p").click(function() {
        document.location.href = "photos.php?userId=" + id + "&id=" + this.id;
      });
    }
  });
  $("button").click(function() {
    document.location.href = "index.html";
  });
});
