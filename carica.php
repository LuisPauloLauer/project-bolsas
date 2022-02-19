<?php
session_start();
$sid = session_id() . '/';
$percorso="texture/img-temp/".$sid;
if (!file_exists($percorso))
	mkdir($percorso.$sid);
$data=$_POST['data'];
$type = explode(';',$data);
if (strpos($data,'jpg') !== false) {
    $type = 'jpg';
}else $type='png';
echo $data;
$data = base64_decode($data);
echo '<br />' . $data;
file_put_contents($percorso . "pers.".$type, $data);
echo "img-temp/".$sid . "pers.png";
?>