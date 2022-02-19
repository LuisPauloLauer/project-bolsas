<?php
session_start();
error_reporting('E_ALL & ~E_NOTICE');
include("access_data.php");
$mysqli 	= new mysqli($host,$userdb,$passworddb,$namedb);
$query 		= "SELECT * FROM ordini WHERE id = '".$_GET['id']."' AND tipo = 'bonifico' ";
$result 	= $mysqli->query($query);
$ordine		= $result->fetch_assoc();
	



$carrello = $ordine["carrello"];
$array_prodotti = explode("-",$carrello);
$n_pezzi = count($array_prodotti);

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Administrator</title>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css" type="text/css" />
<link rel="stylesheet" href="../js/jquery.ui.plupload/css/jquery.ui.plupload.css" type="text/css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>


<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
<!-- production -->
<script type="text/javascript" src="../js/plupload.full.min.js"></script>
<script type="text/javascript" src="../js/jquery.ui.plupload/jquery.ui.plupload.js"></script>

<style type="text/css">
	body{
		background-color:#eee;
	}
	.deleteButton{
		position:absolute;
	}
</style>
<script type="text/javascript">
	function controllo_inviato(val){
		var id = document.getElementById('id_ordine').value;
		var stato = document.getElementById('stato_val').value;
		parametri_ordine = [id, val, stato];
		alert();
		$( "#c" ).load( "edit-ordine-b_post.php",{ parametri_stato_ordine: parametri_ordine});
		
		}
		
	function controllo_stato(val){
		var id = document.getElementById('id_ordine').value;
		var inviato = document.getElementById('inviato_val').value;
		parametri_ordine = [id, inviato, val];
		alert();
		$( "#c" ).load( "edit-ordine-b_post.php",{ parametri_stato_ordine: parametri_ordine});
	}
</script>
</head>
<body>
<div class="container">
    <div class="row">
	  <div class="col-md-12">
	   <ul class="nav nav-tabs" role="tablist">	              
              <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Paypal<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="lista-ordini.php">Gestisci ordini in sospeso</a></li>
              	  <li><a href="lista-ordini-inviati.php">Gestisci ordini inviati</a></li>
                </ul>  
              </li>
              
              <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Bonifico<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="lista-ordini-npb.php">Gestisci ordini non pagati</a></li>
              	  <li><a href="lista-ordini-pb.php">Gestisci ordini in sospeso</a></li>
                  <li><a href="lista-ordini-pib.php">Gestisci ordini inviati</a></li>
                </ul>  
              </li>
              
              
              
              <li><a href="logout.php">Esci</a></li>
           </ul>
	  </div>
	</div>
	<div class="row">
		<h1>Dettagli ordine</h1>
		<div class="col-md-12" style="margin-top:50px;">
        
        	<div style="width:100%; float:left">
                <span style="text-decoration:underline"><strong>Anagrafica Cliente:</strong></span><br />
                <span><?php echo $ordine['nome']." ".$ordine['cognome']; ?> - <?php echo $ordine['telefono']; ?> - <?php echo $ordine['email']; ?> <br />
                <span><?php echo $ordine['indirizzo']." ".$ordine['num_civ']; ?>  <?php echo $ordine['cap']." ".$ordine['citta']; ?>  <?php echo $ordine['provincia']; ?> <br />
                </span>
                <br /><br />
                <span style="text-decoration:underline"><strong>Caratteristiche:</strong></span><br />
				
                <?php
				
					foreach($array_prodotti as $elemento){	
						$pelle = explode("+",$elemento);
						$nomepelle = explode("_",$pelle[1]);
						$n = count($nomepelle);
						unset($nomepelle[$n-1]);
						$nomepellefinale = implode(" ",$nomepelle);
						?>
						<span><?php echo $pelle[0]." : ".$nomepellefinale; ?></span><br>
						<?php
					}
				
				?>
                
                <br /><br />
                <span>Totale: <?php echo number_format($ordine["prezzo"],"2"); ?> €</span>
				<br /><br />
				 <?php if($ordine["stato"]=="no"){
					?><a href="#nogo" onClick="controllo_stato('si')" id="salva_ordine_b">Ordine Pagato</a><?php
					}
				?>
				<?php if($ordine["stato"]=="si"){
						
						if($ordine["inviato"]=="no"){
						  ?><a href="#nogo" onClick="controllo_inviato('si')" id="salva_ordine">Invia Ordine</a><?php
						  }					
					
					}
				?>
                <input type="hidden" value="<?php echo $ordine["stato"]; ?>" id="stato_val" name="stato_val" />
				<input type="hidden" value="<?php echo $ordine["inviato"]; ?>" id="inviato_val" name="inviato_val" />
                <input type="hidden" value="<?php echo $ordine["id"]; ?>" id="id_ordine" name="id_ordine" />
           </div>
           
           
        
       	<div id="c"></div>
		</div> 
	</div>
</div>    
  

</body>
</html>



