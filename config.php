<?php session_start();
$array_borse= array("Vega","Antares","Bolsa-01","Sirio","Bauletto_piccolo","Bauletto_grande","Pollux","Regulus","Rigel");
$borsa= $_GET["borsa"];
$_SESSION["borsa"]=$borsa;
if (!in_array($borsa, $array_borse, true)) {
    header("Location:prodotti.php");
	
}

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
<div id="b"></div>
<div id="pop-up_bg">
	<div id="foto_interno_b">
    	<div id="close_pop-up" onClick="closepopup()"></div>
    </div>
</div>
<input type="hidden" name="borsa_attiva" id="borsa_attiva" value="<?php echo $borsa ?>" />	
<div id="canvas" onMouseDown="view3D.moveCamera.movement=false"></div>
<div id="canvas_interno" style="display:none">
	<div id="canvas_interno_top">
        <div id="lampo_top">
        	<div id="zip_top">
            <img src="img/zip.png" style="margin-top:-8px" />
            </div>
        </div>
        
        <div id="logo_interno" style="position:absolute; width:80px; height:80px; top:150px; left:230px; z-index:1001"><img src="img/logo2.png"></div>
		<div id="shape-container" style="position:absolute; width:100px; height:94px; top:150px; left:230px; z-index:1000">
			<svg width="100px" height="94px" viewBox="0 0 100 94" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g>
					<clipPath id="shape-top">
						<polygon points="71,8,75,10,83,16,90,23,93,29,96,38,95,47,94,55,92,62,88,69,85,74,82,77,75,82,70,85,61,89,53,91,45,91,35,89,26,85,19,79,11,72,7,64,4,54,2,47,4,36,8,24,13,17,21,11,31,5,43,2,54,2,63,4"></polygon>
					</clipPath>
				</g>
				<image id="aaa" clip-path="url(#shape-top)" width="1245" height="780" xlink:href="texture/coccodrillo_oliva_223-44.jpg" preserveAspectRatio="xMidYMin slice"></image>
			</svg>
		</div>
    </div>
    
    <div id="canvas_interno_bot">
        <div id="tasca">
        	<div id="inserti_fodera_tasca"></div>
            <div id="tasca_sinistra"></div>
            <div id="tasca_destra"></div>
        </div>
    </div>
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

<div id="info">
	<div style="border:2px solid white; height:76px; width:587px; background:#333;">
        <div id="nomeborsa_box">
            <h1 id="nomeborsa"></h1>
            <div id="foto_interno" onClick="openpopup()"></div>
        </div>
        <div id="prezzo_box">
            <p id="testo_nc"></p>
            <p id="prezzo" style="width:calc(50% - 10px);float:left;text-align:right; padding-right:10px; margin:0;">&nbsp;</p>
            
            <p id="paypal_b" style="width:calc(50% - 10px);float:left;text-align:left; padding-left:10px; margin:0;"><img src="img/sped.png" id="paypal" height="35px" onClick="carrelloGo();" /></p>
        </div>
    </div>
</div>

<div id="metallerie_tit_wrp">
	<div id="metallerie_tit">Metallerie</div>
</div>
<div id="metallerie_wrp">   
</div><!--metallerie_wrp-->
<br clear="all" />
<div id="parti_tit_wrp">
	<div id="parti_tit">Esterno</div>    
</div>
<div id="corpo_borsa_wrp" style="position:absolute; left:310px; top:490px; background:#333; z-index:999999;"></div>
<div id="quadranti_wrp" style="position:absolute; left:310px; top:555px; background:#333; z-index:999999;"></div>
<div id="fianchi_wrp" style="position:absolute; left:310px; top:615px; background:#333; z-index:999999;"></div>

<div id="parti_wrp">
    <div id="corpo_borsa">
    	<div id="corpo_borsa_tit" onClick="chooseSection('corpo_borsa');" style="position:relative;">
        	Corpo Borsa 
        	<div class="arrow"></div>
        </div>
        <!--<div id="corpo_borsa_wrp"></div>-->
    </div>
	<div id="quadranti">
    	<div id="quadranti_tit" onClick="chooseSection('quadranti');" style="position:relative;">
        	Quadranti
            <div class="arrow"></div>
        </div>
        
    </div>
    <div id="fianchi">
    	<div id="fianchi_tit" onClick="chooseSection('fianchi');" style="position:relative;">
        	Fianchi
            <div class="arrow"></div>
        </div>
        
     </div>
