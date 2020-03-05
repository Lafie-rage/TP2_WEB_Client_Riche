<?php
header('Access-Control-Allow-Origin: *');
session_start();

	//echo $_SERVER["REQUEST_URI"] . "<br />";

	include_once "libs/maLibUtils.php";
	include_once "libs/maLibSQL.pdo.php";
	include_once "libs/modele.php";

	$data["action"] = valider("action");
	$data["status"] = valider("status");

	// si on a une action, on devrait avoir un message classique
	$data["feedback"] = "action en echec";


	switch($data["action"])
	{

		case "addPost":
			$id = valider("id");
			$title = valider("title");
			$body = valider("body");
			$userId = valider("userId");
			$data["id"] = addPost($title, $body, $userId, $id);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		case "deletePost":
			$id = valider("id");
			deletePost($id);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		case "updatePost":
			$id = valider("id");
			$title = valider("title");
			$body = valider("body");
			$userId = valider("userId");
			$data["modified"] = (updatePost($id, $title, $body, $userId) == 1);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		case "getAllPosts":
			$data["POSTS"] = getPosts();
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		case "getPostOfUser":
			$userId = valider("userId");
			$data["POSTS"] = getPostOfUser($userId);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		case "getPost":
			$id = valider("id");
			$data["POST"] = getPost($id);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		//    COMMENTS    /////////////////////////////////////////////////////////

		case "getAllComments":
			$id = valider("id");
			$data["COMMENTS"] = getAllComments($id);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		//    ALBUMS    /////////////////////////////////////////////////////////

		case 'getAllAlbums':
			$userId = valider("userId");
			$data['ALBUMS'] = getAllAlbums($userId);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		//    PHOTOS    /////////////////////////////////////////////////////////

		case 'getAllPhotos':
			$albumId = valider("albumId");
			$data['PHOTOS'] = getAllPhotos($albumId);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		//    TODOS    /////////////////////////////////////////////////////////

		case 'getAllTodos':
			$userId = valider("userId");
			$data['TODOS'] = getAllTodos($userId);
			$data["status"] = true;
			$data["feedback"] = "ok";
		break;

		// Defaut ////////////////////////////////////////////////////////////////////////
		default :
			$data["action"] = "default";
			$data["status"] = false;
			$data["feedback"] = "action inconnue";
	}


  header('Content-Type: application/json');
	echo json_encode($data);

?>
