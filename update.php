<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/master.css">
    <title> New website </title>
  </head>
  <body class='container'>
    <h1>Update the article number <?=$_GET['id']?></h1>
    <div id="<?=$_GET['id'] ?>">
      <label for="title"> Title : </label> <input type="text" name="title"> <br/>
      <label for="body"> Body : </label> <textarea name="body" rows="8" cols="80"></textarea> <br/>
      <label for="userId"> User id : </label> <input type="text" name="userId"> <br/>
      <a class='btn btn-primary' href="index.html">Cancel</a>
      <button class='btn btn-primary'>Confirm</button>
    </div>
  </body>

  <!-- JS Lib -->
  <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <script src="script/update.js" charset="utf-8"></script>

</html>
