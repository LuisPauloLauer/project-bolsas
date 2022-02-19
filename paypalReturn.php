<?php
session_start();
error_reporting(0);
include("admin/access_data.php");
$mysqli = new mysqli($host,$userdb,$passworddb,$namedb);


$query_ordini= "SELECT * FROM ordini WHERE id='".$_GET["i"]."' and idsessione='".$_GET["s"]."' ";
$result_ordini 	= $mysqli->query($query_ordini);		
$row = mysqli_fetch_array($result_ordini,MYSQLI_BOTH);


$carrello = $row["carrello"];
$array_prodotti = explode("-",$carrello);			
					

$email = $row["mail"];
$data_pagamento= date("Y")."-".date("m")."-".date("d");

$sid = $_GET["s"] . '/';
$borsapercorso =str_replace(" ","",$row["borsa"]);
$borsapercorso .="/";
$percorso="texture/temp/";
$oldpath=$percorso.$sid.$borsapercorso;
$newpath="ordini/".$_GET["i"]."/";
rename($oldpath, $newpath);
$percorso2 = "temp/";
$oldpath2=$percorso2.$sid.$borsapercorso;

$appoggio = array();
foreach($array_prodotti as $elemento){	
	$elemento = str_replace($oldpath2, $newpath, $elemento);
	$appoggio[]=$elemento;
}
$carrello2 = implode("-",$appoggio);

$carrello2 = $row["carrello"];
$update = "UPDATE ordini SET stato = 'si',
							 data_pagamento= '".$data_pagamento."',
							 carrello = '".$carrello2."'
						WHERE id = '".$_GET["i"]."'";
$result_update 	= $mysqli->query($update);





/*$headers = "From: commerciale@laikailike.it\r\n";
$headers .= "Reply-To: commerciale@laikailike.it\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";	
$paramentro = "-f commerciale@laikailike.it";	
$messaggio = "<p>Grazie per aver completato con successo la procedura di acquisto su www.laikailike.it.<br /></p>"	
$mail = mail($email, "Acquisto www.lavecchiaitalia.com", $messaggio, $headers, $paramentro);
*/
$_SESSION['carrello'] = '';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="refresh" content="10;URL='http://www.laikailike.it/prodotti.php'" />
<link href='https://fonts.googleapis.com/css?family=Voltaire' rel='stylesheet' type='text/css'><!--font-family: 'Voltaire', sans-serif;-->
        <link href='https://fonts.googleapis.com/css?family=Marvel:400,700' rel='stylesheet' type='text/css'><!--font-family: 'Marvel', sans-serif;-->
        <link href='https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise' rel='stylesheet' type='text/css'><!--font-family: 'Waiting for the Sunrise', cursive;-->
        <link href='https://fonts.googleapis.com/css?family=Six+Caps' rel='stylesheet' type='text/css'><!--font-family: 'Six Caps', sans-serif;-->
	    <link rel="stylesheet" href="css/configuratore.css" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        
        <script src="js/three.min.js"></script>
        
		<script src="js/loaders/DDSLoader.js"></script>
		<script src="js/loaders/MTLLoader.js"></script>
		<script src="js/loaders/OBJMTLLoader.js"></script>
		<script src="js/Detector.js"></script>

        <script src="js/THREEx.WindowResize.js"></script>        		
		<script src="js/controls/OrbitControls.js"></script>
		<script src="js/libs/stats.min.js"></script>
		<script src="js/meshDescriptor.js"></script>
		<script src="js/meshScript.js"></script>
		<script src="libCrop/js/jquery.min.js"></script>
  
		<script src="libCrop/js/tooltip.min.js"></script>
        <script src="libCrop/js/bootstrap.min.js"></script>
        <script src="libCrop/js/cropper.js"></script>
        <script src="libCrop/js/main.js"></script>
    	
        <script src="js/script.js"></script>
<title>Configuratore</title>
</head>

<body style="background:url(img/wallpaper.jpg); background-size:cover">
<div id="logo"></div>

<div id="menu">
    <ul>
        <div class="menu_animation" id="menu_1" style="float:left">
            <a href="Sito/index.php"><div id="menu_1_esteso" class="menu_esteso">
                <span>Home</span>
            </div>
            <li>                	
                <div class="menu_bordo" id="menu_bordo_1">
                    <img src="img/menu_home.png" style="margin-top:8px;" border="0" />
                </div>
            </li></a>
        </div>
        
        <div class="menu_animation" id="menu_2" style="float:left">
            <a href="Sito/chisiamo.php"><div id="menu_2_esteso" class="menu_esteso">
                <span>Chi Siamo</span>
            </div>
            <li>                	
                <div class="menu_bordo" id="menu_bordo_2">
                    <img src="img/menu_chisiamo.png" style="margin-top:8px;" border="0" />
                </div>
            </li></a>
        </div>
        
        <div class="menu_animation" id="menu_3" style="float:left">
            <a href="prodotti.php"><div id="menu_3_esteso" class="menu_esteso">
                <span>Modelli</span>
            </div>
            <li>                	
                <div class="menu_bordo" id="menu_bordo_3">
                    <img src="img/menu_configuratore.png" style="margin-top:8px;" border="0" />
                </div>
            </li></a>
        </div>
        
        <div class="menu_animation" id="menu_4" style="float:left">
            <a href="Sito/contatti.php"><div id="menu_4_esteso" class="menu_esteso">
                <span>Contatti</span>
            </div>
            <li>                	
                <div class="menu_bordo" id="menu_bordo_4">
                    <img src="img/menu_contatti.png" style="margin-top:8px;" border="0" />
                </div>
            </li></a>
        </div>
        
        
        <li style="background:#3c5a99;">
            <div class="menu_bordo">
                <a href="#"><img src="img/menu_facebook.png" style="margin-top:8px;" border="0" /></a>
            </div>        
        </li>
        <li style="background:#28a9e0;">
            <div class="menu_bordo">
                <a href="#"><img src="img/menu_twitter.png" style="margin-top:8px;" border="0" /></a>
            </div>        
        </li>
    </ul>
</div><!--/menu-->

<div id="riepilogo_dettagli" style="margin-top:200px; background:none;"> 
	<h1>Acquisto effettuato</h1>
    <br clear="all" />
        <div style="width:calc(100% - 40px); padding:20px">
            <span class="testi">Grazie per aver effettuato il pagamento. La transazione è stata completata e una ricevuta dell'acquisto è stata inviata al tuo indirizzo email. Per visualizzare i dettagli della transazione effettua l'accesso al tuo conto dall'indirizzo www.paypal.com. I prodotti ti verranno spediti all'indirizzo da te specificato.<br />
            Attendi 10 secondi o <a href="index.php">clicca qui</a>
            </span>
            <br clear="all" />
        </div>
    </div>
</div>



<div id="a"></div><!--div per load-->
<div id="form_paypal"></div>
</body>

<script>	
var pic_real_width;
var pic_real_height;
/*$(".menu_animation").hover(	
		function(){	var id = this.id; var res = id.split("_");
  			$( '#menu_'+res[1]+'_esteso').stop().animate({
	  		width:"130px" ,	padding:"0 10px"   
  			}, 500 ).promise();
		},
		function(){$(".menu_esteso").stop().animate({width:0 , padding:0}, 500).promise();});*/
	
</script>

</html>

