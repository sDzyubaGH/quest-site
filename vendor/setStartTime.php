<?php
    session_start();
    require_once 'connect.php';

    date_default_timezone_set('Europe/Moscow');
    $dt = new DateTime();
    $currTime = $dt->format('H:i:s');

    if(!mysqli_query($connect, "UPDATE `users` SET `Time_start` = '$currTime' WHERE `users`.`ID` = ".$_SESSION['user']['id'])) {
        print('Query Error: ошибка при занесении time.');
    }
    $connect->close();

    $_SESSION['startTime'] = [
        "time" => $currTime,
    ];

    header('Location: ../tasks.php');
?>