var div;
var title;
var body;
var userId;
var id;
var oOrginal;

$(document).ready(function() {
  div = $("div");
  title = $("input")[0];
  body = $("textarea")[0];
  userId = $("input")[1];
  id = div.get(0).id;
  $.ajax({
    url : "http://localhost:81/data.php",
    data : {
      action : "getPost",
      id : id
    },
    success : function(oRep) {
      oOrginal = oRep.POST[0];
      title.value = oRep.POST[0].title;
      body.value = oRep.POST[0].body;
      userId.value = oRep.POST[0].userId;
    }
  });

  $("button").click(function() {
    if(title.value == "" || body.value == "") {
      alert("All fields must be filled !!!");
      title.value = oOrginal.title;
      body.value = oOrginal.body;
      userId.value = oOrginal.userId;
      return;
    }
    $.ajax({
      url : "http://localhost:81/data.php",
      data : {
        'action' : 'updatePost',
        'id' : id,
        'title' : title.value,
        'body' : body.value,
        'userId' : userId.value
      },
      success: function(oRep) {
        document.location.href = "index.html";
      }
    })
  });
});
