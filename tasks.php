<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: ./index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <script src="./assets/js/jquery-3.6.0.min.js"></script>
    <title>Quest</title>
</head>
<body>
    <div class="container">
       <!-- Сюда скрипт render.js запишет элементы заданий -->



        <script src="./assets/js/render.js"></script>
        <!-- <script src="./assets/js/main.js"></script> -->
    </div>
</body>
</html> 