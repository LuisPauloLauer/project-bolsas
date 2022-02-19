<?php session_start();

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Configuratore Borse</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
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
    </head>
<body style="background:url(img/wallpaper.jpg); background-size:cover">
<input type="hidden" name="borsa_attiva" id="borsa_attiva" value="<?php echo $borsa ?>" />	

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

<div id="cont_modelli">
	<div class="box_modello" onClick="window.location.assign('config.php?borsa=Bolsa-01');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/altair.jpg" width="100%" /></div>
        	<div class="nome_modello">Bolsa-01</div>
        </div>
    </div>
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Sirio');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/sirio.jpg" width="100%" /></div>
        	<div class="nome_modello">Sirio</div>
        </div>
    </div>
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Antares');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/antares.jpg" width="100%" /></div>
        	<div class="nome_modello">Antares</div>
        </div>
    </div>
    
    <br clear="all" style="height:50px" /><br />
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Vega');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/vega.jpg" width="100%" /></div>
        	<div class="nome_modello">Vega</div>
        </div>
    </div>    
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Bauletto_grande');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/bauletto_grande.jpg" width="100%" /></div>
        	<div class="nome_modello">Bauletto Grande</div>
        </div>
    </div>   
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Bauletto_piccolo');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/bauletto_piccolo.jpg" width="100%" /></div>
        	<div class="nome_modello">Bauletto Piccolo</div>
        </div>
    </div>
    
    <br clear="all" style="height:50px" /><br />
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Pollux');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/pollux.jpg" width="100%" /></div>
        	<div class="nome_modello">Pollux</div>
        </div>
    </div>
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Regulus');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/regulus.jpg" width="100%" /></div>
        	<div class="nome_modello">Regulus</div>
        </div>
    </div>
    
    <div class="box_modello" onClick="window.location.assign('config.php?borsa=Rigel');">
    	<div class="box_modello_bordo">
    		<div class="img_modello"><img src="img/modelli/sirio_piccola.jpg" width="100%" /></div>
        	<div class="nome_modello">Rigel</div>
        </div>
    </div>
</div>

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
</script>		


</body>
</html>