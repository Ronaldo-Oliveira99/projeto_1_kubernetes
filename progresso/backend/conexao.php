<?php
$servername = "mysql-connection";
$username = "root";
$password = "Senha123";
$database = "meubanco";

// Criar conexão

printf("Verificaçã_antes");

$link = new mysqli($servername, $username, $password, $database);

printf("Verificaçã_antes_2");


/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    printf("servername", $link);
    
    exit();
}

?>
