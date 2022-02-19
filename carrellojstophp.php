<?php 
	session_start();

	$parametri= $_POST["parametri_ricerca"];
	$_SESSION["prezzo_finale"] = $parametri[0];
	$_SESSION["carrello"] = $parametri[1];
	$_SESSION["borsa"] = $parametri[2];
?>

