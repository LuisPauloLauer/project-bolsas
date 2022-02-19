<?php
session_start();
$sid = session_id();
$borsapercorso =str_replace(" ","",$_SESSION["borsa"])."/";
$percorso="texture/temp/".$sid."/".$borsapercorso;
$row = $_SESSION["carrello"];

if($row==""){
	//header("Location:prodotti.php");
}
$array_parti = explode("-",$row);


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
<div id="blk_tot"></div>
<div id="spedizione_box">
    <span class="titoli_form">Dati spedizioni</span><br /><br />
    <form action="" method="POST">
    	<div style="width:calc(50% - 10px); float:left; margin-right:10px; box-sizing:content-box;">
        	<input type="text" name="nome" id="nome" class="form-control" placeholder="Nome" /><br />
        </div>
        
        <div style="width:calc(50% - 10px); float:left; margin-left:10px; box-sizing:content-box;">
        	<input type="text" name="cognome" id="cognome" class="form-control" placeholder="Cognome" /><br /> 
        </div>
        
        <div style="width:calc(50% - 10px); float:left; margin-right:10px; box-sizing:content-box;">
        	<input type="text" name="telefono" id="telefono" class="form-control" placeholder="Telefono" /><br />
        </div>
        
        <div style="width:calc(50% - 10px); float:left; margin-left:10px; box-sizing:content-box;">
        	<input type="text" name="mail" id="mail" class="form-control" placeholder="E-mail" /><br /> 
        </div>
        
        <div style="width:calc(50% - 10px); float:left; margin-right:10px; box-sizing:content-box;">
        	<input type="text" name="indirizzo" id="indirizzo" class="form-control" placeholder="Indirizzo" /><br /> 
        </div>
        
        <div style="width:calc(25% - 10px); float:left; margin-left:10px; box-sizing:content-box;">
        	<input type="text" name="num_civ" id="num_civ" class="form-control" placeholder="Numero Civico" /><br />
        </div>
        
        <div style="width:calc(25% - 10px); float:left; margin-left:10px; box-sizing:content-box;">
        	<input type="text" name="cap" id="cap" class="form-control" placeholder="Cap" /><br /> 
        </div>
        
        <div style="width:calc(50% - 10px); float:left; margin-right:10px; box-sizing:content-box;">
        	<input type="text" name="comune" id="comune" class="form-control" placeholder="Comune" /><br /> 
        </div>
        
        <div style="width:calc(50% - 10px); float:left; margin-left:10px; box-sizing:content-box;">
        	<input type="text" name="provincia" id="provincia" class="form-control" placeholder="Provincia" /><br /> 
        </div>
        
               
        <input type="button" id="paypal" name="paypal" style="width:152px; height:52px; margin:0 auto; border:0; background:url(img/paypal.png) no-repeat; float:right; cursor:pointer;" /> 
        <input type="button" id="bonifico" name="bonifico" style="width:152px; height:52px; margin:0 auto; border:0; background:url(img/bonifico.png) no-repeat; float:right; cursor:pointer;" /> 
    </form>
</div>


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

<div id="info" style="top:70px;">
	<div id="nomeborsa_box">
    	<h1 id="nomeborsa"><?php echo $_SESSION["borsa"]; ?></h1>
    </div>
    <div id="prezzo_box" style="display:block;">
    	<p id="prezzo" style="width:calc(50% - 10px);float:left;text-align:right; padding-right:10px; margin:0;">&euro; <?php echo $_SESSION["prezzo_finale"]; ?></p>
        
        <p id="paypal_b" style="width:calc(50% - 10px);float:left;text-align:left; padding-left:10px; margin:0;"><img src="img/sped.png" id="sped" height="30px" onClick="mostraspedizione();" style="margin-top:10px; cursor:pointer;" /></p>
    </div>
</div>

