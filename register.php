<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=yes">
    <title>Авторизация и регистрация</title>
    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <script src="./assets/js/jquery-3.6.0.min.js"></script>
</head>

<body>

    <!-- Форма регистрации -->
    <div class="container">
        <div class="wrapper">
            <form action="vendor/signup.php" onsubmit="return false" method="post" enctype="multipart/form-data">
                <label>Логин</label>
                <input class="myinput login" type="text" name="login" placeholder="Введи свой логин">
                <label>Пароль</label>
                <input class="myinput pass" type="password" name="password" placeholder="Введи пароль">
                <label>Подтверждение пароля</label>
                <input class="myinput repass" type="password" name="password_confirm" placeholder="Подтверди пароль">
                <label>Название команды</label>
                <input class="myinput team" type="text" name="name" placeholder="Введи название команды">
                <label>Список участников команды</label>
                <div class="participants">
                    <input class="myinput participant" type="text" name="member1" placeholder="Введи полные ФИО участника">
                    <input class="myinput participant" type="text" name="member2" placeholder="Введи полные ФИО участника">
                    <input class="myinput participant" type="text" name="member3" placeholder="Введи полные ФИО участника">
                    <input class="myinput participant" type="text" name="member4" placeholder="Введи полные ФИО участника">
                </div>
                <button class="mybtn" type="submit">Зарегистрироваться</button>
                <p>
                    <a href="./index.php">Авторизация</a>
                </p>
                <?php
                if (isset($_SESSION['message'])) {
                    echo '<p class="msg"> ' . $_SESSION['message'] . ' </p>';
                    unset($_SESSION['message']);
                }
                ?>
            </form>
        </div>
    </div>
    <script src="./assets/js/regValid.js"></script>
</body>

</html>