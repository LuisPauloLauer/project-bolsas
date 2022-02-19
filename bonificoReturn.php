<?php
session_start();




?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
            <span class="testi">Beneficiario: Valigeria ALEX srl<br /><br />
IBAN: IT33B0521610800000000084354  <br /><br />

Causale: Acquisto da sito laikailike.it ordine <?php echo $_SESSION["ultimoordine"]; ?> <br /><br /><br />


Una volta eseguito il bonifico andrà poi inviata una mail a commerciale@laikailike.it , nella quale comunicherai il codice CRO, bisognerà specificare:
<br /><br />
Il codice Cro<br /><br />

Il codice TRN (Transaction Reference Number), serie di 30 caratteri alfanumerici<br /><br />

Nome e Cognome intestatario dell’ordine (intestatario fattura)<br /><br />

Utilizzare come oggetto mail “INVIO CODICE CRO laikailike.it ordine <?php echo $_SESSION["ultimoordine"]; ?>”<br />
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

