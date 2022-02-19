// JavaScript Document 
var selection =[];
//selection[0] nome borsa
//selection[1] nome parte
//selection[2] prezzo base
//selection[3] prezzo-vari-parti
//selection[4] coeff
//selection[5] sezione
//selection[6] image-materiale
//selection[7] img utente
//selection[8] interno/esterno
//selection[9] tipo interno
//selection[10]prezzo finale
//selection[11] sessione
function materialOnClick(){
	$('.materiale_td').click(function(){
		
		var image = this.style.backgroundImage;
		var a = image.split('/');
		image= a[a.length-1];
		image= image.replace('"','');
		image= image.replace(')','');
		selection[6]= image;
		console.log(image);
		if (selection[1]!="" && selection[8]!="interno"){
			ChangeTexture(selection[1], CreateTextureMaterial(image));
			aggiornaPrezzo(selection[1], selection[4], image);
		}
		if (selection[5]!="" && selection[8]!="interno"){
			var id_c = selection[5]+"_wrp > div";
			$("#"+id_c).children().each(function(){
				part=$(this).html();
				obj = getPartByName(part);
				selection[4] = obj.coeff;
				var n =obj.material;				
				if(n=="lampo"){
					var b = image.split('_');				
					image= b[b.length-1];
					var c =image.split('-');
					image= "lampo_"+c[0].toString()+"-0.jpg";
					console.log(image)
				}
				if(n!="lampo"){
					image= selection[6];
				}
				
				ChangeTexture(part, CreateTextureMaterial(image));
				aggiornaPrezzo(part, selection[4], image);	
							
				 
			});
			
		}
		
		if(selection[8]=="interno"){
			var percorso = "texture/"+image;
			switch (selection[1]) {
				case 'Fodera': $('#canvas_interno_top').css('background-image', 'url("' + percorso + '")');
				 			   $('#canvas_interno_bot').css('background-image' , 'url("' + percorso + '")');
				break;
				case 'Lampo Interna' : $('#lampo_top').css('background-image' , 'url("' + percorso + '")');
				
				break;
				case 'Inserti Fodera':$('#inserti_fodera_top'+selection[9]).css('background-image' , 'url("' + percorso + '")');
									  $('#inserti_fodera_bot'+selection[9]).css('background-image' , 'url("' + percorso + '")');
									  $('#inserti_fodera_tasca').css('background-image' , 'url("' + percorso + '")');
									  document.getElementById('aaa').setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', percorso );
				break;
			}
			aggiornaPrezzo(selection[1], selection[4], image);	
		}
		
	});
}

function partOnClick(){
	$(".parte").click(function(){
		var a=this.innerHTML;
		$('.parte').css('background-color' , 'white');
		$('.parte').css('color' , '#333');
		$('.parte').css('border-color' , '#e8ae11');
		$('.parte_interno').css('background-color' , 'white');
		$('.parte_interno').css('color' , '#333');
		$(this).css('background-color' , '#e8ae11');
		$(this).css('color' , '#fff');
		$(this).css('border-color' , '#fff');
		$('#canvas').css('display' , 'block');
		$('#canvas_interno').css('display' , 'none');
		$('#foto_interno').css('display' , 'none');
		choosePart(a);
	})
}

function partInternoOnClick(){
	$(".parte_interno").click(function(){
		var a=this.innerHTML;
		$('.parte').css('background-color' , 'white');
		$('.parte').css('color' , '#333');
		$('.parte').css('border-color' , '#e8ae11');
		$('.parte_interno').css('background-color' , 'white');
		$('.parte_interno').css('color' , '#333');
		$(this).css('background-color' , '#e8ae11');
		$(this).css('color' , '#fff');
		$(this).css('border-color' , '#fff');
		$('#canvas').css('display' , 'none');
		$('#canvas_interno').css('display' , 'block');
		$('#foto_interno').css('display' , 'block');
		choosePartInterno(a);
	})
}

function choosePart(part){
	selection[1] = part;
	selection[5] = "";
	obj = getPartByName(part);
	selection[4] = obj.coeff;
	selection[8] = obj.cat;
	$('#quadranti_tit, #fianchi_tit, #corpo_borsa_tit').css('background-color' , '#ddd');
	$('#quadranti_tit, #fianchi_tit, #corpo_borsa_tit').css('color' , '#333');	
	//ChangePositionCamera('default');
	CngPosCam(obj.x,obj.y,obj.z);
	visibleMaterial(obj.material);
}