<div id="riepilogo_dettagli" style="margin-top:200px; background:none;"> 
<?php
if($row!=""){
	/*
	foreach($array_parti as $parte)
	{ 
		$parte_presente = explode("+",$parte);
		$parte_nome = $parte_presente[0];
		$parte_materiale = $parte_presente[1];
?> 
	<div class="parte_box">
    	<div class="parte_nome">
        	<span><?php echo $parte_nome?></span>
        </div>
        <div class="img">
        	<?php
				$dirname = "texture/";
				$images = glob($dirname."*.jpg*");
				foreach($images as $image){
					if(strpos($image,$parte_materiale)){
						?><img src="<?php echo $image; ?>" width="70px" /><?php
					}
				}
			?>
        </div>
    </div>
	

<?php
	
	}
?> 
stampare prezzo e tasto paypal
<?php
*/
?>
    <div class="box_modello">
        <div class="box_modello_bordo">
            <div class="img_modello"><img src="<?php echo $percorso."fronte.png" ?>" width="100%" /></div>
            <div class="nome_modello">Fronte</div>
        </div>
    </div>
    
    <div class="box_modello">
        <div class="box_modello_bordo">
            <div class="img_modello"><img src="<?php echo $percorso."retro.png" ?>" width="100%" /></div>
            <div class="nome_modello">Retro</div>
        </div>
    </div>
    
    <div class="box_modello">
        <div class="box_modello_bordo">
            <div class="img_modello"><img src="<?php echo $percorso."sopra.png" ?>" width="100%" /></div>
            <div class="nome_modello">Sopra</div>
        </div>
    </div>
    
    <br clear="all" style="height:50px" /><br />
    
    <div class="box_modello">
        <div class="box_modello_bordo">
            <div class="img_modello"><img src="<?php echo $percorso."sotto.png" ?>" width="100%" /></div>
            <div class="nome_modello">Sotto</div>
        </div>
    </div>
    
    <div class="box_modello">
        <div class="box_modello_bordo">
            <div class="img_modello"><img src="<?php echo $percorso."sinistra.png" ?>" width="100%" /></div>
            <div class="nome_modello">Sinistra</div>
        </div>
    </div>
    
    <div class="box_modello">
        <div class="box_modello_bordo">
            <div class="img_modello"><img src="<?php echo $percorso."destra.png" ?>" width="100%" /></div>
            <div class="nome_modello">Destra</div>
        </div>
    </div>


	
<?php }
?>  
</div>
<div id="form_paypal"></div>
<div id="form_bonifico"></div>


<script type="text/javascript">
var pic_real_width;
var pic_real_height;
/*$(".menu_animation").hover(	
		function(){	var id = this.id; var res = id.split("_");
  			$( '#menu_'+res[1]+'_esteso').stop().animate({
	  		width:"130px" ,	padding:"0 10px"   
  			}, 500 ).promise();
		},
		function(){$(".menu_esteso").stop().animate({width:0 , padding:0}, 500).promise();});*/



function mostraspedizione(){
	$( '#spedizione_box' ).stop().animate({
	  height:"360px",
	  padding:"30px"    
  	 }, 500 )
	.promise(); 
	 
	$( '#blk_tot' ).css('display',"block");
	$( '#blk_tot' ).stop().animate({
		opacity:"1"    
	}, 500 )
	.promise();  
  
  
}	

$( "#blk_tot" ).click(function() {
$( '#spedizione_box' ).stop().animate({
	  height:0, 
	  padding:0   
  }, 500 ).promise().done(function(){$( '#blk_tot' ).css('display',"none");$( '#blk_tot' ).css('opacity',"0");});
  
});


