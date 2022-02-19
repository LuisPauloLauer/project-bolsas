<?php session_start();
	  include("admin/access_data.php");
	  $mysqli = new mysqli($host,$userdb,$passworddb,$namedb);
	  

?>
<div id="a" style="height:0;">
<?php
	$carrello = $_SESSION["carrello"];
	$paramentri = $_POST["parametri_ordini_pass"];
	$totale= $_SESSION["prezzo_finale"];
	$borsa = $_SESSION["borsa"];
	$nome= $paramentri[0];
	$cognome= $paramentri[1];
	$indirizzo= $paramentri[2];
	$num_civ= $paramentri[3];
	$cap= $paramentri[4];
	$comune= $paramentri[5];
	$provincia= $paramentri[6];
	$telefono= $paramentri[7];
	$mail= $paramentri[8];
	$tipo= $paramentri[9];
	$data= date("Y")."-".date("m")."-".date("d");
	$data_pagamento = "0000-00-00";
	//$row = substr( $string, 1 );
    //fare parte visualizza\modifica ordine per admin var parametri_ordini = [totale_pass, nome_pass, cognome_pass, telefono_pass, email_pass, via_pass, comune_pass, provincia_pass];
	
	$query= "INSERT INTO ordini (stato,inviato,prezzo,nome,cognome,indirizzo, num_civ,cap, citta, provincia, data, carrello, idsessione, borsa, telefono, mail, tipo, data_pagamento) VALUES ('no','no','".$totale."','".$nome."','".$cognome."','".$indirizzo."','".$num_civ."','".$cap."','".$comune."','".$provincia."','".$data."','".$carrello."','".session_id()."','".$borsa."','".$telefono."','".$mail."','".$tipo."','".$data_pagamento."')";
	$result 	= $mysqli->query($query);
	$idordine = mysqli_insert_id($mysqli);
	$_SESSION["ultimoordine"] = $idordine;


	/*$headers = "From: direzione@italianwebproject.it\r\n";
	$headers .= "Reply-To: direzione@italianwebproject.it\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";	
	$paramentro = "-f direzione@italianwebproject.it";	
	$messaggio = "<p>Grazie per aver completato con successo la procedura di acquisto su www.laikailike.it.<br />
	</p>";		
	//$mail = mail($email, "Acquisto www.lavecchiaitalia.com", $messaggio, $headers, $paramentro);*/

	//$_SESSION['carrello'] = '';
	//header("location:bonificoReturn.php");
?>

</div>

<script type="text/javascript">window.location.assign("bonificoReturn.php");</script>