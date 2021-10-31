<?php

session_start();
require_once 'connect.php';

$login = $_POST['login'];
$password = $_POST['password'];

if (!$check_user = mysqli_query($connect, "SELECT * FROM users WHERE login = '$login'")) {
    printf("Query Error: При входе не был получен логин из бд");
}

$user = $check_user->fetch_assoc();

$connect->close();
if (password_verify($password, $user['password'])) {

    if (isset($user['Time_stop'])) {
        $_SESSION['message'] = 'Вы уже прошли данный квест';
        header('Location: ../index.php');
        exit;
    }

    $_SESSION['user'] = [
        "id" => $user['ID'],
    ];

    if (isset($user['Time_start'])) {
        if(!isset($_SESSION['startTime'])) {
            $_SESSION['startTime'] = [
                "time" => $user['Time_start'],
            ];
        }
        header('Location: ../tasks.php');
        exit;
    }

    header('Location: ../start.php');
} else {
    $_SESSION['message'] = 'Неверный логин или пароль';
    header('Location: ../index.php');
}
?>