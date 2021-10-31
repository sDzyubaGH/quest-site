<?php
    session_start();
    require_once './connect.php';
    $data = [];
    $team = $_POST['teamName'];
    // echo($_POST['login']);
    if($dbData = mysqli_query($connect, "SELECT * FROM `users` WHERE `name` = '$team'")) {
        if($dbData->fetch_assoc()) {
            echo(1); // Такой логин существует в бды
        } else {
            echo(0); // Такого нет
        }
        // var_dump($dbData->fetch_assoc());
        $connect->close();
    }
    else {
        echo(-1);
    }
?>