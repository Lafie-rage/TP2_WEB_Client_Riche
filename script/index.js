var div;
var refFilter;

$(document).ready(function() {
  div = $("#listArticles");
  refFilter = $("input[name=filter]");

  load();

  $("button[name=add]").click(function() {
    post($('input[name=title]').val(), $('textarea').val(), $("input[name=userId]").val())
  });

  $("button[name=confirmFilterPost]").click(function() {
    if(refFilter.val() == "") {
      alert("Filter's field must be filled !!!");
      return;
    }
    filter(refFilter.val());
  });

  $("button[name=confirmFilterAlbum]").click(function() {
    if(refFilter.val() == "") {
      alert("Filter's field must be filled !!!");
      return;
    }
    document.location.href = 'album.php?id=' +refFilter.val();
  });

  $("button[name=confirmFilterTodo]").click(function() {
    if(refFilter.val() == "") {
      alert("Filter's field must be filled !!!");
      return;
    }
    document.location.href = 'todo.php?id=' +refFilter.val();
  });
  $("input[name=filter]").keydown(function(context) {
    if(context.which == 13)
      filter($(this).val());
  });

});

function load() {
  div.empty();
  $.ajax({
    type : 'GET',
    url : "http://localhost:81/data.php",
    data: {
      action : 'getAllPosts'
    },
    success : function(oRep) {
      for (var i = 0; i < oRep.POSTS.length; i++) {
        div.append("<p id='" + oRep.POSTS[i].id + "' class='col-6'>" + oRep.POSTS[i].title +  "</p>");
        div.append("<a href='update.php?id=" + oRep.POSTS[i].id + "' class='btn btn-primary offset-1 col-2'> Update </a>");
        div.append("<button name='delete' class='btn btn-primary offset-1 col-2'> Delete </button>");
      }
      $("p").click(function() {
        document.location.href = 'article.php?id=' + this.id;
      });
      $("button[name=update]").click(function() {
        document.location.href = 'update.php?id=' + this.parent().get(0).className;
      });
      $("button[name=delete]").click(function() {
        var id = $(this).prev().prev()[0].id;
        console.log(id);
        $.ajax({
          method : "POST",
          url : "http://localhost:81/data.php?action=deletePost",
          data: {
            'id' : id
          },
          success : function(oRep) {
            console.log(oRep);
            load();
          }
        });
      });
    }
  });
}

function post(title, body, userId) {
  if(title == "" || body == "" || userId == "") {
    alert("All fields must be filled !!!");
    return;
  }

  $.ajax({
    method : "POST",
    url : "http://localhost:81/data.php?action=addPost",
    data : {
      "title" : title,
      "body" : body,
      "userId" : userId
    },
    success : function(oRep) {
      console.log(oRep);
      $("input").get(0).value = "";
      $("textarea").get(0).value = "";
      load();
    }
  });
}

function filter(userId) {
  div.html("");
  $.ajax({
    url : "http://localhost:81/data.php",
    data : {
      action : 'getPostOfUser',
      userId : userId
    },
    success : function(oRep) {
      console.log(oRep);
      for (var i = 0; i < oRep.POSTS.length; i++) {
        div.append("<p id='" + oRep.POSTS[i].id + "' class='col-6'>" + oRep.POSTS[i].title +  "</p>");
        div.append("<a href='update.php?id=" + oRep.POSTS[i].id + "' class='btn btn-primary offset-1 col-2''> Update </a>");
        div.append("<button name='delete' class='btn btn-primary offset-1 col-2''> Delete </p>");
      }
      $("p").click(function() {
        document.location.href = 'article.php?id=' + this.id;
      });
      $("button[name=update]").click(function() {
        document.location.href = 'update.php?id=' + this.parent().get(0).className;
      });
      $("button[name=delete]").click(function() {
        $(this).prev().prev().remove();
        $(this).prev().remove();
        $(this).remove();
      });
    }
  });
}
