<?php
    header("Content-Type: application/json; charset=UTF-8");
    error_reporting(0);
    $objeto = json_decode($_GET["objeto"], false);   
    
    //Parámetro de conexion de la BD por defecto
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $bbdd = "espana";

    //Conexión a la BD
    $conexion = new mysqli($servidor, $usuario, $password, $bbdd);

    //Comprobamos la conexion
    if ($conexion -> connect_error) {
        die("Error en la conexion: " + $conexion -> connect_error);
    }
    else {  
        //Consulta SQL
        $sql = "SELECT id_municipio, nombre FROM $objeto->tabla WHERE id_provincia = $objeto->valor";
        
        $resultado = $conexion ->query($sql);
        $salida = array();
        $salida = $resultado->fetch_all(MYSQLI_ASSOC);

        echo json_encode($salida);
    }
    $conexion->close();
?>