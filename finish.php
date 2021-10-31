<?php

session_start();

if (!isset($_SESSION['user'])) {
    header('Location: ./index.php');
}

if (isset($_SESSION['user']) && !isset($_SESSION['startTime'])) {
    header('Location: ./start.php');
}

if (isset($_SESSION['startTime']) && !isset($_SESSION['stopTime'])) {
    header('Location: ./tasks.php');
}

unset($_SESSION['user']);
unset($_SESSION['startTime']);
unset($_SESSION['stopTime']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/finish.css">
    <script src="./assets/js/jquery-3.6.0.min.js"></script>

    <title>Finish</title>
</head>

<body>
    <div class="container">
        <h1>Финиш!</h1>
        <p>Спасибо большое за игру! Найдите на финише организаторов, чтобы сделать финальную общую фоточку, а затем отправляйтесь в Центр Развития на закрытие Марафона (начало в 18:00), подведение итогов и награждение.</p>
        <p>Оставить свой отзыв можно в этой форме – <a href="https://forms.gle/xCRcVXGR9r2uLun26">https://forms.gle/xCRcVXGR9r2uLun26</a>.</p>
    </div>
</body>

</html>