function choosePartInterno(part){
	selection[1] = part;
	selection[5] = "";
	obj = getPartByName(part);
	selection[4] = obj.coeff;
	selection[8] = obj.cat;
	$('#quadranti_tit, #fianchi_tit, #corpo_borsa_tit').css('background-color' , '#ddd');
	$('#quadranti_tit, #fianchi_tit, #corpo_borsa_tit').css('color' , '#333');	
	visibleMaterial(obj.material);
	//mostra parte interno
	
}

function chooseSection(section){
	selection[1] = "";
	selection[5] = section;
	selection[8] = "esterno";
	$('#canvas').css('display' , 'block');
	$('#canvas_interno').css('display' , 'none');
	$('#foto_interno').css('display' , 'none');
	var id_tit = section+"_tit";
	var id_cont = section+"_wrp";
	height = $('#'+id_cont).height();
	$('#quadranti_tit, #fianchi_tit, #corpo_borsa_tit').css('background-color' , '#ddd');
	$('#quadranti_tit, #fianchi_tit, #corpo_borsa_tit').css('color' , '#333');
	
	$('#'+id_tit).css('background-color' , '#e8ae11');
	$('#'+id_tit).css('color' , '#fff');
	$('.parte').css('background-color' , 'white');
	$('.parte').css('color' , '#333');
	
	$('.arrow').each(function(){
        $(this).css('display','none');
    });	
	
	if (height==0){
		$('#'+id_tit).find('.arrow').css('display','block');
		$('#quadranti_wrp, #fianchi_wrp, #corpo_borsa_wrp').css('height' , '0');
    	finalheight = $('#'+id_cont).css('height', 'auto').height();
		$('#'+id_cont).height(0).animate({height: finalheight}, 500);
		
	}
	if (height!=0){
		$('#'+id_cont).animate({height: 0}, 500);
	
	}
	visibleMaterial('leather');
}

function choosePelle(pelle){
	var id_tit = pelle+"_tit";
	var id_cont = pelle;
	height = $('#'+id_cont).height();
	$('.materiali_tipo_tit').css('background-color' , '#ddd');
	$('.materiali_tipo_tit').css('color' , '#333');
	$('#'+id_tit).css('background-color' , '#e8ae11');
	$('#'+id_tit).css('color' , '#fff');
	if (height==0){
    	finalheight = $('#'+id_cont).css('height', 'auto').height();
		$(".box_pelle").animate({height: 0}, 500).promise().done(function()
			{
				
				$(".box_pelle").css('display' , 'none');				
				$(".box_pelle").css('height' , '0');
				$('#'+id_cont).css('display' , 'block');				
				$('#'+id_cont).height(0).animate({height: finalheight}, 500);
			});
		
		
	}
	if (height!=0){
		$('#'+id_cont).animate({height: 0}, 500).promise().done(function(){$('#'+id_cont).css('display' , 'none');});
	
	}
	

}

function getPartByName(name){
	var a;
	switch (selection[0]) {
		case 'Vega': a=borsa1; break;
		case 'Antares': a=borsa2; break;
		case 'Bolsa-01': a=borsa3; break;
		case 'Sirio': a=borsa4; break;
		case 'Bauletto Piccolo': a=borsa5; break;
		case 'Bauletto Grande': a=borsa6; break;
		case 'Pollux': a=borsa7; break;
		case 'Regulus': a=borsa8; break;
		case 'Rigel': a=borsa9; break;
	}
	
	var b;
	for (i=0; i<a.part.length;i++){
		if (a.part[i].name==name)
			b=a.part[i]
	}
	return b
}

/* deprecata si utilizza direttamente la CngPosCam(posX,posY,posZ) con la posizione a cui arrivare
function ChangePositionCamera(posizione){
	switch (posizione){
		case 'sopra':CngPosCam(25,27,9); break;
		case 'sotto':CngPosCam(-22,-25,-15); break;
		case 'davanti':CngPosCam(9,12,27); break;
		case 'dietro':CngPosCam(26,1,-28); break;
		case 'primoPiano':CngPosCam(21,4,46);break;
		case 'default':CngPosCam(15,25,50);break;
	}
}
*/
function CngPosCam(posX,posY,posZ){
	view3D.moveCamera.x=posX;view3D.moveCamera.y=posY;view3D.moveCamera.z=posZ;	
	view3D.moveCamera.movement=true;
}

