<?php
session_start();
error_reporting(0);
$sid = session_id() . '/';
$borsapercorso =str_replace(" ","",$_POST["borsa"])."/";
$percorso="texture/temp/";
mkdir($percorso.$sid.$borsapercorso);
$a = $percorso.$sid.$borsapercorso.$_POST["nome"].".png";
$fname = fopen($a, "a+") or die("Unable to open file!");
/*$img=$_POST['data'];
$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));*/
$data = $_POST['data']; 
$image = explode(',',$data); 
file_put_contents($a, base64_decode($image[1]));

//file_put_contents("../".$percorso.$sid."myimage.png", base64_decode(explode(",", $_POST['data'])[1]));
//file_put_contents($a, $img);

?>
