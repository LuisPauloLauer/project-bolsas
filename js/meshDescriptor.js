// JavaScript Document

/*name.part+n.name/basepath/mesh/materialImg/materialBMap/image/bump*/

var borsa1 = {
	name:'Vega',
	price:162,
	tipo_interno:2,
	foto_interno:'vega',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa1/metallerie/', 
			mesh : 'models/borsa1/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:0,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa1/quadrante_front/', 
			mesh : 'models/borsa1/quadrante_front/quadrante_front.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa1/quadrante_retro/', 
			mesh : 'models/borsa1/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa1/fianco_destro/', 
			mesh : 'models/borsa1/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa1/fianco_sinistro/', 
			mesh : 'models/borsa1/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa1/maniglia_front/', 
			mesh : 'models/borsa1/maniglia_front/maniglia_front.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.04,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia retro',
			basepath : 'models/borsa1/maniglia_retro/', 
			mesh : 'models/borsa1/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.04,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Sottomaniglia Frontale Destro',
			basepath : 'models/borsa1/sottomaniglia_front_destro/', 
			mesh : 'models/borsa1/sottomaniglia_front_destro/sottomaniglia_front_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Sottomaniglia Frontale Sinistro',
			basepath : 'models/borsa1/sottomaniglia_front_sinistro/', 
			mesh : 'models/borsa1/sottomaniglia_front_sinistro/sottomaniglia_front_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Sottomaniglia Retro Destro',
			basepath : 'models/borsa1/sottomaniglia_retro_destro/', 
			mesh : 'models/borsa1/sottomaniglia_retro_destro/sottomaniglia_retro_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Sottomaniglia Retro Sinistro',
			basepath : 'models/borsa1/sottomaniglia_retro_sinistro/', 
			mesh : 'models/borsa1/sottomaniglia_retro_sinistro/sottomaniglia_retro_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Filetto Frontale',
			basepath : 'models/borsa1/filetto_front/', 
			mesh : 'models/borsa1/filetto_front/filetto_front.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Filetto Retro',
			basepath : 'models/borsa1/filetto_retro/', 
			mesh : 'models/borsa1/filetto_retro/filetto_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Tracolla',
			basepath : 'models/borsa1/tracolla/', 
			mesh : 'models/borsa1/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:30,z:40,material:'leather'
		},
		{
			name : 'Tira Zip',
			basepath : 'models/borsa1/tira_zip/', 
			mesh : 'models/borsa1/tira_zip/tira_zip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:20,z:0,material:'leather'
		},
		{
			name : 'Fondo',
			basepath : 'models/borsa1/fondo/', 
			mesh : 'models/borsa1/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.06,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:-30,z:10,material:'leather'
		},		
		{
			name : 'Lampo',
			basepath : 'models/borsa1/lampo/', 
			mesh : 'models/borsa1/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:20,z:0,material:'lampo'
		},		
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo_interna'
		}
	]
}

var borsa2 = {
	name:'Antares',
	price:166,
	tipo_interno:1,
	foto_interno:'antares',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa2/metallerie/', 
			mesh : 'models/borsa2/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:0,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa2/quadrante_frontale/', 
			mesh : 'models/borsa2/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.13,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa2/quadrante_retro/', 
			mesh : 'models/borsa2/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa2/fianco_destro/', 
			mesh : 'models/borsa2/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa2/fianco_sinistro/', 
			mesh : 'models/borsa2/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Patella',
			basepath : 'models/borsa2/patella/', 
			mesh : 'models/borsa2/patella/patella.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa2/maniglia_frontale/', 
			mesh : 'models/borsa2/maniglia_frontale/maniglia_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia retro',
			basepath : 'models/borsa2/maniglia_retro/', 
			mesh : 'models/borsa2/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Filetto Frontale Destro',
			basepath : 'models/borsa2/filetto_frontale_destro/', 
			mesh : 'models/borsa2/filetto_frontale_destro/filetto_frontale_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Filetto Frontale Sinistro',
			basepath : 'models/borsa2/filetto_frontale_sinistro/', 
			mesh : 'models/borsa2/filetto_frontale_sinistro/filetto_frontale_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Filetto Retro Destro',
			basepath : 'models/borsa2/filetto_retro_destro/', 
			mesh : 'models/borsa2/filetto_retro_destro/filetto_retro_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Filetto Retro Sinistro',
			basepath : 'models/borsa2/filetto_retro_sinistro/', 
			mesh : 'models/borsa2/filetto_retro_sinistro/filetto_retro_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Tracolla',
			basepath : 'models/borsa2/tracolla/', 
			mesh : 'models/borsa2/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:30,z:40,material:'leather'
		},		
		{
			name : 'Fondo',
			basepath : 'models/borsa2/fondo/', 
			mesh : 'models/borsa2/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:-30,z:10,material:'leather'
		},		
		{
			name : 'Filetto Fondo',
			basepath : 'models/borsa2/filetto_fondo/', 
			mesh : 'models/borsa2/filetto_fondo/filetto_fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.04,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:-30,z:10,material:'leather'
		},		
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}

