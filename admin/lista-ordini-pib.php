<?php
session_start();
//error_reporting('E_ALL & ~E_NOTICE');

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Administrator</title>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css" type="text/css" />
<link rel="stylesheet" href="../js/jquery.ui.plupload/css/jquery.ui.plupload.css" type="text/css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
<style type="text/css">
	body{
		background-color:#eee;
	}
</style>
</head>
<body>
<div class="container">
	<div class="row">
	  <div class="col-md-12">
	   <ul class="nav nav-tabs" role="tablist">	              
              <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Paypal<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="lista-ordini.php">Gestisci ordini in sospeso</a></li>
              	  <li><a href="lista-ordini-inviati.php">Gestisci ordini inviati</a></li>
                </ul>  
              </li>
              
              <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Bonifico<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="lista-ordini-npb.php">Gestisci ordini non pagati</a></li>
              	  <li><a href="lista-ordini-pb.php">Gestisci ordini in sospeso</a></li>
                  <li><a href="lista-ordini-pib.php">Gestisci ordini inviati</a></li>
                </ul>  
              </li>
              
              
              
              <li><a href="logout.php">Esci</a></li>
           </ul>
	  </div>
	</div>
	<div class="row">
		<div class="col-md-12">
        <h1>Lista ordini con bonifico pagati inviati</h1>
			<table class="table table-striped">
				<thead>
				<tr>
					<td align="center"><strong>Id</strong></td>
                    <td align="center"><strong>Nome</strong></td>
					<td align="center" width="150px"><strong>Cognome</strong></td>
                    <td align="center"><strong>Modello</strong></td>
					<td align="center"><strong>Mail</strong></td>
                    <td align="right"><strong>Totale</strong></td>
                    <td></td>
					<td class="text-center"><strong>Visualizza</strong></td>
				</tr>
				</thead>
				<tbody>
				<?php
					include("access_data.php");
					$mysqli 	= new mysqli($host,$userdb,$passworddb,$namedb);
					$query 		= "SELECT * FROM ordini WHERE stato='si' AND inviato='si' AND tipo='bonifico' ORDER BY id DESC";
					$result 	= $mysqli->query($query);
					while ($ordine = $result->fetch_assoc()){
						
					?>
				<tr>
                    <td align="center"><?php echo $ordine['id'] ?></td>
					<td align="center"><?php echo $ordine['nome'] ?></td>
                    <td align="center"><?php echo $ordine['cognome'] ?></td>
                    <td align="center"><?php echo $ordine['borsa'] ?></td>
					<td align="center"><?php echo $ordine['mail'] ?></td>
                    <td align="right"><?php echo $ordine['prezzo']; ?></td>
                    <td>€</td>
					<td class="text-center"><a href="edit-ordine-b.php?id=<?php echo $ordine['id'] ?>" title="Modifica"><span class="glyphicon glyphicon-edit"></span></a></td>

				</tr>
				<?php
					}
				?>
				</tbody>
			</table>
		</div>
	</div>
</div>
</body>
</html>