</div><!--parti_wrp-->
<div id="parti_interno_tit_wrp">
	<div id="parti_interno_tit">Interno</div>
</div>
<div id="parti_interno_wrp">   
</div><!--metallerie_wrp-->


<div id="materiali_tit_wrp">
    <div id="materiali_tit">Materiali</div>
</div>
<div id="materiali_wrp">
	<div class="materiale_tr pelli_box">
        <div class="materiali_tipo_box">
        	<div class="materiali_tipo_tit" onClick="choosePelle('pelle_liscia');" id="pelle_liscia_tit">Pelle Liscia</div>
            <div class="materiali_tipo_tit" onClick="choosePelle('pelle_alce');" id="pelle_alce_tit">Pelle Alce</div>
            <div class="materiali_tipo_tit" onClick="choosePelle('pelle_saffiano');" id="pelle_saffiano_tit">Pelle Saffiano</div>
            <div class="materiali_tipo_tit" onClick="choosePelle('pelle_struzzo');" id="pelle_struzzo_tit">Pelle Struzzo</div>
            <div class="materiali_tipo_tit" onClick="choosePelle('pelle_coccodrillo');" id="pelle_coccodrillo_tit">Pelle Coccodrillo</div>
        
        </div>
        
        <br clear="all">
        
        <div id="pelle_liscia" style="display:none;" class="box_pelle">
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_azzurra_328-39.jpg)">
                	<div class="nomepelle_box"><span>Azzurra</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_bianca_y282-39.jpg)">
                	<div class="nomepelle_box"><span>Bianca</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_blu_notte_920-39.jpg)">
                	<div class="nomepelle_box"><span>Blu notte</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_bordeaux_048-39.jpg)">
                	<div class="nomepelle_box"><span>Bordeaux</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_corallo_816-39.jpg)">
                	<div class="nomepelle_box"><span>Corallo</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_cuoio_092-39.jpg)">
                	<div class="nomepelle_box"><span>Cuoio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_fango_y271-39.jpg)">
                	<div class="nomepelle_box"><span>Fango</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_gialla_001-39.jpg)">
                	<div class="nomepelle_box"><span>Gialla</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_grigia_399-39.jpg)">	
                	<div class="nomepelle_box"><span>Grigia</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_lilla_068-39.jpg)">
                	<div class="nomepelle_box"><span>Lilla</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_mandarino_102-39.jpg)">
                	<div class="nomepelle_box"><span>Mandarino</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_menta_540-39.jpg)">
                	<div class="nomepelle_box"><span>Menta</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_nera_580-39.jpg)">
                	<div class="nomepelle_box"><span>Nera</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_orchidea_299-39.jpg)">
                	<div class="nomepelle_box"><span>Orchidea</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_petrolio_908-39.jpg)">
                	<div class="nomepelle_box"><span>Petrolio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_rossa_140-39.jpg)">
                	<div class="nomepelle_box"><span>Rossa</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_rubino_159-39.jpg)">
                	<div class="nomepelle_box"><span>Rubino</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_testa_moro_868-39.jpg)">
                	<div class="nomepelle_box"><span>Testa moro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/pelle_liscia_verde_pino_y069-39.jpg)">
                	<div class="nomepelle_box"><span>Verde pino</span></div>
                </div>
                <br clear="all" />
            </div>
        </div>
        
        <div id="pelle_alce" style="display:none;" class="box_pelle">
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/alce_arancio_807-26.jpg)">
                	<div class="nomepelle_box"><span>Arancio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_azzurro_328-26.jpg)">
                	<div class="nomepelle_box"><span>Azzurro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_bianco_y282-26.jpg)">
                	<div class="nomepelle_box"><span>Bianco</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_bluette_y029-26.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/alce_ciclamino_016-26.jpg)">
                	<div class="nomepelle_box"><span>Ciclamino</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_fragola_820-26.jpg)">
                	<div class="nomepelle_box"><span>Fragola</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_grigio_scuro_868-26.jpg)">
                	<div class="nomepelle_box"><span>Grigio scuro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_marrone_y251-26.jpg)">
                	<div class="nomepelle_box"><span>Marrone</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/alce_nero_580-26.jpg)">
                	<div class="nomepelle_box"><span>Nero</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_rosa_274-26.jpg)">
                	<div class="nomepelle_box"><span>Rosa</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_testa_moro_y277-26.jpg)">
                	<div class="nomepelle_box"><span>Testa moro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/alce_tortora_884-26.jpg)">
                	<div class="nomepelle_box"><span>Tortora</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/alce_verde_prato_y069-26.jpg)">
                	<div class="nomepelle_box"><span>Verde prato</span></div>
                </div>              
                <br clear="all" />
            </div>
        </div>
        
        
        <div id="pelle_saffiano" style="display:none;" class="box_pelle">
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/saffiano_bianco_y282-26.jpg)">
                	<div class="nomepelle_box"><span>Bianco</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_bluette_y029-26.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_bordeaux_048-26.jpg)">
                	<div class="nomepelle_box"><span>Bordeaux</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_giallo_001-26.jpg)">
                	<div class="nomepelle_box"><span>Giallo</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/saffiano_grigio_chiaro_884-26.jpg)">
                	<div class="nomepelle_box"><span>Grigio chiaro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_grigio_scuro_399-26.jpg)">
                	<div class="nomepelle_box"><span>Grigio scuro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_mandarino_102-26.jpg)">
                	<div class="nomepelle_box"><span>Mandarino</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_nero_580-26.jpg)">
                	<div class="nomepelle_box"><span>Nero</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/saffiano_nudo_127-26.jpg)">
                	<div class="nomepelle_box"><span>Nudo</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_petrolio_908-26.jpg)">
                	<div class="nomepelle_box"><span>Petrolio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_rosso_820-26.jpg)">
                	<div class="nomepelle_box"><span>Rosso</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_rubino_159-26.jpg)">
                	<div class="nomepelle_box"><span>Rubino</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/saffiano_testa_moro_868-26.jpg)">
                	<div class="nomepelle_box"><span>Testa moro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/saffiano_verde_y003-26.jpg)">
                	<div class="nomepelle_box"><span>Verde</span></div>
                </div> 
                <div class="materiale_td" style="background-image:url(texture/saffiano_viola_048-26.jpg)">
                	<div class="nomepelle_box"><span>Viola</span></div>
                </div>             
                <br clear="all" />
            </div>
        </div>
        
        <div id="pelle_struzzo" style="display:none;" class="box_pelle">
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/struzzo_ametista_206-44.jpg)">
                	<div class="nomepelle_box"><span>Ametista</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/struzzo_asfalto_399-44.jpg)">
                	<div class="nomepelle_box"><span>Asfalto</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/struzzo_avana_102-44.jpg)">
                	<div class="nomepelle_box"><span>Avana</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/struzzo_blu_920-44.jpg)">
                	<div class="nomepelle_box"><span>Blu</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/struzzo_bruciato_102-44.jpg)">
                	<div class="nomepelle_box"><span>Bruciato</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/struzzo_ghiaccio_y282-44.jpg)">
                	<div class="nomepelle_box"><span>Ghiaccio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/struzzo_pistacchio_509-44.jpg)">
                	<div class="nomepelle_box"><span>Pistacchio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/struzzo_rosso_140-44.jpg)">
                	<div class="nomepelle_box"><span>Rosso</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/struzzo_ruggine_y251-44.jpg)">
                	<div class="nomepelle_box"><span>Ruggine</span></div>
                </div>
                <br clear="all" />
            </div>
        </div>
        
        <div id="pelle_coccodrillo" style="display:none;" class="box_pelle">
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_bluette_y029-44.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_ciclamino_016-44.jpg)">
                	<div class="nomepelle_box"><span>Ciclamino</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_cognac_102-44.jpg)">
                	<div class="nomepelle_box"><span>Cognac</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_ghiaccio_y282-44.jpg)">
                	<div class="nomepelle_box"><span>Ghiaccio</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_grigio_868-44.jpg)">
                	<div class="nomepelle_box"><span>Grigio</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_mattone_045-44.jpg)">
                	<div class="nomepelle_box"><span>Mattone</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_melanzana_206-44.jpg)">
                	<div class="nomepelle_box"><span>Melanzana</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_nero_580-44.jpg)">
                	<div class="nomepelle_box"><span>Nero</span></div>
                </div>
                <br clear="all" />
            </div>
            
            <div class="materiale_tr pelli_box">
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_oliva_223-44.jpg)">
                	<div class="nomepelle_box"><span>Oliva</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_rosso_140-44.jpg)">
                	<div class="nomepelle_box"><span>Rosso</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_testa_moro_y277-44.jpg)">
                	<div class="nomepelle_box"><span>Testa moro</span></div>
                </div>
                <div class="materiale_td" style="background-image:url(texture/coccodrillo_viola_048-44.jpg)">
                	<div class="nomepelle_box"><span>Viola</span></div>
                </div>
                <br clear="all" />
            </div>
        </div>
        
        
        <br clear="all" />
    </div>
    <div class="materiale_tr" id="metalli_box" style="margin-bottom:0; display:none">
    	
        <div class="materiale_td" style="background-image:url(texture/oro_1-1.jpg)">
                	<div class="nomepelle_box"><span>Oro</span></div>
                </div>
        <div class="materiale_td" style="background-image:url(texture/nickel_1-0.jpg)">
                	<div class="nomepelle_box"><span>Argento</span></div>
                </div>
        <br clear="all" />
   	</div>
    
    <div class="materiale_tr" id="fodere_box" style="margin-bottom:0; display:none;">
    	<div class="materiale_tr">
            <div class="materiale_td" style="background-image:url(texture/fodera_arancione-0.jpg)">
                	<div class="nomepelle_box"><span>Arancione</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_azzurro-0.jpg)">
                	<div class="nomepelle_box"><span>Azzurro</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_beige-0.jpg)">
                	<div class="nomepelle_box"><span>Beige</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_blu_scuro-0.jpg)">
                	<div class="nomepelle_box"><span>Blu scuro</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">
            <div class="materiale_td" style="background-image:url(texture/fodera_bluette-0.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_fuxia-0.jpg)">
                	<div class="nomepelle_box"><span>Fuxia</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_giallo-0.jpg)">
                	<div class="nomepelle_box"><span>Giallo</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_grigio-0.jpg)">
                	<div class="nomepelle_box"><span>Grigio</span></div>
                </div>
            <br clear="all" />
        </div>  
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/fodera_lilla-0.jpg)">
                	<div class="nomepelle_box"><span>Lilla</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_nero-0.jpg)">
                	<div class="nomepelle_box"><span>Nero</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_rosa-0.jpg)">
                	<div class="nomepelle_box"><span>Rosa</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_rosso-0.jpg)">
                	<div class="nomepelle_box"><span>Rossa</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/fodera_verde_chiaro-0.jpg)">
                	<div class="nomepelle_box"><span>Verde chiaro</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/fodera_verde_scuro-0.jpg)">
                	<div class="nomepelle_box"><span>Verde scuro</span></div>
                </div>
            <br clear="all" />
        </div>
        <br clear="all" />
   	</div>
    
    <div class="materiale_tr" id="lampo_box" style="margin-bottom:0; display:none;">
    	<div class="materiale_tr">
            <div class="materiale_td" style="background-image:url(texture/lampo_001-0.jpg)">
                	<div class="nomepelle_box"><span>Gialla</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_016-0.jpg)">
                	<div class="nomepelle_box"><span>Ciclamino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_045-0.jpg)">
                	<div class="nomepelle_box"><span>Mattone</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_068-0.jpg)">
                	<div class="nomepelle_box"><span>Lilla</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">
            <div class="materiale_td" style="background-image:url(texture/lampo_092-0.jpg)">
                	<div class="nomepelle_box"><span>Cuoio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_102-0.jpg)">
                	<div class="nomepelle_box"><span>Mandarino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_127-0.jpg)">
                	<div class="nomepelle_box"><span>Nudo</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_140-0.jpg)">
                	<div class="nomepelle_box"><span>Rossa</span></div>
                </div>
            <br clear="all" />
        </div>  
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_159-0.jpg)">
                	<div class="nomepelle_box"><span>Rubino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_223-0.jpg)">
                	<div class="nomepelle_box"><span>Oliva</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_274-0.jpg)">
                	<div class="nomepelle_box"><span>Rosa</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_299-0.jpg)">
                	<div class="nomepelle_box"><span>Orchidea</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_328-0.jpg)">
                	<div class="nomepelle_box"><span>Azzurra</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_399-0.jpg)">
                	<div class="nomepelle_box"><span>Grigia</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_509-0.jpg)">
                	<div class="nomepelle_box"><span>Pistacchio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_540-0.jpg)">
                	<div class="nomepelle_box"><span>Menta</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_580-0.jpg)">
                	<div class="nomepelle_box"><span>Nera</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_807-0.jpg)">
                	<div class="nomepelle_box"><span>Arancio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_816-0.jpg)">
                	<div class="nomepelle_box"><span>Corallo</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_820-0.jpg)">
                	<div class="nomepelle_box"><span>Fragola</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_868-0.jpg)">
                	<div class="nomepelle_box"><span>Grigio scuro</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_884-0.jpg)">
                	<div class="nomepelle_box"><span>Tortora</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_908-0.jpg)">
                	<div class="nomepelle_box"><span>Petrolio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_920-0.jpg)">
                	<div class="nomepelle_box"><span>Blu notte</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_y003-0.jpg)">
                	<div class="nomepelle_box"><span>Verde</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y029-0.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y069-0.jpg)">
                	<div class="nomepelle_box"><span>Verde pino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y277-0.jpg)">
                	<div class="nomepelle_box"><span>Testa moro</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_y251-0.jpg)">
                	<div class="nomepelle_box"><span>Marrone</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y271-0.jpg)">
                	<div class="nomepelle_box"><span>Fango</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y282-0.jpg)">
                	<div class="nomepelle_box"><span>Bianca</span></div>
                </div> 
            <br clear="all" />
        </div>
        <br clear="all" />
   	</div>
    
    <div class="materiale_tr" id="lampo_box_interna" style="margin-bottom:0; display:none;">
    	<div class="materiale_tr">
            <div class="materiale_td" style="background-image:url(texture/lampo_001-0.jpg)">
                	<div class="nomepelle_box"><span>Gialla</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_016-0.jpg)">
                	<div class="nomepelle_box"><span>Ciclamino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_045-0.jpg)">
                	<div class="nomepelle_box"><span>Mattone</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_068-0.jpg)">
                	<div class="nomepelle_box"><span>Lilla</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">
            <div class="materiale_td" style="background-image:url(texture/lampo_092-0.jpg)">
                	<div class="nomepelle_box"><span>Cuoio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_102-0.jpg)">
                	<div class="nomepelle_box"><span>Mandarino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_127-0.jpg)">
                	<div class="nomepelle_box"><span>Nudo</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_140-0.jpg)">
                	<div class="nomepelle_box"><span>Rossa</span></div>
                </div>
            <br clear="all" />
        </div>  
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_159-0.jpg)">
                	<div class="nomepelle_box"><span>Rubino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_223-0.jpg)">
                	<div class="nomepelle_box"><span>Oliva</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_274-0.jpg)">
                	<div class="nomepelle_box"><span>Rosa</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_299-0.jpg)">
                	<div class="nomepelle_box"><span>Orchidea</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_328-0.jpg)">
                	<div class="nomepelle_box"><span>Azzurra</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_399-0.jpg)">
                	<div class="nomepelle_box"><span>Grigia</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_509-0.jpg)">
                	<div class="nomepelle_box"><span>Pistacchio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_540-0.jpg)">
                	<div class="nomepelle_box"><span>Menta</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_580-0.jpg)">
                	<div class="nomepelle_box"><span>Nera</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_807-0.jpg)">
                	<div class="nomepelle_box"><span>Arancio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_816-0.jpg)">
                	<div class="nomepelle_box"><span>Corallo</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_820-0.jpg)">
                	<div class="nomepelle_box"><span>Fragola</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_868-0.jpg)">
                	<div class="nomepelle_box"><span>Grigio scuro</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_884-0.jpg)">
                	<div class="nomepelle_box"><span>Tortora</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_908-0.jpg)">
                	<div class="nomepelle_box"><span>Petrolio</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_920-0.jpg)">
                	<div class="nomepelle_box"><span>Blu notte</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_y003-0.jpg)">
                	<div class="nomepelle_box"><span>Verde</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y029-0.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y069-0.jpg)">
                	<div class="nomepelle_box"><span>Verde pino</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y277-0.jpg)">
                	<div class="nomepelle_box"><span>Testa moro</span></div>
                </div>
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_y251-0.jpg)">
                	<div class="nomepelle_box"><span>Marrone</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y271-0.jpg)">
                	<div class="nomepelle_box"><span>Fango</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y282-0.jpg)">
                	<div class="nomepelle_box"><span>Bianca</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y223-0.jpg)">
                	<div class="nomepelle_box"><span>Rosa</span></div>
                </div> 
            <br clear="all" />
        </div>        
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_523-0.jpg)">
                	<div class="nomepelle_box"><span>Arancione</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_181-0.jpg)">
                	<div class="nomepelle_box"><span>Grigia</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_010-0.jpg)">
                	<div class="nomepelle_box"><span>Beige</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_546-0.jpg)">
                	<div class="nomepelle_box"><span>Celeste</span></div>
                </div>    
            <br clear="all" />
        </div>
        <div class="materiale_tr">  
            <div class="materiale_td" style="background-image:url(texture/lampo_827-0.jpg)">
                	<div class="nomepelle_box"><span>Verde</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_918-0.jpg)">
                	<div class="nomepelle_box"><span>Bluette</span></div>
                </div>
            <div class="materiale_td" style="background-image:url(texture/lampo_y011-0.jpg)">
                	<div class="nomepelle_box"><span>Verde Scuro</span></div>
                </div>               
            <br clear="all" />
        </div>
        <br clear="all" />
   	</div>
    
    
    
    <div class="materiale_tr" id="img_upluoad_box">
        <div id="form-image" style="position:relative">
            <form id="uploadimage" action="" method="post" enctype="multipart/form-data">
                <div id="image_preview" class="imgpers" style="height:50px"><img id="previewing" src="img/noimage.png" /></div>
                <div id="selectImage">
                    <label style="color:black; font-family: 'Marvel', sans-serif; font-size:20px; line-height:32px">Carica un'immagine</label><br/><br/><br/>
                    <label style="color:black; font-family: 'Marvel', sans-serif; font-size:20px;">Il caricamento dell'immagine potrebbe richiedere diversi minuti</label><br/>
                    <input type="file" name="file" id="file" style="float:left;margin:2px;padding:0;width:75px;" required></input>
                    <input id="modFile" type="button" style="visible:hidden" value="Modifica"></input>
                    <br clear="all"/>
                    <div id="message" style="color:black"></div>
                </div>                
            </form>
            <div id="message"></div>
        </div>
    </div>
