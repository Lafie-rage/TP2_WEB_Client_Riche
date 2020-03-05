$(document).ready(function() {
  div = $("#todos");
  id = $("h1").get(0).id;
  $.ajax({
    url : "http://localhost:81/data.php",
    data : {
      action : 'getAllTodos',
      userId : id
    },
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.TODOS.length; i++) {
        //
        div.append("<p id='" + oRep.TODOS[i].id + "'>" + oRep.TODOS[i].title + "</p>");
      }
    }
  });
  $("button").click(function() {
    document.location.href = "index.html";
  });
});
