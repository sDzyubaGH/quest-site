<?php

function getSequence()
{
    $arr = range(0, 9);

    $sequence = '';
    shuffle($arr);
    $i = 0;
    foreach ($arr as $number) {
        // array_push($arr, $number);
        $i++;
        $sequence .= strval($number);

        if ($i != 10) {
            $sequence .= ' ';
        }
    }

    return $sequence;
}


// session_set_cookie_params(60*120, '/');
session_start();
require_once 'connect.php';

$login = $_POST['login'];
$password = $_POST['password'];
$password_confirm = $_POST['password_confirm'];
$name = $_POST['name'];
$member1 = $_POST['member1'];
$member2 = $_POST['member2'];
$member3 = $_POST['member3'];
$member4 = $_POST['member4'];


if ($password === $password_confirm) {
    $options = [
        'cost' => 11,
    ];
    $password = password_hash($password, PASSWORD_BCRYPT, $options);

    if (!$connect->query("INSERT INTO `users` (`ID`, `login`, `password`,
        `name`, `member1`, `member2`, `member3`, `member4`) VALUES (NULL,
        '$login', '$password', '$name', '$member1', '$member2', '$member3', '$member4')")) {
        printf("Query Error: ошибка записи данных в бд");
    }

    if (!$connect->query("INSERT INTO `Score` (`ID`, `Name`) VALUES (NULL, '$name')")) {
        printf("Query Error: ошибка записи данных в бд");
    }

    if (!$nassocId = $connect->query("SELECT `ID` FROM `Score` WHERE `Score`.`Name` = '$name'")) {
        printf("Query Error: ошибка записи данных в бд");
    }
    $ID = $nassocId->fetch_assoc();
    $sequence = getSequence();
    if (!mysqli_query($connect, "UPDATE `Score` SET `Sequence` = '$sequence' WHERE `Score`.`ID` = " . intval($ID['ID']))) {
        printf("Query Error: ошибка записи данных в");
    }
    // var_dump($arr);
    // $_SESSION['sequence'] = $arr;
    $_SESSION['message'] = 'Регистрация прошла успешно! Желаем удачи! :-)';

    $connect->close();
    header('Location: ../index.php');
} else {
    $connect->close();
    $_SESSION['message'] = 'Пароли не совпадают!';
    header('Location: ../register.php');
}
