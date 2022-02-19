<?php
session_start();


include("access_data.php");
$mysqli 	= new mysqli($host,$userdb,$passworddb,$namedb);
$parametri = $_POST["parametri_stato_ordine"];
$inviato = $parametri[1];
$stato = $parametri[2];


$query_ordini= "SELECT * FROM ordini WHERE id='".$parametri[0]."'";
$result_ordini 	= $mysqli->query($query_ordini);		
$row = mysqli_fetch_array($result_ordini,MYSQLI_BOTH);
if($row['datapagamento']="0000-00-00"){
	$data_pagamento= date("Y")."-".date("m")."-".date("d");
	$sid = $row["idsessione"] . '/';
	$borsapercorso =str_replace(" ","",$row["borsa"])."/";
	$percorso="../texture/temp/";
	$oldpath=$percorso.$sid.$borsapercorso;
	$newpath="../ordini/".$parametri[0]."/";
	rename($oldpath, $newpath);
	
	$carrello = $row["carrello"];
	$array_prodotti = explode("-",$carrello);
	$appoggio = array();
	foreach($array_prodotti as $elemento){	
		$elemento = str_replace($oldpath, $newpath, $elemento);
		$appoggio[]=$elemento;
	}
	$carrello2 = implode("-",$appoggio);

	
	
	
}
else{
	$data_pagamento= $row['datapagamento'];
	$carrello2= $row['carrello'];
}





$update = "UPDATE ordini SET inviato = '".$inviato."',stato='".$stato."',data_pagamento= '".$data_pagamento."',carrello=$carrello2
			WHERE id=".$parametri[0];					 
							 
$result	= $mysqli->query($update);



?>
<script type="text/javascript">//window.location.assign("lista-ordini-pb.php");</script>
