var divArt;
var divComm;

$(document).ready(function() {
  divArt = $("#article");
  divComm = $("#comments")
  var id = $("h1").get(0).id;
  $.ajax({
    url : "http://localhost:81/data.php",
    data : {
      action : "getPost",
      id : id
    },
    success : function(oRep) {
      console.log(oRep);
      $("h1").html(oRep.POST[0].title);
      divArt.append("<p> Body : <br/>" + oRep.POST[0].body + "</p>");
      $.ajax({
        url : "http://localhost:81/data.php",
        data : {
          action : "getAllComments",
          id : id
        },
        success : function(oRep) {
          for (var i = 0; i < oRep.COMMENTS.length; i++) {
            divComm.append("<div id='" + oRep.COMMENTS[i].id + "'> ");
            //email, name, body
            divComm.children("#"+oRep.COMMENTS[i].id).append("<p>" + oRep.COMMENTS[i].email + " replied : </p>");
            divComm.children("#"+oRep.COMMENTS[i].id).append("<p>" + oRep.COMMENTS[i].name + "</p>");
            divComm.children("#"+oRep.COMMENTS[i].id).append("<p>" + oRep.COMMENTS[i].body + "</p>");
          }
        }
      });
    }
  });

  $("button").click(function() {
    document.location.href = "index.html";
  });
});
