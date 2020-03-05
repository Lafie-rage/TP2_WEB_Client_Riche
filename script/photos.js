$(document).ready(function() {
  div = $("#photos");
  id = $("h1").get(0).className;
  userId = $("h1").get(0).id;
  $.ajax({
    url : "http://localhost:81/data.php",
    data : {
      action : 'getAllPhotos',
      albumId : id
    },
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.PHOTOS.length; i++) {
        div.append("<a id='" + oRep.PHOTOS[i].id + "' href=" + oRep.PHOTOS[i].url + ">" + oRep.PHOTOS[i].title + "</p>");
      }

    }
  });
  $("button").click(function() {
    document.location.href = "album.php?id=" + userId;
  });
});
