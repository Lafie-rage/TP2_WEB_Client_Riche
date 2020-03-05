<?php
include_once("maLibSQL.pdo.php");
// définit les fonctions SQLSelect, SQLUpdate...


//    POSTS    /////////////////////////////////////////////////////////

function addPost($title, $body, $userId, $id) {
  if($id == false)
    $sql = "INSERT INTO posts(title, body, userId) VALUES ('$title', '$body', $userId);";
  else
    $sql = "INSERT INTO posts(id, title, body, userId) VALUES ($id, '$title', '$body', $userId);";
  return SQLInsert($sql);
}

function deletePost($id) {
  $sql = "DELETE FROM posts WHERE id = $id;";
  return SQLDelete($sql);
}

function updatePost($id, $title, $body, $userId) {
    $sql = "UPDATE posts SET title = '$title', body = '$body', userId = $userId WHERE id = $id;";
    return SQLUpdate($sql);
}

function getPosts() {
  $sql = "SELECT * FROM posts";
  return parcoursRs(SQLSelect($sql));
}

function getPostOfUser($userId) {
  $sql = "SELECT * FROM posts WHERE userId = $userId";
  return parcoursRs(SQLSelect($sql));
}

function getPost($id) {
  $sql = "SELECT * FROM posts WHERE id = $id";
  return parcoursRs(SQLSelect($sql));
}


//    COMMENTS    /////////////////////////////////////////////////////////

function getAllComments($id) {
  $sql = "SELECT * FROM comments WHERE postId = $id;";
  return parcoursRs(SQLSelect($sql));
}


//    ALBUMS    /////////////////////////////////////////////////////////

function getAllAlbums($userId) {
  $sql = "SELECT * FROM albums WHERE userId = $userId;";
  return parcoursRs(SQLSelect($sql));
}


//    PHOTOS    /////////////////////////////////////////////////////////

function getAllPhotos($albumId) {
  $sql = "SELECT * FROM photos WHERE albumId = $albumId;";
  return parcoursRs(SQLSelect($sql));
}


//    TODOS    /////////////////////////////////////////////////////////

function getAllTodos($userId) {
  $sql = "SELECT * FROM todos WHERE userId = $userId;";
  return parcoursRs(SQLSelect($sql));
}




?>
