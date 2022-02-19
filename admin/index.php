<?php
session_start();
error_reporting('E_ALL & ~E_NOTICE');
include("access_data.php");
$mysqli 	= new mysqli($host,$userdb,$passworddb,$namedb);
if($_SERVER['REQUEST_METHOD'] == "POST") {
	$query="SELECT * FROM admin WHERE admin = '".$_POST["user"]."' AND password = '".$_POST["password"]."'";
	$result=$mysqli->query($query);
	$num = $result->num_rows;
	if($num > 0) {
		$_SESSION["login"] = "ok";
		header("Location: lista-ordini.php");
	}
	else{
		?>
        <script type="text/javascript">
			alert("Dati di accesso errati");
        </script>
        <?php
	}
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Administrator</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
<style type="text/css">
	body{
		background-color:#eee;
	}
</style>
</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
		<h2 class="page-header">Pannello di controllo</h2>
			<form action="" method="POST">
				<input type="text" name="user" id="user" class="form-control" placeholder="Nome Utente" /><br />
				<input type="password" name="password" id="password" class="form-control" placeholder="Password" /><br />
				<input type="submit" class="btn btn-primary" value="Accedi" name="submit" id="submit" /><br /><br />
			</form>
		</div>
	</div>
</div>
</body>
</html>












