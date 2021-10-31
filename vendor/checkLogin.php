<?php
    session_start();
    require_once './connect.php';
    $data = [];
    $login = $_POST['login'];
    // echo($_POST['login']);
    if($dbData = mysqli_query($connect, "SELECT * FROM `users` WHERE `login` = '$login'")) {
        if($dbData->fetch_assoc()) {
            echo(1); // Такой логин существует в бд
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