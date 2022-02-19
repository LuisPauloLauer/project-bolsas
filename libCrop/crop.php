<?php
session_start();
error_reporting(0);
ini_set("upload_max_filesize", "1000M");
ini_set("post_max_size", "1005M");
ini_set("max_execution_time", "120");
$nomeparte = $_POST['parte'];
$borsa=$_POST['borsa'];
$nomeparte =str_replace(" ","",$nomeparte);
$borsapercorso =str_replace(" ","",$borsa);
$borsapercorso.="/";
$sid = session_id() . '/';
$percorso="../texture/temp/";
mkdir($percorso.$sid);
mkdir($percorso.$sid.$borsapercorso);

$array_borse= array("Vega","Antares","Bolsa-01","Sirio","Bauletto piccolo","Bauletto grande","Pollux","Regulus","Rigel");
switch ($borsa) {
	case "Vega" : 
		$dimensionequadrante=964;
		$final = "../img/base/vega.png";
		break;
		
	case "Antares" : 
		$dimensionequadrante=964;
		$final = "../img/base/antares.png";
		break;
		
	case "Bolsa-01" :
		$dimensionequadrante=743;
		$final = "../img/base/altair.png";
		break;
		
	case "Sirio" : 
		$dimensionequadrante=1057;
		$final = "../img/base/sirio.png";
		break;
		
	case "Bauletto_piccolo" : 
		if(($nomeparte=="QuadranteFrontale") || ($nomeparte=="QuadranteRetro")){
			$dimensionequadrante=822;
			$final = "../img/base/baulettoGrande.png";
		}
		if(($nomeparte=="FiancoDestro") || ($nomeparte=="FiancoSinistro")){
			$dimensionequadrante=898;
			$final = "../img/base/baulettoGrandeFianco.png";
		}
		break;
	
	case "Bauletto_grande" : 
		if(($nomeparte=="QuadranteFrontale") || ($nomeparte=="QuadranteRetro")){
			$dimensionequadrante=1006;
			$final = "../img/base/baulettoPiccolo.png";
		}
		if(($nomeparte=="FiancoDestro") || ($nomeparte=="FiancoSinistro")){
			$dimensionequadrante=1065;
			$final = "../img/base/baulettoPiccoloFianco.png";
		}
		break;
	
	case "Pollux" : 
			$dimensionequadrante=709;
			$final = "../img/base/pollux.png";
		break;
			
	case "Regulus" : 
			$dimensionequadrante=1247;
			$final = "../img/base/regulus.png";
		break;		
}






$a = $percorso.$sid.$borsapercorso.$nomeparte."-20.png";
$c = $percorso.$sid.$borsapercorso.$nomeparte.".png";
$f = $percorso.$sid.$borsapercorso.$nomeparte."2.png";
$b = $percorso.$sid.$borsapercorso."1.png";
$schema = $percorso.$sid.$borsapercorso.$nomeparte."schema.png";
$fname = fopen($a, "a+") or die("Unable to open file1!");
/*$img=$_POST['data'];
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));*/
$data = $_POST['data']; 
$image = explode(',',$data); 
file_put_contents($a, base64_decode($image[1]));
list($src_w, $src_h, $src_t, $src_a) = getimagesize($a);
$rapporto = $src_w/$src_h;

if($src_w > $src_h)
	{$lato_quadrato=$src_w;
		$ratio_resize = $dimensionequadrante / $src_w;
		$lato_quadrato=$dimensionequadrante;
		$height_resize = $src_h * $ratio_resize;
		$new_image = imagecreatetruecolor($dimensionequadrante, $height_resize);
		imagecopyresampled($new_image, $a, 0, 0, 0, 0, $dimensionequadrante, $height_resize, $src_w, $src_h);
		$image_resize = $new_image; // $image has now been replaced with the resized one.		

}
else
	{$lato_quadrato=$src_h;
		$ratio_resize = $dimensionequadrante / $src_h;
		$lato_quadrato=$dimensionequadrante;
		$width_resize = $src_w * $ratio_resize;	
		$new_image = imagecreatetruecolor($width_resize, $dimensionequadrante);
		imagecopyresampled($new_image, $a, 0, 0, 0, 0, $width_resize, $dimensionequadrante, $src_w, $src_h);
		$image_resize = $new_image;
}




$de_w = ($dimensionequadrante-$src_w)/2;
$de_h = ($dimensionequadrante-$src_h)/2;

//$image = imagecreatefromstring(file_get_contents($a));
//$de= imagecreatefromstring(file_get_contents($b));

$image =imagecreatefrompng($a);
$de =imagecreatefrompng($b);
imagecopy($de, $image, $de_w, $de_h, 0, 0, $src_w, $src_h);
//file_put_contents($c, base64_decode($de));
imagepng($de, $c);

$image =imagecreatefrompng($c);
$de =imagecreatefrompng($b);
imagealphablending($image, true);
imagesavealpha($image, true);
imagecopy($image, $de, 0, 0, 0, 0, $lato_quadrato, $lato_quadrato);
imagepng($image, $f);



$im_w = ($lato_quadrato-$src_w)/2;
$im_h = ($lato_quadrato-$src_h)/2;
$im = imagecreatetruecolor($lato_quadrato, $lato_quadrato); 
$white = imagecolorallocate($im, 255, 255, 255);
imagefill($im, 0, 0, $white);
$image =imagecreatefrompng($a);
imagecopy($im, $image, $im_w, $im_h, 0, 0, $src_w,$src_h);
imagepng($im, $a);
$image =imagecreatefrompng($a);
//unire con la foto di sfondo
$base =imagecreatefrompng($final);
imagecopy($image, $base, 0, 0, 0, 0, $lato_quadrato, $lato_quadrato);
imagepng($image, $schema);
$fname = fopen($schema, "a+") or die("Unable to open file2!");
echo "temp/".$sid.$borsapercorso.$nomeparte."-20.png";
//file_put_contents("../".$percorso.$sid."myimage.png", base64_decode(explode(",", $_POST['data'])[1]));
//file_put_contents($a, $img);

?>