function visibleMaterial(type){
	switch (type) {
		case 'leather':
			$('.pelli_box').css('display','block');
			$('#metalli_box').css('display','none');
			$('#img_upluoad_box').css('display','none');
			$('#lampo_box').css('display','none');
			$('#lampo_box_interna').css('display','none');
			$('#fodere_box').css('display','none');
			break;
		case 'editable':
			$('.pelli_box').css('display','block');
			$('#metalli_box').css('display','none');
			$('#img_upluoad_box').css('display','block');
			$('#lampo_box').css('display','none');
			$('#lampo_box_interna').css('display','none');
			$('#fodere_box').css('display','none');
			break;
		case 'metal':
			$('.pelli_box').css('display','none');
			$('#metalli_box').css('display','block');
			$('#img_upluoad_box').css('display','none');
			$('#lampo_box').css('display','none');
			$('#lampo_box_interna').css('display','none');
			$('#fodere_box').css('display','none');
			break;		
		case 'lampo':
			$('.pelli_box').css('display','none');
			$('#metalli_box').css('display','none');
			$('#img_upluoad_box').css('display','none');
			$('#lampo_box').css('display','block');
			$('#lampo_box_interna').css('display','none');
			$('#fodere_box').css('display','none');
			break;
		case 'fodera':
			$('.pelli_box').css('display','none');
			$('#metalli_box').css('display','none');
			$('#img_upluoad_box').css('display','none');
			$('#lampo_box').css('display','none');
			$('#lampo_box_interna').css('display','none');
			$('#fodere_box').css('display','block');
			break;	
		case 'lampo_interna':
			$('.pelli_box').css('display','none');
			$('#metalli_box').css('display','none');
			$('#img_upluoad_box').css('display','none');
			$('#lampo_box').css('display','none');
			$('#lampo_box_interna').css('display','block');
			$('#fodere_box').css('display','none');
			break;			
	}
}

function chooseBag(bag){
	SceneClear();
	PartClear();
	switch (bag) {
		case 'Vega': LoadBag(borsa1); break;
		case 'Antares': LoadBag(borsa2); break;
		case 'Bolsa-01': LoadBag(borsa3); break;
		case 'Sirio': LoadBag(borsa4); break;
		case 'Bauletto_piccolo': LoadBag(borsa5); break;
		case 'Bauletto_grande': LoadBag(borsa6); break;
		case 'Pollux': LoadBag(borsa7); break;
		case 'Regulus': LoadBag(borsa8); break;
		case 'Rigel': LoadBag(borsa9); break;
		
	}
}
function PartClear(){
	$('#metallerie_wrp').empty();
	$('#metallerie_wrp').append('<p class="legenda-parti">Scegli tra metallerie color oro oppure argento</p>');
	$('#parti_wrp').prepend('<p class="legenda-parti">Associa un tipo di pelle ad ogni sezione per una configurazione più rapida della borsa. Apri i corrispondenti menu a tendina per personalizzare anche il più piccolo dei particolari</p>');
	$('#quadranti_wrp').empty();
	$('#fianchi_wrp').empty();
	$('#corpo_borsa_wrp').empty();	
	$('#parti_interno_wrp').empty();
	$('#parti_interno_wrp').append('<p class="legenda-parti">Scegli il colore della fodera interna,della zip e il tipo di pelle per le rifiniture (bordini,logo,ecc.)</p>');
}

function SceneClear(){
	if (view3D.scene.children.length >= 2){
		for( var i = view3D.scene.children.length - 1; i >= 2; i--) {
			obj = view3D.scene.children[i];
			view3D.scene.remove(obj);
		}
	}
}

function LoadBag(bag){
	selection[0] = bag.name;
	selection[1] = '';
	selection[2] = bag.price;
	selection[3] = '';
	selection[9] = bag.tipo_interno;
	var borsa_interno = bag.foto_interno;
	console.log();
	$('#quadranti').css('display','none');
	$('#fianchi').css('display','none');
	$('#corpo_borsa').css('display','none');
	$('#foto_interno_b').append('<img src="img/interno/'+borsa_interno+'.png" style="width:100%" />');
	if (!view3D.objects[bag.name]){
		view3D.objects[bag.name] = [];
	}
	for (var i = 0 ; i< bag.part.length; ++i){
		var bagPart =bag.part[i];
		LoadPart(bagPart,bag.name);
	}
	
	selection[3] = selection[3].substring(1, selection[3].length);
	switch (selection[9]){
		case 1 : 
			$('#canvas_interno_top').append('<div id="inserti_fodera_top1"></div>');
			$('#canvas_interno_bot').append('<div id="inserti_fodera_bot1"></div>');
		
		break;
		case 2 : 
			$('#canvas_interno_top').append('<div id="inserti_fodera_top2"></div>');
			$('#canvas_interno_bot').append('<div id="inserti_fodera_bot2"></div>');
		break;
	}
}