var borsa3 = {
	name:'Bolsa-01',
	price:93,
	tipo_interno:1,
	foto_interno:'Bolsa-01',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa3/metallerie/', 
			mesh : 'models/borsa3/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa3/quadrante_frontale/', 
			mesh : 'models/borsa3/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.10,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa3/quadrante_posteriore/', 
			mesh : 'models/borsa3/quadrante_posteriore/quadrante_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.10,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Lista Pelle Frontale',
			basepath : 'models/borsa3/lista_pelle_frontale/', 
			mesh : 'models/borsa3/lista_pelle_frontale/lista_pelle_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.02,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Lista Pelle Retro',
			basepath : 'models/borsa3/lista_pelle_retro/', 
			mesh : 'models/borsa3/lista_pelle_retro/lista_pelle_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Angolo Frontale Destro',
			basepath : 'models/borsa3/angolo_frontale_destro/', 
			mesh : 'models/borsa3/angolo_frontale_destro/angolo_frontale_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.005,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Angolo Frontale Sinistro',
			basepath : 'models/borsa3/angolo_frontale_sinistro/', 
			mesh : 'models/borsa3/angolo_frontale_sinistro/angolo_frontale_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.005,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Angolo Retro Destro',
			basepath : 'models/borsa3/angolo_posteriore_destro/', 
			mesh : 'models/borsa3/angolo_posteriore_destro/angolo_posteriore_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Angolo Retro Sinistro',
			basepath : 'models/borsa3/angolo_posteriore_sinistro/', 
			mesh : 'models/borsa3/angolo_posteriore_sinistro/angolo_posteriore_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},	
		{
			name : 'Tirazip Testa',
			basepath : 'models/borsa3/tira_zip/', 
			mesh : 'models/borsa3/tira_zip/tira_zip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},		
		{
			name : 'Tirazip Quadrante',
			basepath : 'models/borsa3/tira_zip_frontale/', 
			mesh : 'models/borsa3/tira_zip_frontale/tira_zip_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Tracolla',
			basepath : 'models/borsa3/tracolla/', 
			mesh : 'models/borsa3/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:30,z:40,material:'leather'
		},			
		{
			name : 'Filetto',
			basepath : 'models/borsa3/filetto/', 
			mesh : 'models/borsa3/filetto/filetto.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.04,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:-30,z:10,material:'leather'
		},			
		{
			name : 'Lampo',
			basepath : 'models/borsa3/lampo/', 
			mesh : 'models/borsa3/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-45,y:20,z:0,material:'lampo'
		},		
		{
			name : 'Lampo Quadrante',
			basepath : 'models/borsa3/lampo_frontale/', 
			mesh : 'models/borsa3/lampo_frontale/lampo_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'lampo'
		},
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}

var borsa4 = {
	name:'Sirio',
	price:156,
	tipo_interno:2,
	foto_interno:'sirio',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa4/metallerie/', 
			mesh : 'models/borsa4/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa4/quadrante_frontale/', 
			mesh : 'models/borsa4/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.16,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa4/quadrante_retro/', 
			mesh : 'models/borsa4/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.16,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa4/fianco_destro/', 
			mesh : 'models/borsa4/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.11,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa4/fianco_sinistro/', 
			mesh : 'models/borsa4/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.11,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa4/maniglia_frontale/', 
			mesh : 'models/borsa4/maniglia_frontale/maniglia_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia retro',
			basepath : 'models/borsa4/maniglia_retro/', 
			mesh : 'models/borsa4/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.07,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Filetto Frontale',
			basepath : 'models/borsa4/filetto_frontale/', 
			mesh : 'models/borsa4/filetto_frontale/filetto_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},	
		{
			name : 'Filetto Retro',
			basepath : 'models/borsa4/filetto_retro/', 
			mesh : 'models/borsa4/filetto_retro/filetto_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},	
		{
			name : 'Superiore',
			basepath : 'models/borsa4/superiore/', 
			mesh : 'models/borsa4/superiore/superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		{
			name : 'Lampo',
			basepath : 'models/borsa4/lampo/', 
			mesh : 'models/borsa4/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'lampo'
		},		
		{
			name : 'Tirazip',
			basepath : 'models/borsa4/tira_zip/', 
			mesh : 'models/borsa4/tira_zip/tira_zip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},		
		{
			name : 'Tracolla',
			basepath : 'models/borsa4/tracolla/', 
			mesh : 'models/borsa4/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.05,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:40,z:40,material:'leather'
		},		
		
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}

var borsa5 = {
	name:'Bauletto Piccolo',
	price:154,
	tipo_interno:3,
	foto_interno:'bauletto_piccolo',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa5/metallerie/', 
			mesh : 'models/borsa5/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa5/quadrante_frontale/', 
			mesh : 'models/borsa5/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.1,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa5/quadrante_retro/', 
			mesh : 'models/borsa5/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.1,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa5/fianco_destro/', 
			mesh : 'models/borsa5/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.075,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa5/fianco_sinistro/', 
			mesh : 'models/borsa5/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.075,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa5/maniglia_frontale/', 
			mesh : 'models/borsa5/maniglia_frontale/maniglia_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.075,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia retro',
			basepath : 'models/borsa5/maniglia_retro/', 
			mesh : 'models/borsa5/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.075,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Sottomaniglia Frontale Destro',
			basepath : 'models/borsa5/sottomaniglia_frontale_destro/', 
			mesh : 'models/borsa5/sottomaniglia_frontale_destro/sottomaniglia_frontale_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Sottomaniglia Frontale Sinistro',
			basepath : 'models/borsa5/sottomaniglia_frontale_sinistro/', 
			mesh : 'models/borsa5/sottomaniglia_frontale_sinistro/sottomaniglia_frontale_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Sottomaniglia Retro Destro',
			basepath : 'models/borsa5/sottomaniglia_retro_destro/', 
			mesh : 'models/borsa5/sottomaniglia_retro_destro/sottomaniglia_retro_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Sottomaniglia Retro Sinistro',
			basepath : 'models/borsa5/sottomaniglia_retro_sinistro/', 
			mesh : 'models/borsa5/sottomaniglia_retro_sinistro/sottomaniglia_retro_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Filetto Frontale',
			basepath : 'models/borsa5/filetto_frontale/', 
			mesh : 'models/borsa5/filetto_frontale/filetto_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.025,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},	
		{
			name : 'Filetto Retro',
			basepath : 'models/borsa5/filetto_retro/', 
			mesh : 'models/borsa5/filetto_retro/filetto_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.025,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},	
		{
			name : 'Tracolla',
			basepath : 'models/borsa5/tracolla/', 
			mesh : 'models/borsa5/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.09,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:40,z:40,material:'leather'
		},	
		{
			name : 'Tirazip',
			basepath : 'models/borsa5/tira_zip/', 
			mesh : 'models/borsa5/tira_zip/tira_zip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},					
		{
			name : 'Superfice Superiore',
			basepath : 'models/borsa5/bordo_lampo_superiore/', 
			mesh : 'models/borsa5/bordo_lampo_superiore/bordo_lampo_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		{
			name : 'Lampo',
			basepath : 'models/borsa5/lampo/', 
			mesh : 'models/borsa5/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'lampo'
		},
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}

var borsa6 = {
	name:'Bauletto Grande',
	price:156,
	tipo_interno:3,
	foto_interno:'bauletto_grande',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa6/metallerie/', 
			mesh : 'models/borsa6/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa6/quadrante_frontale/', 
			mesh : 'models/borsa6/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.13,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa6/quadrante_retro/', 
			mesh : 'models/borsa6/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.13,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa6/fianco_destro/', 
			mesh : 'models/borsa6/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.1,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa6/fianco_sinistro/', 
			mesh : 'models/borsa6/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.1,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa6/maniglia_frontale/', 
			mesh : 'models/borsa6/maniglia_frontale/maniglia_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.075,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia retro',
			basepath : 'models/borsa6/maniglia_retro/', 
			mesh : 'models/borsa6/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.075,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Sottomaniglia Frontale Destro',
			basepath : 'models/borsa6/sottomaniglia_frontale_destro/', 
			mesh : 'models/borsa6/sottomaniglia_frontale_destro/sottomaniglia_frontale_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Sottomaniglia Frontale Sinistro',
			basepath : 'models/borsa6/sottomaniglia_frontale_sinistro/', 
			mesh : 'models/borsa6/sottomaniglia_frontale_sinistro/sottomaniglia_frontale_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Sottomaniglia Retro Destro',
			basepath : 'models/borsa6/sottomaniglia_retro_destro/', 
			mesh : 'models/borsa6/sottomaniglia_retro_destro/sottomaniglia_retro_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Sottomaniglia Retro Sinistro',
			basepath : 'models/borsa6/sottomaniglia_retro_sinistro/', 
			mesh : 'models/borsa6/sottomaniglia_retro_sinistro/sottomaniglia_retro_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Filetto Frontale',
			basepath : 'models/borsa6/filetto_frontale/', 
			mesh : 'models/borsa6/filetto_frontale/filetto_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},	
		{
			name : 'Filetto Retro',
			basepath : 'models/borsa6/filetto_retro/', 
			mesh : 'models/borsa6/filetto_retro/filetto_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},	
		{
			name : 'Tracolla',
			basepath : 'models/borsa6/tracolla/', 
			mesh : 'models/borsa6/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.09,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:40,z:40,material:'leather'
		},	
		{
			name : 'Tirazip',
			basepath : 'models/borsa6/tira_zip/', 
			mesh : 'models/borsa6/tira_zip/tira_zip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		{
			name : 'Lampo',
			basepath : 'models/borsa6/lampo/', 
			mesh : 'models/borsa6/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'lampo'
		},				
		{
			name : 'Superfice Superiore',
			basepath : 'models/borsa6/bordo_lampo_superiore/', 
			mesh : 'models/borsa6/bordo_lampo_superiore/bordo_lampo_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}

var borsa7 = {
	name:'Pollux',
	price:160,
	tipo_interno:3,
	foto_interno:'pollux',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa7/metallerie/', 
			mesh : 'models/borsa7/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Mezza Luna Frontale',
			basepath : 'models/borsa7/mezza_luna_frontale/', 
			mesh : 'models/borsa7/mezza_luna_frontale/mezza_luna_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.06,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:-15,y:6.4,z:-30,material:'editable' 
		},
		{
			name : 'Mezza Luna Retro',
			basepath : 'models/borsa7/mezza_luna_retro/', 
			mesh : 'models/borsa7/mezza_luna_retro/mezza_luna_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.06,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:15,y:6.4,z:30,material:'editable'
		},
		{
			name : 'Arco Frontale',
			basepath : 'models/borsa7/arco_frontale/', 
			mesh : 'models/borsa7/arco_frontale/arco_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},	
		{
			name : 'Arco Retro',
			basepath : 'models/borsa7/arco_retro/', 
			mesh : 'models/borsa7/arco_retro/arco_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa7/fianco_destro/', 
			mesh : 'models/borsa7/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.09,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa7/fianco_sinistro/', 
			mesh : 'models/borsa7/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.09,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'leather'
		},		
		{
			name : 'Patella',
			basepath : 'models/borsa7/patella/', 
			mesh : 'models/borsa7/patella/patella.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.09,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Fondo',
			basepath : 'models/borsa7/fondo/', 
			mesh : 'models/borsa7/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.06,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:-30,z:10,material:'leather'
		},
{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa7/maniglia_frontale/', 
			mesh : 'models/borsa7/maniglia_frontale/maniglia_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Maniglia Retro',
			basepath : 'models/borsa7/maniglia_retro/', 
			mesh : 'models/borsa7/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},	
		{
			name : 'Parte Superiore',
			basepath : 'models/borsa7/parte_superiore/', 
			mesh : 'models/borsa7/parte_superiore/parte_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.04,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		{
			name : 'Tirazip',
			basepath : 'models/borsa7/tirazip/', 
			mesh : 'models/borsa7/tirazip/tirazip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:25,y:25,z:5,material:'leather'
		},		
		{
			name : 'Tracolla',
			basepath : 'models/borsa7/tracolla/', 
			mesh : 'models/borsa7/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.08,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:40,z:40,material:'leather'
		},		
		{
			name : 'Lampo',
			basepath : 'models/borsa7/lampo/', 
			mesh : 'models/borsa7/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'lampo'
		},
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}

var borsa8 = {
	name:'Regulus',
	price:162,
	tipo_interno:2,
	foto_interno:'regulus',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa8/metallerie/', 
			mesh : 'models/borsa8/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa8/quadrante_frontale/', 
			mesh : 'models/borsa8/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.16,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa8/quadrante_retro/', 
			mesh : 'models/borsa8/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.16,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Ermetta Esterna Frontale',
			basepath : 'models/borsa8/ermetta_esterna_frontale/', 
			mesh : 'models/borsa8/ermetta_esterna_frontale/ermetta_esterna_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Ermetta Esterna Retro',
			basepath : 'models/borsa8/ermetta_esterna_retro/', 
			mesh : 'models/borsa8/ermetta_esterna_retro/ermetta_esterna_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Ermetta Interna Frontale',
			basepath : 'models/borsa8/ermetta_interna_frontale/', 
			mesh : 'models/borsa8/ermetta_interna_frontale/ermetta_interna_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:25,z:30,material:'leather'
		},
		{
			name : 'Ermetta Interna Retro',
			basepath : 'models/borsa8/ermetta_interna_retro/', 
			mesh : 'models/borsa8/ermetta_interna_retro/ermetta_interna_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.14,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:25,z:-30,material:'leather'
		},
		{
			name : 'Tramezza',
			basepath : 'models/borsa8/tramezza/', 
			mesh : 'models/borsa8/tramezza/tramezza.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		{
			name : 'Maniglia Frontale',
			basepath : 'models/borsa8/maniglia_frontale/', 
			mesh : 'models/borsa8/maniglia_frontale/maniglia_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.02,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:35,y:40,z:40,material:'leather'
		},
		{
			name : 'Maniglia Retro',
			basepath : 'models/borsa8/maniglia_retro/', 
			mesh : 'models/borsa8/maniglia_retro/maniglia_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.02,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-35,y:40,z:-40,material:'leather'
		},		
		{
			name : 'Fondo',
			basepath : 'models/borsa8/fondo/', 
			mesh : 'models/borsa8/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.06,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:-30,z:10,material:'leather'
		},	
		{
			name : 'Filetto Fondo',
			basepath : 'models/borsa8/filetto_fondo/', 
			mesh : 'models/borsa8/filetto_fondo/filetto_fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.06,
			cat : "esterno" ,
			sotto_cat : "corpo",		
			x:-25,y:-30,z:10,material:'leather'
		},	
		{
			name : 'Lampo',
			basepath : 'models/borsa8/lampo/', 
			mesh : 'models/borsa8/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'lampo'
		},	
		{
			name : 'Tirazip',
			basepath : 'models/borsa8/tirazip/', 
			mesh : 'models/borsa8/tirazip/tirazip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},
		
		{
			name : 'Fodera interna',
			basepath : 'models/borsa8/fodera_interna/', 
			mesh : 'models/borsa8/fodera_interna/fodera_interna.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.00,	
			cat : "interno2" ,	
			x:25,y:25,z:20,material:'fodera'
		},
		{
			name : 'Lampo interna',
			basepath : 'models/borsa8/lampo_interna/', 
			mesh : 'models/borsa8/lampo_interna/lampo_interna.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.00,	
			cat : "interno2" ,	
			x:-25,y:25,z:-20,material:'lampo'
		},
		{
			name : 'Inserti Fodera',
			basepath : 'models/borsa8/inserti_fodera/', 
			mesh : 'models/borsa8/inserti_fodera/inserti_fodera.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.00,	
			cat : "interno2" ,	
			x:-25,y:25,z:-20,material:'leather'
		}
	]
}


var borsa9 = {
	name:'Rigel',
	price:156,
	tipo_interno:3,
	foto_interno:'rigel',
	part: [
		{
			name : 'Metallerie',
			basepath : 'models/borsa9/metallerie/', 
			mesh : 'models/borsa9/metallerie/metallerie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			coeff : 1,	
			cat : "metallerie" ,
			x:-25,y:20,z:20,material:'metal'
		},
		{
			name : 'Quadrante Frontale',
			basepath : 'models/borsa9/quadrante_frontale/', 
			mesh : 'models/borsa9/quadrante_frontale/quadrante_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.16,	
			cat : "esterno" ,
			sotto_cat : "quadranti",
			x:15,y:6.4,z:30,material:'editable' 
		},
		{
			name : 'Quadrante Retro',
			basepath : 'models/borsa9/quadrante_retro/', 
			mesh : 'models/borsa9/quadrante_retro/quadrante_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.16,
			cat : "esterno" ,
			sotto_cat : "quadranti",	
			x:-15,y:6.4,z:-30,material:'editable'
		},
		{
			name : 'Fianco Destro',
			basepath : 'models/borsa9/fianco_destro/', 
			mesh : 'models/borsa9/fianco_destro/fianco_destro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.11,
			cat : "esterno" ,
			sotto_cat : "fianchi",		
			x:36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Fianco Sinistro',
			basepath : 'models/borsa9/fianco_sinistro/', 
			mesh : 'models/borsa9/fianco_sinistro/fianco_sinistro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.11,	
			cat : "esterno" ,
			sotto_cat : "fianchi",	
			x:-36,y:6.4,z:0,material:'editable'
		},
		{
			name : 'Filetto Frontale',
			basepath : 'models/borsa9/filetto_frontale/', 
			mesh : 'models/borsa9/filetto_frontale/filetto_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:15,y:6.4,z:30,material:'leather'
		},	
		{
			name : 'Filetto Retro',
			basepath : 'models/borsa9/filetto_retro/', 
			mesh : 'models/borsa9/filetto_retro/filetto_retro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.03,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Tracolla',
			basepath : 'models/borsa9/tracolla/', 
			mesh : 'models/borsa9/tracolla/tracolla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.05,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:35,y:40,z:40,material:'leather'
		},		
		{
			name : 'Superiore',
			basepath : 'models/borsa9/parte_superiore/', 
			mesh : 'models/borsa9/parte_superiore/parte_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},		
		{
			name : 'Tirazip',
			basepath : 'models/borsa9/tirazip/', 
			mesh : 'models/borsa9/tirazip/tirazip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'leather'
		},		
		{
			name : 'Lampo',
			basepath : 'models/borsa9/lampo/', 
			mesh : 'models/borsa9/lampo/lampo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			coeff : 0.01,	
			cat : "esterno" ,
			sotto_cat : "corpo",	
			x:-25,y:25,z:5,material:'lampo'
		},
		{
			name : 'Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'fodera'
		},
		{
			name : 'Inserti Fodera',
			coeff : 0.01,	
			cat : "interno" ,
			material:'leather'
		},
		{
			name : 'Lampo Interna',
			coeff : 0.01,	
			cat : "interno" ,
			material:'lampo'
		}
	]
}




/*

var borsa1 = {
	name:'borsa1',
	part: [
		{
			name : 'Borchie Laterali',
			basepath : 'models/borsa1/borchie_linguette_laterali/', 
			mesh : 'models/borsa1/borchie_linguette_laterali/borchie_linguette_laterali.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',	
			image : 'models/borsa1/borchie_linguette_laterali/dettagli.png',
			bump: 'models/borsa1/borchie_linguette_laterali/bump.png',		
			x:36,y:6.4,z:0,material:'metal'
		},
		{
			name : 'Cuciture Fronte',
			basepath : 'models/borsa1/bordo_frontale/', 
			mesh : 'models/borsa1/bordo_frontale/bordo_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/bordo_frontale/dettagli.png',
			bump: 'models/borsa1/bordo_frontale/bump.png',		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Cuciture Retro',
			basepath : 'models/borsa1/bordo_posteriore/', 
			mesh : 'models/borsa1/bordo_posteriore/bordo_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/bordo_posteriore/dettagli.png',
			bump: 'models/borsa1/bordo_posteriore/bump.png',		
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Cuciture Superiori',
			basepath : 'models/borsa1/bordo_superiore/', 
			mesh : 'models/borsa1/bordo_superiore/bordo_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/bordo_superiore/dettagli.png',
			bump: 'models/borsa1/bordo_superiore/bump.png',		
			x:-25,y:20,z:0,material:'leather'
		},
		{
			name : 'Catene',
			basepath : 'models/borsa1/catene/', 
			mesh : 'models/borsa1/catene/catene.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',	
			image : 'models/borsa1/catene/dettagli.png',
			bump: 'models/borsa1/catene/bump.png',		
			x:-25,y:20,z:0,material:'metal'
		},
		{
			name : 'Cerniera',
			basepath : 'models/borsa1/cerniera/', 
			mesh : 'models/borsa1/cerniera/cerniera.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			image : 'models/borsa1/cerniera/dettagli.png',
			bump: 'models/borsa1/cerniera/bump.png',		
			x:-25,y:20,z:0,material:'metal'
		},
		{
			name : 'Fondo',
			basepath : 'models/borsa1/fondo/', 
			mesh : 'models/borsa1/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/fondo/dettagli.png',
			bump: 'models/borsa1/fondo/bump.png',		
			x:-25,y:-30,z:10,material:'leather'
		},
		{
			name : 'Linguette laterali',
			basepath : 'models/borsa1/linguette_laterali/', 
			mesh : 'models/borsa1/linguette_laterali/linguette_laterali.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa1/linguette_laterali/dettagli.png',
			bump: 'models/borsa1/linguette_laterali/bump.png',		
			x:36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Manico fronte',
			basepath : 'models/borsa1/manico_frontale/', 
			mesh : 'models/borsa1/manico_frontale/manico_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/manico_frontale/dettagli.png',
			bump: 'models/borsa1/manico_frontale/bump.png',		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Manico retro',
			basepath : 'models/borsa1/manico_posteriore/', 
			mesh : 'models/borsa1/manico_posteriore/manico_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/manico_posteriore/dettagli.png',
			bump: 'models/borsa1/manico_posteriore/bump.png',		
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Particolari fronte',
			basepath : 'models/borsa1/particolari_frontali/', 
			mesh : 'models/borsa1/particolari_frontali/particolari_frontali.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/particolari_frontali/dettagli.png',
			bump: 'models/borsa1/particolari_frontali/bump.png',		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Particolari retro',
			basepath : 'models/borsa1/particolari_posteriori/', 
			mesh : 'models/borsa1/particolari_posteriori/particolari_posteriori.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/particolari_posteriori/dettagli.png',
			bump: 'models/borsa1/particolari_posteriori/bump.png',		
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Presa cerniera',
			basepath : 'models/borsa1/presa_cerniera/', 
			mesh : 'models/borsa1/presa_cerniera/presa_cerniera.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/presa_cerniera/dettagli.png',
			bump: 'models/borsa1/presa_cerniera/bump.png',		
			x:-25,y:20,z:0,material:'leather'
		},
		{
			name : 'Spalla',
			basepath : 'models/borsa1/spalla/', 
			mesh : 'models/borsa1/spalla/spalla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/spalla/dettagli.png',
			bump: 'models/borsa1/spalla/bump.png',		
			x:35,y:30,z:40,material:'leather'
		},
		{
			name : 'Fronte',
			basepath : 'models/borsa1/superficie_frontale/', 
			mesh : 'models/borsa1/superficie_frontale/superficie_frontale.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/superficie_frontale/dettagli.png',
			bump: 'models/borsa1/superficie_frontale/bump.png',		
			x:15,y:6.4,z:30,material:'leather'
		},
		{
			name : 'Lato destro',
			basepath : 'models/borsa1/superficie_laterale_destra/', 
			mesh : 'models/borsa1/superficie_laterale_destra/superficie_laterale_destra.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/superficie_laterale_destra/dettagli.png',
			bump: 'models/borsa1/superficie_laterale_destra/bump.png',		
			x:36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Lato sinistro',
			basepath : 'models/borsa1/superficie_laterale_sinistra/', 
			mesh : 'models/borsa1/superficie_laterale_sinistra/superficie_laterale_sinistra.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/superficie_laterale_sinistra/dettagli.png',
			bump: 'models/borsa1/superficie_laterale_sinistra/bump.png',		
			x:-36,y:6.4,z:0,material:'leather'
		},
		{
			name : 'Retro',
			basepath : 'models/borsa1/superficie_posteriore/', 
			mesh : 'models/borsa1/superficie_posteriore/superficie_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/superficie_posteriore/dettagli.png',
			bump: 'models/borsa1/superficie_posteriore/bump.png',		
			x:-15,y:6.4,z:-30,material:'leather'
		},
		{
			name : 'Superiore',
			basepath : 'models/borsa1/superficie_superiore/', 
			mesh : 'models/borsa1/superficie_superiore/superficie_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa1/superficie_superiore/dettagli.png',
			bump: 'models/borsa1/superficie_superiore/bump.png',		
			x:-25,y:20,z:0,material:'leather'
		},
	]
}
*/


/*var borsa10 = {
	name:'borsa10',
	part: [
		{
			name : 'cerniera',
			basepath : 'models/borsa10/cerniera/', 
			mesh : 'models/borsa10/cerniera/cerniera.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',	
			image : 'models/borsa10/cerniera/dettagli.png',
			bump: 'models/borsa10/cerniera/bump.png',		
			x:0,y:0,z:650,material:'metal'
		},
		{
			name : 'cuciture_frontali_dx',
			basepath : 'models/borsa10/cuciture_frontali_dx/', 
			mesh : 'models/borsa10/cuciture_frontali_dx/cuciture_frontali_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/cuciture_frontali_dx/dettagli.png',
			bump: 'models/borsa10/cuciture_frontali_dx/bump.png',		
			x:0,y:-650,z:650,material:'leather'
		},
		{
			name : 'cuciture_frontali_sx',
			basepath : 'models/borsa10/cuciture_frontali_sx/', 
			mesh : 'models/borsa10/cuciture_frontali_sx/cuciture_frontali_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/cuciture_frontali_sx/dettagli.png',
			bump: 'models/borsa10/cuciture_frontali_sx/bump.png',		
			x:-650,y:-650,z:650,material:'leather'
		},
		{
			name : 'cuciture_superiori',
			basepath : 'models/borsa10/cuciture_superiori/', 
			mesh : 'models/borsa10/cuciture_superiori/cuciture_superiori.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/cuciture_superiori/dettagli.png',
			bump: 'models/borsa10/cuciture_superiori/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'fondo',
			basepath : 'models/borsa10/fondo/', 
			mesh : 'models/borsa10/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/fondo/dettagli.png',
			bump: 'models/borsa10/fondo/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'manico_dx',
			basepath : 'models/borsa10/manico_dx/', 
			mesh : 'models/borsa10/manico_dx/manico_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/manico_dx/dettagli.png',
			bump: 'models/borsa10/manico_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'manico_sx',
			basepath : 'models/borsa10/manico_sx/', 
			mesh : 'models/borsa10/manico_sx/manico_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/manico_sx/dettagli.png',
			bump: 'models/borsa10/manico_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'parti_metalliche',
			basepath : 'models/borsa10/parti_metalliche/', 
			mesh : 'models/borsa10/parti_metalliche/parti_metalliche.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',	
			image : 'models/borsa10/parti_metalliche/dettagli.png',
			bump: 'models/borsa10/parti_metalliche/bump.png',		
			x:34.9,y:6.4,z:15,material:'metal'
		},
		{
			name : 'particolare_frontale_dx',
			basepath : 'models/borsa10/particolare_frontale_dx/', 
			mesh : 'models/borsa10/particolare_frontale_dx/particolare_frontale_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/particolare_frontale_dx/dettagli.png',
			bump: 'models/borsa10/particolare_frontale_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'particolare_frontale_sx',
			basepath : 'models/borsa10/particolare_frontale_sx/', 
			mesh : 'models/borsa10/particolare_frontale_sx/particolare_frontale_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/particolare_frontale_sx/dettagli.png',
			bump: 'models/borsa10/particolare_frontale_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'particolare_laterale_ant',
			basepath : 'models/borsa10/particolare_laterale_ant/', 
			mesh : 'models/borsa10/particolare_laterale_ant/particolare_laterale_ant.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/particolare_laterale_ant/dettagli.png',
			bump: 'models/borsa10/particolare_laterale_ant/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'particolare_laterale_post',
			basepath : 'models/borsa10/particolare_laterale_post/', 
			mesh : 'models/borsa10/particolare_laterale_post/particolare_laterale_post.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/particolare_laterale_post/dettagli.png',
			bump: 'models/borsa10/particolare_laterale_post/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'presa_cerniera',
			basepath : 'models/borsa10/presa_cerniera/', 
			mesh : 'models/borsa10/presa_cerniera/presa_cerniera.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/presa_cerniera/dettagli.png',
			bump: 'models/borsa10/presa_cerniera/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'spalla',
			basepath : 'models/borsa10/spalla/', 
			mesh : 'models/borsa10/spalla/spalla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/spalla/dettagli.png',
			bump: 'models/borsa10/spalla/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'super_frontale_dx',
			basepath : 'models/borsa10/super_frontale_dx/', 
			mesh : 'models/borsa10/super_frontale_dx/super_frontale_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/super_frontale_dx/dettagli.png',
			bump: 'models/borsa10/super_frontale_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'super_frontale_sx',
			basepath : 'models/borsa10/super_frontale_sx/', 
			mesh : 'models/borsa10/super_frontale_sx/super_frontale_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/super_frontale_sx/dettagli.png',
			bump: 'models/borsa10/super_frontale_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'super_laterale_ant',
			basepath : 'models/borsa10/super_laterale_ant/', 
			mesh : 'models/borsa10/super_laterale_ant/super_laterale_ant.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/super_laterale_ant/dettagli.png',
			bump: 'models/borsa10/super_laterale_ant/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'super_laterale_post',
			basepath : 'models/borsa10/super_laterale_post/', 
			mesh : 'models/borsa10/super_laterale_post/super_laterale_post.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/super_laterale_post/dettagli.png',
			bump: 'models/borsa10/super_laterale_post/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'super_superiore',
			basepath : 'models/borsa10/super_superiore/', 
			mesh : 'models/borsa10/super_superiore/super_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa10/super_superiore/dettagli.png',
			bump: 'models/borsa10/super_superiore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
	]
}

var borsa9 = {
	name:'borsa9',
	part: [
		{
			name : 'cerniera',
			basepath : 'models/borsa9/cerniera/', 
			mesh : 'models/borsa9/cerniera/cerniera.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',	
			image : 'models/borsa9/cerniera/dettagli.png',
			bump: 'models/borsa9/cerniera/bump.png',		
			x:34.9,y:6.4,z:15,material:'metal'
		},
		{
			name : 'cuciture_frontale_dx',
			basepath : 'models/borsa9/cuciture_frontale_dx/', 
			mesh : 'models/borsa9/cuciture_frontale_dx/cuciture_frontale_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/cuciture_frontale_dx/dettagli.png',
			bump: 'models/borsa9/cuciture_frontale_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'cuciture_frontale_sx',
			basepath : 'models/borsa9/cuciture_frontale_sx/', 
			mesh : 'models/borsa9/cuciture_frontale_sx/cuciture_frontale_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/cuciture_frontale_sx/dettagli.png',
			bump: 'models/borsa9/cuciture_frontale_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'cuciture_posteriore',
			basepath : 'models/borsa9/cuciture_posteriore/', 
			mesh : 'models/borsa9/cuciture_posteriore/cuciture_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/cuciture_posteriore/dettagli.png',
			bump: 'models/borsa9/cuciture_posteriore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'cuciture_superiore_dx',
			basepath : 'models/borsa9/cuciture_superiore_dx/', 
			mesh : 'models/borsa9/cuciture_superiore_dx/cuciture_superiore_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/cuciture_superiore_dx/dettagli.png',
			bump: 'models/borsa9/cuciture_superiore_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'fondo',
			basepath : 'models/borsa9/fondo/', 
			mesh : 'models/borsa9/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/fondo/dettagli.png',
			bump: 'models/borsa9/fondo/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'manico_dx',
			basepath : 'models/borsa9/manico_dx/', 
			mesh : 'models/borsa9/manico_dx/manico_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/manico_dx/dettagli.png',
			bump: 'models/borsa9/manico_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'manico_sx',
			basepath : 'models/borsa9/manico_sx/', 
			mesh : 'models/borsa9/manico_sx/manico_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/manico_sx/dettagli.png',
			bump: 'models/borsa9/manico_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'parti_metalliche',
			basepath : 'models/borsa9/parti_metalliche/', 
			mesh : 'models/borsa9/parti_metalliche/parti_metalliche.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',	
			image : 'models/borsa9/parti_metalliche/dettagli.png',
			bump: 'models/borsa9/parti_metalliche/bump.png',		
			x:34.9,y:6.4,z:15,material:'metal'
		},
		{
			name : 'particolare_frontale_dx',
			basepath : 'models/borsa9/particolare_frontale_dx/', 
			mesh : 'models/borsa9/particolare_frontale_dx/particolare_frontale_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/particolare_frontale_dx/dettagli.png',
			bump: 'models/borsa9/particolare_frontale_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'particolare_frontale_sx',
			basepath : 'models/borsa9/particolare_frontale_sx/', 
			mesh : 'models/borsa9/particolare_frontale_sx/particolare_frontale_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/particolare_frontale_sx/dettagli.png',
			bump: 'models/borsa9/particolare_frontale_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'particolare_laterale_anteriore',
			basepath : 'models/borsa9/particolare_laterale_anteriore/', 
			mesh : 'models/borsa9/particolare_laterale_anteriore/particolare_laterale_anteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/particolare_laterale_anteriore/dettagli.png',
			bump: 'models/borsa9/particolare_laterale_anteriore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'particolare_laterale_posteriore',
			basepath : 'models/borsa9/particolare_laterale_posteriore/', 
			mesh : 'models/borsa9/particolare_laterale_posteriore/particolare_laterale_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/particolare_laterale_posteriore/dettagli.png',
			bump: 'models/borsa9/particolare_laterale_posteriore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'presa_cerniera',
			basepath : 'models/borsa9/presa_cerniera/', 
			mesh : 'models/borsa9/presa_cerniera/presa_cerniera.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/presa_cerniera/dettagli.png',
			bump: 'models/borsa9/presa_cerniera/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'spalla',
			basepath : 'models/borsa9/spalla/', 
			mesh : 'models/borsa9/spalla/spalla.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/spalla/dettagli.png',
			bump: 'models/borsa9/spalla/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'superficie_frontale_dx',
			basepath : 'models/borsa9/superficie_frontale_dx/', 
			mesh : 'models/borsa9/superficie_frontale_dx/superficie_frontale_dx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/superficie_frontale_dx/dettagli.png',
			bump: 'models/borsa9/superficie_frontale_dx/bump.png',		
			x:34.9,y:6.4,z:15,material:'editable'
		},
		{
			name : 'superficie_frontale_sx',
			basepath : 'models/borsa9/superficie_frontale_sx/', 
			mesh : 'models/borsa9/superficie_frontale_sx/superficie_frontale_sx.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/superficie_frontale_sx/dettagli.png',
			bump: 'models/borsa9/superficie_frontale_sx/bump.png',		
			x:34.9,y:6.4,z:15,material:'editable'
		},
		{
			name : 'superficie_laterale_anteriore',
			basepath : 'models/borsa9/superficie_laterale_anteriore/', 
			mesh : 'models/borsa9/superficie_laterale_anteriore/superficie_laterale_anteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/superficie_laterale_anteriore/dettagli.png',
			bump: 'models/borsa9/superficie_laterale_anteriore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'superficie_superiore',
			basepath : 'models/borsa9/superficie_superiore/', 
			mesh : 'models/borsa9/superficie_superiore/superficie_superiore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/superficie_superiore/dettagli.png',
			bump: 'models/borsa9/superficie_superiore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'supersficie_laterale_posteriore',
			basepath : 'models/borsa9/supersficie_laterale_posteriore/', 
			mesh : 'models/borsa9/supersficie_laterale_posteriore/supersficie_laterale_posteriore.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',	
			image : 'models/borsa9/supersficie_laterale_posteriore/dettagli.png',
			bump: 'models/borsa9/supersficie_laterale_posteriore/bump.png',		
			x:34.9,y:6.4,z:15,material:'leather'
		}	
	]
};


var borsa8 = {
	name:'borsa8',
	part: [
		{
			name : 'attacchi',
			basepath : 'models/borsa8/attacchi/', 
			mesh : 'models/borsa8/attacchi/obj.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa8/attacchi/dettagli.png',
			bump: 'models/borsa8/attacchi/bump.png',
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'corpo',
			basepath : 'models/borsa8/corpo/', 
			mesh : 'models/borsa8/corpo/obj.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa8/corpo/dettagli.png',
			bump: 'models/borsa8/corpo/bump.png',
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'manicofronte',
			basepath : 'models/borsa8/manicofronte/', 
			mesh : 'models/borsa8/manicofronte/obj.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa8/manicofronte/dettagli.png',
			bump: 'models/borsa8/manicofronte/bump.png',
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'manicoretro',
			basepath : 'models/borsa8/manicoretro/', 
			mesh : 'models/borsa8/manicoretro/obj.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa8/manicoretro/dettagli.png',
			bump: 'models/borsa8/manicoretro/bump.png',
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'minuterie',
			basepath : 'models/borsa8/minuterie/', 
			mesh : 'models/borsa8/minuterie/obj.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/orobump.jpg',
			image : 'models/borsa8/minuterie/dettagli.png',
			bump: 'models/borsa8/minuterie/bump.png',
			x:34.9,y:6.4,z:15,material:'metal'
		}
	]
};
var borsa6 = {
	name:'borsa6',
	part: [
		{
			name : 'fianco DX',
			basepath : 'models/borsa6/fiancoDX/', 
			mesh : 'models/borsa6/fiancoDX/fiancoDX.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/fiancoDX/dettagli.png',
			bump: 'models/borsa6/fiancoDX/bump.png',
			x:34.9,y:6.4,z:15,material:'leather'
		},
		{
			name : 'fianco SX',
			basepath : 'models/borsa6/fiancoSX/', 
			mesh : 'models/borsa6/fiancoSX/fiancoSX.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/fiancoSX/dettagli.png',
			bump: 'models/borsa6/fiancoSX/bump.png',
			x:-27,y:5.89,z:-26,material:'leather'
		},
		{
			name : 'filetto fronte',
			basepath : 'models/borsa6/filettoFronte/', 
			mesh : 'models/borsa6/filettoFronte/filettoFronte.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/filettoFronte/dettagli.png',
			bump: 'models/borsa6/filettoFronte/bump.png',
			x:4.8,y:13,z:21,material:'leather'
		},
		{
			name : 'filetto retro',
			basepath : 'models/borsa6/filettoRetro/', 
			mesh : 'models/borsa6/filettoRetro/filettoRetro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/filettoRetro/dettagli.png',
			bump: 'models/borsa6/filettoRetro/bump.png',
			x:-4.8,y:13.9,z:-20,material:'leather'
		},
		{
			name : 'fondo',
			basepath : 'models/borsa6/fondo/', 
			mesh : 'models/borsa6/fondo/fondo.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/fondo/dettagli.png',
			bump: 'models/borsa6/fondo/bump.png',
			x:23,y:-25,z:16,material:'leather'
		},
		{
			name : 'fronte',
			basepath : 'models/borsa6/fronte/', 
			mesh : 'models/borsa6/fronte/fronte.js',
			materialImg : 'texture/1.jpg',
			materialBMap : 'texture/1bump.jpg',
			image : 'models/borsa6/fronte/dettagli.png',
			bump: 'models/borsa6/fronte/bump.png',
			x:1.6,y:6.1,z:30.4,material:'editable'
		},
		{
			name : 'minuterie',
			basepath : 'models/borsa6/minuterie/', 
			mesh : 'models/borsa6/minuterie/minuterie.js',
			materialImg : 'texture/oro.jpg',
			materialBMap : 'texture/a',
			image : 'models/borsa6/minuterie/dettagli.png',
			bump: 'models/borsa6/minuterie/bump.png',
			x:1.6,y:6.1,z:30.4,material:'metal'
		},
		{
			name : 'lampo esterna',
			basepath : 'models/borsa6/lampoEsterna/', 
			mesh : 'models/borsa6/lampoEsterna/lampoEsterna.js',
			materialImg : 'texture/zipNew.png',
			materialBMap : 'texture/zipNewbump.jpg',
			image : 'models/borsa6/lampoEsterna/dettagli.png',
			bump: 'models/borsa6/lampoEsterna/bump.png',
			x:17.1,y:11.8,z:4.6,material:'zip'
		},
		{
			name : 'maniglia fronte',
			basepath : 'models/borsa6/manigliaFronte/', 
			mesh : 'models/borsa6/manigliaFronte/manigliaFronte.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/manigliaFronte/dettagli.png',
			bump: 'models/borsa6/manigliaFronte/bump.png',
			x:-14,y:13,z:19,material:'leather'
		},
		{
			name : 'maniglia retro',
			basepath : 'models/borsa6/manigliaRetro/', 
			mesh : 'models/borsa6/manigliaRetro/manigliaRetro.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/manigliaRetro/dettagli.png',
			bump: 'models/borsa6/manigliaRetro/bump.png',
			x:-8,y:13,z:-19,material:'leather'
		},
		{
			name : 'pelino DX',
			basepath : 'models/borsa6/pelinoDX/', 
			mesh : 'models/borsa6/pelinoDX/pelinoDX.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/pelinoDX/dettagli.png',
			bump: 'models/borsa6/pelinoDX/bump.png',
			x:23.7,y:-6,z:9.6,material:'leather'
		},
		{
			name : 'pelino SX',
			basepath : 'models/borsa6/pelinoSX/', 
			mesh : 'models/borsa6/pelinoSX/pelinoSX.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/pelinoSX/dettagli.png',
			bump: 'models/borsa6/pelinoSX/bump.png',
			x:-23,y:6,z:-9,material:'leather'
		},
		{
			name : 'retro',
			basepath : 'models/borsa6/retro/', 
			mesh : 'models/borsa6/retro/retro.js',
			materialImg : 'texture/1.jpg',
			materialBMap : 'texture/1bump.jpg',
			image : 'models/borsa6/retro/dettagli.png',
			bump: 'models/borsa6/retro/bump.png',
			x:3.7,y:5.7,z:-29.2,material:'editable'
		},
		{
			name : 'sottomaniglia 1',
			basepath : 'models/borsa6/sottomaniglia1/', 
			mesh : 'models/borsa6/sottomaniglia1/sottomaniglia1.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/sottomaniglia1/dettagli.png',
			bump: 'models/borsa6/sottomaniglia1/bump.png',
			x:-12,y:6.4,z:16,material:'leather'
		},
		{
			name : 'sottomaniglia 2',
			basepath : 'models/borsa6/sottomaniglia2/', 
			mesh : 'models/borsa6/sottomaniglia2/sottomaniglia2.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/sottomaniglia2/dettagli.png',
			bump: 'models/borsa6/sottomaniglia2/bump.png',
			x:12,y:6.4,z:16,material:'leather'
		},
		{
			name : 'sottomaniglia 3',
			basepath : 'models/borsa6/sottomaniglia3/', 
			mesh : 'models/borsa6/sottomaniglia3/sottomaniglia3.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/sottomaniglia3/dettagli.png',
			bump: 'models/borsa6/sottomaniglia3/bump.png',
			x:-12,y:6.4,z:-16,material:'leather'
		},
		{
			name : 'sottomaniglia 4',
			basepath : 'models/borsa6/sottomaniglia4/', 
			mesh : 'models/borsa6/sottomaniglia4/sottomaniglia4.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/sottomaniglia4/dettagli.png',
			bump: 'models/borsa6/sottomaniglia4/bump.png',
			x:12,y:6.4,z:-16,material:'leather'
		},
		{
			name : 'tira zip',
			basepath : 'models/borsa6/tiraZip/', 
			mesh : 'models/borsa6/tiraZip/tiraZip.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa6/tiraZip/dettagli.png',
			bump: 'models/borsa6/tiraZip/bump.png',
			x:25,y:3,z:-5,material:'leather'
		}
	]
}

var borsa4 = {
	name:'borsa4',
	part: [
		{
			name : 'davanti',
			basepath : 'models/borsa4/davanti/', 
			mesh : 'models/borsa4/davanti/davanti.js',
			materialImg : 'texture/1.jpg',
			materialBMap : 'texture/1bump.jpg',
			image : 'models/borsa4/davanti/dettagli.png',
			bump: 'models/borsa4/davanti/bump.png'
		},
		{
			name : 'dietro',
			basepath : 'models/borsa4/dietro/', 
			mesh : 'models/borsa4/dietro/dietro.js',
			materialImg : 'texture/1.jpg',
			materialBMap : 'texture/1bump.jpg',
			image : 'models/borsa4/dietro/dettagli.png',
			bump: 'models/borsa4/dietro/bump.png'
		},
		{
			name : 'sotto',
			basepath : 'models/borsa4/sotto/', 
			mesh : 'models/borsa4/manici/manici.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa4/sotto/dettagli.png',
			bump: 'models/borsa4/sotto/bump.png'
		},
		{
			name : 'manici',
			basepath : 'models/borsa4/manici/', 
			mesh : 'models/borsa4/manici/manici.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa4/manici/dettagli.png',
			bump: 'models/borsa4/manici/bump.png'
		}
	]
}
var borsa5 = {
	name:'borsa5',
	part: [
		{
			name : 'davanti',
			basepath : 'models/borsa5/davanti/', 
			mesh : 'models/borsa5/davanti/davanti.js',
			materialImg : 'texture/1.jpg',
			materialBMap : 'texture/1bump.jpg',
			image : 'models/borsa5/davanti/dettagli.png',
			bump: 'models/borsa5/davanti/bump.png'
		},
		{
			name : 'dietro',
			basepath : 'models/borsa5/dietro/', 
			mesh : 'models/borsa5/dietro/dietro.js',
			materialImg : 'texture/1.jpg',
			materialBMap : 'texture/1bump.jpg',
			image : 'models/borsa5/dietro/dettagli.png',
			bump: 'models/borsa5/dietro/bump.png'
		},
		{
			name : 'sotto',
			basepath : 'models/borsa5/sotto/', 
			mesh : 'models/borsa5/sotto/sotto.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa5/sotto/dettagli.png',
			bump: 'models/borsa5/sotto/bump.png'
		},
		{
			name : 'manici',
			basepath : 'models/borsa5/manici/', 
			mesh : 'models/borsa5/manici/manici.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa5/manici/dettagli.png',
			bump: 'models/borsa5/manici/bump.png'
		},
		{
			name : 'metalli',
			basepath : 'models/borsa5/metalli/', 
			mesh : 'models/borsa5/metalli/metalli.js',
			materialImg : 'texture/metal.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa5/metalli/dettagli.png',
			bump: 'models/borsa5/metalli/bump.png'
		},
		{
			name : 'zip',
			basepath : 'models/borsa5/zip/', 
			mesh : 'models/borsa5/zip/zip.js',
			materialImg : 'texture/zipNew.png',
			materialBMap : 'texture/zipbump.jpg',
			image : 'models/borsa5/zip/dettagli.png',
			bump: 'models/borsa5/zip/bump.png'
		},
		{
			name : 'cinghia',
			basepath : 'models/borsa5/cinghia/', 
			mesh : 'models/borsa5/cinghia/cinghia.js',
			materialImg : 'texture/2.jpg',
			materialBMap : 'texture/2bump.jpg',
			image : 'models/borsa5/cinghia/dettagli.png',
			bump: 'models/borsa5/cinghia/bump.png'
		}
	]
}
var borsa3 = {
	name:'borsa3',
	part: [ {
		name : 'davanti',
		basepath : 'models/borsa3/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/1.jpg',
		materialBMap : 'texture/1.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
	 	{
		name : 'dietro',
		basepath : 'models/borsa3/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/1.jpg',
		materialBMap : 'texture/1.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'sotto',
		basepath : 'models/borsa3/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'manici',
		basepath : 'models/borsa3/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'tracolla',
		basepath : 'models/borsa3/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'metalli',
		basepath : 'models/borsa3/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/metal.jpg',
		materialBMap : 'texture/metal.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	}
	]
}
var borsa2 = {
	name:'borsa2',
	part:[{
		name : 'davanti',
		basepath : 'models/borsa2/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/1.jpg',
		materialBMap : 'texture/1.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'dietro',
		basepath : 'models/borsa2/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/1.jpg',
		materialBMap : 'texture/1.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'sotto',
		basepath : 'models/borsa2/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'manici',
		basepath : 'models/borsa2/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'tracolla',
		basepath : 'models/borsa2/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'metalli',
		basepath : 'models/borsa2/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/metal.jpg',
		materialBMap : 'texture/metal.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	}
	]
}
var borsa1 = {
	name:'borsa1',
	part :[{
		name : 'davanti',
		basepath : 'models/borsa1/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/1.jpg',
		materialBMap : 'texture/1.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'dietro',
		basepath : 'models/borsa1/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/1.jpg',
		materialBMap : 'texture/1.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'sotto',
		basepath : 'models/borsa1/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'manici',
		basepath : 'models/borsa1/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'tracolla',
		basepath : 'models/borsa1/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/2.jpg',
		materialBMap : 'texture/2.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	},
		{
		name : 'metalli',
		basepath : 'models/borsa1/'+this.name+'/', 
		mesh : this.basepath+this.name + '.js',
		materialImg : 'texture/metal.jpg',
		materialBMap : 'texture/metal.jpg',
		image : this.basepath+this.name+'.png',
		bump: this.basepath+'bump.png'
	}
	]
}*/