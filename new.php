<?php

session_start();





//far mandare mail all 1 di notte

//aggiustare gli array con i pezzi





$yesterday = date("Y-m-d", mktime(0, 0, 0, date("m") , date("d")-1,date("Y")));



include("access_data.php");

$path_to_excelfile="excel/ordini-".$yesterday.".xls";



$query_ordini= "SELECT * FROM ordini WHERE data_pagamento= '".$yesterday."'";





$mysqli = new mysqli($host,$userdb,$passworddb,$namedb);

$result_ordini 	= $mysqli->query($query_ordini);

$data="";

$resultRows=$result_ordini->num_rows;





if($resultRows>0){

	fopen($path_to_excelfile,"a+");

while($row = mysqli_fetch_array($result_ordini))

{



	$riga=array();

	$riga[] = $row["borsa"];

	$riga[] = $row["id"];

	$riga[] = $row["data_pagamento"];

	$riga[] = $row["nome"]." ".$row["cognome"];

	$riga[] = $row["indirizzo"]." ".$row["num_civ"];

	$riga[] = $row["cap"]." ".$row["citta"];

	$riga[] = $row["provincia"];



	$carrello=explode("-",$row["carrello"]);

	

	foreach($carrello as $elemento){

	

	$pelle = explode("+",$elemento);

	$nomepelle = explode("_",$pelle[1]);

	$n = count($nomepelle);

	unset($nomepelle[$n-1]);

	$nomepellefinale = implode(" ",$nomepelle);

	$riga[]=$nomepellefinale;

	}

	$riga[] = $row["prezzo"];

	

	

	

	$line = '';

	foreach($riga as $value)

        {                                            

            if((!isset($value)) || ($value == ""))

            {

                $value = "\t";

            }

            else

            {

                $value = str_replace( '"' , '""' , $value );

                $value = '"' . $value . '"' . "\t";

            }

            $line .= $value;

        }

        $data .= trim( $line ) . "\n";

    

    

    $data = str_replace("\r" , "" , $data);

 

	file_put_contents($path_to_excelfile, $data);





}



require 'phpmailer/PHPMailerAutoload.php';

$messaggio = new PHPMailer;

$messaggio->IsSMTP();

$messaggio->Host='smtp.aruba.it';

$messaggio->From='commerciale@laikailike.it';

$messaggio->AddAddress('commerciale@laikailike.it');

$messaggio->AddReplyTo('commerciale@laikailike.it'); 

$messaggio->Subject='Email con allegato';

$messaggio->Body='Invio file Pdf';



//percorso all'allegato

$messaggio->AddAttachment($path_to_excelfile);

if(!$messaggio->Send()){

}else{ 

}

$messaggio->SmtpClose();

unset($messaggio); 







}



?>