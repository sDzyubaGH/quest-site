<?php

    session_start();
    require_once 'connect.php';

    date_default_timezone_set('Europe/Moscow');
    $dt = new DateTime();
    $currTime = $dt->format('H:i:s');

    if(!mysqli_query($connect, "UPDATE `users` SET `Time_stop` = '$currTime' WHERE `users`.`ID` = ".$_SESSION['user']['id'])) {
        print('Query Error: ошибка при занесении stopTime.');
    }
    $connect->close();

    $_SESSION['stopTime'] = [
        'time' => $currTime,
    ];

    header("Location: ../finish.php");
?>