function LoadPart(object,name){
	var cat = object.cat;
	selection[8] = object.cat;
	var sotto_cat = "";
	var check_quadranti=0;
	var check_fianchi=0;
	var check_corpo_borsa=0;
	selection[3] += "-"+object.name+"+no";
	switch (cat){
		case "metallerie" : $('#metallerie_wrp').append('<div class="parte_div"><p class="parte">'+object.name+'</p></div>');
			break;
		case "esterno" : sotto_cat = object.sotto_cat;
			switch(sotto_cat){
				case "quadranti": $('#quadranti_wrp').append('<div class="parte_div"><p class="parte">'+object.name+'</p></div>');
					 check_quadranti=1;	
					 break;		  
				case "fianchi": $('#fianchi_wrp').append('<div class="parte_div"><p class="parte">'+object.name+'</p></div>');
					 check_fianchi=1;
					 break;	
				case "corpo": $('#corpo_borsa_wrp').append('<div class="parte_div"><p class="parte">'+object.name+'</p></div>');
					 check_corpo_borsa=1;
					 break;			
			}		
			break;
		case "interno" : $('#parti_interno_wrp').append('<div class="parte_div"><p class="parte_interno">'+object.name+'</p></div>');
			break;	
		case "interno2" : $('#parti_interno_wrp').append('<div class="parte_div"><p class="parte">'+object.name+'</p></div>');
			break;			
	//altrocase x borsa regulus fare interno2 come interno ma usa solo parte
	
	}
	
	
	
	
	
	
	if (check_quadranti==1){
		$('#quadranti').css('display','block');
		$('#quadranti_wrp').css('height','0');
		$('#quadranti_wrp').css('overflow-y','hidden');
		
	}
	
	if (check_fianchi==1){
		$('#fianchi').css('display','block');
		$('#fianchi_wrp').css('height','0');
		$('#fianchi_wrp').css('overflow-y','hidden');
		
	}
	
	if (check_corpo_borsa==1){
		$('#corpo_borsa').css('display','block');
		$('#corpo_borsa_wrp').css('height','0');
		$('#corpo_borsa_wrp').css('overflow-y','hidden');
		
	}
	if(selection[8] != "interno"){
		partOnClick();
		if (view3D.objects[name][object.name]){
			view3D.scene.add(view3D.objects[name][object.name]);
		} else {
			var loader=new THREE.JSONLoader();
			loader.withCredentials = false;			
			loader.load(
			object.mesh,
			function ( geometry, materials ) {
				var texture = THREE.ImageUtils.loadTexture(object.materialImg);
				var bumpmap = THREE.ImageUtils.loadTexture(object.materialBMap);
				var material = new THREE.MeshPhongMaterial({
					map:texture, bumpMap:bumpmap,side:THREE.DoubleSide
				})
				
				var obj = new THREE.Mesh( geometry, material );
				obj.position.y = -10;
				obj.name = object.name;
				view3D.objects[name][object.name]= obj;
				if (name==selection[0]){
					view3D.scene.add(obj);
				}
			});
		}
	}
}

function ChangeTexture(e,a){
	obj=view3D.scene.getObjectByName(e);
	obj.material=a
}

function CreateTextureMaterial(e){
	var a=new THREE.ImageUtils.loadTexture("texture/"+e);
	e=e.split(".");	
	var n=new THREE.ImageUtils.loadTexture("texture/"+e[0]+"bump."+e[1]);
	i=new THREE.MeshLambertMaterial({map:a,bumpMap:n,emissive:"#060606",side:THREE.DoubleSide});return i
}


