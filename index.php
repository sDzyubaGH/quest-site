<?php
session_set_cookie_params(86400);
ini_set('session.gc_maxlifetime', 86400);
session_start();
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=yes">
    <title>Авторизация и регистрация</title>
    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

</head>

<body>
    <!-- Форма авторизации -->
    <div class="container">
        <div class="wrapper">
            <form action="vendor/signin.php" method="post">
                <label class="lLogin">Логин</label>
                <input class="myinput login" type="text" name="login" placeholder="Введите свой логин">
                <label class="lPass">Пароль</label>
                <input class="myinput pass" type="password" name="password" placeholder="Введите пароль">
                <button class="mybtn" type="submit">Войти</button>
                <p>
                    <a href="./register.php">Регистрация</middle></a>
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

    <script src="./assets/js/indexValid.js"></script>
</body>

</html>