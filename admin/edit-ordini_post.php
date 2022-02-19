<?php
session_start();


include("access_data.php");
$mysqli 	= new mysqli($host,$userdb,$passworddb,$namedb);
$parametri = $_POST["parametri_stato_ordine"];
$inviato = $parametri[1];

$update = "UPDATE ordini SET inviato = '".$inviato."' 
			WHERE id=".$parametri[0];					 
							 
$result	= $mysqli->query($update);

if($parametri[1] == 'si'){
?>
<script type="text/javascript">window.location.assign("lista-ordini.php");</script>
<?php }

if($parametri[1] == 'no'){
?>
<script type="text/javascript">window.location.assign("lista-ordini-inviati.php");</script>
<?php } ?>