/// va sistemato un problema di caricamento delle immagini che va temporizzato
function createFusionMaterial (matImg,matbump,meshImg,meshbump) {
	console.log('path'+matImg);
	var mattex = new THREE.ImageUtils.loadTexture(matImg);
	console.log('createFusionMaterial'+mattex);
	var matbmap = new THREE.ImageUtils.loadTexture(matbump);
	console.log('createFusionMaterial'+matbmap);
	var meshtex = new THREE.ImageUtils.loadTexture(meshImg);
	console.log('createFusionMaterial'+meshtex);
	var meshbmap = new THREE.ImageUtils.loadTexture(meshbump);
	console.log('createFusionMaterial'+meshbmap);
	var finalTexture = PasteOnBmapBmapImg(mattex,meshtex);
	var finalBmap = PasteOnBmapBmapImg(matbmap,meshbmap);
	
	var material = THREE.MeshMeshPhongMaterial({map:finalTexture,bumpMap:finalBmap,emissive:'#000'});
	return material;
}

function PasteOnBmapBmapImg(text1,text2) {
	var c = document.createElement('canvas');
	var ctx = c.getContext('2d');
	ctx.drawImage(text1.image,0,0);
	ctx.drawImage(text2.image,0,0);
	var text = new THREE.Texture();
	bmap3.image = ctx;
	return bmap3;
}

function aggiornaPrezzo(part, coeff, img){
	var a = img.split('.');//divide il nome immagine(n_prezzo) e estensione
	img= a[0];
	
	var b = img.split('-'); // divide prezzo e nome
	var prezzo = b[b.length-1];
	var tipo = b[0];
	var prezzo_pezzo = prezzo * coeff;		
	var c = selection[3].split('-'); //divide il carrello corrente
	
	for (var i = 0 ; i< c.length; ++i){
		var d = c[i].split('+');
		if (d[0]==part){
			c[i] = part+"+"+tipo+"+"+prezzo_pezzo.toFixed(2);
		}
	}
	selection[3] = c.join("-");
	checkComplete(selection[3]);
	console.log(selection[3]);
	
	

}

function checkComplete(carrello){
	var c = carrello.split('-'); //divide il carrello corrente
	var prezzo=0;
	var completa=c.length;
	var prezzo_parziale=0;	
	for (var i = 0 ; i< c.length; ++i){
		var d = c[i].split('+');
		if (d[1]!="no"){
			prezzo_parziale +=parseFloat(d[2]);
			completa--;
		} 
	}
	
	if (completa==0){
		prezzo = parseFloat(prezzo_parziale)+parseFloat(selection[2]);
		$('#prezzo').text("€" +" "+prezzo.toFixed(2));
		$('#prezzo_box').css("display","block");
		$('#testo_nc').css("display","none");
		selection[10]=prezzo.toFixed(2);
			
	}
	
	
}

function carrelloGo(){ 
	fotolati();
	var parametri = [selection[10] ,selection[3], selection[0]];
	$( "#b" ).load( "carrellojstophp.php",{ parametri_ricerca: parametri}).promise().done(function(){window.location.assign("carrello.php")});
}


