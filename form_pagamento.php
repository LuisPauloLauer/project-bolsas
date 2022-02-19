<?php session_start();
	  include("admin/access_data.php");
	  $mysqli = new mysqli($host,$userdb,$passworddb,$namedb);
	  
?>
<div id="form_paypal" style="height:0;">
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
?>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
    	<input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="business" value="commerciale@laikailike.it">
        <input type="hidden" name="item_name" value="Acquisto su laikailike.it">
        <input type="hidden" name="return" value="http://www.laikailike.it/paypalReturn.php?i=<?php echo $idordine?>&s=<?php echo session_id()?>">
        <input type="hidden" name="cancel_return" value="http://www.laikailike.it/prodotti.php">
        <input type="hidden" name="currency_code" value="EUR">
        <input type="hidden" name="amount" value="<?php echo $totale ?>">
        <input type="submit" name="submit" id="submit" style="display:none" value="Paypal" />        
    </form>
    
    <script type="text/javascript">
    	document.getElementById("submit").click();
    </script>
</div>