</div>

<div id="back_image_editor" style="height:100%;width:0;position:fixed;z-index:9900;background-color: rgba(0, 0, 0, 0.4);
background: rgba(0, 0, 0, 0.4);top:0;left:0;"></div>

<div id="image_editor" style="display:none;width:0;position:fixed;z-index:9999;background-color:rgba(255.255.255.0.4);top:0;left:0;">
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
	
	

	//function to load image
	$(document).ready(function (e) {
		initializeview3D();
		var borsa = $('#borsa_attiva').val();
		chooseBag(borsa);
		
		partOnClick();
		materialOnClick();
		partInternoOnClick();
		$('#nomeborsa').text(selection[0]);
		
		
		
	//$('.modello').click(function(){chooseBag(this.id);});
    //$('#a1234').click(function () {LoadBag(borsa1)});
		
		// Function to preview image after validation
		$(function() {
			var blobURL;
			$("#modFile").hide();
			$("#file").change(function() {
				var files = this.files;
				var file;
				if (files && files.length) {
					file = files[0];
					if (/^image\/\w+$/.test(file.type)) {
						blobURL = URL.createObjectURL(file);
						$('#previewing').attr('src',blobURL).one('load',function(){
							$("#file").val('');
							getImageSize($('#previewing').attr('src'));
						    $('#previewing').attr('width','100%');
    						$('#previewing').attr('height','100%');
							//resize('previewing');
							console.log();
							$('#image_editor').load('libCrop/index.html',function(){
									$('#path').attr('src', $('#previewing').attr('src'));
									showImageEditor();
									$('#modFile').click(function(){showImageEditor()})
								})
							$('#previewing').load(function () {$('#modFile').show();});
						})
					} else {
						//$body.tooltip('Please choose an image file.', 'warning');
						}
				}
			});
		});
	});
$('#back_image_editor').click(function () {
	$('#image_editor').animate({width:'0', height:'0'},400,function () {$('#image_editor').hide()});
	$('#back_image_editor').animate({width:'0', height:'0' ,margin:'0'})
})
function showImageEditor(){
	$('#image_editor').show();
	$('#back_image_editor').show();
	$('#back_image_editor').animate({width:'100%',height:'100%'});
	$('#image_editor').animate({width:'600px', height: '600px',margin:'0 auto'});
}
var resize = function(idimg){
	var pic_scaled_height = pic_real_height/5;
	var pic_scaled_width = pic_real_width/5;
	var rc= document.createElement("canvas");
	rc.width = pic_scaled_width;
	rc.height = pic_scaled_height;
	var ctx = rc.getContext("2d");
	ctx.drawImage(document.getElementById(idimg), 0, 0, pic_scaled_width, pic_scaled_height);
	$('#'+idimg).attr('src', rc.toDataURL());
}
var getImageSize = function (image) {
	var img = document.createElement("img");
	$(img).attr('src' ,image);
    $(img).attr('width','auto');
    $(img).attr('height','auto');
	pic_real_width = img.width;
    pic_real_height =img.height;
}

	
</script>

    </body>
</html>