$(document).ready(function(){
  $("#paypal").click(function() {
	  var nome_pass = $("#nome").val();
	  var cognome_pass = $("#cognome").val();
	  var via_pass = $("#indirizzo").val();
	  var num_civ_pass = $("#num_civ").val();
	  var cap_pass = $("#cap").val();
	  var comune_pass = $("#comune").val();
	  var provincia_pass = $("#provincia").val();
	  var telefono_pass = $("#telefono").val();
	  var mail_pass = $("#mail").val();
	  var tipo_pagamento="paypal";
	  var err="";
	  
	  if(nome_pass =="" || nome_pass ==null){
		 err +="  - Nome \n\r";
	  }
	  if(cognome_pass =="" || cognome_pass ==null){
		  err +="  - Cognome \n\r";		 
	  }
	  if(via_pass =="" || via_pass ==null){
		  err +="  - Via \n\r";
	  }
	  if(num_civ =="" || num_civ ==null){
		  err +="  - Numero Civico \n\r";
	  }
	  if(comune_pass =="" || comune_pass ==null){
		  err +="  - Comune \n\r";
	  }
	  if(cap_pass =="" || cap_pass ==null){
		  err +="  - Cap \n\r";
	  }
	  if(provincia_pass =="" || provincia_pass ==null){
		  err +="  - Provincia \n\r";
	  }
	  if(telefono_pass =="" || telefono_pass ==null){
		  err +="  - Telefono \n\r";
	  }
	  if(mail_pass =="" || mail_pass ==null){
		  err +="  - E-mail \n\r";
	  }
	  
	  
	  
	  if (err==""){
		 var parametri_ordini = [nome_pass, cognome_pass, via_pass, num_civ_pass, cap_pass, comune_pass, provincia_pass, telefono_pass, mail_pass, tipo_pagamento];
		 $( "#form_paypal" ).load( "form_pagamento.php", {parametri_ordini_pass: parametri_ordini} );
	  }
	  else{
		err = "Compilare correttamente i seguenti campi: \n\r" + err;
		alert(err);
	  }	
  });

});


$(document).ready(function(){
  $("#bonifico").click(function() {
	  var nome_pass = $("#nome").val();
	  var cognome_pass = $("#cognome").val();
	  var via_pass = $("#indirizzo").val();
	  var num_civ_pass = $("#num_civ").val();
	  var cap_pass = $("#cap").val();
	  var comune_pass = $("#comune").val();
	  var provincia_pass = $("#provincia").val();
	  var telefono_pass = $("#telefono").val();
	  var mail_pass = $("#mail").val();
	  var tipo_pagamento="bonifico";
	  var err="";
	  
	  if(nome_pass =="" || nome_pass ==null){
		 err +="  - Nome \n\r";
	  }
	  if(cognome_pass =="" || cognome_pass ==null){
		  err +="  - Cognome \n\r";		 
	  }
	  if(via_pass =="" || via_pass ==null){
		  err +="  - Via \n\r";
	  }
	  if(num_civ =="" || num_civ ==null){
		  err +="  - Numero Civico \n\r";
	  }
	  if(comune_pass =="" || comune_pass ==null){
		  err +="  - Comune \n\r";
	  }
	  if(cap_pass =="" || cap_pass ==null){
		  err +="  - Cap \n\r";
	  }
	  if(provincia_pass =="" || provincia_pass ==null){
		  err +="  - Provincia \n\r";
	  }
	  if(telefono_pass =="" || telefono_pass ==null){
		  err +="  - Telefono \n\r";
	  }
	  if(mail_pass =="" || mail_pass ==null){
		  err +="  - E-mail \n\r";
	  }
	  
	  
	  
	  if (err==""){
		 var parametri_ordini = [nome_pass, cognome_pass, via_pass, num_civ_pass, cap_pass, comune_pass, provincia_pass, telefono_pass, mail_pass, tipo_pagamento];
		 $( "#form_bonifico" ).load( "form_bonifico.php", {parametri_ordini_pass: parametri_ordini} );
	  }
	  else{
		err = "Compilare correttamente i seguenti campi: \n\r" + err;
		alert(err);
	  }	
  });

});
</script>
</body>
</html>