function fotolati(){
	chooseSection('corpo_borsa');
	var lati = ["fronte","retro","sinistra","destra","sopra","sotto"];
	var telecamere = ["30|0|30","-30|0|-30","30|0|0","-30|0|0","30|30|0","-30|-30|0"];
	var tel_a = [[15,0,40],[-15,0,-40],[30,0,0],[-30,0,0],[30,30,0],[-30,-30,0]];
	var tel = "";
	//var tel_a = "";
	var posTel;
	var a ="";
	var i=0;
	
	for (posTel = 0; posTel < lati.length; ++posTel) {
		/*var timer = window.setTimeout(sposta(parseFloat(tel_a[posTel][0]),parseFloat(tel_a[posTel][1]),parseFloat(tel_a[posTel][2]),lati[posTel]),2000);
		var timer2 = window.setTimeout( stampa(lati[posTel]), 2000 );
		window.clearTimeout(timer);
		window.clearTimeout(timer2);*/
		sposta(parseFloat(tel_a[posTel][0]),parseFloat(tel_a[posTel][1]),parseFloat(tel_a[posTel][2]),lati[posTel]);
		
	}
	
	//mettere tutto in funzioni diverse
	/*sposta(parseFloat(tel_a[0][0]),parseFloat(tel_a[0][1]),parseFloat(tel_a[0][2]),lati[0]);
	sposta(parseFloat(tel_a[1][0]),parseFloat(tel_a[1][1]),parseFloat(tel_a[1][2]),lati[1]);
	sposta(parseFloat(tel_a[2][0]),parseFloat(tel_a[2][1]),parseFloat(tel_a[2][2]),lati[2]);
	sposta(parseFloat(tel_a[3][0]),parseFloat(tel_a[3][1]),parseFloat(tel_a[3][2]),lati[3]);
	sposta(parseFloat(tel_a[4][0]),parseFloat(tel_a[4][1]),parseFloat(tel_a[4][2]),lati[4]);
	sposta(parseFloat(tel_a[5][0]),parseFloat(tel_a[5][1]),parseFloat(tel_a[5][2]),lati[5]);*/
	/*view3D.camera.position.set(parseFloat(tel_a[0][0]),parseFloat(tel_a[0][1]),parseFloat(tel_a[0][2]));
	view3D.moveCamera.movement=true;
	view3D.moveCamera.time=0;
	var fronte = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: fronte,nome:lati[0]});
	
	view3D.camera.position.set(parseFloat(tel_a[1][0]),parseFloat(tel_a[1][1]),parseFloat(tel_a[1][2]));
	view3D.moveCamera.movement=true;
	view3D.moveCamera.time=0;
	var retro = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: retro,nome:lati[1]});
	
	view3D.camera.position.set(parseFloat(tel_a[2][0]),parseFloat(tel_a[2][1]),parseFloat(tel_a[2][2]));
	view3D.moveCamera.movement=true;
	view3D.moveCamera.time=0;
	var sinistra = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: sinistra,nome:lati[2]});
	
	view3D.camera.position.set(parseFloat(tel_a[3][0]),parseFloat(tel_a[3][1]),parseFloat(tel_a[3][2]));
	view3D.moveCamera.movement=true;
	view3D.moveCamera.time=0;
	var destra = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: destra,nome:lati[3]});
	
	view3D.camera.position.set(parseFloat(tel_a[4][0]),parseFloat(tel_a[4][1]),parseFloat(tel_a[4][2]));
	view3D.moveCamera.movement=true;
	view3D.moveCamera.time=0;
	var sopra = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: sopra,nome:lati[4]});
	
	view3D.camera.position.set(parseFloat(tel_a[5][0]),parseFloat(tel_a[5][1]),parseFloat(tel_a[5][2]));
	view3D.moveCamera.movement=true;
	view3D.moveCamera.time=0;
	var sotto = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: sotto,nome:lati[5]});
	*/
	/*
	for (posTel = 0; posTel < lati.length; ++posTel) {
		tel = telecamere[posTel];
		tel_a = tel.split('|');
		//CngPosCam(parseFloat(tel_a[0]),parseFloat(tel_a[1]),parseFloat(tel_a[2]));
		/*view3D.moveCamera.movement=true;
		view3D.camera.position.x=parseFloat(tel_a[0]);
		view3D.camera.position.y=parseFloat(tel_a[1]);
		view3D.camera.position.z=parseFloat(tel_a[2]);		
		view3D.moveCamera.time=0;*/
		/*
		view3D.camera.position.set(parseFloat(tel_a[0]),parseFloat(tel_a[1]),parseFloat(tel_a[2]));
		view3D.moveCamera.movement=true;
		view3D.moveCamera.time=0;
		//view3D.renderer.domElement.moveCamera(false,0,parseFloat(tel_a[0]),parseFloat(tel_a[1]),parseFloat(tel_a[2]));
		a = view3D.renderer.domElement.toDataURL();
		
		$( "#b" ).load( "fotocarrello.php", { data: a,nome:lati[posTel]});
	
	}*/

}

function sposta(x,y,z,lato){
	view3D.moveCamera.time=0;
	view3D.camera.position.setX(x);
	view3D.camera.position.setY(y);
	view3D.camera.position.setZ(z);
	view3D.controls.update();
	render();
	stampa(lato);
	/*view3D.moveCamera.x=x;
	view3D.moveCamera.x=y;
	view3D.moveCamera.x=z;
	view3D.moveCamera.movement=true;*/
	//window.setTimeout( stampa(lato), 2000 );
	//stampa(lato);	
}

function stampa(lato){
	var a = view3D.renderer.domElement.toDataURL();
	$( "#b" ).load( "fotocarrello.php", { data: a,nome:lato,borsa:selection[0]});
}

function openpopup(){
	$( "#pop-up_bg" ).css("display","block")
}

function closepopup(){
	$( "#pop-up_bg" ).css("display","none")
}

